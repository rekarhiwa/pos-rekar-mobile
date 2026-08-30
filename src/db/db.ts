/**
 * KurdishPOS Database Layer
 * Backend: SQLite via sql.js (Electron main process) exposed through IPC
 * API surface mirrors the legacy Dexie-style chainable API so hooks and pages stay unchanged.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { VALID_LICENSE_KEYS, normalizeLicenseKey } from '../lib/license-keys';
import { executeQuery, initSQLiteEngine, isDbReady } from './sqlite-engine';

// ─────────────────────────────────────────────────────────────────────────────
// TypeScript interfaces  (unchanged from original)
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductUnit {
  name: string;
  quantity: number;
  retailPrice: number;
  wholesalePrice: number;
  specialPrice: number;
}

export interface Product {
  id?: number;
  name: string;
  barcodes: string[];
  category: string;
  supplierId?: number;
  units: ProductUnit[];
  baseUnit: string;
  quantity: number;
  baseRetailPrice: number;
  baseWholesalePrice: number;
  baseSpecialPrice: number;
  cost: number;
  purchaseWarrantyDuration?: number;
  purchaseWarrantyEndDate?: Date;
  saleWarrantyDuration?: number;
  expirationDate?: Date;
  description?: string;
  image?: string;
  lowStockThreshold?: number;
  createdAt: Date;
  updatedAt: Date;
  barcode?: string;
  price?: number;
}

export interface Customer {
  id?: number;
  name: string;
  phone: string;
  debt: number;
  notes?: string;
  customNumber?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id?: number;
  customerId: number;
  customerName: string;
  amount: number;
  notes?: string;
  date: Date;
  userId?: number;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DebtRecord {
  id?: number;
  customerId: number;
  customerName: string;
  amount: number;
  notes?: string;
  date: Date;
  userId?: number;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Installment {
  id?: number;
  saleId: number;
  invoiceNumber?: string;
  customerId: number;
  customerName: string;
  totalAmount: number;
  downPayment: number;
  monthlyPayment: number;
  numberOfMonths: number;
  startDate: Date;
  endDate: Date;
  paidAmount: number;
  remainingAmount: number;
  hasWarranty: boolean;
  warrantyDetails?: string;
  status: 'active' | 'completed' | 'overdue' | 'cancelled';
  currency?: 'IQD' | 'USD';
  notes?: string;
  userId?: number;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InstallmentPayment {
  id?: number;
  installmentId: number;
  amount: number;
  paymentDate: Date;
  monthNumber: number;
  currency?: 'IQD' | 'USD';
  notes?: string;
  userId?: number;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SaleItem {
  productId: number;
  name: string;
  barcode: string;
  price: number;
  cost: number;
  cartQuantity: number;
  discount: number;
  unit?: string;
  warrantyMonths?: number;
  warrantyEndDate?: Date;
  freeQuantity?: number;
}

export interface Sale {
  id?: number;
  customId?: string;
  date: Date;
  total: number;
  paid: number;
  remaining: number;
  generalDiscount?: number;
  customerId?: number;
  customerName?: string;
  items: SaleItem[];
  paymentMethod: 'cash' | 'card' | 'debt' | 'installment';
  profit: number;
  currency: 'IQD' | 'USD';
  dollarRate?: number;
  userId?: number;
  username?: string;
  invoiceNumber?: string;
  action?: 'create' | 'update' | 'delete';
  changeNotes?: string;
  notes?: string;
  dueDate?: Date;
  installmentId?: number;
  isZeroProfit?: boolean;
}

export interface License {
  id?: number;
  key: string;
  type: 'trial' | '1week' | '1month' | '3months' | '6months' | '1year' | 'lifetime';
  isActive: boolean;
  activatedAt?: Date;
  expiresAt?: Date;
  deviceId: string;
}

export interface UsedLicenseKey {
  id?: number;
  key: string;
  usedAt: Date;
  deviceId: string;
  type: string;
}

export interface PrintSettings {
  printerType: 'thermal' | 'a4';
  paperSize: '58mm' | '80mm' | 'A4';
  selectedPrinter?: string;
  autoPrint: boolean;
  copies: number;
  showPrices: boolean;
  showBarcode: boolean;
  showLogo: boolean;
  headerText?: string;
  footerText?: string;
  showCost: boolean;
  showProfit: boolean;
  showDiscount: boolean;
  thermalFontSize: 'small' | 'medium' | 'large';
  a4FontSize: 'small' | 'medium' | 'large';
}

export interface Settings {
  id?: number;
  shopName: string;
  shopPhone: string;
  shopAddress: string;
  shopHeaderText?: string;
  shopLogo?: string;
  printerType: string;
  currency: string;
  lowStockThreshold: number;
  dollarRate: number;
  enableDollar: boolean;
  /** When true, open cash drawer (via thermal printer) on cash sales */
  enableCashDrawer?: boolean;
  /** Windows printer name used for ESC/POS cash drawer kick (e.g. Xprinter XP-365B) */
  cashDrawerPrinterName?: string;
  language?: string;
  dashboardMode?: 'navbar' | 'grid' | 'grid-fixed';
  /** POS sales page UI: classic (current) or images (product tiles with photos) */
  posDisplayMode?: 'classic' | 'images';
  autoUpdateEnabled?: boolean;
  autoUpdateTime?: string;
  autoUpdateInterval?: number;
  autoUpdateIntervalType?: 'minutes' | 'hours' | 'days';
  lastUpdateCheck?: Date;
  darkMode?: boolean;
  fontSize?: 'small' | 'medium' | 'large';
  printSettings?: PrintSettings;
}

export interface UserPermissions {
  canManageProducts: boolean;
  canAddProducts: boolean;
  canEditProducts: boolean;
  canDeleteProducts: boolean;
  canViewProducts: boolean;
  canManageCustomers: boolean;
  canAddCustomers: boolean;
  canEditCustomers: boolean;
  canDeleteCustomers: boolean;
  canViewCustomers: boolean;
  canManageSuppliers: boolean;
  canAddSuppliers: boolean;
  canEditSuppliers: boolean;
  canDeleteSuppliers: boolean;
  canManageExpenses: boolean;
  canAddExpenses: boolean;
  canEditExpenses: boolean;
  canDeleteExpenses: boolean;
  canManagePurchases: boolean;
  canAddPurchases: boolean;
  canEditPurchases: boolean;
  canDeletePurchases: boolean;
  canViewPurchaseHistory: boolean;
  canAccessPOS: boolean;
  canAddCustomerInPOS: boolean;
  canManageDebt: boolean;
  canReceivePayment: boolean;
  canGiveDiscount: boolean;
  canDeleteSales: boolean;
  canViewSalesHistory: boolean;
  canPrintInvoice: boolean;
  canManageReturns: boolean;
  canAddReturns: boolean;
  canDeleteReturns: boolean;
  canManageWarranty: boolean;
  canAddWarranty: boolean;
  canEditWarranty: boolean;
  canViewReports: boolean;
  canViewProfit: boolean;
  canExportReports: boolean;
  canViewDashboard: boolean;
  canAccessSafe: boolean;
  canAddSafeTransaction: boolean;
  canManageCategoriesUnits: boolean;
  canGenerateBarcode: boolean;
  canBackupRestore: boolean;
  canAccessSettings: boolean;
}

export interface User {
  id?: number;
  username: string;
  password: string;
  fullName: string;
  role: 'manager' | 'cashier';
  phone?: string;
  email?: string;
  isActive: boolean;
  permissions?: UserPermissions;
  createdAt: Date;
  lastLogin?: Date;
}

export interface Expense {
  id?: number;
  amount: number;
  category: string;
  description: string;
  date: Date;
  createdBy?: string;
  createdAt: Date;
  userId?: number;
  username?: string;
}

export interface Supplier {
  id?: number;
  name: string;
  phone: string;
  address: string;
  email?: string;
  debt: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CashTransaction {
  id?: number;
  type: 'in' | 'out';
  amount: number;
  category: string;
  description: string;
  date: Date;
  reference?: string;
  userId?: number;
  username?: string;
}

export interface PurchaseItem {
  productId: number;
  name: string;
  cost: number;
  costUSD?: number;
  quantity: number;
  /** بڕی دیاری بە دانەی بنەڕەت (وەک quantity) */
  giftQuantity?: number;
  unit?: string;
  temporaryProductData?: any;
}

export interface Purchase {
  id?: number;
  customId?: string;
  supplierId?: number;
  supplierName?: string;
  receiptNumber?: string;
  invoiceNumber?: string;
  date: Date;
  total: number;
  paid: number;
  remaining: number;
  items: PurchaseItem[];
  paymentMethod: 'cash' | 'card' | 'debt';
  notes?: string;
  userId?: number;
  username?: string;
  currency?: 'IQD' | 'USD';
  dollarRate?: number;
  archived?: boolean;
  action?: 'create' | 'update' | 'delete';
  changeNotes?: string;
  status?: 'pending' | 'completed';
  autoUpdateExpirationDate?: boolean;
  invoiceImage?: string;
  invoiceImages?: string[];
}

export interface ReturnItem {
  productId: number;
  name: string;
  barcode: string;
  price: number;
  cost: number;
  returnQuantity: number;
}

export interface Return {
  id?: number;
  saleId?: number;
  purchaseId?: number;
  returnType: 'customer' | 'supplier';
  date: Date;
  total: number;
  refundAmount: number;
  items: ReturnItem[];
  reason?: string;
  createdBy?: string;
  createdAt: Date;
  userId?: number;
  username?: string;
  supplierName?: string;
  invoiceNumber?: string;
  paymentMethod?: 'cash' | 'debt';
  cashAmount?: number;
  debtAmount?: number;
}

export interface CrashedItem {
  id?: number;
  type: 'sale' | 'purchase';
  date: Date;
  total: number;
  items: SaleItem[] | PurchaseItem[];
  errorMessage: string;
  errorStack?: string;
  customerId?: number;
  customerName?: string;
  paymentMethod?: 'cash' | 'card' | 'debt' | 'installment';
  paid?: number;
  remaining?: number;
  supplierId?: number;
  supplierName?: string;
  invoiceNumber?: string;
  userId?: number;
  username?: string;
  notes?: string;
  status: 'pending' | 'resolved' | 'ignored';
  resolvedAt?: Date;
  createdAt: Date;
}

export interface OrderItem {
  productId?: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export type OrderStatus =
  | 'pending_confirmation'
  | 'confirmed'
  | 'ready_to_ship'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export type ShippingStatus =
  | 'in_warehouse'
  | 'in_transit'
  | 'delivered'
  | 'not_delivered';

export type PaymentStatus = 'unpaid' | 'partial' | 'paid';

export interface Order {
  id?: number;
  orderNumber: string;
  customerName: string;
  phone?: string;
  address?: string;
  orderDate: Date;
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: 'cash' | 'online' | 'bank_transfer';
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  orderStatus: OrderStatus;
  shippingStatus: ShippingStatus;
  paymentStatus: PaymentStatus;
  shippingCompany?: string;
  trackingNumber?: string;
  shippingCost?: number;
  shippingDate?: Date;
  deliveryDate?: Date;
  paymentReceiptNumber?: string;
  paymentDate?: Date;
  paidAmount?: number;
  notes?: string;
  stockLinked?: boolean;
}

export interface WarrantyRecord {
  id?: number;
  productId: number;
  productName: string;
  customerId?: number;
  customerName: string;
  customerPhone?: string;
  saleId?: number;
  warrantyMonths: number;
  startDate: Date;
  endDate: Date;
  notes?: string;
  status: 'active' | 'expired' | 'claimed';
  createdAt: Date;
  updatedAt: Date;
  userId?: number;
  username?: string;
}

export interface ActivityLog {
  id?: number;
  userId?: number;
  username?: string;
  section: string;
  action: 'view' | 'create' | 'update' | 'delete' | 'login' | 'logout' | 'export' | 'print' | 'search';
  entityType?: string;
  entityId?: number;
  description?: string;
  details?: string;
  timestamp: Date;
  ipAddress?: string;
}

export interface EmployeeSalary {
  id?: number;
  userId: number;
  employeeName: string;
  salaryType: 'daily' | 'monthly';
  amount: number;
  lastPaymentDate?: Date;
  nextPaymentDate?: Date;
  notes?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SalaryPayment {
  id?: number;
  employeeSalaryId: number;
  userId: number;
  employeeName: string;
  amount: number;
  paymentDate: Date;
  notes?: string;
  paidBy?: number;
  paidByUsername?: string;
  createdAt: Date;
}

export interface ShopRent {
  id?: number;
  amount: number;
  paymentDate: Date;
  nextPaymentDate: Date;
  notes?: string;
  paidBy?: number;
  paidByUsername?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CashRegister {
  id?: number;
  name: string;
  initialBalance?: number;
  currentBalance?: number;
  initialBalanceIQD?: number;
  initialBalanceUSD?: number;
  balanceIQD: number;
  balanceUSD: number;
  notes?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CashRegisterTransaction {
  id?: number;
  registerId: number;
  type: 'add' | 'subtract' | 'transfer_in' | 'transfer_out';
  amount?: number;
  amountIQD?: number;
  amountUSD?: number;
  currency?: 'IQD' | 'USD';
  description: string;
  date: Date;
  reference?: string;
  transferToRegisterId?: number;
  transferFromRegisterId?: number;
  userId?: number;
  username?: string;
  createdAt: Date;
}

// ─────────────────────────────────────────────────────────────────────────────
// SQLite bridge (expo-sqlite — no Electron IPC)
// ─────────────────────────────────────────────────────────────────────────────

async function callDb(request: any): Promise<any> {
  if (!isDbReady()) {
    await initSQLiteEngine();
  }
  return executeQuery(request);
}

// ─────────────────────────────────────────────────────────────────────────────
// Reactive layer — replacement for Dexie useLiveQuery
// ─────────────────────────────────────────────────────────────────────────────

let _dbVersion = 0;
const _listeners = new Set<() => void>();

export function notifyDbChanged() {
  _dbVersion++;
  _listeners.forEach(fn => fn());
}

/**
 * Drop-in replacement for dexie-react-hooks useLiveQuery.
 * Re-runs queryFn whenever any database write occurs.
 */
export function useLiveQuery<T>(
  queryFn: () => Promise<T> | T,
  deps: any[] = []
): T | undefined {
  const [result, setResult] = useState<T | undefined>(undefined);
  const fnRef = useRef(queryFn);
  fnRef.current = queryFn;

  const run = useCallback(async () => {
    try {
      const data = await fnRef.current();
      setResult(data as T);
    } catch (e) {
      // silently ignore transient errors (e.g. during migration)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
    _listeners.add(run);
    return () => { _listeners.delete(run); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// Collection / WhereClause / OrderByClause
// (fluent builders that mirror Dexie's chainable API)
// ─────────────────────────────────────────────────────────────────────────────

class Collection<T> {
  protected _req: any;
  protected _rev = false;

  constructor(req: any) {
    this._req = { ...req };
  }

  reverse(): this {
    this._rev = true;
    if (this._req.orderBy) {
      this._req.orderBy = { ...this._req.orderBy, reverse: !this._req.orderBy.reverse };
    }
    return this;
  }

  async toArray(): Promise<T[]> {
    const r = await callDb(this._req);
    return (r as T[]) ?? [];
  }

  async first(): Promise<T | undefined> {
    const r = await callDb({ ...this._req, first: true });
    return r as T | undefined;
  }

  async count(): Promise<number> {
    const r = await callDb({ ...this._req, count: true });
    return (r as number) ?? 0;
  }

  async sortBy(field: string): Promise<T[]> {
    const r = await callDb({ ...this._req, sortBy: { field, reverse: this._rev } });
    return (r as T[]) ?? [];
  }

  modify(_fn: (obj: T) => void): Promise<void> {
    return Promise.resolve();
  }
}

class WhereClause<T> {
  private _table: string;
  private _field: string;

  constructor(table: string, field: string) {
    this._table = table;
    this._field = field;
  }

  private _col(op: string, value: any, value2?: any): Collection<T> {
    return new Collection<T>({
      type: 'where',
      table: this._table,
      where: { field: this._field, op, value, value2 },
    });
  }

  equals(value: any)                                     { return this._col('equals', value); }
  above(value: any)                                      { return this._col('above', value); }
  aboveOrEqual(value: any)                               { return this._col('aboveOrEqual', value); }
  below(value: any)                                      { return this._col('below', value); }
  belowOrEqual(value: any)                               { return this._col('belowOrEqual', value); }
  between(lo: any, hi: any, _incLo?: boolean, _incHi?: boolean) { return this._col('between', lo, hi); }
  anyOf(values: any[])                                   { return this._col('anyOf', values); }
  startsWith(prefix: string)                             { return this._col('like', `${prefix}%`); }
}

class OrderByClause<T> extends Collection<T> {
  constructor(table: string, field: string) {
    super({ type: 'orderBy', table, orderBy: { field, reverse: false } });
  }

  override reverse(): this {
    this._req.orderBy = { ...this._req.orderBy, reverse: true };
    return this;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SQLiteTable — mirrors Dexie's Table API
// ─────────────────────────────────────────────────────────────────────────────

class SQLiteTable<T> {
  constructor(private _name: string) {}

  async add(item: Partial<T>): Promise<number> {
    const id = await callDb({ type: 'add', table: this._name, data: item });
    notifyDbChanged();
    return id as number;
  }

  async put(item: Partial<T>): Promise<number> {
    const id = await callDb({ type: 'put', table: this._name, data: item });
    notifyDbChanged();
    return id as number;
  }

  async update(id: number, changes: Partial<T>): Promise<number> {
    const n = await callDb({ type: 'update', table: this._name, id, data: changes });
    notifyDbChanged();
    return (n as number) ?? 0;
  }

  async delete(id: number): Promise<void> {
    await callDb({ type: 'delete', table: this._name, id });
    notifyDbChanged();
  }

  async get(id: number): Promise<T | undefined> {
    return (await callDb({ type: 'get', table: this._name, id })) as T | undefined;
  }

  async toArray(): Promise<T[]> {
    return ((await callDb({ type: 'toArray', table: this._name })) as T[]) ?? [];
  }

  async count(): Promise<number> {
    return ((await callDb({ type: 'count', table: this._name })) as number) ?? 0;
  }

  async clear(): Promise<void> {
    await callDb({ type: 'clear', table: this._name });
    notifyDbChanged();
  }

  where(field: string): WhereClause<T> {
    return new WhereClause<T>(this._name, field);
  }

  orderBy(field: string): OrderByClause<T> {
    return new OrderByClause<T>(this._name, field);
  }

  toCollection(): Collection<T> {
    return new Collection<T>({ type: 'toArray', table: this._name });
  }

  async bulkAdd(items: Partial<T>[]): Promise<void> {
    await callDb({ type: 'bulkAdd', table: this._name, items });
    notifyDbChanged();
  }

  async bulkPut(items: Partial<T>[]): Promise<void> {
    for (const item of items) {
      await callDb({ type: 'put', table: this._name, data: item });
    }
    notifyDbChanged();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Database singleton — same shape as the old Dexie class
// ─────────────────────────────────────────────────────────────────────────────

class POSDatabaseSQLite {
  products              = new SQLiteTable<Product>('products');
  customers             = new SQLiteTable<Customer>('customers');
  payments              = new SQLiteTable<Payment>('payments');
  debts                 = new SQLiteTable<DebtRecord>('debts');
  sales                 = new SQLiteTable<Sale>('sales');
  license               = new SQLiteTable<License>('license');
  settings              = new SQLiteTable<Settings>('settings');
  users                 = new SQLiteTable<User>('users');
  expenses              = new SQLiteTable<Expense>('expenses');
  suppliers             = new SQLiteTable<Supplier>('suppliers');
  cashTransactions      = new SQLiteTable<CashTransaction>('cashTransactions');
  purchases             = new SQLiteTable<Purchase>('purchases');
  returns               = new SQLiteTable<Return>('returns');
  usedLicenseKeys       = new SQLiteTable<UsedLicenseKey>('usedLicenseKeys');
  warrantyRecords       = new SQLiteTable<WarrantyRecord>('warrantyRecords');
  activityLogs          = new SQLiteTable<ActivityLog>('activityLogs');
  installments          = new SQLiteTable<Installment>('installments');
  installmentPayments   = new SQLiteTable<InstallmentPayment>('installmentPayments');
  employeeSalaries      = new SQLiteTable<EmployeeSalary>('employeeSalaries');
  salaryPayments        = new SQLiteTable<SalaryPayment>('salaryPayments');
  shopRents             = new SQLiteTable<ShopRent>('shopRents');
  cashRegisters         = new SQLiteTable<CashRegister>('cashRegisters');
  cashRegisterTransactions = new SQLiteTable<CashRegisterTransaction>('cashRegisterTransactions');
  crashedItems          = new SQLiteTable<CrashedItem>('crashedItems');
  orders                = new SQLiteTable<Order>('orders');
}

export const db = new POSDatabaseSQLite();

/** Remove legacy browser IndexedDB if present (data lives in SQLite only). */
function purgeLegacyIndexedDB(): void {
  if (typeof indexedDB === 'undefined') return;
  try {
    indexedDB.deleteDatabase('KurdishPOSDB');
  } catch (_) {}
}

/** Flush SQLite (no-op on mobile — expo-sqlite persists automatically). */
export async function flushDatabaseToDisk(): Promise<void> {
  return;
}

// ─────────────────────────────────────────────────────────────────────────────
// initializeDatabase — called from page.tsx on startup
// ─────────────────────────────────────────────────────────────────────────────

export async function initializeDatabase(): Promise<void> {
  try {
    await initSQLiteEngine();

    const settingsCount = await db.settings.count();
    if (settingsCount === 0) {
      await db.settings.add({
        shopName: 'سیستەمی جیهان',
        shopPhone: '07501234567',
        shopAddress: 'سلێمانی - شەقامی مامۆستایان',
        shopHeaderText: '',
        printerType: 'thermal-80mm',
        currency: 'IQD',
        lowStockThreshold: 10,
        dollarRate: 1470,
        enableDollar: false,
        enableCashDrawer: false,
      } as Settings);
    }

    // Seed default users if empty
    const usersCount = await db.users.count();
    if (usersCount === 0) {
      await db.users.add({
        username: 'admin',
        password: 'admin123',
        fullName: 'بەڕێوەبەری سیستەم',
        role: 'manager',
        isActive: true,
        createdAt: new Date(),
      } as User);
      await db.users.add({
        username: 'cashier',
        password: 'cashier123',
        fullName: 'کاشێر',
        role: 'cashier',
        isActive: true,
        createdAt: new Date(),
      } as User);
    }

    console.log('✅ Database initialization complete');
  } catch (err) {
    console.error('Database initialization error:', err);
    throw err;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// License helpers (unchanged logic, uses new db)
// ─────────────────────────────────────────────────────────────────────────────

export function generateDeviceId(): string {
  const stored = localStorage.getItem('deviceId');
  if (stored) return stored;
  const deviceId = `DEVICE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem('deviceId', deviceId);
  return deviceId;
}

export type ActivateLicenseResult =
  | { ok: true }
  | { ok: false; reason: 'invalid' | 'used' | 'error' };

export async function validateLicenseKey(key: string): Promise<{ valid: boolean; type?: string }> {
  const normalized = normalizeLicenseKey(key);
  const pattern = /^KPO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  if (!pattern.test(normalized)) return { valid: false };
  const licenseType = VALID_LICENSE_KEYS[normalized];
  if (!licenseType) return { valid: false };
  return { valid: true, type: licenseType };
}

/** سڕینەوەی کلیلە بەکارهاتووە کۆنەکان کە لە لیستی نوێدا نین */
async function purgeObsoleteUsedKeys(): Promise<void> {
  try {
    const used = await db.usedLicenseKeys.toArray();
    for (const row of used) {
      if (!VALID_LICENSE_KEYS[row.key] && row.id != null) {
        await db.usedLicenseKeys.delete(row.id);
      }
    }
  } catch (_) {}
}

export async function activateLicense(rawKey: string): Promise<boolean> {
  const result = await activateLicenseDetailed(rawKey);
  return result.ok;
}

export async function activateLicenseDetailed(rawKey: string): Promise<ActivateLicenseResult> {
  try {
    const key = normalizeLicenseKey(rawKey);

    await purgeObsoleteUsedKeys();

    const validation = await validateLicenseKey(key);
    if (!validation.valid || !validation.type) {
      return { ok: false, reason: 'invalid' };
    }

    const deviceId = generateDeviceId();
    const usedRow = await db.usedLicenseKeys.where('key').equals(key).first();

    if (usedRow) {
      // ئەگەر هەمان کلیل هێشتا چالاکە لەسەر ئەم ئامێرە — سەرکەوتوو
      const existingActive = (await db.license.toArray()).find(
        (l) => l.isActive && l.key === key
      );
      if (existingActive) {
        return { ok: true };
      }
      // کلیل لەسەر ئەم ئامێرە پێشتر بەکارهاتووە
      console.error('License key already used on this device');
      return { ok: false, reason: 'used' };
    }

    const activatedAt = new Date();
    let expiresAt: Date | undefined;

    switch (validation.type) {
      case '1week':   expiresAt = new Date(activatedAt); expiresAt.setDate(expiresAt.getDate() + 7); break;
      case '1month':  expiresAt = new Date(activatedAt); expiresAt.setMonth(expiresAt.getMonth() + 1); break;
      case '3months': expiresAt = new Date(activatedAt); expiresAt.setMonth(expiresAt.getMonth() + 3); break;
      case '6months': expiresAt = new Date(activatedAt); expiresAt.setMonth(expiresAt.getMonth() + 6); break;
      case '1year':   expiresAt = new Date(activatedAt); expiresAt.setFullYear(expiresAt.getFullYear() + 1); break;
      case 'trial':   expiresAt = new Date(activatedAt); expiresAt.setDate(expiresAt.getDate() + 7); break;
      case 'lifetime': expiresAt = undefined; break;
    }

    // ناچالاککردنی لایسێنسە کۆنەکانی چالاک
    const activeOnes = (await db.license.toArray()).filter((l) => l.isActive);
    for (const lic of activeOnes) {
      if (lic.id != null) await db.license.update(lic.id, { isActive: false });
    }

    const existing = await db.license.where('key').equals(key).first();
    if (existing) {
      await db.license.update(existing.id!, { type: validation.type as any, isActive: true, activatedAt, expiresAt, deviceId });
    } else {
      await db.license.add({ key, type: validation.type as any, isActive: true, activatedAt, expiresAt, deviceId } as License);
    }

    try {
      localStorage.setItem('jp_license_info', JSON.stringify({
        key, type: validation.type,
        activatedAt: activatedAt.toISOString(),
        expiresAt: expiresAt ? expiresAt.toISOString() : null,
        deviceId,
      }));
    } catch (_) {}

    await db.usedLicenseKeys.add({ key, usedAt: activatedAt, deviceId, type: validation.type } as UsedLicenseKey);
    return { ok: true };
  } catch (err) {
    console.error('activateLicenseDetailed error:', err);
    return { ok: false, reason: 'error' };
  }
}

function toLicenseDate(value: unknown): Date | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return isNaN(value.getTime()) ? undefined : value;
  const d = new Date(value as string);
  return isNaN(d.getTime()) ? undefined : d;
}

export async function checkLicense(): Promise<boolean> {
  let licenses = await db.license.toArray();
  let activeLicense = licenses.find(l => l.isActive);

  if (!activeLicense) {
    try {
      const stored = localStorage.getItem('jp_license_info');
      if (stored) {
        const parsed = JSON.parse(stored);
        // دڵنیابوونەوە کلیلەکە هێشتا دروستە (نەک تەنها localStorageی دەستکاریکراو)
        if (!parsed?.key || !VALID_LICENSE_KEYS[parsed.key]) {
          localStorage.removeItem('jp_license_info');
          return false;
        }
        const now = new Date();
        const expiresAt = parsed.expiresAt ? toLicenseDate(parsed.expiresAt) : undefined;
        if (expiresAt && now > expiresAt) {
          localStorage.removeItem('jp_license_info');
          return false;
        }
        // ئەگەر پێشتر وەک بەکارهاتوو نەبوو، مۆرکی بکە
        const alreadyUsed = await db.usedLicenseKeys.where('key').equals(parsed.key).first();
        if (!alreadyUsed) {
          await db.usedLicenseKeys.add({
            key: parsed.key,
            usedAt: toLicenseDate(parsed.activatedAt) || now,
            deviceId: parsed.deviceId || generateDeviceId(),
            type: parsed.type || VALID_LICENSE_KEYS[parsed.key],
          } as UsedLicenseKey);
        }
        const newId = await db.license.add({
          key: parsed.key,
          type: parsed.type || VALID_LICENSE_KEYS[parsed.key],
          isActive: true,
          activatedAt: toLicenseDate(parsed.activatedAt) || now,
          expiresAt,
          deviceId: parsed.deviceId || generateDeviceId(),
        } as License);
        activeLicense = await db.license.get(newId as number);
      }
    } catch (_) {}
  }

  if (!activeLicense) return false;

  // کلیلی نەناسراو / دەستکاریکراو ڕەت بکەرەوە
  if (!VALID_LICENSE_KEYS[activeLicense.key]) {
    if (activeLicense.id != null) await db.license.update(activeLicense.id, { isActive: false });
    try { localStorage.removeItem('jp_license_info'); } catch (_) {}
    return false;
  }

  const expiresAt = toLicenseDate(activeLicense.expiresAt);
  if (expiresAt) {
    const now = new Date();
    if (now > expiresAt) {
      if (activeLicense.id != null) await db.license.update(activeLicense.id, { isActive: false });
      try { localStorage.removeItem('jp_license_info'); } catch (_) {}
      return false;
    }
  }
  return true;
}

export async function deactivateLicense(): Promise<void> {
  // تەنها لایسێنس ناچالاک دەکات — کلیلە بەکارهاتووەکان دەمێننەوە
  // بۆ ئەوەی لەناو سیستەمەکەوە نەتوانرێت هەمان کلیل دووبارە بەکاربهێنرێت
  // (دووبارەکردن تەنها لە Activation Helper ـەوە)
  await db.license.clear();
  try {
    localStorage.removeItem('jp_license_info');
  } catch (_) {}
}

/** تەنها بۆ ئامرازی دەرەکی (Activation Helper) — لە UIی POS بانگ مەکە */
export async function clearUsedLicenseKeys(): Promise<void> {
  await db.usedLicenseKeys.clear();
}

export async function clearAllData(): Promise<void> {
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
    db.returns.clear(),
    db.payments.clear(),
    db.debts.clear(),
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

  const keys = [
    'pos_sessions', 'pos_saved_carts', 'pos_current_cart',
    'pos_units', 'pos_categories', 'pos_invoice_number',
    'currentUser', 'backup_folder_path', 'auto_backup_enabled', 'last_backup_time',
  ];
  keys.forEach(k => localStorage.removeItem(k));

  await db.settings.add({
    shopName: 'سیستەمی جیهان',
    shopPhone: '07501234567',
    shopAddress: 'سلێمانی - شەقامی مامۆستایان',
    shopHeaderText: '',
    printerType: 'thermal-80mm',
    currency: 'IQD',
    lowStockThreshold: 10,
    dollarRate: 1470,
    enableDollar: false,
    enableCashDrawer: false,
  } as Settings);
}

export async function getLicenseInfo(): Promise<License | null> {
  const licenses = await db.license.toArray();
  return licenses.find(l => l.isActive) ?? null;
}

export async function getUsedKeysCount(): Promise<number> {
  return db.usedLicenseKeys.count();
}

export async function forceUpgradeDatabase(): Promise<void> {
  // No-op for SQLite — schema is always up to date
  console.log('✅ SQLite: forceUpgradeDatabase not needed');
}

export async function fixDatabase(): Promise<void> {
  const usersCount = await db.users.count();
  if (usersCount === 0) {
    await db.users.add({ username: 'admin', password: 'admin123', fullName: 'بەڕێوەبەری سیستەم', role: 'manager', isActive: true, createdAt: new Date() } as User);
    await db.users.add({ username: 'cashier', password: 'cashier123', fullName: 'کاشێر', role: 'cashier', isActive: true, createdAt: new Date() } as User);
  }
}

// Keep the old class name exported for any code that imports it by name
export { POSDatabaseSQLite as POSDatabase };
