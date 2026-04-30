// Local dev server mounting Vercel-style API handlers + serving static index.html.
// For testing only: `node scripts/dev-server.js [port]`
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const port = Number(process.argv[2]) || 3000;

const apartments = require('../api/apartments');
const llm = require('../api/llm');
const templates = require('../api/templates');

const ROUTES = {
  '/api/apartments': apartments,
  '/api/llm': llm,
  '/api/templates': templates,
};

const STATIC_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const handler = ROUTES[url.pathname];
  if (handler) {
    return handler(req, res);
  }

  let filePath = url.pathname === '/' ? '/index.html' : url.pathname;
  filePath = path.join(process.cwd(), filePath);
  if (!filePath.startsWith(process.cwd())) {
    res.statusCode = 403; res.end('Forbidden'); return;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found: ' + url.pathname);
      return;
    }
    const ext = path.extname(filePath);
    res.setHeader('Content-Type', STATIC_TYPES[ext] || 'application/octet-stream');
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});
