// ==================== SERVER DATA (317 real tested proxies) ====================
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
    return `
      <div class="server-item ${isActive ? 'active' : ''}" data-index="${servers.indexOf(server)}">
        <span class="server-flag">${server.flag}</span>
        <div class="server-info">
          <span class="server-name">${server.country}${proto ? ' <span class="proto-badge">' + proto + '</span>' : ''}</span>
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
