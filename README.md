# Kurdish POS — Mobile (Expo)

Standalone Android/iOS app with local SQLite — feature parity with desktop POS.

## Stack

- Expo SDK 57 + expo-sqlite
- React Navigation (drawer)
- NativeWind v4
- MMKV (localStorage polyfill)
- Ported hooks + business logic from desktop

## Run

```bash
cd pos-rekar-mobile
npm install
npx expo start
```

## Build (EAS)

```bash
npm install -g eas-cli
eas build --platform android --profile preview
eas build --platform ios --profile production
```

## Phase 2 — LAN Sync

Mobile client stub in `src/services/lan-sync.ts`. Connect to desktop WebSocket `:3001` when desktop `sendAllDataToClient` is implemented.

## RTL / i18n

4 languages: Sorani, Badini, Arabic, English. RTL forced on boot.

## Feature checklist

- [x] SQLite schema (25 tables)
- [x] License activation
- [x] Login + permissions
- [x] POS (cart, cash/debt sale, print PDF)
- [x] Products, customers, purchases, reports
- [x] Backup export/import (share sheet)
- [x] 34 navigation screens
- [ ] Full UI parity with desktop resizable layouts (mobile-adapted)
- [ ] Bluetooth thermal printer
- [ ] LAN sync (phase 2)
