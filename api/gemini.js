// Backend proxy for Gemini API. Keeps the API key server-side only.
const { setCors, sendJSON, readBody } = require('./_lib/data');

const DEFAULT_MODEL = 'gemini-2.0-flash';

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== 'POST') {
    sendJSON(res, 405, { error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    sendJSON(res, 500, {
      error: 'GEMINI_API_KEY is not set on the server',
      hint: 'Add GEMINI_API_KEY in Vercel project Environment Variables.',
    });
    return;
  }

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    sendJSON(res, 400, { error: 'Invalid JSON body', detail: String(err.message || err) });
    return;
  }

  const { prompt, system, model, temperature, maxOutputTokens } = body || {};
  if (!prompt || typeof prompt !== 'string') {
    sendJSON(res, 400, { error: '`prompt` (string) is required' });
    return;
  }

  const useModel = typeof model === 'string' && model.trim() ? model.trim() : DEFAULT_MODEL;

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const payload = {
    contents,
    generationConfig: {
      temperature: typeof temperature === 'number' ? temperature : 0.7,
      maxOutputTokens: typeof maxOutputTokens === 'number' ? maxOutputTokens : 800,
    },
  };
  if (system && typeof system === 'string') {
    payload.systemInstruction = { parts: [{ text: system }] };
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    useModel,
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;

  let upstream;
  try {
    upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    sendJSON(res, 502, { error: 'Failed to reach Gemini API', detail: String(err.message || err) });
    return;
  }

  const text = await upstream.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    sendJSON(res, 502, { error: 'Gemini returned non-JSON', detail: text.slice(0, 500) });
    return;
  }

  if (!upstream.ok) {
    sendJSON(res, upstream.status, { error: 'Gemini API error', detail: parsed });
    return;
  }

  const candidate = parsed?.candidates?.[0];
  const outText = candidate?.content?.parts?.map((p) => p.text || '').join('').trim() || '';

  sendJSON(res, 200, {
    model: useModel,
    text: outText,
    finishReason: candidate?.finishReason || null,
    usage: parsed?.usageMetadata || null,
  });
};
