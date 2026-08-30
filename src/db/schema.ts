/** SQLite schema + column metadata — ported from electron/database.js */

export const JSON_COLUMNS: Record<string, string[]> = {
  products: ['barcodes', 'units'],
  sales: ['items'],
  purchases: ['items', 'invoiceImages'],
  returns: ['items'],
  crashedItems: ['items'],
  orders: ['items'],
  users: ['permissions'],
  settings: ['printSettings'],
};

export const DATE_COLUMNS: Record<string, string[]> = {
  products: ['createdAt', 'updatedAt', 'expirationDate', 'purchaseWarrantyEndDate'],
  customers: ['createdAt', 'updatedAt'],
  sales: ['date', 'dueDate'],
  purchases: ['date'],
  returns: ['date', 'createdAt'],
  expenses: ['date', 'createdAt'],
  users: ['createdAt', 'lastLogin'],
  settings: ['lastUpdateCheck'],
  suppliers: ['createdAt', 'updatedAt'],
  cashTransactions: ['date'],
  payments: ['date', 'createdAt', 'updatedAt'],
  debts: ['date', 'createdAt', 'updatedAt'],
  warrantyRecords: ['startDate', 'endDate', 'createdAt', 'updatedAt'],
  activityLogs: ['timestamp'],
  installments: ['startDate', 'endDate', 'createdAt', 'updatedAt'],
  installmentPayments: ['paymentDate', 'createdAt', 'updatedAt'],
  employeeSalaries: ['lastPaymentDate', 'nextPaymentDate', 'createdAt', 'updatedAt'],
  salaryPayments: ['paymentDate', 'createdAt'],
  shopRents: ['paymentDate', 'nextPaymentDate', 'createdAt', 'updatedAt'],
  cashRegisters: ['createdAt', 'updatedAt'],
  cashRegisterTransactions: ['date', 'createdAt'],
  crashedItems: ['date', 'createdAt', 'resolvedAt'],
  orders: ['orderDate', 'createdAt', 'updatedAt', 'shippingDate', 'deliveryDate', 'paymentDate'],
  usedLicenseKeys: ['usedAt'],
  license: ['activatedAt', 'expiresAt'],
};

export const BOOLEAN_COLUMNS: Record<string, string[]> = {
  users: ['isActive'],
  settings: ['enableDollar', 'enableCashDrawer', 'autoUpdateEnabled', 'darkMode'],
  purchases: ['archived', 'autoUpdateExpirationDate'],
  sales: ['isZeroProfit'],
  installments: ['hasWarranty'],
  employeeSalaries: ['isActive'],
  cashRegisters: ['isActive'],
  orders: ['stockLinked'],
  license: ['isActive'],
};

export const TABLE_SCHEMAS = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, barcodes TEXT DEFAULT '[]', barcode TEXT,
  category TEXT, supplierId INTEGER,
  units TEXT DEFAULT '[]', baseUnit TEXT DEFAULT 'دانە',
  quantity REAL DEFAULT 0,
  baseRetailPrice REAL DEFAULT 0, baseWholesalePrice REAL DEFAULT 0,
  baseSpecialPrice REAL DEFAULT 0, cost REAL DEFAULT 0, price REAL,
  purchaseWarrantyDuration INTEGER, purchaseWarrantyEndDate TEXT,
  saleWarrantyDuration INTEGER, expirationDate TEXT,
  description TEXT, image TEXT, lowStockThreshold REAL,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, phone TEXT, debt REAL DEFAULT 0,
  notes TEXT, customNumber INTEGER,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customerId INTEGER, customerName TEXT,
  amount REAL, notes TEXT, date TEXT,
  userId INTEGER, username TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS debts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customerId INTEGER, customerName TEXT,
  amount REAL, notes TEXT, date TEXT,
  userId INTEGER, username TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customId TEXT, date TEXT, total REAL, paid REAL, remaining REAL,
  generalDiscount REAL, customerId INTEGER, customerName TEXT,
  items TEXT DEFAULT '[]', paymentMethod TEXT, profit REAL,
  currency TEXT DEFAULT 'IQD', dollarRate REAL,
  userId INTEGER, username TEXT, invoiceNumber TEXT,
  action TEXT, changeNotes TEXT, notes TEXT, dueDate TEXT,
  installmentId INTEGER, isZeroProfit INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customId TEXT, supplierId INTEGER, supplierName TEXT,
  receiptNumber TEXT, invoiceNumber TEXT, date TEXT,
  total REAL, paid REAL, remaining REAL,
  items TEXT DEFAULT '[]', paymentMethod TEXT, notes TEXT,
  userId INTEGER, username TEXT,
  currency TEXT DEFAULT 'IQD', dollarRate REAL,
  archived INTEGER DEFAULT 0, action TEXT, changeNotes TEXT,
  status TEXT DEFAULT 'completed',
  autoUpdateExpirationDate INTEGER DEFAULT 0,
  invoiceImage TEXT, invoiceImages TEXT
);
CREATE TABLE IF NOT EXISTS returns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  saleId INTEGER, purchaseId INTEGER, returnType TEXT,
  date TEXT, total REAL, refundAmount REAL,
  items TEXT DEFAULT '[]', reason TEXT,
  createdBy TEXT, createdAt TEXT,
  userId INTEGER, username TEXT,
  supplierName TEXT, invoiceNumber TEXT,
  paymentMethod TEXT, cashAmount REAL, debtAmount REAL
);
CREATE TABLE IF NOT EXISTS expenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  amount REAL, category TEXT, description TEXT,
  date TEXT, createdBy TEXT, createdAt TEXT,
  userId INTEGER, username TEXT
);
CREATE TABLE IF NOT EXISTS suppliers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, phone TEXT, address TEXT,
  email TEXT, debt REAL DEFAULT 0, notes TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS cashTransactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT, amount REAL, category TEXT,
  description TEXT, date TEXT, reference TEXT,
  userId INTEGER, username TEXT
);
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT, password TEXT, fullName TEXT,
  role TEXT, phone TEXT, email TEXT,
  isActive INTEGER DEFAULT 1,
  permissions TEXT,
  createdAt TEXT, lastLogin TEXT
);
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  shopName TEXT, shopPhone TEXT, shopAddress TEXT,
  shopHeaderText TEXT, shopLogo TEXT,
  printerType TEXT, currency TEXT,
  lowStockThreshold REAL, dollarRate REAL,
  enableDollar INTEGER DEFAULT 0,
  enableCashDrawer INTEGER DEFAULT 0,
  cashDrawerPrinterName TEXT,
  language TEXT, dashboardMode TEXT,
  posDisplayMode TEXT DEFAULT 'classic',
  autoUpdateEnabled INTEGER DEFAULT 0,
  autoUpdateTime TEXT, autoUpdateInterval INTEGER,
  autoUpdateIntervalType TEXT, lastUpdateCheck TEXT,
  darkMode INTEGER DEFAULT 0,
  fontSize TEXT, printSettings TEXT
);
CREATE TABLE IF NOT EXISTS license (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT, type TEXT,
  isActive INTEGER DEFAULT 0,
  activatedAt TEXT, expiresAt TEXT, deviceId TEXT
);
CREATE TABLE IF NOT EXISTS usedLicenseKeys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT, usedAt TEXT, deviceId TEXT, type TEXT
);
CREATE TABLE IF NOT EXISTS warrantyRecords (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  productId INTEGER, productName TEXT,
  customerId INTEGER, customerName TEXT,
  customerPhone TEXT, saleId INTEGER,
  warrantyMonths INTEGER,
  startDate TEXT, endDate TEXT,
  notes TEXT, status TEXT,
  createdAt TEXT, updatedAt TEXT,
  userId INTEGER, username TEXT
);
CREATE TABLE IF NOT EXISTS activityLogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER, username TEXT,
  section TEXT, action TEXT,
  entityType TEXT, entityId INTEGER,
  description TEXT, details TEXT,
  timestamp TEXT, ipAddress TEXT
);
CREATE TABLE IF NOT EXISTS installments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  saleId INTEGER, invoiceNumber TEXT,
  customerId INTEGER, customerName TEXT,
  totalAmount REAL, downPayment REAL,
  monthlyPayment REAL, numberOfMonths INTEGER,
  startDate TEXT, endDate TEXT,
  paidAmount REAL DEFAULT 0, remainingAmount REAL,
  hasWarranty INTEGER DEFAULT 0,
  warrantyDetails TEXT, status TEXT,
  currency TEXT DEFAULT 'IQD', notes TEXT,
  userId INTEGER, username TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS installmentPayments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  installmentId INTEGER, amount REAL,
  paymentDate TEXT, monthNumber INTEGER,
  currency TEXT, notes TEXT,
  userId INTEGER, username TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS employeeSalaries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER, employeeName TEXT,
  salaryType TEXT, amount REAL,
  lastPaymentDate TEXT, nextPaymentDate TEXT,
  notes TEXT, isActive INTEGER DEFAULT 1,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS salaryPayments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employeeSalaryId INTEGER, userId INTEGER,
  employeeName TEXT, amount REAL,
  paymentDate TEXT, notes TEXT,
  paidBy INTEGER, paidByUsername TEXT, createdAt TEXT
);
CREATE TABLE IF NOT EXISTS shopRents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  amount REAL, paymentDate TEXT,
  nextPaymentDate TEXT, notes TEXT,
  paidBy INTEGER, paidByUsername TEXT,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS cashRegisters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  initialBalance REAL, currentBalance REAL,
  initialBalanceIQD REAL DEFAULT 0,
  initialBalanceUSD REAL DEFAULT 0,
  balanceIQD REAL DEFAULT 0,
  balanceUSD REAL DEFAULT 0,
  notes TEXT, isActive INTEGER DEFAULT 1,
  createdAt TEXT, updatedAt TEXT
);
CREATE TABLE IF NOT EXISTS cashRegisterTransactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  registerId INTEGER, type TEXT,
  amount REAL, amountIQD REAL DEFAULT 0,
  amountUSD REAL DEFAULT 0, currency TEXT,
  description TEXT, date TEXT, reference TEXT,
  transferToRegisterId INTEGER,
  transferFromRegisterId INTEGER,
  userId INTEGER, username TEXT, createdAt TEXT
);
CREATE TABLE IF NOT EXISTS crashedItems (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT, date TEXT, total REAL,
  items TEXT DEFAULT '[]',
  errorMessage TEXT, errorStack TEXT,
  customerId INTEGER, customerName TEXT,
  paymentMethod TEXT, paid REAL, remaining REAL,
  supplierId INTEGER, supplierName TEXT,
  invoiceNumber TEXT,
  userId INTEGER, username TEXT,
  notes TEXT, status TEXT DEFAULT 'pending',
  resolvedAt TEXT, createdAt TEXT
);
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  orderNumber TEXT, customerName TEXT,
  phone TEXT, address TEXT,
  orderDate TEXT, createdAt TEXT, updatedAt TEXT,
  paymentMethod TEXT,
  items TEXT DEFAULT '[]',
  subtotal REAL, shippingFee REAL, totalAmount REAL,
  orderStatus TEXT, shippingStatus TEXT, paymentStatus TEXT,
  shippingCompany TEXT, trackingNumber TEXT,
  shippingCost REAL, shippingDate TEXT, deliveryDate TEXT,
  paymentReceiptNumber TEXT, paymentDate TEXT,
  paidAmount REAL, notes TEXT,
  stockLinked INTEGER DEFAULT 0
);
`;
