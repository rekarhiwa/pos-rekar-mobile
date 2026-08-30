/**
 * Phase 2 — LAN sync client (connect to desktop WebSocket ws://PC:3001)
 * Desktop must implement sendAllDataToClient with full data payload.
 */
import { networkSync } from '../lib/network-sync';

export async function connectToDesktopPC(ip: string, port = 3001): Promise<boolean> {
  return networkSync.connect(ip, port);
}

export function disconnectFromDesktop(): void {
  networkSync.disconnect();
}

export function isSyncConnected(): boolean {
  return networkSync.isConnected();
}

export async function requestFullSyncFromDesktop(): Promise<void> {
  return networkSync.requestFullSync();
}
