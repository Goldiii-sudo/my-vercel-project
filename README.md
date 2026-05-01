# VesVG - VPN Client

Beautiful VPN client application for Windows built with Electron.

## Features

- Modern, clean interface inspired by premium VPN clients
- Server list with 30+ servers worldwide, sorted by ping
- Country flags and ping indicators
- Connection status with animated character (Minecraft skin: loldog1)
- Multiple pages: Home, Exclusions, Statistics, Support, Settings
- Search and filter servers
- Bookmark favorite servers
- Kill Switch, DNS Leak Protection settings
- Protocol selection (OpenVPN, WireGuard, IKEv2)
- Beautiful animations and transitions

## Screenshots

The app features a split-panel design with:
- Left panel: Scenic background with Minecraft character, connection status
- Right panel: Searchable server list with ping indicators

## Development

```bash
# Install dependencies
npm install

# Run the app
npm start
```

## Build for Windows

```bash
# Build Windows installer (.exe)
npm run build
```

## Tech Stack

- **Electron** - Desktop application framework
- **HTML/CSS/JS** - UI layer
- **electron-builder** - Packaging and distribution

## Logo

The logo features the Minecraft player skin of "loldog1", rendered using mc-heads.net API.

## License

MIT
