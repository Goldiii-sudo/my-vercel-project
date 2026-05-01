// /api/mux — converts the browser-recorded video to mp4 and (optionally)
// mixes in a royalty-free music track.
//
// Input: multipart/form-data
//   - video    : the recorded video (mp4 or webm) (required)
//   - musicId  : id from /music/tracks.json (optional — '' or absent skips music)
//   - reencode : '1' to force libx264 re-encode (used when the input is webm).
//                When omitted and input is mp4, the video stream is copied (fast).
// Output: video/mp4
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
const Busboy = require('busboy');
const ffmpegPath = require('ffmpeg-static');
const { setCors, sendJSON } = require('./_lib/data');

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
  // url is like '/music/cinematic.mp3' — strip leading slash & resolve from repo root
  const rel = t.url.replace(/^\//, '');
  const candidates = [
    path.join(REPO_ROOT, rel),
    path.join(process.cwd(), rel),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const bb = Busboy({
      headers: req.headers,
      limits: { fileSize: 80 * 1024 * 1024, files: 1 },
    });
    let videoPath = null;
    const fields = {};
    const pending = [];
    bb.on('file', (name, file, info) => {
      if (name !== 'video') { file.resume(); return; }
      const tmp = path.join(os.tmpdir(), `mux-in-${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`);
      const ws = fs.createWriteStream(tmp);
      pending.push(new Promise((res, rej) => {
        ws.on('finish', () => { videoPath = tmp; res(); });
        ws.on('error', rej);
      }));
      file.pipe(ws);
    });
    bb.on('field', (name, val) => { fields[name] = val; });
    bb.on('close', async () => {
      try { await Promise.all(pending); resolve({ videoPath, fields }); }
      catch (e) { reject(e); }
    });
    bb.on('error', reject);
    req.pipe(bb);
  });
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

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
  if (req.method !== 'POST') { sendJSON(res, 405, { error: 'Method not allowed' }); return; }

  let videoPath, musicPath, outPath;
  try {
    const { videoPath: vp, fields } = await parseMultipart(req);
    videoPath = vp;
    if (!videoPath || !fs.existsSync(videoPath)) {
      sendJSON(res, 400, { error: 'video file is required' }); return;
    }
    const musicId = fields.musicId || '';
    const wantMusic = !!musicId;
    if (wantMusic) {
      musicPath = findMusicFile(musicId);
      if (!musicPath) { sendJSON(res, 404, { error: `music track not found: ${musicId}` }); return; }
    }
    const reencode = fields.reencode === '1' || /\.webm$/i.test(videoPath) ||
                     /\.webm$/i.test(fields.filename || '');

    // Determine whether the source actually needs re-encoding by sniffing the
    // first 16 bytes — webm starts with 1A 45 DF A3 (EBML), mp4 starts with 'ftyp'.
    const head = fs.readFileSync(videoPath, { encoding: null }).slice(0, 16);
    const isWebm = head[0] === 0x1a && head[1] === 0x45 && head[2] === 0xdf && head[3] === 0xa3;

    outPath = path.join(os.tmpdir(), `mux-out-${Date.now()}-${Math.random().toString(36).slice(2)}.mp4`);

    const args = ['-y', '-i', videoPath];
    if (wantMusic) args.push('-stream_loop', '-1', '-i', musicPath);

    args.push('-map', '0:v:0');
    if (wantMusic) args.push('-map', '1:a:0');

    // Re-encode if input is webm or caller forces it; otherwise copy.
    if (isWebm || reencode) {
      args.push('-c:v', 'libx264', '-preset', 'veryfast', '-crf', '21', '-pix_fmt', 'yuv420p');
    } else {
      args.push('-c:v', 'copy');
    }
    if (wantMusic) {
      args.push('-c:a', 'aac', '-b:a', '160k', '-af', 'volume=0.55', '-shortest');
    }
    args.push('-movflags', '+faststart', outPath);

    await runFFmpeg(args);

    const stat = fs.statSync(outPath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', String(stat.size));
    fs.createReadStream(outPath).pipe(res);
    res.on('close', () => {
      try { fs.unlinkSync(outPath); } catch(_){}
      try { fs.unlinkSync(videoPath); } catch(_){}
    });
  } catch (err) {
    console.error('[mux] error:', err);
    sendJSON(res, 500, { error: 'Mux failed', detail: String(err.message || err) });
    try { videoPath && fs.unlinkSync(videoPath); } catch(_){}
    try { outPath && fs.unlinkSync(outPath); } catch(_){}
  }
};

// Vercel: receive raw stream so busboy can parse multipart.
module.exports.config = { api: { bodyParser: false } };
