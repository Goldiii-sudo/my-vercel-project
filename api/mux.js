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

// Clean up any stale mux-in-/mux-out- files older than 5 minutes left behind
// by previous invocations sharing this Lambda's /tmp (512 MB cap).
function cleanupTmp() {
  try {
    const dir = os.tmpdir();
    const now = Date.now();
    for (const name of fs.readdirSync(dir)) {
      if (!/^mux-(in|out)-/.test(name)) continue;
      const full = path.join(dir, name);
      try {
        const st = fs.statSync(full);
        if (now - st.mtimeMs > 5 * 60 * 1000) fs.unlinkSync(full);
      } catch(_){}
    }
  } catch(_){}
}

async function muxFile({ videoPath, musicId, res }) {
  const wantMusic = !!musicId;
  let musicPath = null;
  if (wantMusic) {
    musicPath = findMusicFile(musicId);
    if (!musicPath) {
      sendJSON(res, 404, { error: `music track not found: ${musicId}` });
      return null;
    }
  }

  // Sniff magic bytes: webm=0x1A45DFA3, mp4=ftyp at byte 4.
  const head = fs.readFileSync(videoPath).slice(0, 16);
  const isWebm = head[0] === 0x1a && head[1] === 0x45 && head[2] === 0xdf && head[3] === 0xa3;

  const outPath = path.join(os.tmpdir(), `mux-out-${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`);
  const args = ['-y', '-i', videoPath];
  if (wantMusic) args.push('-stream_loop', '-1', '-i', musicPath);
  args.push('-map', '0:v:0');
  if (wantMusic) args.push('-map', '1:a:0');
  if (isWebm) {
    // Hobby has 60s max — pick encoder settings that keep us comfortably
    // under that even on the slowest cold-start shared CPU for 1080p/60fps.
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
  args.push('-movflags', '+faststart', outPath);
  await runFFmpeg(args);
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

    outPath = await muxFile({ videoPath, musicId, res });
    if (!outPath) return; // res already written by muxFile (404 etc.)

    const stat = fs.statSync(outPath);

    if (isMultipart) {
      // Legacy: stream mp4 directly back to client (dev server).
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

    // Production: upload mp4 to Blob (stream the file so we don't buffer the
    // whole output in memory on top of ffmpeg's working set) and return a URL.
    const { put } = require('@vercel/blob');
    const key = `muxed/${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`;
    const blob = await put(key, fs.createReadStream(outPath), {
      access: 'public',
      contentType: 'video/mp4',
      addRandomSuffix: false,
      cacheControlMaxAge: 60 * 60 * 24, // 24h — these are one-off exports.
    });
    sendJSON(res, 200, { url: blob.url, size: stat.size, contentType: 'video/mp4' });

    try { fs.unlinkSync(outPath); } catch(_){}
    try { fs.unlinkSync(videoPath); } catch(_){}
  } catch (err) {
    console.error('[mux] error:', err);
    sendJSON(res, 500, { error: 'Mux failed', detail: String(err.message || err) });
    try { videoPath && fs.unlinkSync(videoPath); } catch(_){}
    try { outPath && fs.unlinkSync(outPath); } catch(_){}
  }
};

module.exports.config = { api: { bodyParser: false } };
