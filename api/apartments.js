const { loadApartments, setCors, sendJSON } = require('./_lib/data');

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

  let apartments;
  try {
    apartments = loadApartments();
  } catch (err) {
    sendJSON(res, 500, { error: 'Failed to load apartments', detail: String(err.message || err) });
    return;
  }

  const url = new URL(req.url, 'http://localhost');
  const idParam = url.searchParams.get('id');
  if (idParam) {
    const id = Number(idParam);
    const item = apartments.find((a) => a.id === id);
    if (!item) {
      sendJSON(res, 404, { error: 'Apartment not found' });
      return;
    }
    sendJSON(res, 200, item);
    return;
  }

  const q = (url.searchParams.get('q') || '').trim().toLowerCase();
  const district = (url.searchParams.get('district') || '').trim().toLowerCase();
  const minPrice = Number(url.searchParams.get('min_price')) || 0;
  const maxPrice = Number(url.searchParams.get('max_price')) || Infinity;
  const rooms = url.searchParams.get('rooms');

  const filtered = apartments.filter((a) => {
    if (q) {
      const hay = `${a.title || ''} ${a.description || ''} ${a.address || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (district && (a.district || '').toLowerCase() !== district) return false;
    if (a.price != null && (a.price < minPrice || a.price > maxPrice)) return false;
    if (rooms && String(a.rooms) !== String(rooms)) return false;
    return true;
  });

  // Strip the heavy description field from list view; clients fetch full item via ?id=
  const summary = filtered.map((a) => ({
    id: a.id,
    title: a.title,
    price: a.price,
    currency: a.currency,
    rooms: a.rooms,
    bedrooms: a.bedrooms,
    area: a.area,
    floor: a.floor,
    city: a.city,
    district: a.district,
    address: a.address,
    project: a.project,
    images: Array.isArray(a.images) ? a.images.slice(0, 6) : [],
    image_count: Array.isArray(a.images) ? a.images.length : 0,
    source: a.source,
    url: a.url,
  }));

  sendJSON(res, 200, { count: summary.length, items: summary });
};
