// ==================== SERVER DATA (911 proxies: 317 tested + 594 Tor exit nodes) ====================
const servers = [
  { country: 'United States', city: 'San Jose', flag: '🇺🇸', ping: 257, saved: false, protocol: 'socks5', ip: '38.59.241.162', port: 1080, url: 'socks5://38.59.241.162:1080' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 270, saved: false, protocol: 'socks4', ip: '104.200.152.30', port: 4145, url: 'socks4://104.200.152.30:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 270, saved: false, protocol: 'socks4', ip: '199.102.107.145', port: 4145, url: 'socks4://199.102.107.145:4145' },
  { country: 'United States', city: 'Miami', flag: '🇺🇸', ping: 271, saved: false, protocol: 'socks4', ip: '107.181.168.145', port: 4145, url: 'socks4://107.181.168.145:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 275, saved: false, protocol: 'socks4', ip: '68.71.247.130', port: 4145, url: 'socks4://68.71.247.130:4145' },
  { country: 'United States', city: 'El Segundo', flag: '🇺🇸', ping: 280, saved: false, protocol: 'socks4', ip: '67.201.35.145', port: 4145, url: 'socks4://67.201.35.145:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 284, saved: false, protocol: 'socks4', ip: '198.8.84.3', port: 4145, url: 'socks4://198.8.84.3:4145' },
  { country: 'United States', city: 'Santa Ana', flag: '🇺🇸', ping: 284, saved: false, protocol: 'socks4', ip: '68.71.245.206', port: 4145, url: 'socks4://68.71.245.206:4145' },
  { country: 'United States', city: 'Wilmington', flag: '🇺🇸', ping: 291, saved: false, protocol: 'socks5', ip: '142.248.80.110', port: 1080, url: 'socks5://142.248.80.110:1080' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 292, saved: false, protocol: 'socks4', ip: '142.54.228.193', port: 4145, url: 'socks4://142.54.228.193:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 293, saved: false, protocol: 'socks4', ip: '162.253.68.97', port: 4145, url: 'socks4://162.253.68.97:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 293, saved: false, protocol: 'socks4', ip: '142.54.237.34', port: 4145, url: 'socks4://142.54.237.34:4145' },
  { country: 'United States', city: 'Syracuse', flag: '🇺🇸', ping: 296, saved: false, protocol: 'socks4', ip: '72.37.217.3', port: 4145, url: 'socks4://72.37.217.3:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 297, saved: false, protocol: 'socks4', ip: '199.102.104.70', port: 4145, url: 'socks4://199.102.104.70:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 299, saved: false, protocol: 'socks4', ip: '192.111.134.10', port: 4145, url: 'socks4://192.111.134.10:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 303, saved: false, protocol: 'socks4', ip: '68.71.254.6', port: 4145, url: 'socks4://68.71.254.6:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 304, saved: false, protocol: 'socks4', ip: '142.54.239.1', port: 4145, url: 'socks4://142.54.239.1:4145' },
  { country: 'United States', city: 'El Segundo', flag: '🇺🇸', ping: 304, saved: false, protocol: 'socks4', ip: '67.201.39.14', port: 4145, url: 'socks4://67.201.39.14:4145' },
  { country: 'United States', city: 'El Segundo', flag: '🇺🇸', ping: 308, saved: false, protocol: 'socks4', ip: '67.201.59.70', port: 4145, url: 'socks4://67.201.59.70:4145' },
  { country: 'United States', city: 'El Segundo', flag: '🇺🇸', ping: 310, saved: false, protocol: 'socks5', ip: '67.201.59.70', port: 4145, url: 'socks5://67.201.59.70:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 310, saved: false, protocol: 'socks4', ip: '68.71.249.158', port: 4145, url: 'socks4://68.71.249.158:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 311, saved: false, protocol: 'socks4', ip: '142.54.232.6', port: 4145, url: 'socks4://142.54.232.6:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 314, saved: false, protocol: 'socks5', ip: '142.54.228.193', port: 4145, url: 'socks5://142.54.228.193:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 314, saved: false, protocol: 'socks4', ip: '68.71.240.210', port: 4145, url: 'socks4://68.71.240.210:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 317, saved: false, protocol: 'socks4', ip: '72.37.216.68', port: 4145, url: 'socks4://72.37.216.68:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 324, saved: false, protocol: 'socks5', ip: '142.54.236.97', port: 4145, url: 'socks5://142.54.236.97:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 324, saved: false, protocol: 'socks4', ip: '68.71.251.134', port: 4145, url: 'socks4://68.71.251.134:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 326, saved: false, protocol: 'socks4', ip: '192.252.220.89', port: 4145, url: 'socks4://192.252.220.89:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 327, saved: false, protocol: 'socks4', ip: '142.54.231.38', port: 4145, url: 'socks4://142.54.231.38:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 329, saved: false, protocol: 'socks5', ip: '68.71.247.130', port: 4145, url: 'socks5://68.71.247.130:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 332, saved: false, protocol: 'socks5', ip: '104.200.135.46', port: 4145, url: 'socks5://104.200.135.46:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 337, saved: false, protocol: 'socks5', ip: '142.54.235.9', port: 4145, url: 'socks5://142.54.235.9:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 337, saved: false, protocol: 'socks4', ip: '142.54.236.97', port: 4145, url: 'socks4://142.54.236.97:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 338, saved: false, protocol: 'socks5', ip: '192.111.134.10', port: 4145, url: 'socks5://192.111.134.10:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 342, saved: false, protocol: 'socks5', ip: '104.37.135.145', port: 4145, url: 'socks5://104.37.135.145:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 343, saved: false, protocol: 'socks4', ip: '142.54.237.38', port: 4145, url: 'socks4://142.54.237.38:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 344, saved: false, protocol: 'socks5', ip: '68.71.249.153', port: 48606, url: 'socks5://68.71.249.153:48606' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 344, saved: false, protocol: 'socks4', ip: '67.201.58.190', port: 4145, url: 'socks4://67.201.58.190:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 353, saved: false, protocol: 'socks4', ip: '104.37.135.145', port: 4145, url: 'socks4://104.37.135.145:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 354, saved: false, protocol: 'socks4', ip: '104.200.135.46', port: 4145, url: 'socks4://104.200.135.46:4145' },
  { country: 'United States', city: 'Buffalo', flag: '🇺🇸', ping: 355, saved: false, protocol: 'socks5', ip: '107.173.51.212', port: 1080, url: 'socks5://107.173.51.212:1080' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 369, saved: false, protocol: 'socks4', ip: '107.152.98.5', port: 4145, url: 'socks4://107.152.98.5:4145' },
  { country: 'United States', city: 'Paramount', flag: '🇺🇸', ping: 373, saved: false, protocol: 'socks5', ip: '67.201.33.10', port: 25283, url: 'socks5://67.201.33.10:25283' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 374, saved: false, protocol: 'socks5', ip: '199.102.104.70', port: 4145, url: 'socks5://199.102.104.70:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 376, saved: false, protocol: 'socks4', ip: '142.54.229.249', port: 4145, url: 'socks4://142.54.229.249:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 380, saved: false, protocol: 'socks4', ip: '199.116.114.11', port: 4145, url: 'socks4://199.116.114.11:4145' },
  { country: 'Mexico', city: 'Mexico City', flag: '🇲🇽', ping: 391, saved: false, protocol: 'socks5', ip: '156.244.33.120', port: 20002, url: 'socks5://156.244.33.120:20002' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 397, saved: false, protocol: 'socks5', ip: '142.54.229.249', port: 4145, url: 'socks5://142.54.229.249:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 397, saved: false, protocol: 'socks4', ip: '68.71.242.118', port: 4145, url: 'socks4://68.71.242.118:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 400, saved: false, protocol: 'socks5', ip: '68.71.254.6', port: 4145, url: 'socks5://68.71.254.6:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 403, saved: false, protocol: 'socks5', ip: '72.37.216.68', port: 4145, url: 'socks5://72.37.216.68:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 415, saved: false, protocol: 'socks4', ip: '199.102.105.242', port: 4145, url: 'socks4://199.102.105.242:4145' },
  { country: 'United States', city: 'Santa Ana', flag: '🇺🇸', ping: 423, saved: false, protocol: 'socks4', ip: '68.71.241.33', port: 4145, url: 'socks4://68.71.241.33:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 426, saved: false, protocol: 'socks5', ip: '107.152.98.5', port: 4145, url: 'socks5://107.152.98.5:4145' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 433, saved: false, protocol: 'socks4', ip: '68.71.243.14', port: 4145, url: 'socks4://68.71.243.14:4145' },
  { country: 'United States', city: 'Syracuse', flag: '🇺🇸', ping: 442, saved: false, protocol: 'socks5', ip: '72.37.217.3', port: 4145, url: 'socks5://72.37.217.3:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 443, saved: false, protocol: 'socks4', ip: '192.252.220.92', port: 17328, url: 'socks4://192.252.220.92:17328' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 447, saved: false, protocol: 'socks5', ip: '142.54.237.34', port: 4145, url: 'socks5://142.54.237.34:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 448, saved: false, protocol: 'socks5', ip: '162.253.68.97', port: 4145, url: 'socks5://162.253.68.97:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 448, saved: false, protocol: 'socks5', ip: '192.252.220.92', port: 17328, url: 'socks5://192.252.220.92:17328' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 449, saved: false, protocol: 'socks4', ip: '184.170.249.65', port: 4145, url: 'socks4://184.170.249.65:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 450, saved: false, protocol: 'socks4', ip: '184.170.245.148', port: 4145, url: 'socks4://184.170.245.148:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 451, saved: false, protocol: 'socks4', ip: '192.252.209.155', port: 14455, url: 'socks4://192.252.209.155:14455' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 453, saved: false, protocol: 'socks5', ip: '104.200.152.30', port: 4145, url: 'socks5://104.200.152.30:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 454, saved: false, protocol: 'socks4', ip: '184.170.251.30', port: 11288, url: 'socks4://184.170.251.30:11288' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 455, saved: false, protocol: 'socks4', ip: '199.58.185.9', port: 4145, url: 'socks4://199.58.185.9:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 455, saved: false, protocol: 'socks4', ip: '192.111.139.163', port: 19404, url: 'socks4://192.111.139.163:19404' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 455, saved: false, protocol: 'socks4', ip: '192.111.129.150', port: 4145, url: 'socks4://192.111.129.150:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 455, saved: false, protocol: 'socks4', ip: '192.252.208.67', port: 14287, url: 'socks4://192.252.208.67:14287' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 455, saved: false, protocol: 'socks4', ip: '199.229.254.129', port: 4145, url: 'socks4://199.229.254.129:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 456, saved: false, protocol: 'socks4', ip: '192.111.135.18', port: 18301, url: 'socks4://192.111.135.18:18301' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 459, saved: false, protocol: 'socks4', ip: '192.252.214.20', port: 15864, url: 'socks4://192.252.214.20:15864' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 460, saved: false, protocol: 'socks4', ip: '192.252.215.2', port: 4145, url: 'socks4://192.252.215.2:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 460, saved: false, protocol: 'socks4', ip: '192.111.135.17', port: 18302, url: 'socks4://192.111.135.17:18302' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 462, saved: false, protocol: 'socks4', ip: '192.111.137.35', port: 4145, url: 'socks4://192.111.137.35:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 462, saved: false, protocol: 'socks4', ip: '192.111.139.162', port: 4145, url: 'socks4://192.111.139.162:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 465, saved: false, protocol: 'socks4', ip: '192.252.216.86', port: 4145, url: 'socks4://192.252.216.86:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 465, saved: false, protocol: 'socks4', ip: '192.111.130.2', port: 4145, url: 'socks4://192.111.130.2:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 466, saved: false, protocol: 'socks4', ip: '192.111.129.145', port: 16894, url: 'socks4://192.111.129.145:16894' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 466, saved: false, protocol: 'socks4', ip: '198.8.94.170', port: 4145, url: 'socks4://198.8.94.170:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 468, saved: false, protocol: 'socks5', ip: '142.54.239.1', port: 4145, url: 'socks5://142.54.239.1:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 469, saved: false, protocol: 'socks4', ip: '199.116.112.6', port: 4145, url: 'socks4://199.116.112.6:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 471, saved: false, protocol: 'socks4', ip: '199.58.184.97', port: 4145, url: 'socks4://199.58.184.97:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 472, saved: false, protocol: 'socks4', ip: '192.252.214.17', port: 4145, url: 'socks4://192.252.214.17:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 472, saved: false, protocol: 'socks4', ip: '192.252.211.197', port: 14921, url: 'socks4://192.252.211.197:14921' },
  { country: 'United States', city: 'Miami', flag: '🇺🇸', ping: 484, saved: false, protocol: 'socks5', ip: '23.175.248.21', port: 1080, url: 'socks5://23.175.248.21:1080' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 484, saved: false, protocol: 'socks4', ip: '74.119.147.209', port: 4145, url: 'socks4://74.119.147.209:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 485, saved: false, protocol: 'socks4', ip: '192.252.215.5', port: 16137, url: 'socks4://192.252.215.5:16137' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 485, saved: false, protocol: 'socks4', ip: '192.111.139.165', port: 4145, url: 'socks4://192.111.139.165:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 488, saved: false, protocol: 'socks4', ip: '192.252.208.70', port: 14282, url: 'socks4://192.252.208.70:14282' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 489, saved: false, protocol: 'socks4', ip: '192.111.130.5', port: 17002, url: 'socks4://192.111.130.5:17002' },
  { country: 'United Kingdom', city: 'London', flag: '🇬🇧', ping: 495, saved: false, protocol: 'socks4', ip: '192.252.210.233', port: 4145, url: 'socks4://192.252.210.233:4145' },
  { country: 'Чехия', city: 'Prague', flag: '🇨🇿', ping: 500, saved: false, protocol: 'tor', ip: '130.193.15.186', port: 9050, url: 'tor://130.193.15.186:9050' },
  { country: 'Италия', city: 'Milan', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '45.137.201.100', port: 9050, url: 'tor://45.137.201.100:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.73.136', port: 9050, url: 'tor://104.244.73.136:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.107', port: 9050, url: 'tor://23.191.200.107:9050' },
  { country: 'Румыния', city: 'Bucharest', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.165.171.84', port: 9050, url: 'tor://185.165.171.84:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.199', port: 9050, url: 'tor://193.189.100.199:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.220', port: 9050, url: 'tor://2.58.56.220:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '185.233.100.23', port: 9050, url: 'tor://185.233.100.23:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.174', port: 9050, url: 'tor://45.84.107.174:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '80.94.92.92', port: 9050, url: 'tor://80.94.92.92:9050' },
  { country: 'Германия', city: 'Haßfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.100.241', port: 9050, url: 'tor://185.220.100.241:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.244.192.175', port: 9050, url: 'tor://185.244.192.175:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '89.147.111.87', port: 9050, url: 'tor://89.147.111.87:9050' },
  { country: 'Германия', city: 'Haßfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.100.240', port: 9050, url: 'tor://185.220.100.240:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '80.67.172.162', port: 9050, url: 'tor://80.67.172.162:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.161', port: 9050, url: 'tor://185.220.101.161:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.25', port: 9050, url: 'tor://171.25.193.25:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '91.92.109.43', port: 9050, url: 'tor://91.92.109.43:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.246.190.83', port: 9050, url: 'tor://185.246.190.83:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.85', port: 9050, url: 'tor://23.191.200.85:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.74.51', port: 9050, url: 'tor://104.244.74.51:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.103', port: 9050, url: 'tor://185.220.101.103:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '77.81.247.72', port: 9050, url: 'tor://77.81.247.72:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.152', port: 9050, url: 'tor://185.220.101.152:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.27', port: 9050, url: 'tor://23.191.200.27:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.4', port: 9050, url: 'tor://185.220.101.4:9050' },
  { country: 'Великобритания', city: 'Worcester', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '87.106.76.226', port: 9050, url: 'tor://87.106.76.226:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.168', port: 9050, url: 'tor://185.220.101.168:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.108', port: 9050, url: 'tor://192.42.116.108:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.62', port: 9050, url: 'tor://23.191.200.62:9050' },
  { country: 'США', city: 'Manassas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '152.53.210.165', port: 9050, url: 'tor://152.53.210.165:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.96', port: 9050, url: 'tor://185.220.101.96:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.2', port: 9050, url: 'tor://185.220.101.2:9050' },
  { country: 'США', city: 'Phoenix', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '206.206.192.178', port: 9050, url: 'tor://206.206.192.178:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.122.30', port: 9050, url: 'tor://87.118.122.30:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.206', port: 9050, url: 'tor://193.189.100.206:9050' },
  { country: 'Нидерланды', city: 'Haarlem', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '51.158.252.2', port: 9050, url: 'tor://51.158.252.2:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '93.95.227.37', port: 9050, url: 'tor://93.95.227.37:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.12', port: 9050, url: 'tor://185.220.101.12:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.212', port: 9050, url: 'tor://38.135.24.212:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.154.98.52', port: 9050, url: 'tor://45.154.98.52:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.61', port: 9050, url: 'tor://45.141.215.61:9050' },
  { country: 'Япония', city: 'Tokyo', flag: '🇯🇵', ping: 500, saved: false, protocol: 'tor', ip: '5.104.84.183', port: 9050, url: 'tor://5.104.84.183:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.7.168', port: 9050, url: 'tor://107.189.7.168:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.61', port: 9050, url: 'tor://192.42.116.61:9050' },
  { country: 'Франция', city: 'Lauterbourg', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '194.163.136.187', port: 9050, url: 'tor://194.163.136.187:9050' },
  { country: 'США', city: 'Liberty Lake', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.137.255.85', port: 9050, url: 'tor://23.137.255.85:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.66.35.31', port: 9050, url: 'tor://45.66.35.31:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.142', port: 9050, url: 'tor://192.42.116.142:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.25.97', port: 9050, url: 'tor://38.135.25.97:9050' },
  { country: 'Нидерланды', city: 'Haarlem', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '212.86.126.239', port: 9050, url: 'tor://212.86.126.239:9050' },
  { country: 'США', city: 'Santa Clara', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '71.19.144.106', port: 9050, url: 'tor://71.19.144.106:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '89.147.110.251', port: 9050, url: 'tor://89.147.110.251:9050' },
  { country: 'Аргентина', city: 'Mar del Plata', flag: '🇦🇷', ping: 500, saved: false, protocol: 'tor', ip: '201.179.170.201', port: 9050, url: 'tor://201.179.170.201:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.241.208.115', port: 9050, url: 'tor://185.241.208.115:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.6', port: 9050, url: 'tor://23.191.200.6:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.66.35.28', port: 9050, url: 'tor://45.66.35.28:9050' },
  { country: 'Швеция', city: 'Vaxjo', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '31.44.238.25', port: 9050, url: 'tor://31.44.238.25:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.105', port: 9050, url: 'tor://192.42.116.105:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.83.104.137', port: 9050, url: 'tor://45.83.104.137:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.115.58', port: 9050, url: 'tor://5.255.115.58:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.154.110.142', port: 9050, url: 'tor://185.154.110.142:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '202.181.177.206', port: 9050, url: 'tor://202.181.177.206:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.47', port: 9050, url: 'tor://185.220.101.47:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '172.86.70.20', port: 9050, url: 'tor://172.86.70.20:9050' },
  { country: 'Польша', city: 'Poznan', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '91.206.26.26', port: 9050, url: 'tor://91.206.26.26:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.239.232.102', port: 9050, url: 'tor://193.239.232.102:9050' },
  { country: 'Швейцария', city: 'Bern', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '92.119.165.108', port: 9050, url: 'tor://92.119.165.108:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.204', port: 9050, url: 'tor://193.189.100.204:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.21', port: 9050, url: 'tor://185.220.101.21:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '37.114.50.124', port: 9050, url: 'tor://37.114.50.124:9050' },
  { country: 'Кипр', city: 'Limassol', flag: '🇨🇾', ping: 500, saved: false, protocol: 'tor', ip: '185.106.102.102', port: 9050, url: 'tor://185.106.102.102:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '46.250.243.29', port: 9050, url: 'tor://46.250.243.29:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.179', port: 9050, url: 'tor://185.220.101.179:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.94', port: 9050, url: 'tor://192.42.116.94:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.110', port: 9050, url: 'tor://192.42.116.110:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.58', port: 9050, url: 'tor://185.220.101.58:9050' },
  { country: 'США', city: 'Honolulu', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '141.239.158.222', port: 9050, url: 'tor://141.239.158.222:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.33', port: 9050, url: 'tor://185.220.101.33:9050' },
  { country: 'США', city: 'St Louis', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '144.126.133.74', port: 9050, url: 'tor://144.126.133.74:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '80.94.92.99', port: 9050, url: 'tor://80.94.92.99:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '209.141.55.88', port: 9050, url: 'tor://209.141.55.88:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.93', port: 9050, url: 'tor://23.191.200.93:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.173', port: 9050, url: 'tor://124.198.131.173:9050' },
  { country: 'Швейцария', city: 'Zurich', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '94.230.208.148', port: 9050, url: 'tor://94.230.208.148:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.110', port: 9050, url: 'tor://185.220.101.110:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.94.31.68', port: 9050, url: 'tor://45.94.31.68:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.13', port: 9050, url: 'tor://185.220.101.13:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.102.26', port: 9050, url: 'tor://5.255.102.26:9050' },
  { country: 'Финляндия', city: 'Helsinki', flag: '🇫🇮', ping: 500, saved: false, protocol: 'tor', ip: '185.227.68.78', port: 9050, url: 'tor://185.227.68.78:9050' },
  { country: 'The Netherlands', city: 'Eygelshoven', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.109.200.33', port: 9050, url: 'tor://192.109.200.33:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.31.52', port: 9050, url: 'tor://107.189.31.52:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.223', port: 9050, url: 'tor://124.198.131.223:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.132.172', port: 9050, url: 'tor://124.198.132.172:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.37', port: 9050, url: 'tor://171.25.193.37:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.25.182', port: 9050, url: 'tor://38.135.25.182:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.24', port: 9050, url: 'tor://185.220.101.24:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.75.140', port: 9050, url: 'tor://104.244.75.140:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.9', port: 9050, url: 'tor://109.70.100.9:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.46', port: 9050, url: 'tor://171.25.193.46:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.117', port: 9050, url: 'tor://23.191.200.117:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.73.43', port: 9050, url: 'tor://104.244.73.43:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '198.251.89.96', port: 9050, url: 'tor://198.251.89.96:9050' },
  { country: 'Швейцария', city: 'Volketswil / Volketswil (Dorf)', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '82.197.182.161', port: 9050, url: 'tor://82.197.182.161:9050' },
  { country: 'Великобритания', city: 'Maidenhead', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '109.169.33.163', port: 9050, url: 'tor://109.169.33.163:9050' },
  { country: 'США', city: 'Ann Arbor', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '35.0.127.52', port: 9050, url: 'tor://35.0.127.52:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.201', port: 9050, url: 'tor://193.189.100.201:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '62.50.145.59', port: 9050, url: 'tor://62.50.145.59:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.23', port: 9050, url: 'tor://185.220.101.23:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.198', port: 9050, url: 'tor://45.84.107.198:9050' },
  { country: 'США', city: 'Richardson', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '198.58.107.53', port: 9050, url: 'tor://198.58.107.53:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '199.195.253.124', port: 9050, url: 'tor://199.195.253.124:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '203.55.81.1', port: 9050, url: 'tor://203.55.81.1:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.4', port: 9050, url: 'tor://109.70.100.4:9050' },
  { country: 'Румыния', city: 'Bucharest', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.100.85.25', port: 9050, url: 'tor://185.100.85.25:9050' },
  { country: 'Нидерланды', city: 'Eygelshoven', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '176.65.149.96', port: 9050, url: 'tor://176.65.149.96:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.20', port: 9050, url: 'tor://192.42.116.20:9050' },
  { country: 'Франция', city: 'Gravelines', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '146.59.231.4', port: 9050, url: 'tor://146.59.231.4:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.245', port: 9050, url: 'tor://38.135.24.245:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.97', port: 9050, url: 'tor://23.191.200.97:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.52', port: 9050, url: 'tor://192.42.116.52:9050' },
  { country: 'Люксембург', city: 'Bissen', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.30.69', port: 9050, url: 'tor://107.189.30.69:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.25.136', port: 9050, url: 'tor://38.135.25.136:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.153', port: 9050, url: 'tor://185.220.101.153:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.97', port: 9050, url: 'tor://45.84.107.97:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.17', port: 9050, url: 'tor://45.84.107.17:9050' },
  { country: 'США', city: 'Chicago', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '204.137.14.105', port: 9050, url: 'tor://204.137.14.105:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.42', port: 9050, url: 'tor://23.191.200.42:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.29', port: 9050, url: 'tor://124.198.131.29:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '209.141.32.198', port: 9050, url: 'tor://209.141.32.198:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.170', port: 9050, url: 'tor://185.220.101.170:9050' },
  { country: 'Германия', city: 'Düsseldorf', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '37.157.254.6', port: 9050, url: 'tor://37.157.254.6:9050' },
  { country: 'ЮАР', city: 'Wepener', flag: '🇿🇦', ping: 500, saved: false, protocol: 'tor', ip: '165.73.242.163', port: 9050, url: 'tor://165.73.242.163:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.241.208.185', port: 9050, url: 'tor://185.241.208.185:9050' },
  { country: 'Германия', city: 'Estenfeld', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.90.98.8', port: 9050, url: 'tor://45.90.98.8:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.122', port: 9050, url: 'tor://38.135.24.122:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.113', port: 9050, url: 'tor://192.42.116.113:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.67', port: 9050, url: 'tor://192.42.116.67:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.196', port: 9050, url: 'tor://193.189.100.196:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.154.98.160', port: 9050, url: 'tor://45.154.98.160:9050' },
  { country: 'США', city: 'Liberty Lake', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.184.48.78', port: 9050, url: 'tor://23.184.48.78:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.77', port: 9050, url: 'tor://171.25.193.77:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.132.98', port: 9050, url: 'tor://124.198.132.98:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.68', port: 9050, url: 'tor://192.42.116.68:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.103', port: 9050, url: 'tor://192.42.116.103:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.132.53.47', port: 9050, url: 'tor://185.132.53.47:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.61.10', port: 9050, url: 'tor://185.129.61.10:9050' },
  { country: 'Венгрия', city: 'Budapest', flag: '🌐', ping: 500, saved: false, protocol: 'tor', ip: '185.225.69.203', port: 9050, url: 'tor://185.225.69.203:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.191', port: 9050, url: 'tor://124.198.131.191:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.41', port: 9050, url: 'tor://185.220.101.41:9050' },
  { country: 'Чехия', city: 'Prague', flag: '🇨🇿', ping: 500, saved: false, protocol: 'tor', ip: '130.193.10.21', port: 9050, url: 'tor://130.193.10.21:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.5.249', port: 9050, url: 'tor://107.189.5.249:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.154.98.42', port: 9050, url: 'tor://45.154.98.42:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.105.134.150', port: 9050, url: 'tor://193.105.134.150:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.40', port: 9050, url: 'tor://171.25.193.40:9050' },
  { country: 'Румыния', city: 'Bucharest', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.100.87.166', port: 9050, url: 'tor://185.100.87.166:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.132.53.46', port: 9050, url: 'tor://185.132.53.46:9050' },
  { country: 'Украина', city: 'Kyiv', flag: '🇺🇦', ping: 500, saved: false, protocol: 'tor', ip: '217.12.221.131', port: 9050, url: 'tor://217.12.221.131:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.233', port: 9050, url: 'tor://185.243.218.233:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.148.10.111', port: 9050, url: 'tor://45.148.10.111:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.7', port: 9050, url: 'tor://109.70.100.7:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.66.35.29', port: 9050, url: 'tor://45.66.35.29:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.222', port: 9050, url: 'tor://45.84.107.222:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.226', port: 9050, url: 'tor://185.243.218.226:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '209.141.46.203', port: 9050, url: 'tor://209.141.46.203:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '82.221.139.190', port: 9050, url: 'tor://82.221.139.190:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.39', port: 9050, url: 'tor://171.25.193.39:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.45', port: 9050, url: 'tor://192.42.116.45:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.3', port: 9050, url: 'tor://185.220.101.3:9050' },
  { country: 'Швейцария', city: 'Bern', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '45.141.119.80', port: 9050, url: 'tor://45.141.119.80:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.38', port: 9050, url: 'tor://192.159.99.38:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.42', port: 9050, url: 'tor://185.220.101.42:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.150', port: 9050, url: 'tor://185.220.101.150:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.56', port: 9050, url: 'tor://45.141.215.56:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.57', port: 9050, url: 'tor://124.198.131.57:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.78', port: 9050, url: 'tor://171.25.193.78:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.213', port: 9050, url: 'tor://38.135.24.213:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.30', port: 9050, url: 'tor://185.220.101.30:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.162', port: 9050, url: 'tor://192.159.99.162:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '202.181.177.126', port: 9050, url: 'tor://202.181.177.126:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.42', port: 9050, url: 'tor://192.42.116.42:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '203.55.81.2', port: 9050, url: 'tor://203.55.81.2:9050' },
  { country: 'Швейцария', city: 'Rümlang', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '179.43.140.198', port: 9050, url: 'tor://179.43.140.198:9050' },
  { country: 'Италия', city: 'Venafro', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '185.56.171.94', port: 9050, url: 'tor://185.56.171.94:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.167', port: 9050, url: 'tor://45.80.158.167:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.107', port: 9050, url: 'tor://192.42.116.107:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '206.166.251.193', port: 9050, url: 'tor://206.166.251.193:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.92.1.70', port: 9050, url: 'tor://45.92.1.70:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '199.195.253.156', port: 9050, url: 'tor://199.195.253.156:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.35', port: 9050, url: 'tor://23.191.200.35:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.92', port: 9050, url: 'tor://2.58.56.92:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.65', port: 9050, url: 'tor://23.191.200.65:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '212.21.66.6', port: 9050, url: 'tor://212.21.66.6:9050' },
  { country: 'Великобритания', city: 'Portsmouth', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '94.72.104.135', port: 9050, url: 'tor://94.72.104.135:9050' },
  { country: 'Италия', city: 'Turin', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '64.190.76.2', port: 9050, url: 'tor://64.190.76.2:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '176.58.121.177', port: 9050, url: 'tor://176.58.121.177:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.167', port: 9050, url: 'tor://185.220.101.167:9050' },
  { country: 'The Netherlands', city: 'Eygelshoven', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.93.89.106', port: 9050, url: 'tor://185.93.89.106:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.107', port: 9050, url: 'tor://45.138.16.107:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.46', port: 9050, url: 'tor://2.58.56.46:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.14', port: 9050, url: 'tor://185.220.101.14:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.232', port: 9050, url: 'tor://185.243.218.232:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.99', port: 9050, url: 'tor://192.42.116.99:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.168', port: 9050, url: 'tor://192.159.99.168:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.101', port: 9050, url: 'tor://45.84.107.101:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.82', port: 9050, url: 'tor://171.25.193.82:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.79', port: 9050, url: 'tor://171.25.193.79:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.156', port: 9050, url: 'tor://45.141.215.156:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.5', port: 9050, url: 'tor://109.70.100.5:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.25', port: 9050, url: 'tor://185.220.101.25:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '109.237.27.11', port: 9050, url: 'tor://109.237.27.11:9050' },
  { country: 'Сингапур', city: 'Singapore', flag: '🇸🇬', ping: 500, saved: false, protocol: 'tor', ip: '62.72.47.105', port: 9050, url: 'tor://62.72.47.105:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.12', port: 9050, url: 'tor://109.70.100.12:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.24', port: 9050, url: 'tor://23.191.200.24:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.104.202', port: 9050, url: 'tor://5.255.104.202:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.2.79.190', port: 9050, url: 'tor://5.2.79.190:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.36', port: 9050, url: 'tor://23.191.200.36:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.61.6', port: 9050, url: 'tor://185.129.61.6:9050' },
  { country: 'США', city: 'Ashburn', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.236.122.193', port: 9050, url: 'tor://23.236.122.193:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.110.120', port: 9050, url: 'tor://5.255.110.120:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '193.36.132.21', port: 9050, url: 'tor://193.36.132.21:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.18', port: 9050, url: 'tor://192.42.116.18:9050' },
  { country: 'Швейцария', city: 'Rümlang', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '179.43.159.78', port: 9050, url: 'tor://179.43.159.78:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.58', port: 9050, url: 'tor://192.42.116.58:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.13', port: 9050, url: 'tor://109.70.100.13:9050' },
  { country: 'США', city: 'West Lebanon', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '66.220.242.222', port: 9050, url: 'tor://66.220.242.222:9050' },
  { country: 'Италия', city: 'Milan', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '178.218.144.18', port: 9050, url: 'tor://178.218.144.18:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.182', port: 9050, url: 'tor://45.84.107.182:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.128', port: 9050, url: 'tor://45.84.107.128:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.51', port: 9050, url: 'tor://185.220.101.51:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.190', port: 9050, url: 'tor://124.198.131.190:9050' },
  { country: 'США', city: 'Dallas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '74.50.118.26', port: 9050, url: 'tor://74.50.118.26:9050' },
  { country: 'Румыния', city: 'Bucharest', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '91.208.75.3', port: 9050, url: 'tor://91.208.75.3:9050' },
  { country: 'Швейцария', city: 'Zurich', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '81.17.28.95', port: 9050, url: 'tor://81.17.28.95:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.25.140', port: 9050, url: 'tor://38.135.25.140:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.15', port: 9050, url: 'tor://185.220.101.15:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.118', port: 9050, url: 'tor://45.138.16.118:9050' },
  { country: 'Panama', city: 'Bella Vista', flag: '🇵🇦', ping: 500, saved: false, protocol: 'tor', ip: '190.123.46.93', port: 9050, url: 'tor://190.123.46.93:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.79', port: 9050, url: 'tor://192.159.99.79:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.56', port: 9050, url: 'tor://23.191.200.56:9050' },
  { country: 'Румыния', city: 'Orăştie', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '45.137.99.182', port: 9050, url: 'tor://45.137.99.182:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.116.90', port: 9050, url: 'tor://87.118.116.90:9050' },
  { country: 'США', city: 'Los Angeles', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '198.46.166.157', port: 9050, url: 'tor://198.46.166.157:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.49', port: 9050, url: 'tor://192.42.116.49:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.133', port: 9050, url: 'tor://124.198.131.133:9050' },
  { country: 'Канада', city: 'Montreal', flag: '🇨🇦', ping: 500, saved: false, protocol: 'tor', ip: '149.56.44.47', port: 9050, url: 'tor://149.56.44.47:9050' },
  { country: 'Швеция', city: 'Örebro', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '192.121.44.33', port: 9050, url: 'tor://192.121.44.33:9050' },
  { country: 'Швейцария', city: 'Zurich', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '94.230.208.147', port: 9050, url: 'tor://94.230.208.147:9050' },
  { country: 'The Netherlands', city: 'Eygelshoven', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.93.89.96', port: 9050, url: 'tor://185.93.89.96:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.98', port: 9050, url: 'tor://185.220.101.98:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.241.208.234', port: 9050, url: 'tor://185.241.208.234:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.227', port: 9050, url: 'tor://45.141.215.227:9050' },
  { country: 'США', city: 'Bloomfield Hills', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '96.66.15.152', port: 9050, url: 'tor://96.66.15.152:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.25', port: 9050, url: 'tor://23.191.200.25:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.11', port: 9050, url: 'tor://185.220.101.11:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.74', port: 9050, url: 'tor://192.159.99.74:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.44', port: 9050, url: 'tor://192.42.116.44:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.36', port: 9050, url: 'tor://171.25.193.36:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.145', port: 9050, url: 'tor://192.42.116.145:9050' },
  { country: 'США', city: 'Buffalo', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '155.94.163.175', port: 9050, url: 'tor://155.94.163.175:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.95', port: 9050, url: 'tor://45.141.215.95:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '88.80.26.4', port: 9050, url: 'tor://88.80.26.4:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '84.16.224.227', port: 9050, url: 'tor://84.16.224.227:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.132', port: 9050, url: 'tor://171.25.193.132:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.47', port: 9050, url: 'tor://23.191.200.47:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.57', port: 9050, url: 'tor://192.42.116.57:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.12', port: 9050, url: 'tor://192.42.116.12:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.1.9', port: 9050, url: 'tor://107.189.1.9:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.175', port: 9050, url: 'tor://185.220.101.175:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.13.180', port: 9050, url: 'tor://107.189.13.180:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '89.58.26.216', port: 9050, url: 'tor://89.58.26.216:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.72', port: 9050, url: 'tor://38.135.24.72:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.40', port: 9050, url: 'tor://23.191.200.40:9050' },
  { country: 'США', city: 'Valley Forge', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.137.253.113', port: 9050, url: 'tor://23.137.253.113:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.61.1', port: 9050, url: 'tor://185.129.61.1:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.93', port: 9050, url: 'tor://45.80.158.93:9050' },
  { country: 'Швеция', city: 'Hudiksvall', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '95.143.193.125', port: 9050, url: 'tor://95.143.193.125:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.132.53.45', port: 9050, url: 'tor://185.132.53.45:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.132.53.150', port: 9050, url: 'tor://185.132.53.150:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.111', port: 9050, url: 'tor://23.191.200.111:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.116', port: 9050, url: 'tor://192.42.116.116:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.55', port: 9050, url: 'tor://45.84.107.55:9050' },
  { country: 'Франция', city: 'Roubaix', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '5.196.95.34', port: 9050, url: 'tor://5.196.95.34:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.246.188.149', port: 9050, url: 'tor://185.246.188.149:9050' },
  { country: 'Молдова', city: 'Chisinau', flag: '🇲🇩', ping: 500, saved: false, protocol: 'tor', ip: '178.17.171.102', port: 9050, url: 'tor://178.17.171.102:9050' },
  { country: 'США', city: 'Seattle', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '154.53.58.161', port: 9050, url: 'tor://154.53.58.161:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '37.228.129.189', port: 9050, url: 'tor://37.228.129.189:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.101.10', port: 9050, url: 'tor://5.255.101.10:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '89.234.157.254', port: 9050, url: 'tor://89.234.157.254:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.26', port: 9050, url: 'tor://23.191.200.26:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.54', port: 9050, url: 'tor://45.84.107.54:9050' },
  { country: 'США', city: 'Chicago', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '204.137.14.106', port: 9050, url: 'tor://204.137.14.106:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.21', port: 9050, url: 'tor://192.42.116.21:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '205.185.121.177', port: 9050, url: 'tor://205.185.121.177:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.50', port: 9050, url: 'tor://192.42.116.50:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.93', port: 9050, url: 'tor://192.42.116.93:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.132.53.58', port: 9050, url: 'tor://185.132.53.58:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '89.147.110.154', port: 9050, url: 'tor://89.147.110.154:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.143', port: 9050, url: 'tor://45.80.158.143:9050' },
  { country: 'США', city: 'Santa Clara', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '43.159.138.176', port: 9050, url: 'tor://43.159.138.176:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.115', port: 9050, url: 'tor://192.42.116.115:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.14', port: 9050, url: 'tor://192.42.116.14:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.16', port: 9050, url: 'tor://23.191.200.16:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.142', port: 9050, url: 'tor://185.220.101.142:9050' },
  { country: 'Финляндия', city: 'Turku', flag: '🇫🇮', ping: 500, saved: false, protocol: 'tor', ip: '45.137.69.5', port: 9050, url: 'tor://45.137.69.5:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.31', port: 9050, url: 'tor://38.135.24.31:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.6', port: 9050, url: 'tor://109.70.100.6:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.104', port: 9050, url: 'tor://23.191.200.104:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.13', port: 9050, url: 'tor://192.42.116.13:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.202', port: 9050, url: 'tor://193.189.100.202:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.127.222', port: 9050, url: 'tor://5.255.127.222:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '82.221.100.12', port: 9050, url: 'tor://82.221.100.12:9050' },
  { country: 'ЮАР', city: 'Vereeniging', flag: '🇿🇦', ping: 500, saved: false, protocol: 'tor', ip: '102.130.127.117', port: 9050, url: 'tor://102.130.127.117:9050' },
  { country: 'Croatia', city: 'Sisak', flag: '🇭🇷', ping: 500, saved: false, protocol: 'tor', ip: '45.95.169.119', port: 9050, url: 'tor://45.95.169.119:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.47', port: 9050, url: 'tor://192.42.116.47:9050' },
  { country: 'Украина', city: 'Kyiv', flag: '🇺🇦', ping: 500, saved: false, protocol: 'tor', ip: '176.97.114.202', port: 9050, url: 'tor://176.97.114.202:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.148.10.217', port: 9050, url: 'tor://45.148.10.217:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.19', port: 9050, url: 'tor://185.220.101.19:9050' },
  { country: 'США', city: 'Spring', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '104.167.241.4', port: 9050, url: 'tor://104.167.241.4:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.165', port: 9050, url: 'tor://124.198.131.165:9050' },
  { country: 'Croatia', city: 'Sisak', flag: '🇭🇷', ping: 500, saved: false, protocol: 'tor', ip: '45.95.169.104', port: 9050, url: 'tor://45.95.169.104:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.249', port: 9050, url: 'tor://45.80.158.249:9050' },
  { country: 'Швейцария', city: 'Rümlang', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '179.43.182.232', port: 9050, url: 'tor://179.43.182.232:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.66.35.23', port: 9050, url: 'tor://45.66.35.23:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.122.51', port: 9050, url: 'tor://87.118.122.51:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.180', port: 9050, url: 'tor://185.220.101.180:9050' },
  { country: 'США', city: 'Miami', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '45.61.185.172', port: 9050, url: 'tor://45.61.185.172:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.78.233', port: 9050, url: 'tor://104.244.78.233:9050' },
  { country: 'США', city: 'Cedar Knolls', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '162.216.18.62', port: 9050, url: 'tor://162.216.18.62:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.240', port: 9050, url: 'tor://45.138.16.240:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.170.114.25', port: 9050, url: 'tor://185.170.114.25:9050' },
  { country: 'Чехия', city: 'Uherské Hradiště', flag: '🇨🇿', ping: 500, saved: false, protocol: 'tor', ip: '93.99.104.40', port: 9050, url: 'tor://93.99.104.40:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '91.92.109.126', port: 9050, url: 'tor://91.92.109.126:9050' },
  { country: 'США', city: 'Portland', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '162.251.5.152', port: 9050, url: 'tor://162.251.5.152:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.100', port: 9050, url: 'tor://185.220.101.100:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.57', port: 9050, url: 'tor://23.191.200.57:9050' },
  { country: 'Польша', city: 'Ciechanów', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '44.30.4.69', port: 9050, url: 'tor://44.30.4.69:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '88.80.26.3', port: 9050, url: 'tor://88.80.26.3:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.241', port: 9050, url: 'tor://38.135.24.241:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.238', port: 9050, url: 'tor://45.141.215.238:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.60', port: 9050, url: 'tor://192.42.116.60:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.3.11', port: 9050, url: 'tor://107.189.3.11:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.28', port: 9050, url: 'tor://23.191.200.28:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '212.95.50.77', port: 9050, url: 'tor://212.95.50.77:9050' },
  { country: 'Thailand', city: 'Pak Kret', flag: '🇹🇭', ping: 500, saved: false, protocol: 'tor', ip: '103.247.61.20', port: 9050, url: 'tor://103.247.61.20:9050' },
  { country: 'Польша', city: 'Poznan', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '31.133.0.235', port: 9050, url: 'tor://31.133.0.235:9050' },
  { country: 'Люксембург', city: 'Bissen', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.10.175', port: 9050, url: 'tor://107.189.10.175:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.120', port: 9050, url: 'tor://23.191.200.120:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '205.185.121.170', port: 9050, url: 'tor://205.185.121.170:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.86', port: 9050, url: 'tor://124.198.131.86:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.92.1.136', port: 9050, url: 'tor://45.92.1.136:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '46.232.251.191', port: 9050, url: 'tor://46.232.251.191:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.134.225.36', port: 9050, url: 'tor://45.134.225.36:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.59', port: 9050, url: 'tor://192.42.116.59:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.6.124', port: 9050, url: 'tor://107.189.6.124:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.246.190.136', port: 9050, url: 'tor://185.246.190.136:9050' },
  { country: 'Индонезия', city: 'Cicurug', flag: '🇮🇩', ping: 500, saved: false, protocol: 'tor', ip: '103.193.179.233', port: 9050, url: 'tor://103.193.179.233:9050' },
  { country: 'США', city: 'Kansas City', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.137.254.244', port: 9050, url: 'tor://23.137.254.244:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.102', port: 9050, url: 'tor://192.42.116.102:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.25.127', port: 9050, url: 'tor://38.135.25.127:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.33', port: 9050, url: 'tor://23.191.200.33:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.138', port: 9050, url: 'tor://185.220.101.138:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.31', port: 9050, url: 'tor://185.220.101.31:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.0', port: 9050, url: 'tor://185.220.101.0:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.72.132', port: 9050, url: 'tor://104.244.72.132:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.47', port: 9050, url: 'tor://45.84.107.47:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.61.3', port: 9050, url: 'tor://185.129.61.3:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.119', port: 9050, url: 'tor://124.198.131.119:9050' },
  { country: 'Швейцария', city: 'Rümlang', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '179.43.133.50', port: 9050, url: 'tor://179.43.133.50:9050' },
  { country: 'Нидерланды', city: 'Dronten', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.255.101.131', port: 9050, url: 'tor://5.255.101.131:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '185.82.219.109', port: 9050, url: 'tor://185.82.219.109:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.134', port: 9050, url: 'tor://185.220.101.134:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.98', port: 9050, url: 'tor://192.42.116.98:9050' },
  { country: 'Германия', city: 'Haßfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.100.245', port: 9050, url: 'tor://185.220.100.245:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.29.8', port: 9050, url: 'tor://107.189.29.8:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.246.188.74', port: 9050, url: 'tor://185.246.188.74:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '193.200.229.243', port: 9050, url: 'tor://193.200.229.243:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '77.239.97.46', port: 9050, url: 'tor://77.239.97.46:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.222', port: 9050, url: 'tor://45.138.16.222:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.194', port: 9050, url: 'tor://193.189.100.194:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.94.31.228', port: 9050, url: 'tor://45.94.31.228:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '194.26.192.177', port: 9050, url: 'tor://194.26.192.177:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '194.26.192.46', port: 9050, url: 'tor://194.26.192.46:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.28', port: 9050, url: 'tor://185.220.101.28:9050' },
  { country: 'Сингапур', city: 'Singapore', flag: '🇸🇬', ping: 500, saved: false, protocol: 'tor', ip: '103.164.54.199', port: 9050, url: 'tor://103.164.54.199:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.66', port: 9050, url: 'tor://192.42.116.66:9050' },
  { country: 'США', city: 'Miami', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '193.26.115.43', port: 9050, url: 'tor://193.26.115.43:9050' },
  { country: 'США', city: 'Dallas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '64.94.85.248', port: 9050, url: 'tor://64.94.85.248:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.62.63', port: 9050, url: 'tor://185.129.62.63:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.51', port: 9050, url: 'tor://192.42.116.51:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.69', port: 9050, url: 'tor://45.138.16.69:9050' },
  { country: 'Türkiye', city: 'Istanbul', flag: '🇹🇷', ping: 500, saved: false, protocol: 'tor', ip: '31.40.204.151', port: 9050, url: 'tor://31.40.204.151:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.114', port: 9050, url: 'tor://192.42.116.114:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.112', port: 9050, url: 'tor://192.42.116.112:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.154.98.153', port: 9050, url: 'tor://45.154.98.153:9050' },
  { country: 'Франция', city: 'Aulnay-sous-Bois', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '178.170.114.117', port: 9050, url: 'tor://178.170.114.117:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.119', port: 9050, url: 'tor://23.191.200.119:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.154', port: 9050, url: 'tor://185.220.101.154:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.80', port: 9050, url: 'tor://23.191.200.80:9050' },
  { country: 'США', city: 'Chicago', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '204.137.14.92', port: 9050, url: 'tor://204.137.14.92:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.231', port: 9050, url: 'tor://185.243.218.231:9050' },
  { country: 'Германия', city: 'Langen', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.91.250.107', port: 9050, url: 'tor://45.91.250.107:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.94.31.244', port: 9050, url: 'tor://45.94.31.244:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '104.244.73.190', port: 9050, url: 'tor://104.244.73.190:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.142', port: 9050, url: 'tor://45.80.158.142:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.92', port: 9050, url: 'tor://23.191.200.92:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.95', port: 9050, url: 'tor://192.42.116.95:9050' },
  { country: 'Сингапур', city: 'Singapore', flag: '🇸🇬', ping: 500, saved: false, protocol: 'tor', ip: '172.104.186.73', port: 9050, url: 'tor://172.104.186.73:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.72', port: 9050, url: 'tor://23.191.200.72:9050' },
  { country: 'Италия', city: 'Milan', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '178.218.144.99', port: 9050, url: 'tor://178.218.144.99:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.75', port: 9050, url: 'tor://45.80.158.75:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.205', port: 9050, url: 'tor://193.189.100.205:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.133.74.53', port: 9050, url: 'tor://45.133.74.53:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.114', port: 9050, url: 'tor://45.141.215.114:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.200', port: 9050, url: 'tor://45.84.107.200:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.165', port: 9050, url: 'tor://45.80.158.165:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.241.208.71', port: 9050, url: 'tor://185.241.208.71:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.7.144', port: 9050, url: 'tor://107.189.7.144:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.10', port: 9050, url: 'tor://109.70.100.10:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.55', port: 9050, url: 'tor://192.42.116.55:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '194.26.192.186', port: 9050, url: 'tor://194.26.192.186:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.169', port: 9050, url: 'tor://45.141.215.169:9050' },
  { country: 'США', city: 'Buffalo', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '104.168.4.155', port: 9050, url: 'tor://104.168.4.155:9050' },
  { country: 'Сингапур', city: 'Singapore', flag: '🇸🇬', ping: 500, saved: false, protocol: 'tor', ip: '47.84.7.211', port: 9050, url: 'tor://47.84.7.211:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.181.61.203', port: 9050, url: 'tor://185.181.61.203:9050' },
  { country: 'США', city: 'Chicago', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '204.137.14.104', port: 9050, url: 'tor://204.137.14.104:9050' },
  { country: 'США', city: 'Somers', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '38.135.24.120', port: 9050, url: 'tor://38.135.24.120:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.200', port: 9050, url: 'tor://45.141.215.200:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.17', port: 9050, url: 'tor://192.42.116.17:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.229', port: 9050, url: 'tor://185.243.218.229:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.111', port: 9050, url: 'tor://45.80.158.111:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.57', port: 9050, url: 'tor://185.220.101.57:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.80.158.27', port: 9050, url: 'tor://45.80.158.27:9050' },
  { country: 'Германия', city: 'Saarbrücken', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '54.36.108.162', port: 9050, url: 'tor://54.36.108.162:9050' },
  { country: 'Швейцария', city: 'Opfikon', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '185.195.71.244', port: 9050, url: 'tor://185.195.71.244:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.66.35.34', port: 9050, url: 'tor://45.66.35.34:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '87.121.79.219', port: 9050, url: 'tor://87.121.79.219:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.68', port: 9050, url: 'tor://23.191.200.68:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.243.218.225', port: 9050, url: 'tor://185.243.218.225:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '209.141.51.180', port: 9050, url: 'tor://209.141.51.180:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.13.225.78', port: 9050, url: 'tor://45.13.225.78:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.97', port: 9050, url: 'tor://45.141.215.97:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.230', port: 9050, url: 'tor://45.138.16.230:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '5.45.104.176', port: 9050, url: 'tor://5.45.104.176:9050' },
  { country: 'Чехия', city: 'Uherské Hradiště', flag: '🇨🇿', ping: 500, saved: false, protocol: 'tor', ip: '93.99.104.18', port: 9050, url: 'tor://93.99.104.18:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '23.137.248.100', port: 9050, url: 'tor://23.137.248.100:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.38', port: 9050, url: 'tor://171.25.193.38:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.2.79.179', port: 9050, url: 'tor://5.2.79.179:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.28', port: 9050, url: 'tor://45.141.215.28:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.5', port: 9050, url: 'tor://185.220.101.5:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '198.251.84.163', port: 9050, url: 'tor://198.251.84.163:9050' },
  { country: 'Люксембург', city: 'Strassen', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '85.93.218.204', port: 9050, url: 'tor://85.93.218.204:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '5.45.102.93', port: 9050, url: 'tor://5.45.102.93:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '185.246.84.179', port: 9050, url: 'tor://185.246.84.179:9050' },
  { country: 'Тайвань', city: 'New Taipei City', flag: '🌐', ping: 500, saved: false, protocol: 'tor', ip: '118.163.74.160', port: 9050, url: 'tor://118.163.74.160:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '45.9.156.193', port: 9050, url: 'tor://45.9.156.193:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.66', port: 9050, url: 'tor://23.191.200.66:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.96', port: 9050, url: 'tor://192.42.116.96:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.7', port: 9050, url: 'tor://185.220.101.7:9050' },
  { country: 'Великобритания', city: 'Portsmouth', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '149.102.153.38', port: 9050, url: 'tor://149.102.153.38:9050' },
  { country: 'Румыния', city: 'Orăştie', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '82.153.138.57', port: 9050, url: 'tor://82.153.138.57:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.81', port: 9050, url: 'tor://171.25.193.81:9050' },
  { country: 'Франция', city: 'Clichy', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '178.20.55.182', port: 9050, url: 'tor://178.20.55.182:9050' },
  { country: 'Вьетнам', city: 'Quận Bình Thạnh', flag: '🇻🇳', ping: 500, saved: false, protocol: 'tor', ip: '103.109.187.71', port: 9050, url: 'tor://103.109.187.71:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.131.64.118', port: 9050, url: 'tor://45.131.64.118:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '23.137.251.187', port: 9050, url: 'tor://23.137.251.187:9050' },
  { country: 'Тайвань', city: 'Taipei', flag: '🌐', ping: 500, saved: false, protocol: 'tor', ip: '114.35.245.150', port: 9050, url: 'tor://114.35.245.150:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.110.27', port: 9050, url: 'tor://87.118.110.27:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '194.32.107.172', port: 9050, url: 'tor://194.32.107.172:9050' },
  { country: 'США', city: 'Chapel Hill', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '204.85.191.7', port: 9050, url: 'tor://204.85.191.7:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.3', port: 9050, url: 'tor://109.70.100.3:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.61.129', port: 9050, url: 'tor://185.129.61.129:9050' },
  { country: 'Швейцария', city: 'Wetzikon', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '185.191.239.172', port: 9050, url: 'tor://185.191.239.172:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.94', port: 9050, url: 'tor://23.191.200.94:9050' },
  { country: 'Франция', city: 'Clichy', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '178.20.55.16', port: 9050, url: 'tor://178.20.55.16:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.93', port: 9050, url: 'tor://2.58.56.93:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.63', port: 9050, url: 'tor://192.42.116.63:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '185.112.146.167', port: 9050, url: 'tor://185.112.146.167:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.104', port: 9050, url: 'tor://192.42.116.104:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.74', port: 9050, url: 'tor://45.84.107.74:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.100', port: 9050, url: 'tor://192.42.116.100:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.11.111', port: 9050, url: 'tor://107.189.11.111:9050' },
  { country: 'Чехия', city: 'Stráž nad Nisou', flag: '🇨🇿', ping: 500, saved: false, protocol: 'tor', ip: '88.86.116.142', port: 9050, url: 'tor://88.86.116.142:9050' },
  { country: 'Великобритания', city: 'Milton Keynes', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '90.255.234.132', port: 9050, url: 'tor://90.255.234.132:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.65', port: 9050, url: 'tor://192.42.116.65:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.106', port: 9050, url: 'tor://192.42.116.106:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.6', port: 9050, url: 'tor://185.220.101.6:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.116.103', port: 9050, url: 'tor://87.118.116.103:9050' },
  { country: 'ЮАР', city: 'Johannesburg', flag: '🇿🇦', ping: 500, saved: false, protocol: 'tor', ip: '102.211.56.20', port: 9050, url: 'tor://102.211.56.20:9050' },
  { country: 'Нидерланды', city: 'Lelystad', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '194.26.192.77', port: 9050, url: 'tor://194.26.192.77:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.45', port: 9050, url: 'tor://171.25.193.45:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.80', port: 9050, url: 'tor://171.25.193.80:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.174', port: 9050, url: 'tor://185.220.101.174:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.99', port: 9050, url: 'tor://185.220.101.99:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.62', port: 9050, url: 'tor://124.198.131.62:9050' },
  { country: 'США', city: 'Las Vegas', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '209.141.55.26', port: 9050, url: 'tor://209.141.55.26:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '216.9.225.157', port: 9050, url: 'tor://216.9.225.157:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.234', port: 9050, url: 'tor://45.138.16.234:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.20', port: 9050, url: 'tor://171.25.193.20:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.106', port: 9050, url: 'tor://185.220.101.106:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.131', port: 9050, url: 'tor://185.220.101.131:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '165.227.163.170', port: 9050, url: 'tor://165.227.163.170:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.96', port: 9050, url: 'tor://23.191.200.96:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '5.2.67.226', port: 9050, url: 'tor://5.2.67.226:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.15', port: 9050, url: 'tor://192.42.116.15:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.8.226', port: 9050, url: 'tor://107.189.8.226:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.18', port: 9050, url: 'tor://185.220.101.18:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.92', port: 9050, url: 'tor://192.42.116.92:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.8.56', port: 9050, url: 'tor://107.189.8.56:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.16', port: 9050, url: 'tor://192.42.116.16:9050' },
  { country: 'Дания', city: 'Græsted', flag: '🇩🇰', ping: 500, saved: false, protocol: 'tor', ip: '185.129.62.64', port: 9050, url: 'tor://185.129.62.64:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.20', port: 9050, url: 'tor://23.191.200.20:9050' },
  { country: 'Нидерланды', city: 'Haarlem', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '51.15.59.15', port: 9050, url: 'tor://51.15.59.15:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '190.211.254.97', port: 9050, url: 'tor://190.211.254.97:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.132.52', port: 9050, url: 'tor://124.198.132.52:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.121', port: 9050, url: 'tor://124.198.131.121:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.131', port: 9050, url: 'tor://171.25.193.131:9050' },
  { country: 'Болгария', city: 'Sofia', flag: '🇧🇬', ping: 500, saved: false, protocol: 'tor', ip: '93.123.12.112', port: 9050, url: 'tor://93.123.12.112:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.118', port: 9050, url: 'tor://192.42.116.118:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.35', port: 9050, url: 'tor://171.25.193.35:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.144', port: 9050, url: 'tor://192.42.116.144:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.33', port: 9050, url: 'tor://45.84.107.33:9050' },
  { country: 'США', city: 'Miami', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '193.26.115.123', port: 9050, url: 'tor://193.26.115.123:9050' },
  { country: 'Швейцария', city: 'Rümlang', flag: '🇨🇭', ping: 500, saved: false, protocol: 'tor', ip: '185.12.44.163', port: 9050, url: 'tor://185.12.44.163:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.197', port: 9050, url: 'tor://193.189.100.197:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.121', port: 9050, url: 'tor://23.191.200.121:9050' },
  { country: 'Исландия', city: 'Reykjavik', flag: '🇮🇸', ping: 500, saved: false, protocol: 'tor', ip: '93.95.228.125', port: 9050, url: 'tor://93.95.228.125:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.43', port: 9050, url: 'tor://192.42.116.43:9050' },
  { country: 'Норвегия', city: 'Sandefjord', flag: '🇳🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.181.61.201', port: 9050, url: 'tor://185.181.61.201:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '121.127.33.253', port: 9050, url: 'tor://121.127.33.253:9050' },
  { country: 'Peru', city: 'Santiago de Surco', flag: '🌐', ping: 500, saved: false, protocol: 'tor', ip: '190.120.229.2', port: 9050, url: 'tor://190.120.229.2:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.117', port: 9050, url: 'tor://192.42.116.117:9050' },
  { country: 'Франция', city: 'Paris', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '80.67.167.81', port: 9050, url: 'tor://80.67.167.81:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '89.58.41.156', port: 9050, url: 'tor://89.58.41.156:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.19', port: 9050, url: 'tor://192.42.116.19:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.12', port: 9050, url: 'tor://23.191.200.12:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '185.241.208.136', port: 9050, url: 'tor://185.241.208.136:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.32', port: 9050, url: 'tor://23.191.200.32:9050' },
  { country: 'Peru', city: 'Santiago de Surco', flag: '🌐', ping: 500, saved: false, protocol: 'tor', ip: '190.120.229.98', port: 9050, url: 'tor://190.120.229.98:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '185.113.128.30', port: 9050, url: 'tor://185.113.128.30:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.159', port: 9050, url: 'tor://185.220.101.159:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.136', port: 9050, url: 'tor://185.220.101.136:9050' },
  { country: 'Румыния', city: 'Bucharest', flag: '🇷🇴', ping: 500, saved: false, protocol: 'tor', ip: '185.100.87.192', port: 9050, url: 'tor://185.100.87.192:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.16', port: 9050, url: 'tor://185.220.101.16:9050' },
  { country: 'Türkiye', city: 'Istanbul', flag: '🇹🇷', ping: 500, saved: false, protocol: 'tor', ip: '83.217.9.73', port: 9050, url: 'tor://83.217.9.73:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.29', port: 9050, url: 'tor://185.220.101.29:9050' },
  { country: 'Люксембург', city: 'Roost', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.1.175', port: 9050, url: 'tor://107.189.1.175:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.84', port: 9050, url: 'tor://23.191.200.84:9050' },
  { country: 'Индонезия', city: 'Cicurug', flag: '🇮🇩', ping: 500, saved: false, protocol: 'tor', ip: '103.146.203.14', port: 9050, url: 'tor://103.146.203.14:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.186', port: 9050, url: 'tor://185.220.101.186:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.141.215.110', port: 9050, url: 'tor://45.141.215.110:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '5.45.98.162', port: 9050, url: 'tor://5.45.98.162:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.32', port: 9050, url: 'tor://185.220.101.32:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.35', port: 9050, url: 'tor://2.58.56.35:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.56', port: 9050, url: 'tor://192.42.116.56:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.183', port: 9050, url: 'tor://185.220.101.183:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.248', port: 9050, url: 'tor://45.138.16.248:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.97', port: 9050, url: 'tor://192.42.116.97:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '193.189.100.203', port: 9050, url: 'tor://193.189.100.203:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '198.98.51.249', port: 9050, url: 'tor://198.98.51.249:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.1', port: 9050, url: 'tor://109.70.100.1:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.44', port: 9050, url: 'tor://185.220.101.44:9050' },
  { country: 'The Netherlands', city: 'Alkmaar', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.76.153.253', port: 9050, url: 'tor://192.76.153.253:9050' },
  { country: 'Швеция', city: 'Stockholm', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '171.25.193.235', port: 9050, url: 'tor://171.25.193.235:9050' },
  { country: 'Люксембург', city: 'Luxembourg', flag: '🇱🇺', ping: 500, saved: false, protocol: 'tor', ip: '107.189.8.133', port: 9050, url: 'tor://107.189.8.133:9050' },
  { country: 'Швеция', city: 'Sundbyberg', flag: '🇸🇪', ping: 500, saved: false, protocol: 'tor', ip: '45.84.107.172', port: 9050, url: 'tor://45.84.107.172:9050' },
  { country: 'Австрия', city: 'Vienna', flag: '🇦🇹', ping: 500, saved: false, protocol: 'tor', ip: '109.70.100.8', port: 9050, url: 'tor://109.70.100.8:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.102', port: 9050, url: 'tor://185.220.101.102:9050' },
  { country: 'США', city: 'Evanston', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '66.146.193.33', port: 9050, url: 'tor://66.146.193.33:9050' },
  { country: 'США', city: 'Bear', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '23.191.200.86', port: 9050, url: 'tor://23.191.200.86:9050' },
  { country: 'Италия', city: 'Turin', flag: '🇮🇹', ping: 500, saved: false, protocol: 'tor', ip: '64.190.76.10', port: 9050, url: 'tor://64.190.76.10:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.36', port: 9050, url: 'tor://185.220.101.36:9050' },
  { country: 'Франция', city: 'Bavilliers', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '2.58.56.43', port: 9050, url: 'tor://2.58.56.43:9050' },
  { country: 'Германия', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '57.129.91.235', port: 9050, url: 'tor://57.129.91.235:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '37.228.129.241', port: 9050, url: 'tor://37.228.129.241:9050' },
  { country: 'Нидерланды', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.94.31.123', port: 9050, url: 'tor://45.94.31.123:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.42', port: 9050, url: 'tor://45.138.16.42:9050' },
  { country: 'США', city: 'Miami', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '45.88.186.89', port: 9050, url: 'tor://45.88.186.89:9050' },
  { country: 'Великобритания', city: 'London', flag: '🇬🇧', ping: 500, saved: false, protocol: 'tor', ip: '178.79.154.219', port: 9050, url: 'tor://178.79.154.219:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.139', port: 9050, url: 'tor://185.220.101.139:9050' },
  { country: 'Германия', city: 'Nuremberg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.244.192.184', port: 9050, url: 'tor://185.244.192.184:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '192.159.99.27', port: 9050, url: 'tor://192.159.99.27:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.17', port: 9050, url: 'tor://185.220.101.17:9050' },
  { country: 'Германия', city: 'Brandenburg', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '185.220.101.185', port: 9050, url: 'tor://185.220.101.185:9050' },
  { country: 'Франция', city: 'Lauterbourg', flag: '🇫🇷', ping: 500, saved: false, protocol: 'tor', ip: '185.252.232.218', port: 9050, url: 'tor://185.252.232.218:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.46', port: 9050, url: 'tor://192.42.116.46:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.48', port: 9050, url: 'tor://192.42.116.48:9050' },
  { country: 'Германия', city: 'Erfurt', flag: '🇩🇪', ping: 500, saved: false, protocol: 'tor', ip: '87.118.116.12', port: 9050, url: 'tor://87.118.116.12:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.143', port: 9050, url: 'tor://192.42.116.143:9050' },
  { country: 'Финляндия', city: 'Turku', flag: '🇫🇮', ping: 500, saved: false, protocol: 'tor', ip: '45.137.69.13', port: 9050, url: 'tor://45.137.69.13:9050' },
  { country: 'Польша', city: 'Warsaw', flag: '🇵🇱', ping: 500, saved: false, protocol: 'tor', ip: '45.138.16.231', port: 9050, url: 'tor://45.138.16.231:9050' },
  { country: 'The Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 500, saved: false, protocol: 'tor', ip: '192.42.116.53', port: 9050, url: 'tor://192.42.116.53:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.131.108', port: 9050, url: 'tor://124.198.131.108:9050' },
  { country: 'США', city: 'New York', flag: '🇺🇸', ping: 500, saved: false, protocol: 'tor', ip: '124.198.132.13', port: 9050, url: 'tor://124.198.132.13:9050' },
  { country: 'United States', city: 'Beverly Hills', flag: '🇺🇸', ping: 504, saved: false, protocol: 'socks5', ip: '142.54.226.214', port: 4145, url: 'socks5://142.54.226.214:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 505, saved: false, protocol: 'socks4', ip: '142.54.235.9', port: 4145, url: 'socks4://142.54.235.9:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 514, saved: false, protocol: 'socks5', ip: '193.25.215.182', port: 22222, url: 'socks5://193.25.215.182:22222' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 522, saved: false, protocol: 'socks4', ip: '192.252.211.193', port: 4145, url: 'socks4://192.252.211.193:4145' },
  { country: 'United States', city: 'Paramount', flag: '🇺🇸', ping: 522, saved: false, protocol: 'socks4', ip: '67.201.33.10', port: 25283, url: 'socks4://67.201.33.10:25283' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 524, saved: false, protocol: 'socks5', ip: '142.54.231.38', port: 4145, url: 'socks5://142.54.231.38:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 537, saved: false, protocol: 'socks4', ip: '184.170.248.5', port: 4145, url: 'socks4://184.170.248.5:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 545, saved: false, protocol: 'socks5', ip: '107.181.161.81', port: 4145, url: 'socks5://107.181.161.81:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 545, saved: false, protocol: 'socks4', ip: '74.119.144.60', port: 4145, url: 'socks4://74.119.144.60:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 552, saved: false, protocol: 'socks4', ip: '107.181.161.81', port: 4145, url: 'socks4://107.181.161.81:4145' },
  { country: 'United States', city: 'Miami', flag: '🇺🇸', ping: 559, saved: false, protocol: 'socks5', ip: '107.181.168.145', port: 4145, url: 'socks5://107.181.168.145:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 559, saved: false, protocol: 'socks4', ip: '206.220.175.2', port: 4145, url: 'socks4://206.220.175.2:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 566, saved: false, protocol: 'socks5', ip: '192.252.211.197', port: 14921, url: 'socks5://192.252.211.197:14921' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 574, saved: false, protocol: 'socks5', ip: '184.170.249.65', port: 4145, url: 'socks5://184.170.249.65:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 580, saved: false, protocol: 'socks5', ip: '192.111.137.34', port: 18765, url: 'socks5://192.111.137.34:18765' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 582, saved: false, protocol: 'socks5', ip: '199.229.254.129', port: 4145, url: 'socks5://199.229.254.129:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 587, saved: false, protocol: 'socks5', ip: '192.111.130.2', port: 4145, url: 'socks5://192.111.130.2:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 592, saved: false, protocol: 'socks5', ip: '192.252.208.70', port: 14282, url: 'socks5://192.252.208.70:14282' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 592, saved: false, protocol: 'socks5', ip: '198.8.94.170', port: 4145, url: 'socks5://198.8.94.170:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 601, saved: false, protocol: 'socks5', ip: '142.54.232.6', port: 4145, url: 'socks5://142.54.232.6:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 603, saved: false, protocol: 'socks5', ip: '192.111.130.5', port: 17002, url: 'socks5://192.111.130.5:17002' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 604, saved: false, protocol: 'socks4', ip: '192.252.209.158', port: 4145, url: 'socks4://192.252.209.158:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 608, saved: false, protocol: 'socks5', ip: '192.111.129.145', port: 16894, url: 'socks5://192.111.129.145:16894' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 610, saved: false, protocol: 'socks5', ip: '192.111.137.35', port: 4145, url: 'socks5://192.111.137.35:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 613, saved: false, protocol: 'socks5', ip: '74.119.147.209', port: 4145, url: 'socks5://74.119.147.209:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 618, saved: false, protocol: 'socks5', ip: '192.111.138.29', port: 4145, url: 'socks5://192.111.138.29:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 625, saved: false, protocol: 'socks4', ip: '199.187.210.54', port: 4145, url: 'socks4://199.187.210.54:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 633, saved: false, protocol: 'socks5', ip: '192.111.137.37', port: 18762, url: 'socks5://192.111.137.37:18762' },
  { country: 'United Kingdom', city: 'Slough', flag: '🇬🇧', ping: 653, saved: false, protocol: 'http', ip: '46.101.95.183', port: 8888, url: 'http://46.101.95.183:8888' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 660, saved: false, protocol: 'socks4', ip: '68.71.249.153', port: 48606, url: 'socks4://68.71.249.153:48606' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 667, saved: false, protocol: 'socks4', ip: '192.111.137.34', port: 18765, url: 'socks4://192.111.137.34:18765' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 679, saved: false, protocol: 'socks5', ip: '192.111.135.18', port: 18301, url: 'socks5://192.111.135.18:18301' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 696, saved: false, protocol: 'socks4', ip: '192.111.137.37', port: 18762, url: 'socks4://192.111.137.37:18762' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 711, saved: false, protocol: 'socks5', ip: '192.111.135.17', port: 18302, url: 'socks5://192.111.135.17:18302' },
  { country: 'United States', city: 'Macon', flag: '🇺🇸', ping: 716, saved: false, protocol: 'socks4', ip: '184.182.240.211', port: 4145, url: 'socks4://184.182.240.211:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 718, saved: false, protocol: 'socks5', ip: '184.170.248.5', port: 4145, url: 'socks5://184.170.248.5:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 721, saved: false, protocol: 'socks5', ip: '184.170.245.148', port: 4145, url: 'socks5://184.170.245.148:4145' },
  { country: 'France', city: 'Paris', flag: '🇫🇷', ping: 743, saved: false, protocol: 'socks5', ip: '158.178.198.31', port: 1080, url: 'socks5://158.178.198.31:1080' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 747, saved: false, protocol: 'socks4', ip: '198.8.94.174', port: 39078, url: 'socks4://198.8.94.174:39078' },
  { country: 'Germany', city: 'Karlsruhe', flag: '🇩🇪', ping: 830, saved: false, protocol: 'socks5', ip: '152.53.144.223', port: 1080, url: 'socks5://152.53.144.223:1080' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 841, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1088, url: 'socks5://164.90.237.11:1088' },
  { country: 'United States', city: 'Boydton', flag: '🇺🇸', ping: 846, saved: false, protocol: 'http', ip: '20.127.128.70', port: 8080, url: 'http://20.127.128.70:8080' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 851, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1085, url: 'socks5://164.90.237.11:1085' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 855, saved: false, protocol: 'socks5', ip: '167.172.161.22', port: 1087, url: 'socks5://167.172.161.22:1087' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 856, saved: false, protocol: 'socks5', ip: '74.119.144.60', port: 4145, url: 'socks5://74.119.144.60:4145' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 869, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1087, url: 'socks5://164.90.237.11:1087' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 871, saved: false, protocol: 'socks5', ip: '167.172.161.22', port: 1093, url: 'socks5://167.172.161.22:1093' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 874, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1081, url: 'socks5://164.90.237.11:1081' },
  { country: 'Netherlands', city: 'Dronten', flag: '🇳🇱', ping: 877, saved: false, protocol: 'socks5', ip: '5.255.103.55', port: 1080, url: 'socks5://5.255.103.55:1080' },
  { country: 'Australia', city: 'Sydney', flag: '🇦🇺', ping: 901, saved: false, protocol: 'socks4', ip: '134.199.159.23', port: 1080, url: 'socks4://134.199.159.23:1080' },
  { country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱', ping: 920, saved: false, protocol: 'socks5', ip: '161.35.82.57', port: 1080, url: 'socks5://161.35.82.57:1080' },
  { country: 'Argentina', city: 'Buenos Aires', flag: '🇦🇷', ping: 926, saved: false, protocol: 'socks4', ip: '201.234.24.89', port: 4153, url: 'socks4://201.234.24.89:4153' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 940, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1091, url: 'socks5://164.90.237.11:1091' },
  { country: 'Russia', city: 'Cheboksary', flag: '🇷🇺', ping: 942, saved: false, protocol: 'socks4', ip: '89.151.134.157', port: 3629, url: 'socks4://89.151.134.157:3629' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 947, saved: false, protocol: 'socks5', ip: '164.90.185.232', port: 1089, url: 'socks5://164.90.185.232:1089' },
  { country: 'Japan', city: 'Tokyo', flag: '🇯🇵', ping: 950, saved: false, protocol: 'socks5', ip: '103.75.118.84', port: 1080, url: 'socks5://103.75.118.84:1080' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 958, saved: false, protocol: 'socks5', ip: '164.90.221.76', port: 1086, url: 'socks5://164.90.221.76:1086' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 959, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1086, url: 'socks5://164.90.237.11:1086' },
  { country: 'Mongolia', city: 'Ulan Bator', flag: '🌐', ping: 999, saved: false, protocol: 'socks4', ip: '202.131.235.138', port: 4153, url: 'socks4://202.131.235.138:4153' },
  { country: 'Russia', city: 'Tomsk', flag: '🇷🇺', ping: 1004, saved: false, protocol: 'socks4', ip: '213.210.67.186', port: 3629, url: 'socks4://213.210.67.186:3629' },
  { country: 'Vietnam', city: 'Thành Phố Mỹ Tho', flag: '🇻🇳', ping: 1008, saved: false, protocol: 'socks4', ip: '171.248.210.220', port: 1080, url: 'socks4://171.248.210.220:1080' },
  { country: 'Hong Kong', city: 'Hong Kong', flag: '🇭🇰', ping: 1010, saved: false, protocol: 'socks5', ip: '47.238.121.31', port: 1080, url: 'socks5://47.238.121.31:1080' },
  { country: 'Japan', city: 'Minamishinagawa', flag: '🇯🇵', ping: 1026, saved: false, protocol: 'socks5', ip: '66.42.35.216', port: 5555, url: 'socks5://66.42.35.216:5555' },
  { country: 'Vietnam', city: 'Bắc Ninh', flag: '🇻🇳', ping: 1037, saved: false, protocol: 'http', ip: '113.160.132.26', port: 8080, url: 'http://113.160.132.26:8080' },
  { country: 'Russia', city: 'Yekaterinburg', flag: '🇷🇺', ping: 1073, saved: false, protocol: 'socks4', ip: '212.220.13.98', port: 4153, url: 'socks4://212.220.13.98:4153' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 1078, saved: false, protocol: 'socks4', ip: '192.111.138.29', port: 4145, url: 'socks4://192.111.138.29:4145' },
  { country: 'Russia', city: 'Moscow', flag: '🇷🇺', ping: 1103, saved: false, protocol: 'socks5', ip: '95.165.87.233', port: 1080, url: 'socks5://95.165.87.233:1080' },
  { country: 'Australia', city: 'Sydney', flag: '🇦🇺', ping: 1104, saved: false, protocol: 'socks5', ip: '134.199.159.23', port: 1080, url: 'socks5://134.199.159.23:1080' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 1114, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 8021, url: 'socks5://206.123.156.207:8021' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 1116, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1095, url: 'socks5://164.90.237.11:1095' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 1213, saved: false, protocol: 'socks4', ip: '192.252.216.81', port: 4145, url: 'socks4://192.252.216.81:4145' },
  { country: 'Cambodia', city: 'Phnom Penh', flag: '🌐', ping: 1277, saved: false, protocol: 'socks5', ip: '202.62.55.95', port: 1080, url: 'socks5://202.62.55.95:1080' },
  { country: 'India', city: 'Dehradun', flag: '🇮🇳', ping: 1282, saved: false, protocol: 'socks4', ip: '103.37.82.134', port: 39873, url: 'socks4://103.37.82.134:39873' },
  { country: 'Pakistan', city: 'Model Town', flag: '🇵🇰', ping: 1292, saved: false, protocol: 'http', ip: '103.157.200.126', port: 3128, url: 'http://103.157.200.126:3128' },
  { country: 'United States', city: 'Alexandria', flag: '🇺🇸', ping: 1319, saved: false, protocol: 'socks4', ip: '208.102.51.6', port: 58208, url: 'socks4://208.102.51.6:58208' },
  { country: 'Norway', city: 'Sandefjord', flag: '🇳🇴', ping: 1332, saved: false, protocol: 'socks5', ip: '185.125.171.171', port: 1080, url: 'socks5://185.125.171.171:1080' },
  { country: 'Bangladesh', city: 'Chittagong', flag: '🇧🇩', ping: 1377, saved: false, protocol: 'http', ip: '103.161.69.17', port: 2698, url: 'http://103.161.69.17:2698' },
  { country: 'Ukraine', city: 'Odesa', flag: '🇺🇦', ping: 1428, saved: false, protocol: 'socks4', ip: '195.138.65.34', port: 5678, url: 'socks4://195.138.65.34:5678' },
  { country: 'India', city: 'Bengaluru', flag: '🇮🇳', ping: 1474, saved: false, protocol: 'socks5', ip: '139.59.24.173', port: 1080, url: 'socks5://139.59.24.173:1080' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 1588, saved: false, protocol: 'socks5', ip: '138.124.114.113', port: 1080, url: 'socks5://138.124.114.113:1080' },
  { country: 'China', city: 'Guangzhou', flag: '🇨🇳', ping: 1602, saved: false, protocol: 'socks5', ip: '203.25.208.163', port: 1100, url: 'socks5://203.25.208.163:1100' },
  { country: 'Russia', city: 'Izhevsk', flag: '🇷🇺', ping: 1620, saved: false, protocol: 'socks4', ip: '217.14.192.183', port: 1080, url: 'socks4://217.14.192.183:1080' },
  { country: 'Hong Kong', city: 'Hong Kong', flag: '🇭🇰', ping: 1652, saved: false, protocol: 'http', ip: '47.238.203.170', port: 50000, url: 'http://47.238.203.170:50000' },
  { country: 'Kazakhstan', city: 'Almaty', flag: '🌐', ping: 1697, saved: false, protocol: 'socks5', ip: '198.13.190.60', port: 1080, url: 'socks5://198.13.190.60:1080' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 1725, saved: false, protocol: 'socks4', ip: '184.185.2.12', port: 4145, url: 'socks4://184.185.2.12:4145' },
  { country: 'Russia', city: 'Moscow', flag: '🇷🇺', ping: 1740, saved: false, protocol: 'socks5', ip: '195.19.49.128', port: 1080, url: 'socks5://195.19.49.128:1080' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 1741, saved: false, protocol: 'socks4', ip: '174.64.199.82', port: 4145, url: 'socks4://174.64.199.82:4145' },
  { country: 'United States', city: 'Chula Vista', flag: '🇺🇸', ping: 1757, saved: false, protocol: 'socks4', ip: '72.207.33.64', port: 4145, url: 'socks4://72.207.33.64:4145' },
  { country: 'Croatia', city: 'Zagreb', flag: '🇭🇷', ping: 1777, saved: false, protocol: 'socks4', ip: '85.114.45.210', port: 4153, url: 'socks4://85.114.45.210:4153' },
  { country: 'United Kingdom', city: 'London', flag: '🇬🇧', ping: 1779, saved: false, protocol: 'socks5', ip: '212.58.132.5', port: 1080, url: 'socks5://212.58.132.5:1080' },
  { country: 'India', city: 'Bengaluru', flag: '🇮🇳', ping: 1801, saved: false, protocol: 'socks4', ip: '64.227.131.240', port: 1080, url: 'socks4://64.227.131.240:1080' },
  { country: 'Brazil', city: 'Rio de Janeiro', flag: '🇧🇷', ping: 1808, saved: false, protocol: 'socks4', ip: '131.161.68.41', port: 35944, url: 'socks4://131.161.68.41:35944' },
  { country: 'United States', city: 'Macon', flag: '🇺🇸', ping: 1813, saved: false, protocol: 'socks4', ip: '184.182.240.12', port: 4145, url: 'socks4://184.182.240.12:4145' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 1826, saved: false, protocol: 'socks4', ip: '216.68.128.121', port: 4145, url: 'socks4://216.68.128.121:4145' },
  { country: 'Ukraine', city: 'Kaharlyk', flag: '🇺🇦', ping: 1843, saved: false, protocol: 'socks4', ip: '31.43.33.56', port: 4153, url: 'socks4://31.43.33.56:4153' },
  { country: 'Russia', city: 'St Petersburg', flag: '🇷🇺', ping: 1873, saved: false, protocol: 'socks4', ip: '94.247.241.70', port: 51006, url: 'socks4://94.247.241.70:51006' },
  { country: 'Brazil', city: 'Fernandópolis', flag: '🇧🇷', ping: 1873, saved: false, protocol: 'socks4', ip: '186.225.149.81', port: 4145, url: 'socks4://186.225.149.81:4145' },
  { country: 'Poland', city: 'Rzeszów', flag: '🇵🇱', ping: 1885, saved: false, protocol: 'socks4', ip: '193.243.154.146', port: 4145, url: 'socks4://193.243.154.146:4145' },
  { country: 'South Korea', city: 'Suwon', flag: '🇰🇷', ping: 1995, saved: false, protocol: 'socks5', ip: '121.169.46.116', port: 1090, url: 'socks5://121.169.46.116:1090' },
  { country: 'Indonesia', city: 'Caringin', flag: '🇮🇩', ping: 2029, saved: false, protocol: 'http', ip: '150.107.140.238', port: 3128, url: 'http://150.107.140.238:3128' },
  { country: 'Albania', city: 'Elbasan', flag: '🌐', ping: 2078, saved: false, protocol: 'socks4', ip: '37.26.86.206', port: 4145, url: 'socks4://37.26.86.206:4145' },
  { country: 'Cambodia', city: 'Phnom Penh', flag: '🌐', ping: 2081, saved: false, protocol: 'socks4', ip: '36.37.244.41', port: 5678, url: 'socks4://36.37.244.41:5678' },
  { country: 'Indonesia', city: 'Garut', flag: '🇮🇩', ping: 2100, saved: false, protocol: 'socks4', ip: '103.248.9.93', port: 80, url: 'socks4://103.248.9.93:80' },
  { country: 'Hong Kong', city: 'Hong Kong', flag: '🇭🇰', ping: 2145, saved: false, protocol: 'socks5', ip: '47.79.79.35', port: 10808, url: 'socks5://47.79.79.35:10808' },
  { country: 'Thailand', city: 'Chiang Mai', flag: '🇹🇭', ping: 2162, saved: false, protocol: 'socks4', ip: '125.25.82.207', port: 5678, url: 'socks4://125.25.82.207:5678' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 2178, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 4637, url: 'socks5://206.123.156.207:4637' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 2283, saved: false, protocol: 'socks5', ip: '206.123.156.231', port: 20775, url: 'socks5://206.123.156.231:20775' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 2376, saved: false, protocol: 'socks5', ip: '164.90.237.11', port: 1092, url: 'socks5://164.90.237.11:1092' },
  { country: 'China', city: 'Guangzhou', flag: '🇨🇳', ping: 2381, saved: false, protocol: 'socks5', ip: '203.25.208.163', port: 1145, url: 'socks5://203.25.208.163:1145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 2413, saved: false, protocol: 'socks5', ip: '174.64.199.79', port: 4145, url: 'socks5://174.64.199.79:4145' },
  { country: 'Bangladesh', city: 'Dhaka', flag: '🇧🇩', ping: 2418, saved: false, protocol: 'http', ip: '103.72.137.209', port: 8080, url: 'http://103.72.137.209:8080' },
  { country: 'Brazil', city: 'Palmas', flag: '🇧🇷', ping: 2582, saved: false, protocol: 'http', ip: '167.250.56.81', port: 8080, url: 'http://167.250.56.81:8080' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 2609, saved: false, protocol: 'socks4', ip: '69.61.200.104', port: 36181, url: 'socks4://69.61.200.104:36181' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 2626, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 10904, url: 'socks5://206.123.156.207:10904' },
  { country: 'United States', city: 'Tempe', flag: '🇺🇸', ping: 2671, saved: false, protocol: 'socks4', ip: '98.191.0.37', port: 4145, url: 'socks4://98.191.0.37:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 2672, saved: false, protocol: 'socks4', ip: '72.207.109.5', port: 4145, url: 'socks4://72.207.109.5:4145' },
  { country: 'Finland', city: 'Helsinki', flag: '🇫🇮', ping: 2694, saved: false, protocol: 'socks5', ip: '185.230.190.195', port: 1080, url: 'socks5://185.230.190.195:1080' },
  { country: 'India', city: 'Udaipur', flag: '🇮🇳', ping: 2707, saved: false, protocol: 'socks4', ip: '123.253.124.28', port: 5678, url: 'socks4://123.253.124.28:5678' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 2752, saved: false, protocol: 'socks4', ip: '98.170.57.241', port: 4145, url: 'socks4://98.170.57.241:4145' },
  { country: 'United States', city: 'Henderson', flag: '🇺🇸', ping: 2897, saved: false, protocol: 'socks4', ip: '98.181.137.83', port: 4145, url: 'socks4://98.181.137.83:4145' },
  { country: 'Indonesia', city: 'Tangerang', flag: '🇮🇩', ping: 2910, saved: false, protocol: 'http', ip: '103.136.170.55', port: 8080, url: 'http://103.136.170.55:8080' },
  { country: 'United States', city: 'East Irvine', flag: '🇺🇸', ping: 2963, saved: false, protocol: 'socks4', ip: '72.214.108.67', port: 4145, url: 'socks4://72.214.108.67:4145' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 2974, saved: false, protocol: 'socks4', ip: '66.42.224.229', port: 41679, url: 'socks4://66.42.224.229:41679' },
  { country: 'India', city: 'Tirupur', flag: '🇮🇳', ping: 3072, saved: false, protocol: 'http', ip: '103.125.155.230', port: 8080, url: 'http://103.125.155.230:8080' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3127, saved: false, protocol: 'socks5', ip: '206.123.156.231', port: 16244, url: 'socks5://206.123.156.231:16244' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 3201, saved: false, protocol: 'socks5', ip: '174.77.111.198', port: 49547, url: 'socks5://174.77.111.198:49547' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 3208, saved: false, protocol: 'socks5', ip: '184.181.217.220', port: 4145, url: 'socks5://184.181.217.220:4145' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 3268, saved: false, protocol: 'socks5', ip: '66.42.224.229', port: 41679, url: 'socks5://66.42.224.229:41679' },
  { country: 'Indonesia', city: 'Rengasdengklok', flag: '🇮🇩', ping: 3294, saved: false, protocol: 'http', ip: '103.177.8.119', port: 8080, url: 'http://103.177.8.119:8080' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 3313, saved: false, protocol: 'socks5', ip: '98.170.57.231', port: 4145, url: 'socks5://98.170.57.231:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3363, saved: false, protocol: 'socks5', ip: '206.123.156.227', port: 7194, url: 'socks5://206.123.156.227:7194' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 3377, saved: false, protocol: 'socks5', ip: '98.178.72.21', port: 10919, url: 'socks5://98.178.72.21:10919' },
  { country: 'United States', city: 'Alexandria', flag: '🇺🇸', ping: 3381, saved: false, protocol: 'socks5', ip: '208.102.51.6', port: 58208, url: 'socks5://208.102.51.6:58208' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 3419, saved: false, protocol: 'socks5', ip: '98.188.47.150', port: 4145, url: 'socks5://98.188.47.150:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 3496, saved: false, protocol: 'socks5', ip: '184.181.217.213', port: 4145, url: 'socks5://184.181.217.213:4145' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 3526, saved: false, protocol: 'socks4', ip: '72.49.49.11', port: 31034, url: 'socks4://72.49.49.11:31034' },
  { country: 'United States', city: 'Cincinnati', flag: '🇺🇸', ping: 3563, saved: false, protocol: 'socks5', ip: '69.61.200.104', port: 36181, url: 'socks5://69.61.200.104:36181' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3567, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 30231, url: 'socks5://206.123.156.207:30231' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3569, saved: false, protocol: 'socks5', ip: '206.123.156.192', port: 6141, url: 'socks5://206.123.156.192:6141' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 3643, saved: false, protocol: 'socks4', ip: '184.178.172.14', port: 4145, url: 'socks4://184.178.172.14:4145' },
  { country: 'Indonesia', city: 'Melati', flag: '🇮🇩', ping: 3643, saved: false, protocol: 'http', ip: '103.190.170.111', port: 8080, url: 'http://103.190.170.111:8080' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 3664, saved: false, protocol: 'socks4', ip: '98.190.239.3', port: 4145, url: 'socks4://98.190.239.3:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3733, saved: false, protocol: 'socks5', ip: '206.123.156.227', port: 22447, url: 'socks5://206.123.156.227:22447' },
  { country: 'Bolivia', city: 'La Paz', flag: '🌐', ping: 3759, saved: false, protocol: 'socks4', ip: '190.104.26.227', port: 33638, url: 'socks4://190.104.26.227:33638' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 3823, saved: false, protocol: 'socks4', ip: '72.195.114.184', port: 4145, url: 'socks4://72.195.114.184:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 3832, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 4177, url: 'socks5://206.123.156.207:4177' },
  { country: 'United States', city: 'Norfolk', flag: '🇺🇸', ping: 3862, saved: false, protocol: 'socks4', ip: '98.175.31.195', port: 4145, url: 'socks4://98.175.31.195:4145' },
  { country: 'Ukraine', city: 'Kharkiv', flag: '🇺🇦', ping: 3879, saved: false, protocol: 'socks4', ip: '109.86.228.165', port: 5678, url: 'socks4://109.86.228.165:5678' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 3910, saved: false, protocol: 'socks5', ip: '184.181.217.201', port: 4145, url: 'socks5://184.181.217.201:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 3916, saved: false, protocol: 'socks4', ip: '98.188.47.132', port: 4145, url: 'socks4://98.188.47.132:4145' },
  { country: 'Germany', city: 'Frankfurt am Main', flag: '🇩🇪', ping: 4006, saved: false, protocol: 'socks5', ip: '134.122.64.174', port: 1080, url: 'socks5://134.122.64.174:1080' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 4015, saved: false, protocol: 'socks5', ip: '174.77.111.197', port: 4145, url: 'socks5://174.77.111.197:4145' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 4023, saved: false, protocol: 'socks4', ip: '184.178.172.23', port: 4145, url: 'socks4://184.178.172.23:4145' },
  { country: 'Indonesia', city: 'Jakarta Pusat', flag: '🇮🇩', ping: 4035, saved: false, protocol: 'socks4', ip: '123.231.230.58', port: 31196, url: 'socks4://123.231.230.58:31196' },
  { country: 'Indonesia', city: 'Jakarta', flag: '🇮🇩', ping: 4043, saved: false, protocol: 'socks4', ip: '112.78.138.164', port: 5678, url: 'socks4://112.78.138.164:5678' },
  { country: 'Vietnam', city: 'Ho Chi Minh City', flag: '🇻🇳', ping: 4053, saved: false, protocol: 'socks4', ip: '113.161.145.229', port: 4153, url: 'socks4://113.161.145.229:4153' },
  { country: 'Indonesia', city: 'Curug', flag: '🇮🇩', ping: 4056, saved: false, protocol: 'socks4', ip: '103.87.81.86', port: 5678, url: 'socks4://103.87.81.86:5678' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 4058, saved: false, protocol: 'socks5', ip: '70.166.167.38', port: 57728, url: 'socks5://70.166.167.38:57728' },
  { country: 'Indonesia', city: 'East Jakarta', flag: '🇮🇩', ping: 4058, saved: false, protocol: 'socks4', ip: '114.4.200.222', port: 5678, url: 'socks4://114.4.200.222:5678' },
  { country: 'United States', city: 'Henderson', flag: '🇺🇸', ping: 4065, saved: false, protocol: 'socks5', ip: '98.181.137.80', port: 4145, url: 'socks5://98.181.137.80:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 4085, saved: false, protocol: 'socks4', ip: '174.64.199.79', port: 4145, url: 'socks4://174.64.199.79:4145' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 4215, saved: false, protocol: 'socks4', ip: '72.195.34.58', port: 4145, url: 'socks4://72.195.34.58:4145' },
  { country: 'Indonesia', city: 'Rengasdengklok', flag: '🇮🇩', ping: 4225, saved: false, protocol: 'socks4', ip: '103.244.107.106', port: 1080, url: 'socks4://103.244.107.106:1080' },
  { country: 'Russia', city: 'Ivanteyevka', flag: '🇷🇺', ping: 4234, saved: false, protocol: 'socks4', ip: '91.247.250.215', port: 4145, url: 'socks4://91.247.250.215:4145' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 4257, saved: false, protocol: 'socks4', ip: '72.195.34.42', port: 4145, url: 'socks4://72.195.34.42:4145' },
  { country: 'United States', city: 'Spring Valley', flag: '🇺🇸', ping: 4272, saved: false, protocol: 'socks4', ip: '24.249.199.4', port: 4145, url: 'socks4://24.249.199.4:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4275, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 4157, url: 'socks5://206.123.156.207:4157' },
  { country: 'United States', city: 'Chicago', flag: '🇺🇸', ping: 4469, saved: false, protocol: 'socks4', ip: '72.223.188.92', port: 4145, url: 'socks4://72.223.188.92:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4474, saved: false, protocol: 'socks5', ip: '206.123.156.231', port: 13161, url: 'socks5://206.123.156.231:13161' },
  { country: 'Indonesia', city: 'Tangerang', flag: '🇮🇩', ping: 4515, saved: false, protocol: 'http', ip: '103.177.177.250', port: 8080, url: 'http://103.177.177.250:8080' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 4556, saved: false, protocol: 'socks5', ip: '184.178.172.23', port: 4145, url: 'socks5://184.178.172.23:4145' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 4646, saved: false, protocol: 'socks5', ip: '72.195.34.41', port: 4145, url: 'socks5://72.195.34.41:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4705, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 8682, url: 'socks5://206.123.156.207:8682' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4751, saved: false, protocol: 'socks5', ip: '206.123.156.215', port: 4038, url: 'socks5://206.123.156.215:4038' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 4753, saved: false, protocol: 'socks4', ip: '72.195.114.169', port: 4145, url: 'socks4://72.195.114.169:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4770, saved: false, protocol: 'socks5', ip: '206.123.156.227', port: 7396, url: 'socks5://206.123.156.227:7396' },
  { country: 'United States', city: 'Chicago', flag: '🇺🇸', ping: 4930, saved: false, protocol: 'socks4', ip: '72.223.188.67', port: 4145, url: 'socks4://72.223.188.67:4145' },
  { country: 'Indonesia', city: 'Taman', flag: '🇮🇩', ping: 4958, saved: false, protocol: 'http', ip: '103.165.157.206', port: 8088, url: 'http://103.165.157.206:8088' },
  { country: 'United States', city: 'San Diego', flag: '🇺🇸', ping: 4960, saved: false, protocol: 'socks5', ip: '68.1.210.189', port: 4145, url: 'socks5://68.1.210.189:4145' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 4982, saved: false, protocol: 'socks5', ip: '206.123.156.211', port: 5489, url: 'socks5://206.123.156.211:5489' },
  { country: 'Uzbekistan', city: 'Bukhara', flag: '🌐', ping: 5142, saved: false, protocol: 'http', ip: '89.104.102.209', port: 58080, url: 'http://89.104.102.209:58080' },
  { country: 'Indonesia', city: 'Bogor', flag: '🇮🇩', ping: 5189, saved: false, protocol: 'http', ip: '202.137.8.148', port: 8080, url: 'http://202.137.8.148:8080' },
  { country: 'Bangladesh', city: 'Rāmganj', flag: '🇧🇩', ping: 5257, saved: false, protocol: 'http', ip: '103.92.218.121', port: 9514, url: 'http://103.92.218.121:9514' },
  { country: 'United States', city: 'Las Vegas', flag: '🇺🇸', ping: 5279, saved: false, protocol: 'socks4', ip: '98.182.147.97', port: 4145, url: 'socks4://98.182.147.97:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 5304, saved: false, protocol: 'socks5', ip: '184.181.217.206', port: 4145, url: 'socks5://184.181.217.206:4145' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 5333, saved: false, protocol: 'socks5', ip: '184.178.172.28', port: 15294, url: 'socks5://184.178.172.28:15294' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 5443, saved: false, protocol: 'socks4', ip: '184.181.217.213', port: 4145, url: 'socks4://184.181.217.213:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 5490, saved: false, protocol: 'socks4', ip: '184.181.217.194', port: 4145, url: 'socks4://184.181.217.194:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 5512, saved: false, protocol: 'socks5', ip: '98.188.47.132', port: 4145, url: 'socks5://98.188.47.132:4145' },
  { country: 'United States', city: 'Las Vegas', flag: '🇺🇸', ping: 5728, saved: false, protocol: 'socks4', ip: '72.205.0.67', port: 4145, url: 'socks4://72.205.0.67:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 5740, saved: false, protocol: 'socks4', ip: '184.181.217.201', port: 4145, url: 'socks4://184.181.217.201:4145' },
  { country: 'China', city: 'Shenyang', flag: '🇨🇳', ping: 5834, saved: false, protocol: 'socks5', ip: '59.46.216.131', port: 30001, url: 'socks5://59.46.216.131:30001' },
  { country: 'United States', city: 'Henderson', flag: '🇺🇸', ping: 5865, saved: false, protocol: 'socks4', ip: '98.181.137.80', port: 4145, url: 'socks4://98.181.137.80:4145' },
  { country: 'Indonesia', city: 'Depok', flag: '🇮🇩', ping: 5877, saved: false, protocol: 'http', ip: '103.121.22.192', port: 8080, url: 'http://103.121.22.192:8080' },
  { country: 'United States', city: 'San Diego', flag: '🇺🇸', ping: 5890, saved: false, protocol: 'socks4', ip: '68.1.210.189', port: 4145, url: 'socks4://68.1.210.189:4145' },
  { country: 'United States', city: 'Los Angeles', flag: '🇺🇸', ping: 5922, saved: false, protocol: 'socks5', ip: '198.8.84.3', port: 4145, url: 'socks5://198.8.84.3:4145' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 5937, saved: false, protocol: 'socks4', ip: '184.178.172.25', port: 15291, url: 'socks4://184.178.172.25:15291' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 6092, saved: false, protocol: 'socks5', ip: '206.123.156.217', port: 6538, url: 'socks5://206.123.156.217:6538' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 6221, saved: false, protocol: 'socks5', ip: '206.123.156.207', port: 9832, url: 'socks5://206.123.156.207:9832' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 6250, saved: false, protocol: 'socks5', ip: '184.178.172.25', port: 15291, url: 'socks5://184.178.172.25:15291' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 6314, saved: false, protocol: 'socks5', ip: '206.123.156.192', port: 5185, url: 'socks5://206.123.156.192:5185' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 6380, saved: false, protocol: 'socks4', ip: '184.181.178.33', port: 4145, url: 'socks4://184.181.178.33:4145' },
  { country: 'United States', city: 'Tulsa', flag: '🇺🇸', ping: 6687, saved: false, protocol: 'socks4', ip: '98.178.72.30', port: 4145, url: 'socks4://98.178.72.30:4145' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 6797, saved: false, protocol: 'socks4', ip: '184.178.172.26', port: 4145, url: 'socks4://184.178.172.26:4145' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 6817, saved: false, protocol: 'socks4', ip: '184.178.172.13', port: 15311, url: 'socks4://184.178.172.13:15311' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 6818, saved: false, protocol: 'socks4', ip: '184.178.172.11', port: 4145, url: 'socks4://184.178.172.11:4145' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 7073, saved: false, protocol: 'socks4', ip: '72.195.34.35', port: 27360, url: 'socks4://72.195.34.35:27360' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 7169, saved: false, protocol: 'socks5', ip: '72.195.34.35', port: 27360, url: 'socks5://72.195.34.35:27360' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 7281, saved: false, protocol: 'socks5', ip: '72.195.34.42', port: 4145, url: 'socks5://72.195.34.42:4145' },
  { country: 'Brazil', city: 'São Paulo', flag: '🇧🇷', ping: 7476, saved: false, protocol: 'socks5', ip: '154.90.61.222', port: 20002, url: 'socks5://154.90.61.222:20002' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 7566, saved: false, protocol: 'socks4', ip: '72.195.34.41', port: 4145, url: 'socks4://72.195.34.41:4145' },
  { country: 'United States', city: 'Atlanta', flag: '🇺🇸', ping: 7573, saved: false, protocol: 'socks5', ip: '98.170.57.249', port: 4145, url: 'socks5://98.170.57.249:4145' },
  { country: 'United States', city: 'Spring Valley', flag: '🇺🇸', ping: 7845, saved: false, protocol: 'socks5', ip: '24.249.199.4', port: 4145, url: 'socks5://24.249.199.4:4145' },
  { country: 'Ecuador', city: 'Guayaquil', flag: '🇪🇨', ping: 7850, saved: false, protocol: 'socks4', ip: '186.47.213.158', port: 5678, url: 'socks4://186.47.213.158:5678' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 7865, saved: false, protocol: 'socks5', ip: '206.123.156.188', port: 11015, url: 'socks5://206.123.156.188:11015' },
  { country: 'Indonesia', city: 'Jakarta', flag: '🇮🇩', ping: 7885, saved: false, protocol: 'http', ip: '116.12.45.126', port: 9595, url: 'http://116.12.45.126:9595' },
  { country: 'Netherlands', city: 'Dronten', flag: '🇳🇱', ping: 7921, saved: false, protocol: 'socks5', ip: '5.255.117.250', port: 1080, url: 'socks5://5.255.117.250:1080' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 7955, saved: false, protocol: 'socks4', ip: '184.181.217.206', port: 4145, url: 'socks4://184.181.217.206:4145' },
  { country: 'United States', city: 'Pensacola', flag: '🇺🇸', ping: 8124, saved: false, protocol: 'socks5', ip: '184.181.217.194', port: 4145, url: 'socks5://184.181.217.194:4145' },
  { country: 'Russia', city: 'Tambov', flag: '🇷🇺', ping: 8203, saved: false, protocol: 'socks4', ip: '37.235.176.166', port: 1080, url: 'socks4://37.235.176.166:1080' },
  { country: 'Serbia', city: 'Belgrade', flag: '🇷🇸', ping: 8218, saved: false, protocol: 'socks4', ip: '178.220.148.82', port: 10801, url: 'socks4://178.220.148.82:10801' },
  { country: 'United States', city: 'Roanoke', flag: '🇺🇸', ping: 8436, saved: false, protocol: 'socks4', ip: '184.178.172.28', port: 15294, url: 'socks4://184.178.172.28:15294' },
  { country: 'United States', city: 'Irvine', flag: '🇺🇸', ping: 8683, saved: false, protocol: 'socks5', ip: '72.195.114.169', port: 4145, url: 'socks5://72.195.114.169:4145' },
  { country: 'India', city: 'Vijayawada', flag: '🇮🇳', ping: 8731, saved: false, protocol: 'socks4', ip: '45.249.79.190', port: 3629, url: 'socks4://45.249.79.190:3629' },
  { country: 'United Kingdom', city: 'City of London', flag: '🇬🇧', ping: 8904, saved: false, protocol: 'socks5', ip: '206.123.156.192', port: 7305, url: 'socks5://206.123.156.192:7305' }
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
  if (ping < 500) return 'fast';
  if (ping < 1200) return 'medium';
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
    const proto = server.protocol ? server.protocol.toUpperCase() : '';
    const protoClass = server.protocol === 'tor' ? ' tor' : '';
    return `
      <div class="server-item ${isActive ? 'active' : ''}" data-index="${servers.indexOf(server)}">
        <span class="server-flag">${server.flag}</span>
        <div class="server-info">
          <span class="server-name">${server.country}${proto ? ' <span class="proto-badge' + protoClass + '">' + proto + '</span>' : ''}</span>
          <span class="server-city">${server.city}${server.ip ? ' · ' + server.ip : ''}</span>
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
    document.body.classList.add('vpn-connected');

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
  document.body.classList.remove('vpn-connected');

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

// ==================== THEME SWITCHER ====================
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const theme = btn.dataset.theme;
    document.body.classList.remove('theme-dark', 'theme-midnight');
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else if (theme === 'midnight') {
      document.body.classList.add('theme-midnight');
    }
    try { localStorage.setItem('vesvg-theme', theme); } catch(e) {}
  });
});

// Restore saved theme
try {
  const saved = localStorage.getItem('vesvg-theme');
  if (saved && saved !== 'light') {
    document.body.classList.add('theme-' + saved);
    document.querySelectorAll('.theme-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === saved);
    });
  }
} catch(e) {}

// ==================== INIT ====================
renderServers();
updateCurrentServer();
