// Backend proxy for an OpenAI-compatible LLM (default: NVIDIA NIM / Qwen).
// Keeps the API key server-side only. Reads NVIDIA_API_KEY (or LLM_API_KEY) from env.
const { setCors, sendJSON, readBody } = require('./_lib/data');

const DEFAULT_BASE  = process.env.LLM_BASE_URL  || 'https://integrate.api.nvidia.com/v1';
const DEFAULT_MODEL = process.env.LLM_MODEL     || process.env.NVIDIA_MODEL || 'qwen/qwen3.5-122b-a10b';

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

  const apiKey = process.env.NVIDIA_API_KEY || process.env.LLM_API_KEY;
  if (!apiKey) {
    sendJSON(res, 500, {
      error: 'NVIDIA_API_KEY is not set on the server',
      hint: 'Add NVIDIA_API_KEY (or LLM_API_KEY) in Vercel project Environment Variables.',
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

  const { prompt, system, model, temperature, maxOutputTokens, topP } = body || {};
  if (!prompt || typeof prompt !== 'string') {
    sendJSON(res, 400, { error: '`prompt` (string) is required' });
    return;
  }

  const useModel = typeof model === 'string' && model.trim() ? model.trim() : DEFAULT_MODEL;

  const messages = [];
  if (system && typeof system === 'string') {
    messages.push({ role: 'system', content: system });
  }
  messages.push({ role: 'user', content: prompt });

  const payload = {
    model: useModel,
    messages,
    temperature: typeof temperature === 'number' ? temperature : 0.7,
    max_tokens: typeof maxOutputTokens === 'number' ? maxOutputTokens : 800,
    top_p: typeof topP === 'number' ? topP : 0.95,
    stream: false,
  };

  let upstream;
  try {
    upstream = await fetch(`${DEFAULT_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    sendJSON(res, 502, { error: 'Failed to reach LLM API', detail: String(err.message || err) });
    return;
  }

  const text = await upstream.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    sendJSON(res, 502, { error: 'LLM returned non-JSON', detail: text.slice(0, 500) });
    return;
  }

  if (!upstream.ok) {
    sendJSON(res, upstream.status, { error: 'LLM API error', detail: parsed });
    return;
  }

  const choice = parsed?.choices?.[0];
  // Qwen-3.5 reasoning models (and a few others on NIM) emit their actual
  // output in `message.reasoning_content`; `message.content` is left empty.
  // Fall back to reasoning_content so we don't lose the entire response.
  const msg = choice?.message || {};
  const outText = (msg.content || msg.reasoning_content || '').trim();

  sendJSON(res, 200, {
    model: useModel,
    text: outText,
    finishReason: choice?.finish_reason || null,
    usage: parsed?.usage || null,
  });
};
