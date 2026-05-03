// /api/blob-upload — issues signed upload URLs for Vercel Blob so the browser
// can upload videos directly to Blob storage (bypassing the 4.5MB serverless
// body limit on Hobby).
const { handleUpload } = require('@vercel/blob/client');
const { setCors, sendJSON, readBody } = require('./_lib/data');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
  if (req.method !== 'POST') { sendJSON(res, 405, { error: 'Method not allowed' }); return; }

  let body;
  try { body = await readBody(req); }
  catch (err) { sendJSON(res, 400, { error: 'Invalid JSON body', detail: String(err.message || err) }); return; }

  try {
    const jsonResponse = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async (pathname) => ({
        // Only allow video uploads under /uploads/.
        allowedContentTypes: ['video/webm', 'video/mp4'],
        addRandomSuffix: true,
        // 15-minute token lifetime; uploads usually complete in <2 min.
        tokenPayload: JSON.stringify({ pathname }),
      }),
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Nothing to do here for now — the mux endpoint will pick up the URL.
        // (Would be a good spot for logging / rate-limit counters.)
      },
    });
    sendJSON(res, 200, jsonResponse);
  } catch (err) {
    console.error('[blob-upload] error:', err);
    sendJSON(res, 400, { error: String(err.message || err) });
  }
};

module.exports.config = { api: { bodyParser: false } };
