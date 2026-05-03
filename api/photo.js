// /api/photo?url=... — proxies an image through our origin so that CORS/canvas
// consumers (WebCodecs, captureStream, getImageData) can use it. Only GCS
// bd-ge-01 storage (the korter.ge realty bucket) is whitelisted.
module.exports = async (req, res) => {
  const url = new URL(req.url, 'http://x').searchParams.get('url');
  if (!url) {
    res.statusCode = 400;
    res.setHeader('content-type', 'text/plain');
    res.end('missing url');
    return;
  }
  // Whitelist — keep tight. No open proxy.
  const allowed = /^https:\/\/storage\.googleapis\.com\/bd-ge-01\//i;
  if (!allowed.test(url)) {
    res.statusCode = 403;
    res.setHeader('content-type', 'text/plain');
    res.end('host not allowed');
    return;
  }
  try {
    const upstream = await fetch(url, { headers: { 'user-agent': 'reelestate-proxy/1.0' } });
    if (!upstream.ok) {
      res.statusCode = upstream.status;
      res.end();
      return;
    }
    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('content-type', upstream.headers.get('content-type') || 'image/jpeg');
    res.setHeader('cache-control', 'public, max-age=86400, immutable');
    res.setHeader('cross-origin-resource-policy', 'cross-origin');
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.statusCode = 200;
    res.end(buf);
  } catch (err) {
    console.error('[photo] proxy error:', err);
    res.statusCode = 502;
    res.setHeader('content-type', 'text/plain');
    res.end(String(err.message || err));
  }
};
