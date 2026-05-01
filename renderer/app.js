// ==================== SERVER DATA ====================
const servers = [
  { country: 'Украина', city: 'Киев', flag: '🇺🇦', ping: 15, saved: true },
  { country: 'Польша', city: 'Варшава', flag: '🇵🇱', ping: 33, saved: true },
  { country: 'Норвегия', city: 'Осло', flag: '🇳🇴', ping: 62, saved: false },
  { country: 'Нидерланды', city: 'Амстердам', flag: '🇳🇱', ping: 63, saved: true },
  { country: 'Германия', city: 'Берлин', flag: '🇩🇪', ping: 48, saved: false },
  { country: 'Германия', city: 'Франкфурт', flag: '🇩🇪', ping: 52, saved: true },
  { country: 'Великобритания', city: 'Лондон', flag: '🇬🇧', ping: 78, saved: false },
  { country: 'Франция', city: 'Париж', flag: '🇫🇷', ping: 71, saved: false },
  { country: 'Швеция', city: 'Стокгольм', flag: '🇸🇪', ping: 55, saved: true },
  { country: 'Финляндия', city: 'Хельсинки', flag: '🇫🇮', ping: 68, saved: false },
  { country: 'Чехия', city: 'Прага', flag: '🇨🇿', ping: 41, saved: false },
  { country: 'Швейцария', city: 'Цюрих', flag: '🇨🇭', ping: 59, saved: true },
  { country: 'Италия', city: 'Милан', flag: '🇮🇹', ping: 76, saved: false },
  { country: 'Испания', city: 'Мадрид', flag: '🇪🇸', ping: 89, saved: false },
  { country: 'Румыния', city: 'Бухарест', flag: '🇷🇴', ping: 44, saved: false },
  { country: 'Болгария', city: 'София', flag: '🇧🇬', ping: 51, saved: false },
  { country: 'Турция', city: 'Стамбул', flag: '🇹🇷', ping: 95, saved: false },
  { country: 'Япония', city: 'Токио', flag: '🇯🇵', ping: 189, saved: true },
  { country: 'Сингапур', city: 'Сингапур', flag: '🇸🇬', ping: 210, saved: false },
  { country: 'Австралия', city: 'Сидней', flag: '🇦🇺', ping: 245, saved: false },
  { country: 'США', city: 'Нью-Йорк', flag: '🇺🇸', ping: 233, saved: true },
  { country: 'США', city: 'Атланта', flag: '🇺🇸', ping: 270, saved: false },
  { country: 'США', city: 'Лос-Анджелес', flag: '🇺🇸', ping: 285, saved: false },
  { country: 'США', city: 'Майами', flag: '🇺🇸', ping: 260, saved: false },
  { country: 'Канада', city: 'Торонто', flag: '🇨🇦', ping: 242, saved: false },
  { country: 'Канада', city: 'Монреаль', flag: '🇨🇦', ping: 238, saved: true },
  { country: 'Бразилия', city: 'Сан-Паулу', flag: '🇧🇷', ping: 310, saved: false },
  { country: 'Индия', city: 'Мумбаи', flag: '🇮🇳', ping: 175, saved: false },
  { country: 'Южная Корея', city: 'Сеул', flag: '🇰🇷', ping: 198, saved: false },
  { country: 'Гонконг', city: 'Гонконг', flag: '🇭🇰', ping: 205, saved: false },
];

// ==================== STATE ====================
let isConnected = false;
let isConnecting = false;
let selectedServer = servers[0];
let currentFilter = 'all';
let connectionTimer = null;
let connectionSeconds = 0;
let statsInterval = null;

// ==================== NAVIGATION ====================
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const page = tab.dataset.page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    const pageMap = {
      home: 'page-home',
      exclusions: 'page-exclusions',
      stats: 'page-stats',
      support: 'page-support',
      settings: 'page-settings'
    };
    document.getElementById(pageMap[page]).classList.add('active');
  });
});

// ==================== SERVER LIST ====================
function getPingClass(ping) {
  if (ping < 80) return 'fast';
  if (ping < 200) return 'medium';
  return 'slow';
}

function renderServers(filter = 'all', search = '') {
  const list = document.getElementById('server-list');
  let filteredServers = [...servers];

  if (filter === 'saved') {
    filteredServers = filteredServers.filter(s => s.saved);
  }

  if (search) {
    const q = search.toLowerCase();
    filteredServers = filteredServers.filter(s =>
      s.country.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q)
    );
  }

  filteredServers.sort((a, b) => a.ping - b.ping);

  list.innerHTML = filteredServers.map((server, i) => {
    const pingClass = getPingClass(server.ping);
    const isActive = server === selectedServer;
    return `
      <div class="server-item ${isActive ? 'active' : ''}" data-index="${servers.indexOf(server)}">
        <span class="server-flag">${server.flag}</span>
        <div class="server-info">
          <span class="server-name">${server.country}</span>
          <span class="server-city">${server.city}</span>
        </div>
        <div class="server-right">
          <button class="bookmark-btn ${server.saved ? 'saved' : ''}" data-server-index="${servers.indexOf(server)}">
            ${server.saved ? '★' : '☆'}
          </button>
          <div class="ping-bar ${pingClass}"></div>
          <span class="server-ping ${pingClass}">${server.ping} мс</span>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  list.querySelectorAll('.server-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.bookmark-btn')) return;
      const idx = parseInt(item.dataset.index);
      selectedServer = servers[idx];
      updateCurrentServer();
      renderServers(currentFilter, document.getElementById('search-input').value);
    });
  });

  list.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.serverIndex);
      servers[idx].saved = !servers[idx].saved;
      renderServers(currentFilter, document.getElementById('search-input').value);
    });
  });
}

function updateCurrentServer() {
  document.getElementById('current-flag').textContent = selectedServer.flag;
  document.getElementById('current-country').textContent = selectedServer.country;
  document.getElementById('current-city').textContent = selectedServer.city;
  document.getElementById('current-ping').textContent = `${selectedServer.ping} мс`;
}

// ==================== SERVER TABS ====================
document.querySelectorAll('.server-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.server-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderServers(currentFilter, document.getElementById('search-input').value);
  });
});

// ==================== SEARCH ====================
document.getElementById('search-input').addEventListener('input', (e) => {
  renderServers(currentFilter, e.target.value);
});

// ==================== CONNECTION ====================
const connectBtn = document.getElementById('connect-btn');
const statusText = document.getElementById('status-text');

connectBtn.addEventListener('click', () => {
  if (isConnecting) return;

  if (isConnected) {
    disconnect();
  } else {
    connect();
  }
});

function connect() {
  isConnecting = true;
  connectBtn.classList.add('connecting');
  connectBtn.classList.remove('connected');
  connectBtn.textContent = 'Подключение...';
  statusText.textContent = 'Подключение...';
  statusText.classList.remove('connected');

  // Simulate connection delay
  setTimeout(() => {
    isConnecting = false;
    isConnected = true;
    connectBtn.classList.remove('connecting');
    connectBtn.classList.add('connected');
    connectBtn.textContent = 'Отключить';
    statusText.textContent = 'Подключён';
    statusText.classList.add('connected');

    // Start connection timer
    connectionSeconds = 0;
    connectionTimer = setInterval(() => {
      connectionSeconds++;
      updateStats();
    }, 1000);

    // Start stats simulation
    startStatsSimulation();
  }, 1500 + Math.random() * 1000);
}

function disconnect() {
  isConnected = false;
  connectBtn.classList.remove('connected');
  connectBtn.textContent = 'Подключить';
  statusText.textContent = 'Отключён';
  statusText.classList.remove('connected');

  if (connectionTimer) {
    clearInterval(connectionTimer);
    connectionTimer = null;
  }
  if (statsInterval) {
    clearInterval(statsInterval);
    statsInterval = null;
  }
}

// ==================== STATISTICS ====================
let downloadMB = 0;
let uploadMB = 0;

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function updateStats() {
  const timeEl = document.getElementById('stat-time');
  if (timeEl) {
    timeEl.textContent = formatTime(connectionSeconds);
  }
}

function startStatsSimulation() {
  statsInterval = setInterval(() => {
    downloadMB += (Math.random() * 0.5 + 0.1);
    uploadMB += (Math.random() * 0.1 + 0.02);

    const dlEl = document.getElementById('stat-download');
    const ulEl = document.getElementById('stat-upload');
    if (dlEl) dlEl.textContent = `${downloadMB.toFixed(1)} MB`;
    if (ulEl) ulEl.textContent = `${uploadMB.toFixed(1)} MB`;
  }, 2000);
}

// ==================== SETTINGS: PROTOCOL SELECTOR ====================
document.querySelectorAll('.protocol-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.protocol-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ==================== INIT ====================
renderServers();
updateCurrentServer();
