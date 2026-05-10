const { loadVideoTemplates, loadTextTemplates, setCors, sendJSON } = require('./_lib/data');

module.exports = (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== 'GET') {
    sendJSON(res, 405, { error: 'Method not allowed' });
    return;
  }

  let video;
  let text;
  try {
    video = loadVideoTemplates();
    text = loadTextTemplates();
  } catch (err) {
    sendJSON(res, 500, { error: 'Failed to load templates', detail: String(err.message || err) });
    return;
  }

  sendJSON(res, 200, { video, text });
};
