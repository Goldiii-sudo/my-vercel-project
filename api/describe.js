export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { apiKey, imageUrl, context } = req.body || {};
  if (!apiKey || !imageUrl) {
    return res.status(400).json({ error: 'Missing apiKey or imageUrl' });
  }

  const prompt =
    (context || '') +
    '\nНапиши одну короткую цепляющую маркетинговую фразу на русском (максимум 10 слов) ' +
    'для этого фото недвижимости. Фраза должна продавать эмоцию, а не описывать комнату. ' +
    'Без кавычек, без эмодзи. Только текст.';

  try {
    const resp = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.2-90b-vision-instruct',
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            { type: 'image_url', image_url: { url: imageUrl } },
          ],
        }],
        max_tokens: 60,
        temperature: 0.8,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return res.status(resp.status).json({ error: err });
    }

    const data = await resp.json();
    let text = data.choices?.[0]?.message?.content?.trim() || '';
    text = text.replace(/^["«]|["»]$/g, '');
    const words = text.split(/\s+/);
    if (words.length > 12) text = words.slice(0, 10).join(' ');

    return res.status(200).json({ description: text });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
