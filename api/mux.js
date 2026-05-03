// /api/mux — converts a browser-recorded video (stored in Vercel Blob) to mp4
// and optionally mixes in a royalty-free music track.
//
// Input: application/json
//   { "videoUrl": "https://<blob-host>/uploads/foo.webm",
//     "musicId": "cinematic" }          // musicId optional/falsy → no audio
//
// Legacy multipart/form-data input is still supported as a fallback for
// dev-server use, but the production path goes via Blob to avoid the 4.5 MB
// request body limit on Vercel Hobby.
//
// Output: application/json
//   { "url": "https://<blob-host>/muxed/foo.mp4",
//     "size": 12345678, "contentType": "video/mp4" }
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
const { setCors, sendJSON, readBody } = require('./_lib/data');
const ffmpegPath = require('ffmpeg-static');

const REPO_ROOT = path.resolve(__dirname, '..');

function loadTracks() {
  const candidates = [
    path.join(REPO_ROOT, 'music/tracks.json'),
    path.join(process.cwd(), 'music/tracks.json'),
  ];
  for (const p of candidates) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
    catch (e) { if (e.code !== 'ENOENT') throw e; }
  }
  return [];
}

function findMusicFile(musicId) {
  const tracks = loadTracks();
  const t = tracks.find(x => x.id === musicId);
  if (!t) return null;
  const rel = t.url.replace(/^\//, '');
  const candidates = [
    path.join(REPO_ROOT, rel),
    path.join(process.cwd(), rel),
  ];
  for (const p of candidates) if (fs.existsSync(p)) return p;
  return null;
}

function runFFmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    proc.stderr.on('data', d => { stderr += d.toString(); });
    proc.on('error', reject);
    proc.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}\n${stderr.slice(-2000)}`));
    });
  });
}

// Open ffmpeg writing mp4 fragments to stdout (no random access needed). The
// caller pipes stdout straight to Vercel Blob's `put()` so we never keep the
// whole output on /tmp (Lambda's /tmp is 512 MB but can fill quickly on
// cold-start due to other packages unpacking there).
function spawnFFmpegToStdout(args) {
  const proc = spawn(ffmpegPath, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  let stderr = '';
  proc.stderr.on('data', d => { stderr += d.toString(); });
  const exited = new Promise((resolve, reject) => {
    proc.on('error', reject);
    proc.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}\n${stderr.slice(-2000)}`));
    });
  });
  return { stdout: proc.stdout, exited };
}

function logTmpUsage(tag) {
  try {
    const dir = os.tmpdir();
    let total = 0, files = 0;
    for (const name of fs.readdirSync(dir)) {
      try {
        const st = fs.statSync(path.join(dir, name));
        if (st.isFile()) { total += st.size; files += 1; }
      } catch(_){}
    }
    console.log(`[mux] /tmp ${tag}: ${files} files, ${(total/1048576).toFixed(1)} MB`);
  } catch(_){}
}

async function downloadToFile(url, destPath) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`download ${url} → HTTP ${resp.status}`);
  // Stream to disk instead of buffering the whole file in memory. This halves
  // peak memory and avoids tripping the Lambda's 512 MB limit on 80+ MB webms.
  const ws = fs.createWriteStream(destPath);
  const reader = resp.body.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      await new Promise((r, e) => ws.write(Buffer.from(value), err => err ? e(err) : r()));
    }
  } finally {
    await new Promise(r => ws.end(r));
  }
  return destPath;
}

// Aggressively clean every mux-related file from /tmp at the start of each
// invocation. Vercel Hobby has concurrency=1 per instance, so there's never
// another /api/mux request in flight we could race with. /tmp is only 512 MB
// and is shared across warm invocations — leftovers from previous runs
// caused ENOSPC on 60 s 1080p jobs.
function cleanupTmp() {
  let reclaimed = 0;
  try {
    const dir = os.tmpdir();
    for (const name of fs.readdirSync(dir)) {
      if (!/^mux-(in|out)-/.test(name)) continue;
      const full = path.join(dir, name);
      try {
        const st = fs.statSync(full);
        fs.unlinkSync(full);
        reclaimed += st.size;
      } catch(_){}
    }
  } catch(_){}
  if (reclaimed) console.log(`[mux] reclaimed ${(reclaimed/1048576).toFixed(1)} MB from /tmp`);
}

function buildFFmpegArgs({ videoPath, musicPath, isWebm, outTarget }) {
  const wantMusic = !!musicPath;
  const args = ['-y', '-i', videoPath];
  if (wantMusic) args.push('-stream_loop', '-1', '-i', musicPath);
  args.push('-map', '0:v:0');
  if (wantMusic) args.push('-map', '1:a:0');
  if (isWebm) {
    args.push(
      '-c:v', 'libx264',
      '-preset', 'ultrafast',
      '-crf', '22',
      '-pix_fmt', 'yuv420p',
      '-tune', 'fastdecode',
      '-threads', '0',
    );
  } else {
    args.push('-c:v', 'copy');
  }
  if (wantMusic) args.push('-c:a', 'aac', '-b:a', '160k', '-af', 'volume=0.55', '-shortest');
  if (outTarget === 'stdout') {
    // Fragmented mp4 can be written to a non-seekable stream (stdout).
    args.push('-movflags', 'frag_keyframe+empty_moov+default_base_moof', '-f', 'mp4', 'pipe:1');
  } else {
    args.push(outTarget);
  }
  return args;
}

function sniffIsWebm(videoPath) {
  const fd = fs.openSync(videoPath, 'r');
  const head = Buffer.alloc(16);
  fs.readSync(fd, head, 0, 16, 0);
  fs.closeSync(fd);
  return head[0] === 0x1a && head[1] === 0x45 && head[2] === 0xdf && head[3] === 0xa3;
}

// Legacy dev path: write output to disk so we can stream it back on the same
// HTTP response with a Content-Length header.
async function muxToFile({ videoPath, musicId, res }) {
  const wantMusic = !!musicId;
  let musicPath = null;
  if (wantMusic) {
    musicPath = findMusicFile(musicId);
    if (!musicPath) { sendJSON(res, 404, { error: `music track not found: ${musicId}` }); return null; }
  }
  const isWebm = sniffIsWebm(videoPath);
  const outPath = path.join(os.tmpdir(), `mux-out-${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`);
  await runFFmpeg(buildFFmpegArgs({ videoPath, musicPath, isWebm, outTarget: outPath }));
  return outPath;
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
  if (req.method !== 'POST') { sendJSON(res, 405, { error: 'Method not allowed' }); return; }

  cleanupTmp();
  const contentType = (req.headers['content-type'] || '').toLowerCase();
  const isMultipart = contentType.startsWith('multipart/form-data');

  let videoPath, outPath;
  try {
    let musicId = '';
    if (isMultipart) {
      // Legacy path (dev-server only): accept multipart directly.
      const Busboy = require('busboy');
      const parsed = await new Promise((resolve, reject) => {
        const bb = Busboy({ headers: req.headers, limits: { fileSize: 80 * 1024 * 1024, files: 1 } });
        let vp = null; const fields = {}; const pending = [];
        bb.on('file', (name, file) => {
          if (name !== 'video') { file.resume(); return; }
          const tmp = path.join(os.tmpdir(), `mux-in-${Date.now()}-${Math.random().toString(36).slice(2)}`);
          const ws = fs.createWriteStream(tmp);
          pending.push(new Promise((r, e) => { ws.on('finish', () => { vp = tmp; r(); }); ws.on('error', e); }));
          file.pipe(ws);
        });
        bb.on('field', (n, v) => { fields[n] = v; });
        bb.on('close', async () => { try { await Promise.all(pending); resolve({ vp, fields }); } catch (e) { reject(e); } });
        bb.on('error', reject);
        req.pipe(bb);
      });
      videoPath = parsed.vp;
      musicId = parsed.fields.musicId || '';
      if (!videoPath || !fs.existsSync(videoPath)) { sendJSON(res, 400, { error: 'video file is required' }); return; }
    } else {
      // Production path: JSON body with videoUrl pointing at a Blob upload.
      const body = await readBody(req);
      const videoUrl = body.videoUrl;
      musicId = body.musicId || '';
      if (!videoUrl) { sendJSON(res, 400, { error: 'videoUrl is required' }); return; }
      videoPath = path.join(os.tmpdir(), `mux-in-${Date.now()}-${Math.random().toString(36).slice(2)}`);
      await downloadToFile(videoUrl, videoPath);
    }

    logTmpUsage('before-mux');

    if (isMultipart) {
      // Legacy: write to disk then stream back with Content-Length.
      outPath = await muxToFile({ videoPath, musicId, res });
      if (!outPath) return;
      const stat = fs.statSync(outPath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Length', String(stat.size));
      fs.createReadStream(outPath).pipe(res);
      res.on('close', () => {
        try { fs.unlinkSync(outPath); } catch(_){}
        try { fs.unlinkSync(videoPath); } catch(_){}
      });
      return;
    }

    // Production: stream ffmpeg stdout straight into Vercel Blob so the
    // full output never touches /tmp (/tmp is 512 MB but shared; encoding
    // 60s/1080p can temporarily push us past it).
    const wantMusic = !!musicId;
    let musicPath = null;
    if (wantMusic) {
      musicPath = findMusicFile(musicId);
      if (!musicPath) { sendJSON(res, 404, { error: `music track not found: ${musicId}` }); return; }
    }
    const isWebm = sniffIsWebm(videoPath);
    const args = buildFFmpegArgs({ videoPath, musicPath, isWebm, outTarget: 'stdout' });
    const { stdout, exited } = spawnFFmpegToStdout(args);

    const { put } = require('@vercel/blob');
    const key = `muxed/${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`;
    const [blob] = await Promise.all([
      put(key, stdout, {
        access: 'public',
        contentType: 'video/mp4',
        addRandomSuffix: false,
        cacheControlMaxAge: 60 * 60 * 24,
      }),
      exited,
    ]);
    sendJSON(res, 200, { url: blob.url, contentType: 'video/mp4' });
    try { fs.unlinkSync(videoPath); } catch(_){}
    logTmpUsage('after-mux');
  } catch (err) {
    console.error('[mux] error:', err);
    sendJSON(res, 500, { error: 'Mux failed', detail: String(err.message || err) });
    try { videoPath && fs.unlinkSync(videoPath); } catch(_){}
    try { outPath && fs.unlinkSync(outPath); } catch(_){}
  }
};

module.exports.config = { api: { bodyParser: false } };
