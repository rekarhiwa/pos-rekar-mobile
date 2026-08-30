/**
 * MMKV-backed localStorage polyfill for React Native
 */
import { createMMKV } from 'react-native-mmkv';

const mmkv = createMMKV({ id: 'pos-rekar-storage' });

export const storage = {
  getItem(key: string): string | null {
    const v = mmkv.getString(key);
    return v === undefined ? null : v;
  },
  setItem(key: string, value: string): void {
    mmkv.set(key, value);
  },
  removeItem(key: string): void {
    mmkv.remove(key);
  },
  clear(): void {
    mmkv.clearAll();
  },
};

/** Install global localStorage for ported desktop code */
export function installStoragePolyfill(): void {
  if (typeof globalThis.localStorage === 'undefined') {
    (globalThis as any).localStorage = storage;
  }
}
