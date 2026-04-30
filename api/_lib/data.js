// Shared helpers for Vercel serverless functions.
const fs = require('node:fs');
const path = require('node:path');

let apartmentsCache = null;
let videoTemplatesCache = null;
let textTemplatesCache = null;

// Resolve files relative to the *source* file rather than process.cwd(),
// so the same code works both locally (cwd = repo root) and on Vercel
// (cwd = /var/task, but our source lives under /var/task/api/_lib/).
// The repo root from this file is two directories up.
const REPO_ROOT = path.resolve(__dirname, '..', '..');

function readJSON(relativePath) {
  const candidates = [
    path.join(REPO_ROOT, relativePath),
    path.join(process.cwd(), relativePath),
  ];
  for (const abs of candidates) {
    try {
      const raw = fs.readFileSync(abs, 'utf8');
      return JSON.parse(raw);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }
  throw new Error(`File not found in any candidate path: ${relativePath} (tried: ${candidates.join(', ')})`);
}

function loadApartments() {
  if (!apartmentsCache) {
    apartmentsCache = readJSON('data/apartments.json');
  }
  return apartmentsCache;
}

function loadVideoTemplates() {
  if (!videoTemplatesCache) {
    videoTemplatesCache = readJSON('templates/video.json');
  }
  return videoTemplatesCache;
}

function loadTextTemplates() {
  if (!textTemplatesCache) {
    textTemplatesCache = readJSON('templates/text.json');
  }
  return textTemplatesCache;
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function sendJSON(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object') {
      resolve(req.body);
      return;
    }
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

module.exports = {
  loadApartments,
  loadVideoTemplates,
  loadTextTemplates,
  setCors,
  sendJSON,
  readBody,
};
