/**
 * Backup Utilities for Jihan Cashier System
 * هەڵگرتن و گەڕاندنەوەی داتا
 */

import { db, flushDatabaseToDisk } from '../db/db';

const LOCAL_STORAGE_BACKUP_KEYS = [
  'pos_categories',
  'pos_units',
  'pos_unit_combinations',
  'pos_offers',
  'inventory_adjustments',
  'pos_invoice_number',
  'app_language',
  'app_darkMode',
  'app_fontSize',
  'viewReportType',
  'dashboard_items_order'
] as const;

function collectLocalStorageData(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const data: Record<string, string> = {};
  for (const key of LOCAL_STORAGE_BACKUP_KEYS) {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = value;
  }
  return data;
}

function restoreLocalStorageData(localStorageData?: Record<string, string>): void {
  if (typeof window === 'undefined') return;
  if (!localStorageData || typeof localStorageData !== 'object') return;
  for (const key of LOCAL_STORAGE_BACKUP_KEYS) {
    localStorage.removeItem(key);
  }
  for (const [key, value] of Object.entries(localStorageData)) {
    if (LOCAL_STORAGE_BACKUP_KEYS.includes(key as typeof LOCAL_STORAGE_BACKUP_KEYS[number])) {
      localStorage.setItem(key, value);
    }
  }
}

export interface BackupData {
  timestamp: string;
  version: string;
  localStorage?: Record<string, string>;
  database: {
    products: any[];
    customers: any[];
    sales: any[];
    suppliers: any[];
    purchases: any[];
    expenses: any[];
    users: any[];
    cashTransactions: any[];
    settings: any[];
    // License & internal tracking tables are intentionally NOT restored
    // لایسەنس و تابلە ناوخۆیەکان تەنها بۆ زانیارییە، بۆ ئەوەی بەکارهێنەران نتوانن لایسەنس بگوازرەنەوە بەهۆی هەڵگرتن
    license?: any[];
    debts?: any[];
    payments?: any[];
    returns?: any[];
    usedLicenseKeys?: any[];
    warrantyRecords?: any[];
    activityLogs?: any[];
    installments?: any[];
    installmentPayments?: any[];
    employeeSalaries?: any[];
    salaryPayments?: any[];
    shopRents?: any[];
    cashRegisters?: any[];
    cashRegisterTransactions?: any[];
    crashedItems?: any[];
    orders?: any[];
  };
}

/**
 * Create a complete backup of the database
 * دروستکردنی هەڵگرتنێکی تەواو
 */
export async function createBackup(): Promise<BackupData> {
  const backupData: BackupData = {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    localStorage: collectLocalStorageData(),
    database: {
      products: await db.products.toArray(),
      customers: await db.customers.toArray(),
      sales: await db.sales.toArray(),
      suppliers: await db.suppliers.toArray(),
      purchases: await db.purchases.toArray(),
      expenses: await db.expenses.toArray(),
      users: await db.users.toArray(),
      cashTransactions: await db.cashTransactions.toArray(),
      settings: await db.settings.toArray(),
      // License & internal tables are exported only for diagnostics
      license: await db.license.toArray(),
      debts: await (db as any).debts?.toArray?.() ?? [],
      payments: await (db as any).payments?.toArray?.() ?? [],
      returns: await (db as any).returns?.toArray?.() ?? [],
      usedLicenseKeys: await (db as any).usedLicenseKeys?.toArray?.() ?? [],
      warrantyRecords: await (db as any).warrantyRecords?.toArray?.() ?? [],
      activityLogs: await (db as any).activityLogs?.toArray?.() ?? [],
      installments: await (db as any).installments?.toArray?.() ?? [],
      installmentPayments: await (db as any).installmentPayments?.toArray?.() ?? [],
      employeeSalaries: await (db as any).employeeSalaries?.toArray?.() ?? [],
      salaryPayments: await (db as any).salaryPayments?.toArray?.() ?? [],
      shopRents: await (db as any).shopRents?.toArray?.() ?? [],
      cashRegisters: await (db as any).cashRegisters?.toArray?.() ?? [],
      cashRegisterTransactions: await (db as any).cashRegisterTransactions?.toArray?.() ?? [],
      crashedItems: await (db as any).crashedItems?.toArray?.() ?? [],
      orders: await (db as any).orders?.toArray?.() ?? [],
    }
  };

  return backupData;
}

/**
 * Restore database from backup
 * گەڕاندنەوەی داتابەیس لە هەڵگرتن
 */
export async function restoreBackup(backupData: BackupData): Promise<void> {
  // Validate backup data
  if (!backupData.database) {
    throw new Error('Invalid backup data structure');
  }

  // Clear existing data (license / usedLicenseKeys untouched)
  await Promise.all([
    db.products.clear(),
    db.customers.clear(),
    db.sales.clear(),
    db.suppliers.clear(),
    db.purchases.clear(),
    db.expenses.clear(),
    db.users.clear(),
    db.cashTransactions.clear(),
    db.settings.clear(),
    db.debts.clear(),
    db.payments.clear(),
    db.returns.clear(),
    db.warrantyRecords.clear(),
    db.activityLogs.clear(),
    db.installments.clear(),
    db.installmentPayments.clear(),
    db.employeeSalaries.clear(),
    db.salaryPayments.clear(),
    db.shopRents.clear(),
    db.cashRegisters.clear(),
    db.cashRegisterTransactions.clear(),
    db.crashedItems.clear(),
    db.orders.clear(),
  ]);

  const d = backupData.database;
  const restorePromises: Promise<void>[] = [];

  const add = (arr: any[] | undefined, bulk: (rows: any[]) => Promise<void>) => {
    if (arr && arr.length > 0) restorePromises.push(bulk(arr));
  };

  add(d.products, (rows) => db.products.bulkAdd(rows));
  add(d.customers, (rows) => db.customers.bulkAdd(rows));
  add(d.suppliers, (rows) => db.suppliers.bulkAdd(rows));
  add(d.sales, (rows) => db.sales.bulkAdd(rows));
  add(d.purchases, (rows) => db.purchases.bulkAdd(rows));
  add(d.expenses, (rows) => db.expenses.bulkAdd(rows));
  add(d.users, (rows) => db.users.bulkAdd(rows));
  add(d.cashTransactions, (rows) => db.cashTransactions.bulkAdd(rows));
  add(d.settings, (rows) => db.settings.bulkAdd(rows));
  add(d.debts, (rows) => db.debts.bulkAdd(rows));
  add(d.payments, (rows) => db.payments.bulkAdd(rows));
  add(d.returns, (rows) => db.returns.bulkAdd(rows));
  add(d.warrantyRecords, (rows) => db.warrantyRecords.bulkAdd(rows));
  add(d.activityLogs, (rows) => db.activityLogs.bulkAdd(rows));
  add(d.installments, (rows) => db.installments.bulkAdd(rows));
  add(d.installmentPayments, (rows) => db.installmentPayments.bulkAdd(rows));
  add(d.employeeSalaries, (rows) => db.employeeSalaries.bulkAdd(rows));
  add(d.salaryPayments, (rows) => db.salaryPayments.bulkAdd(rows));
  add(d.shopRents, (rows) => db.shopRents.bulkAdd(rows));
  add(d.cashRegisters, (rows) => db.cashRegisters.bulkAdd(rows));
  add(d.cashRegisterTransactions, (rows) => db.cashRegisterTransactions.bulkAdd(rows));
  add(d.crashedItems, (rows) => db.crashedItems.bulkAdd(rows));
  add(d.orders, (rows) => db.orders.bulkAdd(rows));

  await Promise.all(restorePromises);
  await flushDatabaseToDisk();
  restoreLocalStorageData(backupData.localStorage);
}

/**
 * Download backup as JSON file
 * دابەزاندنی هەڵگرتن وەک فایلی JSON
 */
export function downloadBackup(backupData: BackupData, filename?: string): void {
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');
  const defaultFilename = `KurdishPOS-Backup-${date}_${time}.json`;

  const jsonString = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || defaultFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Load backup from file
 * بارکردنی هەڵگرتن لە فایل
 */
export async function loadBackupFromFile(file: File): Promise<BackupData> {
  const fileContent = await file.text();
  const backupData = JSON.parse(fileContent);

  if (!backupData.database) {
    throw new Error('Invalid backup file format');
  }

  return backupData as BackupData;
}

/**
 * Get database statistics
 * وەرگرتنی ئامارەکانی داتابەیس
 */
export async function getDatabaseStats() {
  const [
    products,
    customers,
    sales,
    suppliers,
    purchases,
    expenses,
    users,
    cashTransactions
  ] = await Promise.all([
    db.products.count(),
    db.customers.count(),
    db.sales.count(),
    db.suppliers.count(),
    db.purchases.count(),
    db.expenses.count(),
    db.users.count(),
    db.cashTransactions.count()
  ]);

  return {
    products,
    customers,
    sales,
    suppliers,
    purchases,
    expenses,
    users,
    cashTransactions,
    total: products + customers + sales + suppliers + purchases + expenses + users + cashTransactions
  };
}

/**
 * Check if backup is needed (based on last backup time)
 * پشکنینی پێویستی بۆ هەڵگرتن
 */
export function shouldBackup(lastBackupTime: string | null, hoursSinceLastBackup: number = 24): boolean {
  if (!lastBackupTime) return true;

  const lastBackup = new Date(lastBackupTime);
  const now = new Date();
  const hoursDiff = (now.getTime() - lastBackup.getTime()) / (1000 * 60 * 60);

  return hoursDiff >= hoursSinceLastBackup;
}

/**
 * Save last backup time to localStorage
 * هەڵگرتنی کاتی دوایین هەڵگرتن
 */
export function saveLastBackupTime(): void {
  const now = new Date().toISOString();
  localStorage.setItem('last_backup_time', now);
}

/**
 * Get last backup time from localStorage
 * وەرگرتنی کاتی دوایین هەڵگرتن
 */
export function getLastBackupTime(): string | null {
  return localStorage.getItem('last_backup_time');
}

/**
 * Format backup size in human-readable format
 * فۆرمات کردنی قەبارەی هەڵگرتن
 */
export function formatBackupSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) return `${sizeInBytes} B`;
  if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Validate backup data integrity
 * دڵنیاکردنەوەی یەکپارچەیی داتا
 */
export function validateBackup(backupData: any): boolean {
  if (!backupData || typeof backupData !== 'object') return false;
  if (!backupData.timestamp || !backupData.version) return false;
  if (!backupData.database || typeof backupData.database !== 'object') return false;

  const requiredTables = [
    'products', 'customers', 'sales', 'suppliers',
    'purchases', 'expenses', 'users', 'cashTransactions',
    'settings',
  ];

  for (const table of requiredTables) {
    const v = backupData.database[table];
    if (v !== undefined && !Array.isArray(v)) return false;
  }

  return true;
}

