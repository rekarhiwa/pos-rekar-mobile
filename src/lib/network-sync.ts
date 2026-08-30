/**
 * Phase 2 LAN sync — mobile client stub (offline-first standalone)
 */
export interface NetworkConfig {
  mode: 'server' | 'client' | 'off';
  serverIP: string;
  serverPort: number;
  autoSync: boolean;
  syncInterval: number;
}

export interface SyncMessage {
  type: string;
  table?: string;
  data?: unknown;
  timestamp: number;
  id?: number;
}

class NetworkSyncStub {
  private config: NetworkConfig = {
    mode: 'off',
    serverIP: '',
    serverPort: 3001,
    autoSync: false,
    syncInterval: 5000,
  };

  getConfig(): NetworkConfig {
    return { ...this.config };
  }

  setConfig(_config: Partial<NetworkConfig>): void {
    // Phase 2: persist and reconnect
  }

  async connect(_ip?: string, _port?: number): Promise<boolean> {
    return false;
  }

  disconnect(): void {}

  isConnected(): boolean {
    return false;
  }

  async sendChange(_table: string, _action: string, _data: unknown): Promise<void> {}

  async requestFullSync(): Promise<void> {}

  on(_event: string, _cb: (...args: unknown[]) => void): void {}

  off(_event: string, _cb: (...args: unknown[]) => void): void {}
}

export const networkSync = new NetworkSyncStub();
