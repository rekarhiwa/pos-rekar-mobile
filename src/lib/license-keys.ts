// 🔒 Encoded License Keys
// Payload lives in license-keys-data.js (shared with activation-helper)

import { decode as base64Decode } from 'base-64';
import { ENCODED_KEYS, QUICK_TRIAL_KEY as SHARED_QUICK_TRIAL_KEY } from './license-keys-data.mjs';

/** یەکەم کلیلی trial بۆ چالاککردنی خێرا */
export const QUICK_TRIAL_KEY = SHARED_QUICK_TRIAL_KEY;

function decodeBase64(value: string): string {
  return base64Decode(value);
}

function decodeLicenseKeys(): Record<string, 'trial' | '1week' | '1month' | '3months' | '6months' | '1year' | 'lifetime'> {
  try {
    const decoded = decodeBase64(ENCODED_KEYS);
    const keys: Record<string, any> = {};
    const entries = decoded.split('|');

    for (let i = 0; i < entries.length; i += 2) {
      if (entries[i] && entries[i + 1]) {
        keys[entries[i]] = entries[i + 1];
      }
    }

    return keys;
  } catch (error) {
    console.error('Failed to decode license keys');
    return {};
  }
}

/** پاککردنەوەی نووسینی کلیل (dash تایبەت، ژمارەی عەرەبی، بۆشایی نهێنی) */
export function normalizeLicenseKey(raw: string): string {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';

  let value = (raw || '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[–—−ـ]/g, '-')
    .trim();

  value = value.replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)));
  value = value.replace(/[٠-٩]/g, (d) => String(arabicDigits.indexOf(d)));

  return value.toUpperCase();
}

export const VALID_LICENSE_KEYS = decodeLicenseKeys();
