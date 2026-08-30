// Translation system for Kurdish POS System
// @ts-nocheck
// Supports: Kurdish Sorani, Kurdish Badini, Iraqi Arabic, British English

export type Language = 'ku-sorani' | 'ku-badini' | 'ar-iq' | 'en-gb';

export interface Translation {
  // Common
  appName: string;
  appVersion: string;
  loading: string;
  daysRemaining: string;
  expiresToday: string;
  oneWeek: string;
  oneMonth: string;
  threeMonths: string;
  sixMonths: string;
  oneYear: string;
  lifetime: string;
  save: string;
  cancel: string;
  close: string;
  delete: string;
  edit: string;
  add: string;
  search: string;
  filter: string;
  confirm: string;
  
  // Login
  login: string;
  username: string;
  password: string;
  loginButton: string;
  logout: string;
  loginError: string;
  managerAccount: string;
  cashierAccount: string;
  usersInfo: string;
  selectUserPlaceholder: string;
  adminOrCashier: string;
  resetDatabase: string;
  resetDatabaseConfirm: string;
  resetDatabaseSuccess: string;
  resetDatabaseError: string;
  systemError: string;
  resetting: string;
  onlyIfLoginIssue: string;
  
  // License
  licenseKey: string;
  activate: string;
  activating: string;
  activated: string;
  quickActivation: string;
  licenseError: string;
  licenseInvalid: string;
  licenseAlreadyUsed: string;
  licenseRepair: string;
  licenseRepairDone: string;
  licenseRepairHint: string;
  activationError: string;
  activationSuccess: string;
  quickTrialUsedError: string;
  quickTrialFailedError: string;
  quickTrialDescription: string;
  quickTrialAlreadyUsed: string;
  oneTimeOnly: string;
  features: string;
  featureFastSales: string;
  featureInventory: string;
  featureReports: string;
  featureDebtSystem: string;
  featureOfflineDatabase: string;
  contactForLicense: string;
  contactPhone: string;
  or: string;
  
  // Header
  notifications: string;
  calculator: string;
  manager: string;
  cashier: string;
  logoutConfirm: string;
  
  // Navigation
  dashboard: string;
  pos: string;
  addProduct: string;
  products: string;
  customers: string;
  purchases: string;
  suppliers: string;
  expenses: string;
  safe: string;
  cashRegisters: string;
  crashedItems: string;
  returns: string;
  reports: string;
  income: string;
  settings: string;
  
  // Settings
  generalSettings: string;
  userManagement: string;
  categoriesAndUnits: string;
  barcodeGenerator: string;
  backup: string;
  // Shop & printer
  shopInfo: string;
  shopName: string;
  shopPhone: string;
  shopAddress: string;
  printerSettings: string;
  printerType: string;
  enableCashDrawer: string;
  enableCashDrawerDesc: string;
  testCashDrawer: string;
  cashDrawerOpened: string;
  cashDrawerOpenFailed: string;
  cashDrawerRequiresPrinter: string;
  cashDrawerPrinter: string;
  selectCashDrawerPrinter: string;
  cashDrawerWindowsHint: string;
  receiptPrinter: string;
  quickPrintSettingsHint: string;
  saleAndPrint: string;
  salePrintedToast: string;
  appearance: string;
  appearanceDescription: string;
  posDisplayMode: string;
  posModeClassic: string;
  posModeClassicDesc: string;
  posModeImages: string;
  posModeImagesDesc: string;
  printSettings: string;
  printSettingsDescription: string;
  thermal: string;
  paperSize: string;
  autoPrint: string;
  autoPrintDesc: string;
  copies: string;
  displayOptions: string;
  showLogo: string;
  showBarcode: string;
  showCost: string;
  showProfit: string;
  thermalFontSize: string;
  a4FontSize: string;
  medium: string;
  large: string;
  customText: string;
  headerTextPlaceholder: string;
  footerTextPlaceholder: string;
  currentSettings: string;
  enabled: string;
  disabled: string;
  reset: string;
  confirmReset: string;
  saving: string;
  saved: string;
  standard: string;
  autoPrinting: string;
  selectPrinter: string;
  printerSelectNote: string;
  printerName: string;
  printerNamePlaceholder: string;
  printerNameHint: string;
  howToFindPrinter: string;
  selectedPrinter: string;
  printerList: string;
  refreshList: string;
  selectFromList: string;
  selectPrinterOption: string;
  printerNameManual: string;
  printerListNotAvailable: string;
  noPrintersFound: string;
  printerSet: string;
  openDesktopAppForList: string;
  windowsPrintDialog: string;
  windowsPrintDialogDesc: string;
  openWindowsPrintDialog: string;
  useWindowsDefaultPrinter: string;
  default: string;
  otherSettings: string;
  currency: string;
  primaryCurrency: string;
  selectPrimaryCurrency: string;
  dinar: string;
  dollar: string;
  currencyAffectsAll: string;
  currencyIndependentOfLanguage: string;
  lowStockThreshold: string;
  dollarSettings: string;
  enableDollar: string;
  dollarRate: string;
  saveChanges: string;
  cancelChanges: string;
  confirmDelete: string;
  confirmDeleteMessage: string;
  goodsWillReturn: string;
  yes: string;
  no: string;
  unknown: string;
  dangerZone: string;
  deactivateLicense: string;
  systemInfo: string;
  systemVersion: string;
  licenseStatus: string;
  totalProducts: string;
  totalCustomers: string;
  purchaseValue: string;
  sellingValue: string;
  expectedProfit: string;
  stockAlert: string;

  // Dashboard mode (settings)
  dashboardModeTitle: string;
  dashboardModeDescription: string;
  dashboardModeNavbar: string;
  dashboardModeNavbarDescription: string;
  dashboardModeGrid: string;
  dashboardModeGridDescription: string;
  dashboardModeNote: string;
  selected: string;

  // Dark mode (settings)
  darkMode: string;
  darkModeDescription: string;

  // Network / LAN sync (settings)
  networkSettingsTitle: string;
  networkSettingsDescription: string;
  connectionStatusLabel: string;
  connectionStatusConnected: string;
  connectionStatusDisconnected: string;
  networkModeLabel: string;
  networkModeOff: string;
  networkModeServer: string;
  networkModeClient: string;
  serverIPLabel: string;
  serverIPPlaceholder: string;
  serverIPHelp: string;
  thisComputerIPLabel: string;
  thisComputerIPHelp: string;
  portLabel: string;
  autoSyncLabel: string;
  autoSyncDescription: string;
  connectButton: string;
  disconnectButton: string;
  sendDataToClients: string;
  disableNetwork: string;
  networkInstructionsTitle: string;
  networkInstruction1: string;
  networkInstruction2: string;
  networkInstruction3: string;
  networkInstruction4: string;
  networkInstruction5: string;
  
  // P2P Sync Settings
  p2pSync: string;
  p2pDescription: string;
  localIp: string;
  connectionStatus: string;
  role: string;
  selectRole: string;
  roleOff: string;
  roleOffDesc: string;
  rolePrimary: string;
  rolePrimaryDesc: string;
  roleSecondary: string;
  roleSecondaryDesc: string;
  primaryComputer: string;
  secondaryComputer: string;
  serverInfo: string;
  connectedDevices: string;
  autoDiscovery: string;
  manualConnect: string;
  foundDevices: string;
  syncStatistics: string;
  changesSent: string;
  changesReceived: string;
  lastSync: string;
  
  // Language Settings
  language: string;
  selectLanguage: string;
  kurdishSorani: string;
  kurdishBadini: string;
  iraqiArabic: string;
  britishEnglish: string;
  
  // Categories
  categories: string;
  addCategory: string;
  categoryAdded: string;
  categoryExists: string;
  deleteCategory: string;
  units: string;
  addUnit: string;
  deleteUnit: string;
  
  // Users
  users: string;
  user: string;
  employee: string;
  addUser: string;
  editUser: string;
  deleteUser: string;
  fullName: string;
  role: string;
  phone: string;
  email: string;
  active: string;
  inactive: string;
  permissions: string;
  lastLogin: string;
  
  // Products
  productName: string;
  barcode: string;
  category: string;
  unit: string;
  priceType: string;
  buyPrice: string;
  sellPrice: string;
  stock: string;
  minStock: string;
  deleteProduct: string;
  
  // Warranty
  warrantyManagement: string;
  warranties: string;
  warrantyActive: string;
  warrantyExpired: string;
  warrantyStatus: string;
  warrantyDetails: string;
  warrantyDuration: string;
  warrantyEndDate: string;
  warrantyExpiredOn: string;
  warrantyGivenToCustomer: string;
  noWarranty: string;
  noWarrantySet: string;
  purchaseWarranty: string;
  saleWarranty: string;
  months: string;
  expiryDate: string;
  expired: string;
  expiredProducts: string;
  daysExpired: string;
  inventoryAdjustment: string;
  dollarRateChange: string;
  noExpiredProducts: string;
  viewDetails: string;
  returnToSupplier: string;
  sellAtDiscount: string;
  discountPrice: string;
  discountAmount: string;
  originalPrice: string;
  willBeRecordedAsExpense: string;
  discountNote: string;
  perUnit: string;
  processing: string;
  selectPurchase: string;
  mostRecentPurchase: string;
  purchaseInfo: string;
  unitCost: string;
  notAvailable: string;
  available: string;
  days: string;
  discard: string;
  discardWarning: string;
  totalLoss: string;
  discardReasonPlaceholder: string;
  cashAmount: string;
  exchange: string;
  exchangeNote: string;
  newExpiryDate: string;
  currentExpiryDate: string;
  currentQuantity: string;
  notes: string;
  exchangeNotesPlaceholder: string;
  exchangeDateNote: string;
  exchangeQuantityNote: string;
  exchangeRevertNote: string;
  
  // Customers
  customerName: string;
  customerId: string;
  customerPhone: string;
  customerAddress: string;
  balance: string;
  debt: string;
  addNewCustomer: string;
  
  // Sales
  sale: string;
  sales: string;
  noSales: string;
  total: string;
  paid: string;
  remaining: string;
  discount: string;
  change: string;
  payment: string;
  cash: string;
  card: string;
  package: string;
  paymentMethod: string;
  print: string;
  
  // Reports
  dailyReport: string;
  monthlyReport: string;
  profit: string;
  revenue: string;
  cost: string;
  
  // Dates
  today: string;
  yesterday: string;
  thisWeek: string;
  lastWeek: string;
  thisMonth: string;
  lastMonth: string;
  lastYear: string;
  date: string;
  from: string;
  to: string;
  
  // Dashboard
  welcome: string;
  dashboardOverview: string;
  todayRevenue: string;
  todayProfit: string;
  netProfit: string;
  todayExpenses: string;
  totalRevenue: string;
  totalProfit: string;
  totalExpenses: string;
  cashInHand: string;
  lowStockAlert: string;
  recentSales: string;
  invoice: string;
  invoiceNumber: string;
  newInvoice: string;
  thankYouMessage: string;
  receipt: string;
  receiptNumber: string;
  paperSize: string;
  visitAgain: string;
  showRemainingOnReceipt: string;
  showCustomerName: string;
  errorReturnNote: string;
  items: string;
  amount: string;
  view: string;
  updateDollarRate: string;
  currentRate: string;
  newRate: string;
  update: string;
  revenueMinusExpenses: string;
  selectSections: string;
  dollarRateTitle: string;
  dollarRateInDinar: string;
  rateInDollar: string;
  activities: string;
  dollarRateNote: string;
  dollarRateMustBeGreater: string;
  dollarRateTooLarge: string;
  dollarRateUpdatedSuccess: string;
  dollarRateUpdateError: string;
  totalLabel: string;
  expensesLabel: string;
  totalExpensesLabel: string;
  productsLabel: string;
  totalProductsLabel: string;
  salesLabel: string;
  returnsLabel: string;
  last10: string;
  noSalesFound: string;
  noReturnsFound: string;
  quickStats: string;
  productItem: string;
  
  // Purchase History
  purchaseHistory: string;
  viewPurchaseHistory: string;
  noPurchaseHistory: string;
  productNotPurchasedYet: string;
  totalPurchases: string;
  totalQuantity: string;
  lastPurchasePrice: string;
  oldPurchaseCost: string;
  purchaseCostDiff: string;
  totalSpent: string;
  times: string;
  totalCost: string;
  noPurchasesFound: string;
  tryDifferentFilters: string;
  allSuppliers: string;
  allProducts: string;
  dateFrom: string;
  dateTo: string;
  allCurrencies: string;
  allMethods: string;
  searchInvoiceOrNotes: string;
  purchasesList: string;
  filters: string;
  clearFilters: string;
  allPurchases: string;
  totalItems: string;
  notSpecified: string;
  cashBalance: string;
  cashAvailable: string;
  fromCustomers: string;
  alerts: string;
  lowStockProductsAlert: string;
  quantityLow: string;
  customerDebt: string;
  allGood: string;
  noIssuesInSystem: string;
  noSalesYet: string;
  productsLowQuantity: string;
  
  // POS
  scanBarcode: string;
  quantity: string;
  quantityInStock: string;
  price: string;
  subtotal: string;
  totalAmount: string;
  selectCustomer: string;
  noCustomer: string;
  addDiscount: string;
  paymentType: string;
  completeSale: string;
  clearCart: string;
  saveCart: string;
  savedCarts: string;
  cart: string;
  loadCart: string;
  cartEmpty: string;
  invoices: string;
  invoicesMenu: string;
  load: string;
  addItems: string;
  newTab: string;
  session: string;
  tab: string;
  cannotCloseLastTab: string;
  tabHasItems: string;
  sureToCloseTab: string;
  confirmClearCart: string;
  cartSaved: string;
  savingCart: string;
  restoringCart: string;
  cartSavedMessage: string;
  confirmLoadCart: string;
  cartNotEmpty: string;
  wantToSaveOrDiscard: string;
  saveCartPark: string;
  discardAndGo: string;
  parkDraft?: string;
  discardDraft?: string;
  saveData?: string;
  discardDataAndGo?: string;
  unsavedDataConfirm?: string;
  unsavedProductDataConfirm?: string;
  goBack: string;
  selectCustomerForDebt: string;
  noProductsFound: string;
  allCategories: string;
  seller: string;
  selectSeller: string;
  generalSale: string;
  soldBy: string;
  retail: string;
  wholesale: string;
  special: string;
  retailPrice: string;
  wholesalePrice: string;
  specialPrice: string;
  piece: string;
  carton: string;
  box: string;
  baseUnit: string;
  addProductsToStart: string;
  drinks: string;
  bread: string;
  food: string;
  cleaningSupplies: string;
  homeGoods: string;
  in: string;
  barcodeRequired: string;
  barcodeAlreadyExists: string;
  productNameAlreadyExists: string;
  productAddedSuccess: string;
  errorOccurred: string;
  resetForm: string;
  basicInfo: string;
  selectOption: string;
  company: string;
  onlyUnit: string;
  unitPlusPackage: string;
  unitPlusCarton: string;
  allUnits: string;
  purchasePrice: string;
  generate: string;
  prices: string;
  productImage: string;
  notes: string;
  notesPlaceholder: string;
  saveProduct: string;
  productManagement: string;
  salePrice: string;
  editProduct: string;
  addNewProduct: string;
  selectCategory: string;
  automatic: string;
  fromSettings: string;
  confirmDeleteProduct: string;
  imageLabel: string;
  cancelButton: string;
  customerManagement: string;
  
  // Offers
  createOffer: string;
  offerName: string;
  offerDescription: string;
  offerStartDate: string;
  offerEndDate: string;
  offerPrice: string;
  offerDiscount: string;
  offerDiscountPercent: string;
  addProductToOffer: string;
  offerProducts: string;
  offerManagement: string;
  saveOffer: string;
  offerUpdated: string;
  cancelOffer: string;
  noProductsInOffer: string;
  selectProductsForOffer: string;
  noOffers: string;
  deactivate: string;
  totalDiscount: string;
  duplicateOffer: string;
  copyOffer: string;
  printOffer: string;
  exportOffer: string;
  importOffer: string;
  offerCopied: string;
  offerScope: string;
  exampleOffer: string;
  specificOffer: string;
  minimumQuantity: string;
  minQuantityPerCustomer: string;
  minQuantityPerCustomerDesc: string;
  maxQuantityPerCustomer: string;
  maxQuantityPerCustomerDesc: string;
  offerStatistics: string;
  offerType: string;
  discountOffer: string;
  specialPriceOffer: string;
  buyXGetYOffer: string;
  buyXGetYDifferentOffer: string;
  freeGiftOffer: string;
  percentageDiscount: string;
  fixedDiscount: string;
  buyQuantity: string;
  getQuantity: string;
  freeProduct: string;
  buyProduct: string;
  getProduct: string;
  editCustomer: string;
  confirmDeleteCustomer: string;
  phoneNumber: string;
  customerNamePlaceholder: string;
  phoneNumberPlaceholder: string;
  updateButton: string;
  addButton: string;
  
  // Suppliers
  supplierManagement: string;
  supplierInfo: string;
  newSupplier: string;
  totalSuppliers: string;
  debtors: string;
  searchSupplier: string;
  noSuppliers: string;
  editSupplier: string;
  confirmDeleteSupplier: string;
  address: string;
  emailOptional: string;
  notesOptional: string;
  namePlaceholder: string;
  addressPlaceholder: string;
  
  // Purchases
  purchaseManagement: string;
  purchaseDescription: string;
  totalExpense: string;
  supplierDebt: string;
  newPurchase: string;
  purchaseDescription2: string;
  selectSupplier: string;
  selectSupplierForDebt: string;
  selectProduct: string;
  productQuantity: string;
  noItemsAdded: string;
  grandTotal: string;
  completePurchase: string;
  noPurchases: string;
  purchaseDetails: string;
  amountPaid: string;
  paidAmount: string;
  fillAllFields: string;
  addAtLeastOneProduct: string;
  purchaseRecorded: string;
  lastPrice: string;
  product: string;
  
  // Safe
  safeManagement: string;
  cashTransactions: string;
  totalIn: string;
  totalOut: string;
  newTransaction: string;
  transactionList: string;
  noTransactions: string;
  transactionType: string;
  moneyIn: string;
  moneyOut: string;
  transactionDetails: string;
  reference: string;
  referenceOptional: string;
  confirmDeleteTransaction: string;
  allTransactions: string;
  moneyAmount: string;
  type: string;
  dateLabel: string;
  
  // Expenses
  expenseManagement: string;
  expenseDescription: string;
  newExpense: string;
  noExpenses: string;
  editExpense: string;
  expenseDetails: string;
  confirmDeleteExpense: string;
  allTypes: string;
  
  // Categories
  rent: string;
  salary: string;
  salaryAndRent: string;
  salaryAndRentManagement: string;
  employeeSalaries: string;
  shopRent: string;
  addSalary: string;
  editSalary: string;
  salaryType: string;
  salaryAmount: string;
  daily: string;
  monthly: string;
  salaryList: string;
  noSalaries: string;
  paymentDue: string;
  totalPaid: string;
  lastPayment: string;
  nextPayment: string;
  noPayments: string;
  paymentHistory: string;
  paySalary: string;
  payRent: string;
  recordPayment: string;
  selectEmployee: string;
  addRent: string;
  updateRent: string;
  rentAmount: string;
  paymentDate: string;
  nextPaymentDate: string;
  nextPaymentDateNote: string;
  noRentInfo: string;
  paymentAlertTitle: string;
  salaryPaymentDue: string;
  salaryPaymentNear: string;
  rentPaymentDue: string;
  rentPaymentNear: string;
  employeeNotSelected: string;
  confirmDeleteSalary: string;
  loanGiven: string;
  loanReceived: string;
  gift: string;
  electricity: string;
  water: string;
  delivery: string;
  repair: string;
  cleaning: string;
  internet: string;
  telephone: string;
  storeSupplies: string;
  
  // Reports (continued)
  profitLossReport: string;
  todayReport: string;
  returnedGoods: string;
  expenseBreakdown: string;
  todayReturns: string;
  returnId: string;
  saleId: string;
  noReturnsToday: string;
  nearOutOfStock: string;
  allGoodsOk: string;
  code: string;
  totalSales: string;
  invoiceList: string;
  searchInvoice: string;
  all: string;
  week: string;
  month: string;
  noInvoicesFound: string;
  editInvoice: string;
  customerNameLabel: string;
  
  // Returns
  returnGoods: string;
  returnManagement: string;
  totalReturns: string;
  selectInvoiceForReturn: string;
  hasReturn: string;
  returnedAmount: string;
  clickToReturn: string;
  selectGoodsToReturn: string;
  returnReason: string;
  returnReasonPlaceholder: string;
  selectedGoods: string;
  returnTotal: string;
  processReturn: string;
  confirmReturnTitle: string;
  confirmReturnMessage: string;
  totalGoods: string;
  waitingText: string;
  confirmButton: string;
  returnHistory: string;
  returnRecorded: string;
  returnError: string;
  history: string;
  noHistory: string;
  deleted: string;
  confirmRevert: string;
  reverted: string;
  revert: string;
  updated: string;
  
  // Products
  productList: string;
  productDetails: string;
  image: string;
  description: string;
  supplier: string;
  actions: string;
  
  // Customers
  customer: string;
  customerList: string;
  addCustomer: string;
  customerDetails: string;
  totalDebt: string;
  payDebt: string;
  debtHistory: string;
  noDebt: string;
  
  // Sales History
  salesHistory: string;
  saleDetails: string;
  paymentStatus: string;
  fullPaid: string;
  partialPaid: string;
  unpaid: string;
  viewAllSalesReceipts: string;
  salesList: string;
  noResultsWithFilters: string;
  
  // Expenses
  expenseList: string;
  addExpense: string;
  expenseType: string;
  expenseDate: string;
  expenseAmount: string;
  expenseNote: string;
  
  // Suppliers
  supplierList: string;
  addSupplier: string;
  supplierAdded: string;
  supplierName: string;
  supplierPhone: string;
  supplierAddress: string;
  supplierProducts: string;
  
  // Purchases
  purchaseList: string;
  addPurchase: string;
  purchaseDate: string;
  purchaseAmount: string;
  purchaseItems: string;
  
  // Safe
  safeBalance: string;
  deposits: string;
  withdrawals: string;
  addDeposit: string;
  addWithdrawal: string;
  transactionHistory: string;
  deposit: string;
  withdrawal: string;
  note: string;
  
  // Returns
  returnsList: string;
  addReturn: string;
  returnDate: string;
  returnAmount: string;
  refund: string;
  
  // Reports
  salesReport: string;
  profitReport: string;
  expensesReport: string;
  inventoryReport: string;
  customerReport: string;
  generateReport: string;
  printReport: string;
  period: string;
  summary: string;
  details: string;
  
  // Backup
  createBackup: string;
  restoreBackup: string;
  autoBackup: string;
  backupNow: string;
  lastBackup: string;
  backupHistory: string;
  downloadBackup: string;
  uploadBackup: string;
  backupRestoreTitle: string;
  backupRestoreDesc: string;
  dbStatistics: string;
  invoiceDesigner: string;
  backupFolder: string;
  selectBackupFolder: string;
  noFolderSelected: string;
  autoBackupEvery24Hours: string;
  autoBackupEnabled: string;
  autoBackupDisabled: string;
  backupManual: string;
  backupDescription: string;
  whatWillBeBackedUp: string;
  allSalesPurchases: string;
  suppliersExpenses: string;
  usersSettings: string;
  licensePayments: string;
  backingUp: string;
  restoreData: string;
  restoreWarning: string;
  restoreWarningDesc: string;
  selectBackupFile: string;
  fileSize: string;
  restoring: string;
  tips: string;
  backupDaily: string;
  saveBackupsSafely: string;
  validateBeforeRestore: string;
  oldDataWillBeDeleted: string;
  backupSuccess: string;
  backupError: string;
  restoreSuccess: string;
  restoreError: string;
  selectDataToBackup: string;
  selectDataToRestore: string;
  selectAll: string;
  deselectAll: string;
  resetAllData: string;
  resetAllDataDesc: string;
  confirmResetAllData: string;
  confirmResetAgain: string;
  allDataDeleted: string;
  allDataWillBeDeleted: string;
  cannotBeUndone: string;
  licenseWillBeKept: string;
  backupBeforeReset: string;
  selectiveBackup: string;
  selectiveRestore: string;
  manual: string;
  
  // Barcode Generator
  barcodeGeneratorDesc: string;
  selectProducts: string;
  barcodeType: string;
  labelSize: string;
  copies: string;
  showProductName: string;
  showPrice: string;
  download: string;
  preview: string;
  noProductsSelected: string;
  clearSelection: string;
  selectedCount: string;
  printBarcodes: string;
  searchProducts: string;
  showImages: string;
  advancedFilters: string;
  priceRange: string;
  minPrice: string;
  maxPrice: string;
  stockLevel: string;
  allStock: string;
  inStock: string;
  lowStock: string;
  outOfStock: string;
  // Report Filters
  reportFilters: string;
  customDateRange: string;
  startDate: string;
  endDate: string;
  paymentMethodFilter: string;
  allPaymentMethods: string;
  customerFilter: string;
  allCustomers: string;
  amountRange: string;
  minAmount: string;
  maxAmount: string;
  profitRange: string;
  minProfit: string;
  maxProfit: string;
  sortBy: string;
  sortByDate: string;
  sortByAmount: string;
  sortByProfit: string;
  sortByCustomer: string;
  sortAscending: string;
  sortDescending: string;
  exportReport: string;
  exportToPDF: string;
  exportToExcel: string;
  filterPresets: string;
  profitableSales: string;
  debtSales: string;
  cashSales: string;
  cardSales: string;
  applyFilters: string;
  resetFilters: string;
  filterResults: string;
  noResultsFound: string;
  updateSuccess: string;
  productAdded: string;
  small: string;
  medium: string;
  large: string;
  customBarcode: string;
  autoGenerateActive: string;
  enterName: string;
  enterCode: string;
  addToPreview: string;
  clear: string;
  fillRequired: string;
  hide: string;
  show: string;
  
  // Messages
  success: string;
  error: string;
  warning: string;
  info: string;
  areYouSure: string;
  cannotUndo: string;
  operationSuccess: string;
  operationFailed: string;
  pleaseWait: string;
  noData: string;
  noResults: string;
  
  // Actions
  create: string;
  deleteAction: string;
  saveAction: string;
  cancelAction: string;
  backAction: string;
  nextAction: string;
  previousAction: string;
  submitAction: string;
  resetAction: string;
  clearAction: string;
  selectAction: string;
  
  // Misc
  required: string;
  optional: string;
  status: string;
  enabled: string;
  disabled: string;
  none: string;
  other: string;
  more: string;
  less: string;
  showMore: string;
  showLess: string;
  page: string;
  of: string;
  perPage: string;
  noRecords: string;
  records: string;
  filterByDate: string;
  filterByCategory: string;
  filterByCustomer: string;
  filterByProduct: string;
  filterBySupplier: string;
  filterByPaymentMethod: string;
  filterByAmount: string;
  filterByStatus: string;
  filterByUser: string;
  filterByLocation: string;
  filterByType: string;
  filterByBrand: string;
  filterByPrice: string;
  filterByQuantity: string;
  filterByProfit: string;
  filterByLoss: string;
  filterByReturn: string;
  filterByExpense: string;
  filterByIncome: string;
  filterByDebt: string;
  filterByCredit: string;
  filterByCash: string;
  filterByCard: string;
  
  // Activities Page
  salesAndPurchases: string;
  employeeMonitoring: string;
  activitiesTotalSales: string;
  activitiesTotalPurchases: string;
  activitiesTotalPaid: string;
  activitiesTotalDebt: string;
  activitiesSearchPlaceholder: string;
  activitiesPeriod: string;
  activitiesStartDate: string;
  activitiesEndDate: string;
  activitiesSelectDate: string;
  activitiesClearFilters: string;
  noActivitiesFound: string;
  activitiesMore: string;
  editNotes: string;
  startDateCannotBeGreater: string;
  pleaseSelectStartDate: string;
  apply: string;
  customerOrSupplier: string;
  activitiesTotal: string;
  activitiesNotes: string;
  activitiesAction: string;
  activitiesSection: string;
  activitiesDetails: string;
  noActivityLogs: string;
  activitiesCreate: string;
  activitiesUpdate: string;
  activitiesDelete: string;
  activitiesView: string;
  activitiesLogin: string;
  activitiesLogout: string;
  activitiesType: string;
  activitiesItems: string;
  sevenDays: string;
  thirtyDays: string;
  ninetyDays: string;
  threeHundredSixtyFiveDays: string;
  
  // Reports Page
  generalReportTitle: string;
  generalReportDescription: string;
  reportCustomerReports: string;
  reportCustomerSpecial: string;
  reportCustomerBalance: string;
  reportCustomerItems: string;
  reportCustomerGeneral: string;
  reportCustomerInvoices: string;
  reportProfit: string;
  reportProfitDetails: string;
  reportSalesItems: string;
  reportPurchaseItems: string;
  reportStockItems: string;
  reportExpiredProducts: string;
  reportSupplierReports: string;
  reportSupplierSpecial: string;
  reportSupplierBalance: string;
  reportSupplierItems: string;
  reportSupplierGeneral: string;
  reportSupplierInvoices: string;
  reportSupplierProfit: string;
  reportGeneral: string;
  reportGeneralInfo: string;
  reportMonthly: string;
  reportAccountantActivity: string;
  reportOtherReports: string;
  reportAccountantSafe: string;
  reportExpenses: string;
  reportRegistrationDate: string;
  viewReports: string;
  
  // Activities Page
  openInvoice: string;
  viewInvoice: string;
  purchaseInvoiceDetails: string;
  invoiceNumberLabel: string;
  supplierLabel: string;
  currencyLabel: string;
  paymentMethodLabel: string;
  userLabel: string;
  productNameLabel: string;
  quantityLabel: string;
  paidLabel: string;
  debtLabel: string;
  notesLabel: string;
  invoiceLocked: string;
  amountCannotBeLess: string;
  noDiscountPermission: string;
  guestCustomer: string;
  externalProduct: string;
  invoiceUnparked: string;
  newTabCreated: string;
  invoiceLoaded: string;
  invoiceCleared: string;
  otherInvoiceNotFound: string;
  popupBlocked: string;
  printCart: string;
  shop: string;
  totalInWords: string;
  thanksForPurchase: string;
  discountLabel: string;
  generalDiscount: string;
  codeLabel: string;
  returned: string;
  partialReturned: string;
  sold: string;
  noSaleDebtPermission: string;
  noSaleInstallmentPermission: string;
  selectCustomerForInstallment: string;
  enterAdvanceAndMonths: string;
  advanceMustBeLess: string;
  installmentRecorded: string;
  enterPaymentAmount: string;
  paymentAmountExceedsDebt: string;
  paymentRecorded: string;
  enterDebtAmount: string;
  debtAdded: string;
  enterCustomerName: string;
  enterPhoneNumber: string;
  customerAdded: string;
  noPrintPermission: string;
  searchProduct: string;
  enterProductNameAndPrice: string;
  externalProductAdded: string;
  addExternalProduct: string;
  cashSale: string;
  debtSale: string;
  installmentSale: string;
  parkInvoice: string;
  parkInvoiceTitle: string;
  addDebtWithoutPurchase: string;
  printDebt: string;
  viewDebts: string;
  previousInvoice: string;
  nextInvoice: string;
  parkedInvoices: string;
  invoiceCount: string;
  invoiceNumberPrefix: string;
  unnamedInvoice: string;
  itemCount: string;
  customerLabel: string;
  loadInvoice: string;
  deleteInvoice: string;
  confirmDeleteInvoice: string;
  warranty: string;
  showInvoice: string;
  selectACustomer: string;
  searchForInvoice: string;
  invoiceNotes: string;
  noParkedInvoices: string;
  writeNote: string;
  writeInvoiceNoteHere: string;
  paidAmountLabel: string;
  debtPaymentDate: string;
  paidLabelShort: string;
  remainingDebtLabel: string;
  customerSelection: string;
  dollarRateLabel: string;
  advanceLabel: string;
  installmentMonthsLabel: string;
  monthlyPaymentLabel: string;
  monthLabel: string;
  totalInstallmentsLabel: string;
  remainingInstallmentLabel: string;
  hasAdvance: string;
  customDesignUsed: string;
  // Returns Page
  pleaseSpecifyCashAmount: string;
  returnGoodsToSupplier: string;
  supplierReturnRecorded: string;
  returnRecordError: string;
  returnReportTitle: string;
  returnAndRefundGoods: string;
  returnNumber: string;
  refundAmount: string;
  reason: string;
  createdBy: string;
  noReason: string;
  totalReturnsLabel: string;
  totalRefundLabel: string;
  averageReturnAmount: string;
  returnFromCustomer: string;
  customerHistory: string;
  supplierHistory: string;
  searchForInvoiceOrCustomer: string;
  selectInvoice: string;
  invoiceNumberShort: string;
  selectItems: string;
  priceLabel: string;
  returnQuantity: string;
  writeReturnReason: string;
  selectedItems: string;
  totalReturn: string;
  returnTo: string;
  invoiceNumberShortLabel: string;
  actionLabel: string;
  returnButton: string;
  returnGoodsTo: string;
  itemsToReturn: string;
  purchasedQuantity: string;
  searchForInvoiceOrSupplier: string;
  returnHistoryCustomer: string;
  returnHistorySupplier: string;
  supplierReturnTo: string;
  cashReceived: string;
  becameDebt: string;
  cashAmountReceived: string;
  writeCashAmount: string;
  debtAmount: string;
  confirmReturn: string;
  waiting: string;
  approve: string;
  confirmSupplierReturnTitle: string;
  confirmSupplierReturnMessage: string;
  cashReceivedLabel: string;
  returnDetails: string;
  returnedItems: string;
  noCustomerReturnsFound: string;
  noSupplierReturnsFound: string;
  itemsReturned: string;
  returnCount: string;
  noAccessPermission: string;
  printInvoice: string;
  withoutSupplier: string;
  itemsLabel: string;
  productWithoutName: string;
  noItemsFound: string;
  employeeInfo: string;
  employeeNumber: string;
  mobileNumber: string;
  employeeType: string;
  employeeStatus: string;
    activeStatus: string;
    inactiveStatus: string;
    timeLabel: string;
    
    // PDF Report Labels
    generalFinancialReport: string;
    periodLabel: string;
    dateLabelPDF: string;
    shopNameLabel: string;
    phoneNumberLabel: string;
    financialSummary: string;
    subjectLabel: string;
    amountLabel: string;
    totalSalesRevenue: string;
    grossProfit: string;
    balancesLabel: string;
    warehouseBalance: string;
    customerDebts: string;
    supplierDebts: string;
    salesDebts: string;
    purchaseDebts: string;
    todayPeriod: string;
    weekPeriod: string;
    monthPeriod: string;
    yearPeriod: string;
    customPeriod: string;
  custom: string;
    
    // Table Headers
    customerNameHeader: string;
    phoneHeader: string;
    totalSalesHeader: string;
    totalRemainingHeader: string;
    salesCountHeader: string;
    balanceHeader: string;
    addressHeader: string;
    totalProfitHeader: string;
    invoiceIdHeader: string;
    itemsCountHeader: string;
    productNameHeader: string;
    barcodeHeader: string;
    quantityHeader: string;
    priceHeader: string;
    discountHeader: string;
    totalHeader: string;
    saleDateHeader: string;
    
    // Additional Table Headers
    idHeader: string;
    profitPercentageHeader: string;
    saleIdHeader: string;
    purchaseIdHeader: string;
    costPriceHeader: string;
    unitHeader: string;
    categoryHeader: string;
    retailPriceHeader: string;
    wholesalePriceHeader: string;
    specialPriceHeader: string;
    totalValueHeader: string;
    totalSoldHeader: string;
    totalPurchasedHeader: string;
    totalPurchasesHeader: string;
    purchasesCountHeader: string;
    revenueHeader: string;
    grossProfitHeader: string;
    totalExpensesHeader: string;
    netProfitHeader: string;
    totalCustomersHeader: string;
    totalSuppliersHeader: string;
    totalProductsHeader: string;
    monthHeader: string;
    salesRevenueHeader: string;
    salesProfitHeader: string;
    purchasesTotalHeader: string;
    typeHeader: string;
    customerOrSupplierHeader: string;
    amountHeader: string;
    descriptionHeader: string;
    registrationDateHeader: string;
    totalSalesPaidHeader: string;
    totalPurchasesPaidHeader: string;
    totalExpensesAmountHeader: string;
    netCashHeader: string;
    
    // Activity Types
    saleType: string;
    purchaseType: string;
    
    // View Reports Page Buttons and Filters
    downloadPDF: string;
    backToReports: string;
    searchPlaceholder: string;
    allTime: string;
    todayFilter: string;
    weekFilter: string;
    monthFilter: string;
    yearFilter: string;
    startDateLabel: string;
    endDateLabel: string;
    noReportSelected: string;
    detailedInformation: string;
    noDataToPrint: string;
    totalData: string;
    dataLabel: string;
    totalProfitLabel: string;
    totalAmountLabel: string;
    
    // Installments Page
    installments: string;
    installmentsManagement: string;
    totalInstallments: string;
    activeInstallments: string;
    overdueInstallments: string;
    totalRemaining: string;
    searchInstallmentsPlaceholder: string;
    allStatuses: string;
    completedStatus: string;
    overdueStatus: string;
    cancelledStatus: string;
    noInstallmentsFound: string;
    invoiceLabel: string;
    downPayment: string;
    monthlyPayment: string;
    numberOfMonths: string;
    monthsLabel: string;
    remainingLabel: string;
    daysOverdue: string;
    makePayment: string;
    installmentPayment: string;
    installmentCurrency: string;
    paymentCurrency: string;
    paymentAmountLabel: string;
    monthNumber: string;
    installmentDetails: string;
    warrantyLabel: string;
    hasWarranty: string;
    noPaymentsRecorded: string;
    pleaseEnterPaymentAmount: string;
    paymentAmountExceeds: string;
    paymentRecordedSuccessfully: string;
    errorOccurredInPayment: string;
    paymentIn: string;
    convertTo: string;
    extraLabel: string;
}

export const translations: Record<Language, Translation> = {
  'ku-sorani': {
    // Common
    appName: 'سیستەمی کاشێری جیهان',
    appVersion: 'Jihan Cashier System v1.0',
    loading: 'چاوەڕێ بکە...',
    daysRemaining: 'ڕۆژ ماوە',
    expiresToday: 'ئەمڕۆ بەسەردەچێت',
    oneWeek: '١ هەفتە',
    oneMonth: '١ مانگ',
    threeMonths: '٣ مانگ',
    sixMonths: '٦ مانگ',
    oneYear: '١ ساڵ',
    lifetime: 'هەتا هەتایە',
    save: 'پاشەکەوتکردن',
    cancel: 'هەڵوەشاندنەوە',
    close: 'داخستن',
    delete: 'سڕینەوە',
    edit: 'دەستکاری',
    add: 'زیادکردن',
    search: 'گەڕان',
    filter: 'فلتەر',
    confirm: 'دڵنیایت؟',
    yes: 'بەڵێ',
    no: 'نەخێر',
    
    // Login
    login: 'چوونە ژوورەوە',
    username: 'ناوی بەکارهێنەر',
    password: 'وشەی نهێنی',
    loginButton: 'چوونە ژوورەوە',
    logout: 'دەرچوون',
    loginError: 'ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە',
    managerAccount: 'بەڕێوەبەر',
    cashierAccount: 'کاشێر',
    usersInfo: 'زانیاری بەکارهێنەران:',
    selectUserPlaceholder: 'هەڵبژاردنی بەکارهێنەر...',
    adminOrCashier: 'admin یان cashier',
    resetDatabase: 'دووبارە دروستکردنەوەی داتابەیس',
    resetDatabaseConfirm: 'ئایا دڵنیایت لە سڕینەوە و دووبارە دروستکردنی داتابەیس؟\n\nهەموو داتاکان دەسڕدرێنەوە!',
    resetDatabaseSuccess: 'داتابەیس بە سەرکەوتوویی دووبارە دروستکرایەوە!\n\nبەکارهێنەر: admin / admin123',
    resetDatabaseError: 'هەڵە لە دووبارە دروستکردنەوەی داتابەیس',
    systemError: 'هەڵەیەک ڕوویدا. تکایە سیستەم دووبارە بکەرەوە',
    resetting: 'دووبارە دروستکردنەوە...',
    onlyIfLoginIssue: 'تەنها ئەگەر کێشەت هەبێت لە داخڵبوون',
    
    // License
    licenseKey: 'کلیلی چالاککردن',
    activate: 'چالاککردن',
    activating: 'چاوەڕێ بکە...',
    activated: 'چالاککرا ✓',
    quickActivation: 'چالاککردنی خێرا - 1 حەفتە تاقیکاری',
    licenseError: 'کلیلی چالاککردن هەڵەیە یان پێشتر بەکارهاتووە',
    licenseInvalid: 'کلیل هەڵەیە یان لەم وەشانەی پرۆگرامەکەدا نییە — وەشانی نوێ دابەزێنە',
    licenseAlreadyUsed: 'ئەم کلیلە پێشتر بەکارهاتووە. بۆ چاککردن تەنها بەرنامەی چالاککردن (Activation Helper) بەکاربهێنە',
    licenseRepair: 'چاککردنی لایسێنس',
    licenseRepairDone: 'کلیلە بەکارهاتووەکان سڕانەوە. ئێستا دووبارە کلیلەکە داخڵ بکە.',
    licenseRepairHint: 'ئەگەر کلیل کار ناکات، ئەم دوگمەیە دابگرە پاشان دووبارە چالاک بکە',
    activationError: 'هەڵەیەک ڕوویدا. تکایە دووبارە هەوڵ بدەرەوە.',
    activationSuccess: 'چالاککردن سەرکەوتوو بوو! ...',
    quickTrialUsedError: 'چالاککردنی خێرا پێشتر بەکارهاتووە لەسەر ئەم کۆمپیوتەرە. تکایە کلیلێکی ڕاستەقینە بەکاربێنە.',
    quickTrialFailedError: 'چالاککردنی خێرا سەرکەوتوو نەبوو. ئەم کلیلە لەوانەیە پێشتر بەکارهاتبێت.',
    quickTrialDescription: '⚡ چالاککردنی خودکار بۆ ماوەی یەک حەفتە - تەنها یەک جار لەسەر ئەم کۆمپیوتەرە',
    quickTrialAlreadyUsed: '💡 چالاککردنی خێرا پێشتر بەکارهاتووە. تکایە کلیلێکی ڕاستەقینە بەکاربێنە.',
    oneTimeOnly: '(یەک جار تەنها)',
    features: 'تایبەتمەندیەکان:',
    featureFastSales: 'فرۆشتنی خێرا و ئاسان',
    featureInventory: 'بەڕێوەبردنی کاڵا و کڕیاران',
    featureReports: 'ڕاپۆرتی وردی فرۆشتن و قازانج',
    featureDebtSystem: 'سیستەمی قەرز و پارەدان',
    featureOfflineDatabase: 'داتابەیسی ئۆفڵاین و دڵنیا',
    contactForLicense: 'بۆ وەرگرتنی کلیلی چالاککردن',
    contactPhone: 'پەیوەندی بکە: 07710500202 - 07511935352',
    or: 'یان',
    
    // Header
    notifications: 'ئاگادارکردنەوەکان',
    calculator: 'ژمێرەر',
    manager: 'بەڕێوەبەر',
    cashier: 'کاشێر',
    logoutConfirm: 'دڵنیایت لە دەرچوون؟',
    
    // Navigation
    dashboard: 'سەرەکی',
    pos: 'فرۆشتن',
    addProduct: 'تۆمارکردنی کاڵا',
    products: 'کاڵاکان',
    customers: 'کڕیار و قەرز',
    purchases: 'کڕین',
    suppliers: 'دابینکەران',
    expenses: 'خەرجیەکان',
    safe: 'سندوق',
    cashRegisters: 'قاسەکان',
    crashedItems: 'وەسڵە شکاوەکان',
    returns: 'گەڕانەوەی کاڵا',
    reports: 'ڕاپۆرتەکان',
    income: 'داهات',
    settings: 'ڕێکخستنەکان',
    
    // Settings
    generalSettings: 'ڕێکخستنە گشتیەکان',
    userManagement: 'بەڕێوەبردنی بەکارهێنەران',
    categoriesAndUnits: 'جۆرەکان و دانەکان',
    barcodeGenerator: 'بارکۆد',
    backup: 'هەڵگرتن',
    shopInfo: 'زانیاری دوکان',
    shopName: 'ناوی دوکان',
    shopPhone: 'ژمارەی تەلەفۆن',
    shopAddress: 'ناونیشان',
    printerSettings: 'ڕێکخستنی پرینتەر',
    printerType: 'جۆری پرینتەر',
    enableCashDrawer: 'چالاککردنی چەکمەجەی پارە',
    enableCashDrawerDesc: 'کاتێک فرۆشتنی نەقد دەکرێت، چەکمەجەکە لە ڕێگەی پرینتەری thermal دەکرێتەوە',
    testCashDrawer: 'تاقیکردنەوەی چەکمەجە',
    cashDrawerOpened: 'فەرمانی کردنەوەی چەکمەجە نێردرا',
    cashDrawerOpenFailed: 'نەتوانرا چەکمەجە بکرێتەوە — پرینتەر بپشکنە',
    cashDrawerRequiresPrinter: 'پێویستە چەکمەجە بە RJ11 بە پرینتەری thermal بەسترا بێت',
    cashDrawerPrinter: 'پرینتەری چەکمەجە (ویندۆز)',
    selectCashDrawerPrinter: '— هەڵبژاردنی پرینتەر —',
    cashDrawerWindowsHint: 'بۆ Xprinter XP-365B: پرینتەری ویندۆز هەڵبژێرە. هەمان پرینتەر بۆ وەسڵ و چەکمەجە بەکاردێت',
    receiptPrinter: 'پرینتەری وەسڵ (ویندۆز)',
    quickPrintSettingsHint: 'قەبارە و پرینتەر هەڵبژێرە — لە فرۆشتن بە دوگمەی «فرۆشتن + پرینت» خێرا دەفرۆشرێت و وەسڵ لە باکگراوند چاپ دەبێت',
    saleAndPrint: 'فرۆشتن + پرینت',
    salePrintedToast: 'فرۆشتن تەواو بوو — وەسڵ لە باکگراوند چاپ دەکرێت',
    appearance: 'رووکار',
    appearanceDescription: 'شێوازی نیشاندانی پەیجی فرۆشتن هەڵبژێرە',
    posDisplayMode: 'مۆدی پەیجی فرۆشتن',
    posModeClassic: 'کلاسیک',
    posModeClassicDesc: 'شێوازی ئێستا — گەڕان و بارکۆد',
    posModeImages: 'کاڵا بە وێنە',
    posModeImagesDesc: 'وێنەی کاڵاکان لە گریددا — وەک POSـی جیهانی',
    printSettings: 'ڕێکخستنی پرێنت',
    printSettingsDescription: 'ڕێکخستنەکانی پرێنتکردن بۆ وەسڵ و کاڵاکان',
    thermal: 'تێرماڵ',
    paperSize: 'قیاسی کاغەز',
    autoPrint: 'پرێنتی خۆکار',
    autoPrintDesc: 'پرێنت بکە بەبێ پرسیار',
    copies: 'ژمارەی کۆپی',
    displayOptions: 'بژاردەکانی نیشاندان',
    showLogo: 'نیشاندانی لۆگۆ',
    showBarcode: 'نیشاندانی باڕکۆد',
    showCost: 'نیشاندانی نرخی کڕین',
    showProfit: 'نیشاندانی قازانج',
    thermalFontSize: 'فۆنتی تێرماڵ',
    a4FontSize: 'فۆنتی A4',
    medium: 'مامناوەند',
    large: 'گەورە',
    customText: 'دەقی تایبەت',
    headerTextPlaceholder: 'بەخێربێیت بۆ دوکانەکەمان...',
    footerTextPlaceholder: 'سوپاس بۆ هاتنتان...',
    currentSettings: 'ڕێکخستنی ئێستا',
    enabled: 'چالاکە',
    disabled: 'ناچالاکە',
    reset: 'ڕێست',
    confirmReset: 'دڵنیایت لە گەڕاندنەوە بۆ ڕێکخستنی بنەڕەت؟',
    saving: 'پاشەکەوتکردن...',
    saved: 'پاشەکەوتکرا',
    standard: 'ئاسایی',
    autoPrinting: 'پرێنتی خۆکار...',
    selectPrinter: 'هەڵبژاردنی پرێنتەر',
    printerSelectNote: 'ناوی پرێنتەرەکە بنووسە وەک لە سیستەمەکەت دیارە (بۆ نموونە: "Xprinter XP-80C" یان "Microsoft Print to PDF")',
    printerName: 'ناوی پرێنتەر',
    printerNamePlaceholder: 'ناوی پرێنتەرەکە بنووسە...',
    printerNameHint: 'ناوەکە دەبێت بە وردی هاوشێوەی ئەوە بێت کە لە ڕێکخستنەکانی سیستەمەکەتدا دیارە',
    howToFindPrinter: 'بۆ دۆزینەوەی ناوی پرێنتەر: بڕۆ بۆ Settings → Devices → Printers & scanners لە ویندۆز',
    selectedPrinter: 'پرێنتەری هەڵبژێردراو',
    printerList: 'لیستی پرێنتەرەکان (درایڤەکان)',
    refreshList: 'نوێکردنەوەی لیست',
    selectFromList: 'هەڵبژێرە لە لیست',
    selectPrinterOption: 'پرێنتەر هەڵبژێرە',
    printerNameManual: 'ناوی پرێنتەر (دەستی)',
    printerListNotAvailable: 'لیستی پرێنتەر تەنها لە ئەپەکە (Electron) بەردەستە',
    noPrintersFound: 'هیچ پرێنتەرێک نەدۆزرایەوە',
    printerSet: 'پرێنتەر دانرا: ',
    openDesktopAppForList: 'ئەپەکە بە دێسکتۆپ (Electron) بکەرەوە بۆ بینینی لیست',
    windowsPrintDialog: 'ویندۆز — وەک کاتێک پرێنت دەکەیت',
    windowsPrintDialogDesc: 'دیالۆگی پرێنتی ویندۆز بکەرەوە، کام پرێنتەر هەڵبژێرە، دواتر ئەگەر ویست پرێنتەرەکەت وەک بنەڕەت لە ویندۆز دیاری کرد، دوگمەی «بەکارهێنانی پرێنتەری بنەڕەتی ویندۆز» بکە.',
    openWindowsPrintDialog: 'کردنەوەی دیالۆگی پرێنتی ویندۆز',
    useWindowsDefaultPrinter: 'بەکارهێنانی پرێنتەری بنەڕەتی ویندۆز',
    default: 'بنەڕەت',
    otherSettings: 'ڕێکخستنی تر',
    currency: 'دراو',
    primaryCurrency: 'دانەی دراوی سەرەکی',
    selectPrimaryCurrency: 'هەڵبژاردنی دراوی سەرەکی',
    dinar: 'دینار',
    dollar: 'دۆلار',
    currencyAffectsAll: 'دانەی سەرەکی کاریگەری دەبێت لەسەر هەموو نرخەکان و ڕاپۆرتەکان لە سیستەمدا',
    currencyIndependentOfLanguage: 'دانەی دراو جیایە لە زمان - دەتوانیت بە دۆلار کاربکەیت و زمانەکە کوردی/عەرەبی بمێنێتەوە',
    lowStockThreshold: 'ئاگاداری بۆ کاڵای کەم (ژمارە)',
    dollarSettings: 'ڕێکخستنی دۆلار',
    enableDollar: 'چالاککردنی دۆلار',
    dollarRate: 'نرخی دۆلار بە دینار',
    saveChanges: 'پاشەکەوتکردنی گۆڕانکاریەکان',
    dangerZone: 'زۆنی مەترسی',
    deactivateLicense: 'ناچالاککردنی لایسێنس',
    systemInfo: 'زانیاری سیستەم',
    systemVersion: 'وەشانی سیستەم',
    licenseStatus: 'ستاتوسی لایسێنس',
    totalProducts: 'کۆی کاڵاکان',
    totalCustomers: 'کۆی کڕیاران',
    purchaseValue: 'بەهای کڕین',
    sellingValue: 'بەهای فرۆشتن',
    expectedProfit: 'قازانجی چاوەڕوان',
    stockAlert: 'ئاگاداری کۆگا',
  
  // Dashboard mode (settings)
  dashboardModeTitle: 'شێوازی داشبۆرد',
  dashboardModeDescription: 'شێوازی نمایشی داشبۆرد هەڵبژێرە',
  dashboardModeNavbar: 'ناڤبار',
  dashboardModeNavbarDescription: 'ناڤباری لایەکی',
  dashboardModeGrid: 'گرید داشبۆرد',
  dashboardModeGridDescription: 'گرید بە ئایکۆن و ناو',
  dashboardModeNote: 'گۆڕانکاریەکان دوای پاشەکەوتکردن و دووبارە کردنەوەی پەڕەکە دەرکەون',
  selected: 'هەڵبژێردراو',

  // Dark mode (settings)
  darkMode: 'دیمۆدی تاریک',
  darkModeDescription: 'دیمۆدی تاریک چالاک بکە بۆ نیشاندانی تاریکتری سیستەم',

  // Network / LAN sync (settings)
  networkSettingsTitle: 'بەستنی تۆڕ (LAN/Router)',
  networkSettingsDescription: 'بەستنی دوو کۆمپیوتەر بە دانەوە بە کێبڵ یان راوتەر بۆ هاوبەشکردنی داتاکان',
  connectionStatusLabel: 'دۆخی پەیوەندی:',
  connectionStatusConnected: 'بەسترا',
  connectionStatusDisconnected: 'نەبەستراو',
  networkModeLabel: 'دۆخ:',
  networkModeOff: 'ناچالاک',
  networkModeServer: 'سێرڤەر (Host)',
  networkModeClient: 'کڵایەنت',
  serverIPLabel: 'IP Address-ی سێرڤەر:',
  serverIPPlaceholder: '192.168.1.100',
  serverIPHelp: 'IP address-ی کۆمپیوتەری سێرڤەر (مثلاً: 192.168.1.100)',
  thisComputerIPLabel: 'IP Address-ی ئەم کۆمپیوتەرە:',
  thisComputerIPHelp: 'ئەم IP-ە بەکار بهێنە لە کۆمپیوتەرەکانی دیکەدا بۆ بەستن',
  portLabel: 'پۆرت:',
  autoSyncLabel: 'خۆکار sync (هەر 5 چرکە جارێک)',
  autoSyncDescription: 'خۆکار هاوبەشکردنی داتاکان لەنێوان سێرڤەر و کڵایەنتەکان',
  connectButton: 'بەستن',
  disconnectButton: 'دابەزاندن',
  sendDataToClients: 'ناردنی داتا بۆ کڵایەنتەکان',
  disableNetwork: 'ناچالاککردن',
  networkInstructionsTitle: 'ڕێنمایی:',
  networkInstruction1: 'یەک کۆمپیوتەر بکە بە سێرڤەر (Host)',
  networkInstruction2: 'کۆمپیوتەرەکانی دیکە بکە بە کڵایەنت',
  networkInstruction3: 'IP address-ی سێرڤەر بنووسە لە کڵایەنتەکاندا',
  networkInstruction4: 'دوگمەی \"بەستن\" بگرە',
  networkInstruction5: 'داتاکان بە خۆکار sync دەبن',
    
    // P2P Sync Settings
    p2pSync: 'هاوتەرازی P2P',
    p2pDescription: 'هاوتەرازی کردنی داتا لە نێوان چەند کۆمپیوتەرێکدا لە هەمان تۆڕدا',
    localIp: 'IP ی ئەم کۆمپیوتەرە',
    connectionStatus: 'دۆخی پەیوەندی',
    role: 'ڕۆڵ',
    selectRole: 'هەڵبژاردنی ڕۆڵی ئەم کۆمپیوتەرە',
    roleOff: 'ناچالاک',
    roleOffDesc: 'هاوتەرازی P2P ناچالاکە',
    rolePrimary: 'کۆمپیوتەری سەرەکی',
    rolePrimaryDesc: 'ئەم کۆمپیوتەرە دەبێتە Server و داتا لێرەوە دەهێنرێت',
    roleSecondary: 'کۆمپیوتەری لاوەکی',
    roleSecondaryDesc: 'پەیوەست بە کۆمپیوتەری سەرەکی بۆ وەرگرتنی داتا',
    primaryComputer: 'کۆمپیوتەری سەرەکی (Server)',
    secondaryComputer: 'کۆمپیوتەری لاوەکی (Client)',
    serverInfo: 'زانیاری Server',
    connectedDevices: 'کۆمپیوتەرە پەیوەستکراوەکان',
    autoDiscovery: 'گەڕان بە خۆکار بۆ کۆمپیوتەری سەرەکی',
    manualConnect: 'پەیوەستبوون بە دەستی',
    foundDevices: 'کۆمپیوتەرە دۆزراوەکان:',
    syncStatistics: 'ئامارەکانی هاوتەرازی',
    changesSent: 'گۆڕانکاری نێردراو',
    changesReceived: 'گۆڕانکاری وەرگیراو',
    lastSync: 'دوایین هاوتەرازی',
    
    // Language Settings
    language: 'زمان',
    selectLanguage: 'هەڵبژاردنی زمان',
    kurdishSorani: 'کوردی سۆرانی',
    kurdishBadini: 'کوردی بادینی',
    iraqiArabic: 'عەرەبیی عێراقی',
    britishEnglish: 'ئینگلیزیی بەریتانی',
    
    // Categories
    categories: 'جۆرەکان',
    addCategory: 'زیادکردنی جۆر',
    categoryAdded: 'جۆرەکە بە سەرکەوتوویی زیادکرا',
    categoryExists: 'ئەم جۆرە هەیە',
    deleteCategory: 'سڕینەوەی جۆر',
    units: 'دانەکان',
    addUnit: 'زیادکردنی دانە',
    deleteUnit: 'سڕینەوەی دانە',
    
    // Users
    users: 'بەکارهێنەران',
    user: 'بەکارهێنەر',
    employee: 'کارمەند',
    addUser: 'زیادکردنی بەکارهێنەر',
    editUser: 'دەستکاری بەکارهێنەر',
    deleteUser: 'سڕینەوەی بەکارهێنەر',
    fullName: 'ناوی تەواو',
    role: 'ڕۆڵ',
    phone: 'تەلەفۆن',
    email: 'ئیمەیڵ',
    active: 'چالاک',
    inactive: 'ناچالاک',
    permissions: 'دەسەڵاتەکان',
    lastLogin: 'کۆتا چوونەژوورەوە',
    
    // Products
    productName: 'ناوی کاڵا',
    barcode: 'بارکۆد',
    category: 'جۆر',
    unit: 'دانە',
    priceType: 'جۆری نرخ',
    buyPrice: 'نرخی کڕین',
    sellPrice: 'نرخی فرۆشتن',
    stock: 'کۆگا',
    minStock: 'کەمترین کۆگا',
    addNewProduct: 'زیادکردنی کاڵای نوێ',
    editProduct: 'دەستکاری کاڵا',
    deleteProduct: 'سڕینەوەی کاڵا',
    
    // Warranty
    warrantyManagement: 'بەڕێوەبردنی زەمان',
    warranties: 'زەمانەکان',
    warrantyActive: 'زەمانی چالاک',
    warrantyExpired: 'زەمانی بەسەرچووە',
    warrantyStatus: 'بارودۆخی زەمان',
    warrantyDetails: 'وردەکاریەکانی زەمان',
    warrantyDuration: 'ماوەی زەمان',
    warrantyEndDate: 'بەرواری کۆتایی زەمان',
    warrantyExpiredOn: 'زەمان بەسەرچووە لە',
    warrantyGivenToCustomer: 'زەمان دراوە بە کڕیار',
    noWarranty: 'زەمان نییە',
    noWarrantySet: 'زەمان دانەنراوە',
    purchaseWarranty: 'زەمانی کڕین',
    saleWarranty: 'زەمانی فرۆشتن',
    months: 'مانگ',
    expiryDate: 'بەرواری بەسەرچوون',
    expired: 'بەسەرچووە',
    expiredProducts: 'کاڵا بەسەرچووەکان',
    daysExpired: 'ڕۆژ بەسەرچووە',
    inventoryAdjustment: 'جەردی کۆگا',
    dollarRateChange: 'گۆڕانی نرخ بە دۆلار',
    noExpiredProducts: 'هیچ کاڵایەکی بەسەرچوو نییە',
    viewDetails: 'بینینی وردەکاری',
    returnToSupplier: 'گەڕاندنەوە بۆ دابینکەر',
    sellAtDiscount: 'فرۆشتن بە نرخی کەم',
    discountPrice: 'نرخی داشکاندن',
    discountAmount: 'بڕی داشکاندن',
    originalPrice: 'نرخی بنەڕەت',
    willBeRecordedAsExpense: 'وەک خەرجی تۆمار دەکرێت',
    discountNote: 'تێبینی: بڕی داشکاندنەکە وەک خەرجی تۆمار دەکرێت',
    perUnit: 'بۆ هەر یەک',
    processing: 'چالاککردن...',
    selectPurchase: 'هەڵبژاردنی وەسڵی کڕین',
    mostRecentPurchase: 'دواترین وەسڵ',
    purchaseInfo: 'ئەگەر وەسڵ هەڵبژێریت، نرخی کڕین لە وەسڵەکە بەکار دەهێنرێت',
    unitCost: 'نرخی دانە',
    notAvailable: 'بەردەست نییە',
    available: 'بەردەست',
    days: 'ڕۆژ',
    discard: 'فرێدان',
    discardWarning: 'تێبینی: کاڵاکە لە کۆگا دەسڕێتەوە و وەک خەرجی تۆمار دەکرێت',
    totalLoss: 'کۆی خەسارەت',
    discardReasonPlaceholder: 'هۆکاری فرێدان...',
    cashAmount: 'بڕی نەقد',
    exchange: 'بەدڵکردنەوە',
    exchangeNote: 'تێبینی: کاڵاکە بە هەمان بڕ بەدڵدەکرێتەوە بە بەرواری نوێ',
    newExpiryDate: 'بەرواری نوێی بەسەرچوون',
    currentExpiryDate: 'بەرواری ئێستای بەسەرچوون',
    currentQuantity: 'بڕی ئێستا',
    notes: 'تێبینی',
    exchangeNotesPlaceholder: 'تێبینی دەربارەی بەدڵکردنەوە...',
    exchangeDateNote: 'بەرواری نوێ بۆ کاڵای بەدڵکراوە',
    exchangeQuantityNote: 'بڕەکە وەکو خۆی دەمێنێتەوە، تەنها بەرواری بەسەرچوون دەگۆڕێت',
    exchangeRevertNote: 'تێبینی: تەنها تۆمارەکە سڕایەوە. پێویستە بەرواری کۆن بە دەستی بنووسیتەوە',
    
    // Customers
    customerName: 'ناوی کڕیار',
    customerId: 'ID کڕیار',
    customerPhone: 'ژمارەی تەلەفۆن',
    customerAddress: 'ناونیشان',
    balance: 'باڵانس',
    debt: 'قەرز',
    addNewCustomer: 'زیادکردنی کڕیاری نوێ',
    
    // Sales
    sale: 'فرۆشتن',
    sales: 'فرۆشتنەکان',
    noSales: 'هیچ فرۆشتنێک نییە',
    total: 'کۆی گشتی',
    paid: 'پارەی دراو',
    remaining: 'پارەی ماوە',
    discount: 'داشکاندن',
    change: 'پارەی گەڕاوە',
    payment: 'پارەدان',
    cash: 'کاش',
    card: 'کارت',
    package: 'پارچە',
    paymentMethod: 'جۆری پارەدان',
    print: 'پرینت',
    
    // Reports
    dailyReport: 'ڕاپۆرتی ڕۆژانە',
    monthlyReport: 'ڕاپۆرتی مانگانە',
    profit: 'قازانج',
    revenue: 'داهات',
    cost: 'نرخی کڕین',
    
    // Dates
    today: 'ئەمڕۆ',
    yesterday: 'دوێنێ',
    thisWeek: 'ئەم حەفتەیە',
    lastWeek: 'حەفتەی پێشوو',
    thisMonth: 'ئەم مانگە',
    lastMonth: 'مانگی پێشوو',
    lastYear: 'ساڵی پێشوو',
    date: 'بەروار',
    from: 'لە',
    to: 'بۆ',
    
    // Dashboard
    welcome: 'بەخێربێیت!',
    dashboardOverview: 'پێشاندانی گشتی سیستەمی کاشێری',
    todayRevenue: 'فرۆشتنی ئەمڕۆ',
    todayProfit: 'قازانجی ئەمڕۆ',
    netProfit: 'قازانجی پاک',
    todayExpenses: 'خەرجیەکانی ئەمڕۆ',
    totalRevenue: 'کۆی فرۆشتن',
    totalProfit: 'کۆی قازانج',
    totalExpenses: 'کۆی خەرجیەکان',
    cashInHand: 'پارەی دەست',
    lowStockAlert: 'ئاگاداری کاڵای کەم',
    recentSales: 'فرۆشتنە نوێیەکان',
    invoice: 'وەسڵ',
    invoiceNumber: 'ژمارەی وەسڵ',
    newInvoice: 'وەسڵی نوێ',
    thankYouMessage: 'سوپاس بۆ کڕینەکەت!',
  receipt: 'وەسڵ',
  receiptNumber: 'ژمارەی وەسڵ',
  paperSize: 'قەبارەی کاغەز',
  visitAgain: 'چاوەڕوانی دووبارە سەردانتین',
    showRemainingOnReceipt: 'پیشاندانی پارەی ماوە لە وەسڵ',
    showCustomerName: 'پیشاندانی ناوی کڕیار',
    errorReturnNote: 'هەڵە و لەبیرچوون دەگەڕێتەوە بۆ هەردوو لا',
    items: 'کاڵاکان',
    amount: 'بڕ',
    view: 'بینین',
    updateDollarRate: 'نوێکردنەوەی نرخی دۆلار',
    currentRate: 'نرخی ئێستا',
    newRate: 'نرخی نوێ',
    update: 'نوێکردنەوە',
    revenueMinusExpenses: 'داهات - خەرجی',
    selectSections: 'بەشەکان هەڵبژێرە',
    dollarRateTitle: 'نرخی دۆلار',
    dollarRateInDinar: 'نرخ بە دینار',
    rateInDollar: 'نرخ بە دۆلار:',
    activities: 'چالاکیەکان',
    dollarRateNote: 'نرخی دۆلار بۆ گۆڕینی نرخەکان لە دینار بۆ دۆلار بەکاردێت.',
    dollarRateMustBeGreater: 'نرخی دۆلار دەبێت گەورەتر بێت لە سفر',
    dollarRateTooLarge: 'نرخی دۆلار زۆر گەورەیە',
    dollarRateUpdatedSuccess: 'نرخی دۆلار بە سەرکەوتوویی نوێ کرایەوە ✓',
    dollarRateUpdateError: 'هەڵەیەک ڕوویدا لە نوێکردنەوەی نرخی دۆلار',
    totalLabel: 'کۆی گشتی',
    expensesLabel: 'خەرجی',
    totalExpensesLabel: 'کۆی خەرجی',
    productsLabel: 'بەرهەم',
    totalProductsLabel: 'کۆی بەرهەم',
    salesLabel: 'فرۆشەکان',
    returnsLabel: 'گەرانەوەی فرۆش',
    last10: 'کۆتا ١٠',
    noSalesFound: 'هیچ فرۆشتنێک نییە',
    noReturnsFound: 'هیچ گەرانەوەیەک نییە',
    quickStats: 'ئامارە خێراکان',
    productItem: 'کاڵا',
    
    // Purchase History
    purchaseHistory: 'ئامارەکانی کڕین',
    viewPurchaseHistory: 'سەیرکردنی مێژووی کڕینەکان',
    noPurchaseHistory: 'هیچ مێژوویەکی کڕین نییە',
    productNotPurchasedYet: 'ئەم کاڵایە هێشتا نەکڕاوە',
    totalPurchases: 'کۆی کڕین',
    totalQuantity: 'کۆی بڕ',
    lastPurchasePrice: 'دوایین نرخ',
    oldPurchaseCost: 'نرخی کۆن',
    purchaseCostDiff: 'جیاوازی کرین',
    totalSpent: 'کۆی کڕین',
    times: 'جار',
    noPurchasesFound: 'هیچ کڕینێک نەدۆزرایەوە',
    tryDifferentFilters: 'فلتەری جیاواز تاقی بکەرەوە',
    allSuppliers: 'هەموو دابینکاران',
    allProducts: 'هەموو کاڵاکان',
    dateFrom: 'لە بەرواری',
    dateTo: 'بۆ بەرواری',
    allCurrencies: 'هەموو دراوەکان',
    allMethods: 'هەموو جۆرەکان',
    searchInvoiceOrNotes: 'ژمارەی وەسڵ، تێبینی...',
    purchasesList: 'لیستی کڕینەکان',
    filters: 'فلتەر',
    clearFilters: 'سڕینەوەی فلتەر',
    showImages: 'پیشاندانی وێنە',
    allPurchases: 'هەموو کڕینەکان',
    totalItems: 'کۆی کاڵاکان',
    totalCost: 'کۆی نرخ',
    notSpecified: 'دیاری نەکراوە',
    unknown: 'نەزانراو',
    
    cashBalance: 'باڵانسی کاش',
    cashAvailable: 'پارەی بەردەست',
    fromCustomers: 'لە کڕیاران',
    alerts: 'ئاگادارییەکان',
    lowStockProductsAlert: 'کاڵای نزیک لە بڕین',
    quantityLow: 'بڕیان کەمە',
    customerDebt: 'قەرزی کڕیاران',
    allGood: 'هەموو شتێک باشە!',
    noIssuesInSystem: 'هیچ کێشەیەک نییە لە سیستەمەکەدا',
    noSalesYet: 'هیچ فرۆشتنێک نییە',
    productsLowQuantity: 'کاڵا بڕیان کەمە',
    
    // POS
    scanBarcode: 'سکانی بارکۆد',
    quantity: 'بڕ',
    quantityInStock: 'بڕی ناو کۆگا',
    price: 'نرخ',
    subtotal: 'کۆی لاوەکی',
    totalAmount: 'کۆی گشتی',
    selectCustomer: 'هەڵبژاردنی کڕیار',
    noCustomer: 'بێ کڕیار',
    addDiscount: 'داشکاندن',
    paymentType: 'جۆری پارەدان',
    completeSale: 'تەواوکردنی فرۆشتن',
    clearCart: 'پاککردنەوەی سەبەتە',
    saveCart: 'پاشەکەوتکردنی سەبەتە',
    savedCarts: 'سەبەتە پاشەکەوتکراوەکان',
    cart: 'سەبەتە',
    loadCart: 'بارکردنی سەبەتە',
    cartEmpty: 'سەبەتە بەتاڵە',
    invoices: 'وەسڵ',
    invoicesMenu: 'وەسڵەکان',
  orders: 'ئۆردەرەکان',
    load: 'بارکردنەوە',
    addItems: 'زیادکردنی کاڵا',
    newTab: 'تابی نوێ',
    paidAmount: 'بڕی پارە',
    session: 'دانیشتن',
    tab: 'تاب',
    cannotCloseLastTab: 'ناتوانیت کۆتا تابەکە دابخەیت',
    tabHasItems: 'ئەم تابە کاڵای تێدایە. دڵنیایت لە داخستن؟',
    sureToCloseTab: 'دڵنیایت لە داخستن؟',
    confirmClearCart: 'دڵنیایت لە پاککردنەوەی سەبەتە؟',
    cartSaved: 'وەسڵەکە هەڵگیرا!',
    savingCart: 'سرینەوەی وەسڵ',
    restoringCart: 'دانەخستنەوەی وەسڵ',
    cartSavedMessage: 'هەڵگیرا',
    confirmLoadCart: 'سەبەتەی ئێستا سڕێتەوە و ئەم وەسڵە بارکرێتەوە؟',
    cartNotEmpty: 'سەبەتە بەتاڵ نییە',
    wantToSaveOrDiscard: 'دەتەوێت وەسڵەکە هەڵبگریت یان بسڕیتەوە؟',
    saveCartPark: 'هەڵگرتنی وەسڵ',
    discardAndGo: 'سڕینەوە و بڕۆ',
    parkDraft: 'پارک کردنی تۆمار',
    discardDraft: 'فڕێدانی داتا و گەڕان',
    saveData: 'پاراستنی داتا',
    discardDataAndGo: 'فڕێدانی داتا و گەڕان',
    unsavedDataConfirm: 'داتای ناسەراوەت هەیە لەم بەشەدا. دەتەوێت داتاکە بپارێزیت یان فڕێی بدەیت؟',
    unsavedProductDataConfirm: 'داتای تۆمارکردنی کاڵات هەیە. دەتەوێت پارک بکەیت یان فڕێی بدەیت؟',
    goBack: 'پاشگەزبوونەوە',
    selectCustomerForDebt: 'تکایە کڕیارێک هەڵبژێرە بۆ فرۆشتنی بە قەرز',
    noProductsFound: 'هیچ کاڵایەک نەدۆزرایەوە',
    allCategories: 'هەموو جۆرەکان',
    seller: 'فرۆشیار',
    selectSeller: 'هەڵبژاردنی فرۆشیار',
    generalSale: 'فرۆشتنی گشتی',
    soldBy: 'فرۆشراوە لەلایەن',
    retail: 'تاک',
    wholesale: 'جوملە',
    special: 'تایبەت',
    retailPrice: 'نرخی تاک',
    wholesalePrice: 'نرخی کۆ',
    specialPrice: 'نرخی تایبەت',
    piece: 'پارچە',
    carton: 'کارتۆن',
    box: 'قوتو',
    baseUnit: 'دانەی بنەڕەت',
    addProductsToStart: 'کاڵا زیاد بکە بۆ دەستپێکردن',
    updateButton: 'نوێکردنەوە',
    addButton: 'زیادکردن',
    drinks: 'خواردنەوە',
    bread: 'نان',
    food: 'خواردن',
    cleaningSupplies: 'پاککەرەوە',
    homeGoods: 'کەرەستەی ماڵەوە',
    in: 'لە',
    barcodeRequired: 'بە لایەنی کەمەوە یەک باڕکۆد پێویستە',
    barcodeAlreadyExists: 'ئەم بارکۆدە بەکار هاتوە',
    productNameAlreadyExists: 'کاڵای بەم ناوە پێشتر تۆمار کراوە. تکایە ناوی جیاواز هەڵبژێرە.',
    productAddedSuccess: 'کاڵاکە بە سەرکەوتوویی زیادکرا ✓',
    errorOccurred: 'هەڵەیەک ڕوویدا',
    resetForm: 'سڕینەوەی فۆرم',
    basicInfo: 'زانیاری سەرەکی',
    selectOption: 'هەڵبژێرە',
    company: 'کۆمپانیا',
    onlyUnit: 'تەنها دانە',
    unitPlusPackage: 'دانە + پارچە',
    unitPlusCarton: 'دانە + کارتۆن',
    allUnits: 'هەموو (دانە + پارچە + کارتۆن)',
    purchasePrice: 'نرخی کڕین',
    generate: 'دروست',
    prices: 'نرخی تاک',
    productImage: 'وێنەی کاڵا',
    notes: 'تێبینی',
    notesPlaceholder: 'تێبینی بۆ کاڵاکە...',
    saveProduct: 'تۆمارکردنی کاڵا',
    productManagement: 'بەشی کۆگا',
    salePrice: 'نرخی فرۆشتن',
    selectCategory: 'جۆر هەڵبژێرە',
    automatic: 'ئۆتۆماتیک',
    fromSettings: 'لە ڕێکخستنەکان',
    confirmDeleteProduct: 'دڵنیای لە سڕینەوەی ئەم کاڵایە؟',
    imageLabel: 'وێنە',
    cancelButton: 'هەڵوەشاندنەوە',
    customerManagement: 'بەڕێوەبردنی کڕیاران',
    
    // Offers
    createOffer: 'دروستکردنی ئۆفەر',
    offerName: 'ناوی ئۆفەر',
    offerDescription: 'وەسفی ئۆفەر',
    offerStartDate: 'بەرواری دەستپێکردن',
    offerEndDate: 'بەرواری کۆتایی',
    offerPrice: 'نرخی ئۆفەر',
    offerDiscount: 'داشکاندن',
    offerDiscountPercent: 'داشکاندن (%)',
    addProductToOffer: 'زیادکردنی کاڵا بۆ ئۆفەر',
    offerProducts: 'کاڵاکانی ئۆفەر',
    offerManagement: 'بەڕێوەبردنی ئۆفەر',
    saveOffer: 'پاشەکەوتکردنی ئۆفەر',
    offerUpdated: 'ئۆفەر بە سەرکەوتوویی نوێکرایەوە',
    cancelOffer: 'هەڵوەشاندنی ئۆفەر',
    noProductsInOffer: 'هیچ کاڵایەک لە ئۆفەردا نییە',
    selectProductsForOffer: 'کاڵا هەڵبژێرە بۆ ئۆفەر',
    noOffers: 'هیچ ئۆفەرێک نییە',
    deactivate: 'ناچالاککردن',
    totalDiscount: 'کۆی داشکاندن',
    duplicateOffer: 'کۆپی کردنی ئۆفەر',
    copyOffer: 'کۆپی',
    printOffer: 'چاپکردنی ئۆفەر',
    exportOffer: 'دەرهێنانی ئۆفەر',
    importOffer: 'هاوردەکردنی ئۆفەر',
    offerCopied: 'ئۆفەر بە سەرکەوتوویی کۆپی کرا',
    offerScope: 'جۆری ئۆفەر',
    exampleOffer: 'نمونە',
    specificOffer: 'بە دیاری',
    minimumQuantity: 'کەمترین بڕ',
    minQuantityPerCustomer: 'کەمترین بڕ بۆ هەر کڕیارێک',
    minQuantityPerCustomerDesc: 'کەمترین بڕی کڕین بۆ هەر کڕیارێک (ئەگەر 0 بێت، سنوور نییە)',
    maxQuantityPerCustomer: 'زۆرترین بڕ بۆ هەر کڕیارێک',
    maxQuantityPerCustomerDesc: 'زۆرترین بڕی کڕین بۆ هەر کڕیارێک (ئەگەر 0 بێت، سنوور نییە)',
    offerStatistics: 'ئامارەکانی ئۆفەر',
    offerType: 'جۆری ئۆفەر',
    discountOffer: 'داشکاندن',
    specialPriceOffer: 'نرخی تایبەت',
    buyXGetYOffer: 'بکڕە X بگرە Y (هەمان کاڵا)',
    buyXGetYDifferentOffer: 'بکڕە X لە کاڵای A، بگرە Y لە کاڵای B',
    freeGiftOffer: 'بەخشی',
    percentageDiscount: 'داشکاندن بە لێکەوتە',
    fixedDiscount: 'داشکاندنی دیاریکراو',
    buyQuantity: 'بکڕە',
    getQuantity: 'بگرە',
    freeProduct: 'کاڵای بەخشی',
    buyProduct: 'کاڵای بکڕین',
    getProduct: 'کاڵای بگرتن',
    
    editCustomer: 'دەستکاری کڕیار',
    confirmDeleteCustomer: 'دڵنیای لە سڕینەوەی ئەم کڕیارە؟',
    phoneNumber: 'ژمارەی تەلەفۆن',
    customerNamePlaceholder: 'ئەحمەد مەحمود',
    phoneNumberPlaceholder: '07501234567',
    
    // Suppliers
    supplierManagement: 'بەڕێوەبردنی دابینکەران',
    supplierInfo: 'زانیاری و لیستی هەموو دابینکەران',
    newSupplier: 'دابینکەری نوێ',
    totalSuppliers: 'کۆی دابینکەران',
    totalDebt: 'کۆی قەرز',
    debtors: 'قەرزدار',
    searchSupplier: 'گەڕان بە ناو یان تەلەفۆن...',
    noSuppliers: 'هیچ دابینکەرێک تۆمار نەکراوە',
    editSupplier: 'دەستکاری دابینکەر',
    confirmDeleteSupplier: 'دڵنیایت لە سڕینەوەی ئەم دابینکەرە؟',
    supplierName: 'ناوی دابینکەر',
    address: 'ناونیشان',
    emailOptional: 'ئیمەیڵ (ئیختیاری)',
    notesOptional: 'تێبینی (ئیختیاری)',
    namePlaceholder: 'ناو...',
    addressPlaceholder: 'ناونیشانی تەواو...',
    
    // Purchases
    purchaseManagement: 'بەڕێوەبردنی کڕین',
    purchaseDescription: 'کڕین لە دابینکەران و زیادکردنی کاڵا بۆ کۆگا',
    totalExpense: 'کۆی خەرج',
    supplierDebt: 'قەرزی دابینکەران',
    newPurchase: 'کڕینی نوێ',
    purchaseDescription2: 'کاڵا زیاد بکە و کڕینەکە تەواو بکە',
    selectSupplier: 'دابینکەر هەڵبژێرە',
    selectSupplierForDebt: 'تکایە دابینکەرێک هەڵبژێرە بۆ کڕینی بە قەرز',
    selectProduct: 'کاڵایەک هەڵبژێرە',
    productQuantity: 'ژمارەی کاڵا',
    noItemsAdded: 'هیچ کاڵایەک زیاد نەکراوە',
    grandTotal: 'کۆی گشتی',
    amountPaid: 'بڕی پارەدراو',
    completePurchase: 'تەواوکردنی کڕین',
    purchaseList: 'لیستی کڕینەکان',
    noPurchases: 'هیچ کڕینێک تۆمار نەکراوە',
    details: 'وردەکاری',
    purchaseDetails: 'وردەکاری کڕین',
    purchaseDate: 'بەرواری کڕین',
    fillAllFields: 'تکایە هەموو زانیارییەکان پڕ بکەرەوە',
    addAtLeastOneProduct: 'تکایە لانیکەم کاڵایەک زیاد بکە',
    purchaseRecorded: 'کڕین بە سەرکەوتوویی تۆمار کرا',
    lastPrice: 'نرخی کۆتایی',
    product: 'کاڵا',
    optional: 'ئیختیاری',
    
    // Safe
    safeManagement: 'بەڕێوەبردنی سندوق',
    cashTransactions: 'مامەڵەکانی کاش',
    safeBalance: 'باڵانسی سندوق',
    totalIn: 'کۆی هاتنە ژوورەوە',
    totalOut: 'کۆی چوونە دەرەوە',
    newTransaction: 'مامەڵەی نوێ',
    transactionList: 'لیستی مامەڵەکان',
    noTransactions: 'هیچ مامەڵەیەک تۆمار نەکراوە',
    transactionType: 'جۆری مامەڵە',
    moneyIn: 'هاتنە ژوورەوە',
    moneyOut: 'چوونە دەرەوە',
    transactionDetails: 'وردەکاری مامەڵەکە',
    reference: 'مراجع',
    referenceOptional: 'ژمارەی مراجع (ئیختیاری)',
    confirmDeleteTransaction: 'دڵنیایت لە سڕینەوەی ئەم مامەڵەیە؟',
    allTransactions: 'هەموو',
    moneyAmount: 'بڕی پارە',
    type: 'جۆر',
    dateLabel: 'بەروار',
    
    // Expenses
    expenseManagement: 'بەڕێوەبردنی خەرجیەکان',
    expenseDescription: 'تۆماری هەموو خەرجیەکانی دوکان',
    newExpense: 'خەرجیی نوێ',
    expenseList: 'لیستی خەرجیەکان',
    noExpenses: 'هیچ خەرجیەک تۆمار نەکراوە',
    editExpense: 'دەستکاری خەرجی',
    expenseType: 'جۆری خەرجی',
    expenseDetails: 'وردەکاری خەرجدانە',
    confirmDeleteExpense: 'دڵنیایت لە سڕینەوەی ئەم خەرجییە؟',
    allTypes: 'هەموو جۆرەکان',
    
    // Categories
    rent: 'کرێ',
    salary: 'مووچە',
    salaryAndRent: 'مەعاش و کرێ',
    salaryAndRentManagement: 'بەڕێوەبردنی مەعاشی کارمەندان و کرێی دوکان',
    employeeSalaries: 'مەعاشی کارمەندان',
    shopRent: 'کرێی دوکان',
    addSalary: 'زیادکردنی مەعاش',
    editSalary: 'دەستکاری مەعاش',
    salaryType: 'جۆری مەعاش',
    salaryAmount: 'بڕی مەعاش',
    daily: 'رۆژانە',
    monthly: 'مانگانە',
    salaryList: 'لیستی مەعاشەکان',
    noSalaries: 'هیچ مەعاشێک نییە',
    paymentDue: 'کاتی پارەدان هاتووە',
    totalPaid: 'کۆی پارەدراو',
    lastPayment: 'دوایین پارەدان',
    nextPayment: 'پارەدانی داهاتوو',
    noPayments: 'هیچ پارەیەک نەدراوە',
    paymentHistory: 'مێژووی پارەدان',
    paySalary: 'پارەدان',
    payRent: 'پارەدانی کرێ',
    recordPayment: 'تۆمارکردنی پارەدان',
    selectEmployee: 'هەڵبژاردنی کارمەند',
    addRent: 'زیادکردنی کرێ',
    updateRent: 'نوێکردنەوەی کرێ',
    rentAmount: 'بڕی کرێ',
    paymentDate: 'بەرواری پارەدان',
    nextPaymentDate: 'پارەدانی داهاتوو',
    nextPaymentDateNote: 'تێبینی: بەرواری پارەدانی داهاتوو ئۆتۆماتیک ٣٠ رۆژ زیاد دەکرێت',
    noRentInfo: 'هیچ زانیاری کرێ نییە',
    paymentAlertTitle: 'ئاگاداری پارەدان',
    salaryPaymentDue: 'کاتی پارەدانی مەعاشی',
    salaryPaymentNear: 'کاتی پارەدانی مەعاشی',
    rentPaymentDue: 'کاتی پارەدانی کرێی دوکان هاتووە!',
    rentPaymentNear: 'کاتی پارەدانی کرێی دوکان نزیکە',
    employeeNotSelected: 'کارمەند هەڵبژێردراوە',
    confirmDeleteSalary: 'دڵنیایت لە سڕینەوەی ئەم مەعاشە؟',
    loanGiven: 'قەرزدان',
    loanReceived: 'قەرزوەرگرتن',
    gift: 'دیاری',
    other: 'هیتر',
    electricity: 'کارەبا',
    water: 'ئاو',
    delivery: 'گەیاندن',
    repair: 'چاککردنەوە',
    cleaning: 'پاککردنەوە',
    internet: 'ئینتەرنێت',
    telephone: 'تەلەفۆن',
    storeSupplies: 'کەرەستەی دوکان',
    
    // Reports
    profitLossReport: 'ڕاپۆرتی قازانج و زەرەر',
    todayReport: 'ڕاپۆرتی ئەمڕۆ',
    returnedGoods: 'گەڕانەوەی کاڵا',
    expenseBreakdown: 'بەشکردنی خەرجیەکان',
    todayReturns: 'گەڕانەوەکانی ئەمڕۆ',
    returnId: 'گەڕانەوە',
    saleId: 'وەسڵی',
    noReturnsToday: 'هیچ گەڕانەوەیەک ئەمڕۆ نییە',
    nearOutOfStock: 'کاڵای نزیک لە بڕین',
    allGoodsOk: 'هەموو کاڵاکان باشن',
    code: 'کۆد',
    totalSales: 'کۆی فرۆشتن',
    invoiceList: 'لیستی وەسڵەکان',
    searchInvoice: 'گەڕان بە ژمارەی وەسڵ یان کڕیار...',
    all: 'هەموو',
    week: 'هەفتە',
    month: 'مانگ',
    noInvoicesFound: 'هیچ وەسڵێک نەدۆزرایەوە',
    returnFromCustomer: 'گەڕاندنەوە لە کڕیار',
    customerHistory: 'مێژووی کڕیار',
    supplierHistory: 'مێژووی دابینکار',
    searchForInvoiceOrCustomer: 'گەڕان بۆ وەسڵ یان کڕیار',
    selectInvoice: 'هەڵبژاردنی وەسڵ',
    selectItems: 'هەڵبژاردنی کاڵا',
    returnQuantity: 'کۆی گەڕانەوە:',
    returnReason: 'هۆکاری گەڕانەوە',
    writeReturnReason: 'هۆکاری گەڕاندنەوەی کاڵا بنووسە...',
    selectedItems: 'کاڵای هەڵبژاردوو:',
    totalReturn: 'کۆی گەڕانەوە:',
    returnHistoryCustomer: 'مێژووی گەڕانەوەی کڕیار',
    returnHistorySupplier: 'مێژووی گەڕانەوەی دابینکار',
    supplierReturnTo: 'گەڕاندنەوەی کاڵا بۆ:',
    returnCount: 'گەڕانەوە',
    editInvoice: 'دەستکاریکردنی وەسڵ',
    customerNameLabel: 'ناوی کڕیار',
    cancelChanges: 'پاشگەزبوونەوە',
    confirmDelete: 'دڵنیایی لە سڕینەوە؟',
    confirmDeleteMessage: 'دڵنیایت لە سڕینەوە؟',
    goodsWillReturn: 'کاڵاکان دەگەڕێنەوە بۆ کۆگا',
    
    // Returns
    returnGoods: 'گەڕانەوەی کاڵا',
    returnManagement: 'بەڕێوەبردنی گەڕانەوەی کاڵای فرۆشراو',
    totalReturns: 'کۆی گەڕانەوەکان',
    selectInvoiceForReturn: 'هەڵبژاردنی وەسڵ بۆ گەڕانەوەی کاڵا',
    hasReturn: 'هەیە گەڕانەوە',
    returnedAmount: 'گەڕاوەتەوە',
    clickToReturn: 'کلیک بکە بۆ گەڕانەوەی کاڵا ←',
    selectGoodsToReturn: 'هەڵبژاردنی کاڵاکان بۆ گەڕانەوە',
    returnReasonPlaceholder: 'هۆکاری گەڕانەوەی کاڵاکە بنووسە...',
    selectedGoods: 'کۆی کاڵای هەڵبژێردراو',
    returnTotal: 'کۆی گەڕانەوە',
    processReturn: 'پرۆسێکردنی گەڕانەوە',
    confirmReturnTitle: 'دڵنیایی لە گەڕانەوەکە؟',
    confirmReturnMessage: 'دوای پرۆسەی گەڕانەوەکە، کاڵاکان دەگەڕێنەوە کۆگا و پارە دەگەڕێتەوە سندوق',
    totalGoods: 'کۆی کاڵا',
    waitingText: 'چاوەڕێ بە...',
    confirmButton: 'دڵنیام',
    returnHistory: 'مێژووی گەڕانەوەکان',
    returnRecorded: 'گەڕانەوەکە بە سەرکەوتوویی تۆمار کرا!',
    returnError: 'هەڵە لە تۆمارکردنی گەڕانەوەکە!',
    history: 'مێژوو',
    noHistory: 'هیچ مێژوویەک نییە',
    deleted: 'سڕایەوە',
    confirmRevert: 'دڵنیای لە وەرگرتنەوە؟ کاڵاکە دەگەڕێتەوە بۆ کۆگا.',
    reverted: 'وەرگیرایەوە',
    revert: 'وەرگرتنەوە',
    updated: 'نوێکرایەوە',
    
    // Products
    productList: 'لیستی کاڵاکان',
    productDetails: 'وردەکاریەکانی کاڵا',
    image: 'وێنە',
    description: 'پێناسە',
    supplier: 'دابینکەر',
    lowStock: 'کاڵای کەم',
    inStock: 'لە کۆگادا',
    outOfStock: 'لە کۆگا نییە',
    actions: 'کردارەکان',
    
    // Customers
    customer: 'کڕیار',
    customerList: 'لیستی کڕیاران',
    addCustomer: 'زیادکردنی کڕیار',
    customerDetails: 'وردەکاریەکانی کڕیار',
    payDebt: 'پارەدانەوەی قەرز',
    debtHistory: 'مێژووی قەرز',
    noDebt: 'قەرز نییە',
    
    // Sales History
    salesHistory: 'مێژووی فرۆشتن',
    saleDetails: 'وردەکاریەکانی فرۆشتن',
    paymentStatus: 'بارودۆخی پارەدان',
    fullPaid: 'تەواو دراوە',
    partialPaid: 'بەشێک دراوە',
    unpaid: 'نەدراوە',
    viewAllSalesReceipts: 'سەیری هەموو وەسڵەکان بکە',
    salesList: 'لیستی فرۆشتنەکان',
    noResultsWithFilters: 'هیچ نەتیجەیەک بەپێی فلتەرەکان نەدۆزرایەوە',
    
    // Expenses
    addExpense: 'زیادکردنی خەرجی',
    expenseDate: 'بەرواری خەرجی',
    expenseAmount: 'بڕی خەرجی',
    expenseNote: 'تێبینی',
    
    // Suppliers
    supplierList: 'لیستی دابینکەران',
    addSupplier: 'زیادکردنی دابینکەر',
    supplierAdded: 'دابینکارەکە بە سەرکەوتوویی زیادکرا',
    supplierPhone: 'ژمارەی دابینکەر',
    supplierAddress: 'ناونیشانی دابینکەر',
    supplierProducts: 'کاڵاکانی دابینکەر',
    
    // Purchases
    addPurchase: 'زیادکردنی کڕین',
    purchaseAmount: 'بڕی کڕین',
    purchaseItems: 'کاڵاکانی کڕین',
    
    // Safe
    deposits: 'داخلکردن',
    withdrawals: 'دەرکردن',
    addDeposit: 'زیادکردنی داخلکردن',
    addWithdrawal: 'زیادکردنی دەرکردن',
    transactionHistory: 'مێژووی مامەڵەکان',
    deposit: 'داخلکردن',
    withdrawal: 'دەرکردن',
    note: 'تێبینی',
    
    // Returns
    returnsList: 'لیستی گەڕانەوەکان',
    addReturn: 'زیادکردنی گەڕانەوە',
    returnDate: 'بەرواری گەڕانەوە',
    returnAmount: 'بڕی گەڕانەوە',
    refund: 'گەڕانەوەی پارە',
    
    // Reports
    salesReport: 'ڕاپۆرتی فرۆشتن',
    profitReport: 'ڕاپۆرتی قازانج',
    expensesReport: 'ڕاپۆرتی خەرجیەکان',
    inventoryReport: 'ڕاپۆرتی کۆگا',
    customerReport: 'ڕاپۆرتی کڕیاران',
    generateReport: 'دروستکردنی ڕاپۆرت',
    exportReport: 'هەناردەکردنی ڕاپۆرت',
    printReport: 'پرینتکردنی ڕاپۆرت',
    period: 'ماوە',
    summary: 'پوختە',
    
    // Backup
    createBackup: 'دروستکردنی هەڵگرتن',
    restoreBackup: 'گەڕانەوەی هەڵگرتن',
    autoBackup: 'هەڵگرتنی خۆکار',
    backupNow: 'هەڵگرتن ئێستا',
    lastBackup: 'کۆتا هەڵگرتن',
    backupHistory: 'مێژووی هەڵگرتنەکان',
    downloadBackup: 'داگرتنی هەڵگرتن',
    uploadBackup: 'بارکردنی هەڵگرتن',
    backupRestoreTitle: 'هەڵگرتن و گەڕاندنەوەی داتا',
    backupRestoreDesc: 'داتاکانت هەڵگرە و گەڕێنەوە بۆ پاراستنی ئەمانە',
    dbStatistics: 'ئامارەکانی داتابەیس',
    invoiceDesigner: 'دیزاینی وەسڵ',
    backupFolder: 'فۆڵدەری هەڵگرتن',
    selectBackupFolder: 'هەڵبژاردنی فۆڵدەر',
    noFolderSelected: 'فۆڵدەرێک هەڵنەبژێردراوە',
    autoBackupEvery24Hours: 'هەڵگرتنی خۆکار (٢٤ کاتژمێر)',
    autoBackupEnabled: 'هەڵگرتنی خۆکار چالاکە',
    autoBackupDisabled: 'هەڵگرتنی خۆکار ناچالاککرا',
    backupManual: 'هەڵگرتنی داتا',
    backupDescription: 'هەموو داتاکانی سیستەم هەڵدەگرێت وەک فایلێکی JSON کە دەتوانیت لە هەر شوێنێک هەڵیبگرێت',
    whatWillBeBackedUp: 'چی هەڵدەگیرێت:',
    allSalesPurchases: 'فرۆشتنەکان و کڕینەکان',
    suppliersExpenses: 'دابینکەران و خەرجەکان',
    usersSettings: 'بەکارهێنەران و ڕێکخستنەکان',
    licensePayments: 'مۆڵەتەکان و پارەدانەکان',
    backingUp: 'هەڵگرتن...',
    restoreData: 'گەڕاندنەوەی داتا',
    restoreWarning: 'ئاگاداری:',
    restoreWarningDesc: 'گەڕاندنەوەی داتا هەموو داتای ئێستا دەسڕێتەوە و داتای کۆن دەگەڕێنێتەوە. تکایە پێش گەڕاندنەوە داتاکانت هەڵبگرە!',
    selectBackupFile: 'فایلی هەڵگرتن هەڵبژێرە:',
    fileSize: 'قەبارە',
    restoring: 'گەڕاندنەوە...',
    tips: 'ئامۆژگاریەکان',
    backupDaily: 'هەموو ڕۆژێک داتاکانت هەڵبگرە بۆ پاراستنی ئەمانە',
    saveBackupsSafely: 'فایلەکانی هەڵگرتن لە شوێنێکی سەلامەت هەڵیبگرە',
    validateBeforeRestore: 'پێش گەڕاندنەوەی داتا، دڵنیابە کە فایلەکە دروستە',
    oldDataWillBeDeleted: 'داتای کۆن دەسڕێتەوە، بۆیە ئاگادار بە',
    backupSuccess: 'داتاکان بە سەرکەوتوویی هەڵگیرا',
    backupError: 'هەڵەیەک ڕوییدا لە هەڵگرتنی داتا',
    restoreSuccess: 'داتاکان بە سەرکەوتوویی گەڕێنرایەوە',
    restoreError: 'هەڵەیەک ڕوییدا لە گەڕاندنەوەی داتا',
    selectDataToBackup: 'هەڵبژاردنی داتاکان بۆ هەڵگرتن',
    selectDataToRestore: 'هەڵبژاردنی داتاکان بۆ گەڕاندنەوە',
    selectAll: 'هەڵبژاردنی هەموو',
    deselectAll: 'لابردنی هەڵبژاردن',
    resetAllData: 'سڕینەوەی هەموو داتاکان',
    resetAllDataDesc: 'سڕینەوەی تەواوی داتاکانی سیستەم (بەبێ لایسێنس)',
    confirmResetAllData: 'دڵنیایت لە سڕینەوەی هەموو داتاکان؟ ئەم کردارە ناگەڕێتەوە!',
    confirmResetAgain: 'جارێکی تر دڵنیا بەرەوە! هەموو داتاکان دەسڕێنەوە و ناگەڕێنەوە!',
    allDataDeleted: 'هەموو داتاکان سڕانەوە! پەیج refresh دەکرێت...',
    allDataWillBeDeleted: 'هەموو داتاکان دەسڕێنەوە',
    cannotBeUndone: 'ئەم کردارە ناگەڕێتەوە',
    licenseWillBeKept: 'لایسێنس دەمێنێتەوە',
    backupBeforeReset: 'پێش Reset، Backup بکە!',
    selectiveBackup: 'دەتوانیت تەنها داتای پێویست هەڵبژێریت بۆ هەڵگرتن',
    selectiveRestore: 'دەتوانیت تەنها داتای پێویست هەڵبژێریت بۆ گەڕاندنەوە',
    manual: 'بە دەستی',
    
    // Barcode Generator
    barcodeGeneratorDesc: 'دروستکردن و پرینتکردنی بارکۆد بۆ کاڵاکان',
    selectProducts: 'هەڵبژاردنی کاڵاکان',
    barcodeType: 'جۆری بارکۆد',
    labelSize: 'قەبارەی لەیبڵ',
    copies: 'کۆپی',
    showProductName: 'نیشاندانی ناوی کاڵا',
    showPrice: 'نیشاندانی نرخ',
    download: 'دابەزاندن',
    preview: 'پێشبینین',
    noProductsSelected: 'هیچ کاڵایەک هەڵنەبژێردراوە',
    clearSelection: 'پاککردنەوەی هەڵبژاردن',
    selectedCount: 'هەڵبژێردراو',
    printBarcodes: 'پرینتکردنی بارکۆدەکان',
    searchProducts: 'گەڕان بەدوای کاڵا...',
    advancedFilters: 'فلتەری پێشکەوتوو',
    priceRange: 'مەودای نرخ',
    minPrice: 'کەمترین',
    maxPrice: 'زۆرترین',
    stockLevel: 'ئاستی کۆگا',
    allStock: 'هەموو ئاستەکان',
    updateSuccess: 'کاڵاکە بە سەرکەوتوویی نوێکرایەوە! ✓',
    productAdded: 'کاڵاکە بە سەرکەوتوویی زیادکرا! ✓',
    small: 'بچووک',
    medium: 'مامناوەند',
    large: 'گەورە',
    customBarcode: 'بارکۆدی تایبەت',
    autoGenerateActive: '🎯 دروستکردنی ئۆتۆماتیک چالاکە - بارکۆد خۆکار دروست دەبێت!',
    enterName: 'ناو بنووسە...',
    enterCode: 'کۆد بنووسە...',
    addToPreview: 'زیادکردن بۆ پێشبینین',
    fillRequired: 'تکایە خانە پێویستەکان پڕبکەرەوە!',
    clear: 'پاککردنەوە',
    addDebtWithoutPurchase: 'زیادکردنی قەرزی بێ کڕین',
    printDebt: 'پرێنتی قەرز',
    viewDebts: 'بینینی قەرزەکان',
    previousInvoice: 'وەسڵی پێشوو',
    nextInvoice: 'وەسڵی دواتر',
    parkedInvoices: 'وەسڵە هەڵگیراوەکان',
    invoiceCount: 'وەسڵ',
    invoiceNumberPrefix: 'وەسڵ #',
    unnamedInvoice: 'وەسڵی بێ ناو',
    itemCount: 'کاڵا',
    customerLabel: 'کڕیار: ',
    loadInvoice: 'هەڵگرتن',
    deleteInvoice: 'سڕینەوە',
    confirmDeleteInvoice: 'دڵنیایت لە سڕینەوەی ئەم وەسڵە؟',
    warranty: 'زەمان',
    showInvoice: 'نیشاندانی وەسڵ',
    selectACustomer: 'کڕیارێک هەڵبژێرە',
    searchForInvoice: 'گەران بۆ وەسڵ',
    customerSelection: 'هەڵبژاردنی کڕیار',
    currencyLabel: 'دراو',
    dollarRateLabel: 'نرخی دۆلار:',
    advanceLabel: 'پێشەکی',
    installmentMonthsLabel: 'ژمارەی مانگەکان',
    monthlyPaymentLabel: 'پارەی مانگانە',
    monthLabel: 'مانگی',
    totalInstallmentsLabel: 'کۆی قیستەکان:',
    remainingInstallmentLabel: 'قیستی ماوە:',
    hasAdvance: 'زیادەی هەیە',
    customDesignUsed: 'دیزاینی Custom-ت بەکاردێت',
    noAccessPermission: 'تۆ دەسەلاتی دەستگەیشتن بەم بەشەت نییە!',
    
    // PDF Report Labels
    generalFinancialReport: 'راپۆرتی گشتی دارایی',
    periodLabel: 'ماوە',
    dateLabelPDF: 'بەروار',
    shopNameLabel: 'ناوی فرۆشگا',
    phoneNumberLabel: 'ژمارەی تەلەفۆن',
    financialSummary: 'کورتەی دارایی',
    subjectLabel: 'بابەت',
    amountLabel: 'بڕ',
    totalSalesRevenue: 'کۆی داهاتی فرۆشتن',
    grossProfit: 'قازانجی خاو',
    balancesLabel: 'باڵانسەکان',
    warehouseBalance: 'باڵانسی کۆگا',
    customerDebts: 'قەرزی کڕیاران',
    supplierDebts: 'قەرزی دابینکەران',
    salesDebts: 'قەرزی فرۆشتنەکان',
    purchaseDebts: 'قەرزی کڕینەکان',
    todayPeriod: 'ئەمڕۆ',
    weekPeriod: 'هەفتە',
    monthPeriod: 'مانگ',
    yearPeriod: 'ساڵ',
    customPeriod: 'کاتی تایبەت',
    custom: 'تایبەت',
    reportFilters: 'فیلتەرەکانی ڕاپۆرت',
    customDateRange: 'بەرواری تایبەت',
    startDate: 'بەرواری دەستپێک',
    endDate: 'بەرواری کۆتایی',
    filterByDate: 'فیلتەر بە بەروار',
    filterByCategory: 'فیلتەر بە جۆر',
    filterByCustomer: 'فیلتەر بە کڕیار',
    filterByProduct: 'فیلتەر بە کاڵا',
    filterBySupplier: 'فیلتەر بە دابینکەر',
    filterByPaymentMethod: 'فیلتەر بە شێوازی پارەدان',
    filterByAmount: 'فیلتەر بە بڕ',
    filterByStatus: 'فیلتەر بە دۆخ',
    filterByUser: 'فیلتەر بە بەکارهێنەر',
    filterByLocation: 'فیلتەر بە شوێن',
    filterByType: 'فیلتەر بە جۆر',
    filterByBrand: 'فیلتەر بە براند',
    filterByPrice: 'فیلتەر بە نرخ',
    filterByQuantity: 'فیلتەر بە ژمارە',
    filterByProfit: 'فیلتەر بە سوود',
    filterByLoss: 'فیلتەر بە لەدەستدان',
    filterByReturn: 'فیلتەر بە گەڕانەوە',
    filterByExpense: 'فیلتەر بە خەرجی',
    filterByIncome: 'فیلتەر بە داهات',
    filterByCash: 'فیلتەر بە نەقد',
    filterByCard: 'فیلتەر بە کارت',
    filterByDebt: 'فیلتەر بە قەرز',
    filterByCredit: 'فیلتەر بە کریت',
    paymentMethodFilter: 'فیلتەری شێوازی پارەدان',
    allPaymentMethods: 'هەموو شێوازەکانی پارەدان',
    customerFilter: 'فیلتەری کڕیار',
    amountRange: 'مەودای بڕ',
    minAmount: 'کەمترین بڕ',
    maxAmount: 'زۆرترین بڕ',
    profitRange: 'مەودای قازانج',
    minProfit: 'کەمترین قازانج',
    maxProfit: 'زۆرترین قازانج',
    sortBy: 'ڕیزکردن بەپێی',
    sortByDate: 'ڕیزکردن بەپێی بەروار',
    sortByAmount: 'ڕیزکردن بەپێی بڕ',
    sortByProfit: 'ڕیزکردن بەپێی قازانج',
    sortByCustomer: 'ڕیزکردن بەپێی کڕیار',
    sortAscending: 'بەرەو سەرەوە',
    sortDescending: 'بەرەو خوارەوە',
    exportToPDF: 'دەرهێنان بۆ PDF',
    exportToExcel: 'دەرهێنان بۆ Excel',
    filterPresets: 'فیلتەرە پێشگریمانەکان',
    profitableSales: 'فرۆشتنە قازانجدارەکان',
    debtSales: 'فرۆشتنە قەرزدارەکان',
    cashSales: 'فرۆشتنە نەقدیەکان',
    cardSales: 'فرۆشتنە کارتیەکان',
    applyFilters: 'جێبەجێکردنی فیلتەر',
    resetFilters: 'دووبارەکردنەوەی فیلتەر',
    filterResults: 'ئەنجامەکانی فیلتەر',
    noResultsFound: 'هیچ ئەنجامێک نەدۆزرایەوە',
    hide: 'شاردنەوە',
    show: 'نیشاندان',
    success: 'سەرکەوتوو',
    error: 'هەڵە',
    warning: 'ئاگاداری',
    info: 'زانیاری',
    areYouSure: 'دڵنیایت؟',
    cannotUndo: 'ناتوانیت پاشگەز ببیتەوە',
    operationSuccess: 'کارەکە سەرکەوتوو بوو',
    operationFailed: 'کارەکە سەرکەوتوو نەبوو',
    pleaseWait: 'تکایە چاوەڕێ بکە',
    noResults: 'هیچ ئەنجامێک نییە',
    noData: 'هیچ داتایەک نییە',
    create: 'دروستکردن',
    deleteAction: 'سڕینەوە',
    saveAction: 'پاشەکەوتکردن',
    backAction: 'گەڕانەوە',
    cancelAction: 'هەڵوەشاندنەوە',
    previousAction: 'پێشوو',
    nextAction: 'دواتر',
    resetAction: 'دووبارەکردنەوە',
    submitAction: 'ناردن',
    clearAction: 'پاککردنەوە',
    selectAction: 'هەڵبژاردن',
    status: 'دۆخ',
    required: 'پێویست',
    enabled: 'چالاک',
    disabled: 'ناچالاک',
    none: 'هیچ',
    more: 'زیاتر',
    less: 'کەمتر',
    showMore: 'زیاتر نیشان بدە',
    showLess: 'کەمتر نیشان بدە',
    page: 'لاپەڕە',
    perPage: 'بۆ هەر لاپەڕەیەک',
    of: 'لە',
    noRecords: 'هیچ تۆمارێک نییە',
    records: 'تۆمار',
    
    // Activities Page
    salesAndPurchases: 'فرۆشتن و کڕین',
    employeeMonitoring: 'چاودێری کارمەند',
    activitiesTotalSales: 'کۆی فرۆشتن',
    activitiesTotalPurchases: 'کۆی کڕین',
    activitiesTotalPaid: 'کۆی پارەدراو',
    activitiesTotalDebt: 'کۆی قەرز',
    activitiesSearchPlaceholder: 'گەڕان بە ناوی بەکارهێنەر، بەش...',
    activitiesPeriod: 'ماوە',
    activitiesStartDate: 'بەرواری دەستپێک',
    activitiesEndDate: 'بەرواری کۆتایی',
    activitiesSelectDate: 'هەڵبژاردنی بەروار',
    activitiesClearFilters: 'پاککردنەوەی فیلتەر',
    noActivitiesFound: 'هیچ چالاکییەک نەدۆزرایەوە',
    activitiesMore: 'زیاتر',
    editNotes: 'دەستکاریکردنی تێبینی',
    startDateCannotBeGreater: 'بەرواری دەستپێک نابێت گەورەتر بێت لە بەرواری کۆتایی',
    pleaseSelectStartDate: 'تکایە بەرواری دەستپێک هەڵبژێرە',
    apply: 'جێبەجێکردن',
    customerOrSupplier: 'کڕیار/دابینکەر',
    activitiesTotal: 'کۆی گشتی',
    activitiesNotes: 'تێبینی',
    activitiesAction: 'کار',
    activitiesSection: 'بەش',
    activitiesDetails: 'وردەکاری',
    noActivityLogs: 'هیچ تۆمارێکی چالاکی نییە',
    activitiesCreate: 'دروستکردن',
    activitiesUpdate: 'نوێکردنەوە',
    activitiesDelete: 'سڕینەوە',
    activitiesView: 'بینین',
    activitiesLogin: 'چوونەژوورەوە',
    activitiesLogout: 'دەرچوون',
    activitiesType: 'جۆر',
    activitiesItems: 'کاڵا',
    sevenDays: '٧ ڕۆژ',
    thirtyDays: '٣٠ ڕۆژ',
    ninetyDays: '٩٠ ڕۆژ',
    threeHundredSixtyFiveDays: '٣٦٥ ڕۆژ',
    
    // Reports Page
    generalReportTitle: 'راپۆرتی گشتی',
    generalReportDescription: 'راپۆرتی گشتی بۆ هەموو بەشەکان',
    reportCustomerReports: 'راپۆرتی کڕیار',
    reportCustomerSpecial: 'راپۆرتی تایبەتی کڕیار',
    reportCustomerBalance: 'باڵانسی کڕیار',
    reportCustomerItems: 'کاڵاکانی کڕیار',
    reportCustomerGeneral: 'راپۆرتی گشتی کڕیار',
    reportCustomerInvoices: 'وەسڵەکانی کڕیار',
    reportProfit: 'راپۆرتی قازانج',
    reportProfitDetails: 'وردەکارییەکانی قازانج',
    reportSalesItems: 'کاڵاکانی فرۆشتن',
    reportPurchaseItems: 'کاڵاکانی کڕین',
    reportStockItems: 'کاڵاکانی کۆگا',
    reportExpiredProducts: 'کاڵاکانی بەسەرچوو',
    reportSupplierReports: 'راپۆرتی دابینکەر',
    reportSupplierSpecial: 'راپۆرتی تایبەتی دابینکەر',
    reportSupplierBalance: 'باڵانسی دابینکەر',
    reportSupplierItems: 'کاڵاکانی دابینکەر',
    reportSupplierGeneral: 'راپۆرتی گشتی دابینکەر',
    reportSupplierInvoices: 'وەسڵەکانی دابینکەر',
    reportSupplierProfit: 'قازانجی دابینکەر',
    reportGeneral: 'راپۆرتی گشتی',
    reportGeneralInfo: 'زانیاری گشتی',
    reportMonthly: 'راپۆرتی مانگانە',
    reportAccountantActivity: 'چالاکییەکانی ژمێریار',
    reportOtherReports: 'راپۆرتەکانی تر',
    reportAccountantSafe: 'سندوقی ژمێریار',
    reportExpenses: 'راپۆرتی خەرجی',
    reportRegistrationDate: 'بەرواری تۆمارکردن',
    viewReports: 'بینینی راپۆرتەکان',
    openInvoice: 'کردنەوەی وەسڵ',
    viewInvoice: 'بینینی وەسڵ',
    purchaseInvoiceDetails: 'وردەکارییەکانی وەسڵی کڕین',
    invoiceNumberLabel: 'ژمارەی وەسڵ',
    supplierLabel: 'دابینکەر',
    paymentMethodLabel: 'شێوازی پارەدان',
    userLabel: 'بەکارهێنەر',
    productNameLabel: 'ناوی کاڵا',
    quantityLabel: 'بڕ',
    paidLabel: 'پارەدراو',
    debtLabel: 'قەرز',
    notesLabel: 'تێبینی',
    invoiceLocked: 'وەسڵ قفڵکراوە',
    amountCannotBeLess: 'بڕ نابێت کەمتر بێت',
    noDiscountPermission: 'دەسەلاتی داشکاندن نییە',
    guestCustomer: 'کڕیاری میوان',
    externalProduct: 'کاڵای دەرەکی',
    invoiceUnparked: 'وەسڵ لابرا',
    newTabCreated: 'تابی نوێ دروست کرا',
    invoiceLoaded: 'وەسڵ بارکرا',
    invoiceCleared: 'وەسڵ پاککرایەوە',
    otherInvoiceNotFound: 'وەسڵی تر نەدۆزرایەوە',
    popupBlocked: 'پۆپئەپ بلاک کرا',
    printCart: 'چاپکردنی سەبەتە',
    shop: 'فرۆشگا',
    totalInWords: 'کۆی بە وشە',
    thanksForPurchase: 'سوپاس بۆ کڕینەکەت',
    discountLabel: 'داشکاندن',
    generalDiscount: 'داشکاندنی گشتی',
    codeLabel: 'کۆد',
    returned: 'گەڕاوەتەوە',
    partialReturned: 'بەشێکی گەڕاوەتەوە',
    sold: 'فرۆشراو',
    noSaleDebtPermission: 'دەسەلاتی فرۆشتن بە قەرز نییە',
    noSaleInstallmentPermission: 'دەسەلاتی فرۆشتن بە قیست نییە',
    selectCustomerForInstallment: 'کڕیارێک هەڵبژێرە بۆ قیست',
    enterAdvanceAndMonths: 'پێشەکی و ژمارەی مانگەکان بنووسە',
    advanceMustBeLess: 'پێشەکی دەبێت کەمتر بێت',
    installmentRecorded: 'قیست تۆمار کرا',
    enterPaymentAmount: 'بڕی پارەدان بنووسە',
    paymentAmountExceedsDebt: 'بڕی پارەدان زیاترە لە قەرز',
    paymentRecorded: 'پارەدان تۆمار کرا',
    enterDebtAmount: 'بڕی قەرز بنووسە',
    debtAdded: 'قەرز زیاد کرا',
    enterCustomerName: 'ناوی کڕیار بنووسە',
    enterPhoneNumber: 'ژمارەی تەلەفۆن بنووسە',
    customerAdded: 'کڕیار زیاد کرا',
    noPrintPermission: 'دەسەلاتی چاپکردن نییە',
    searchProduct: 'گەڕان بە کاڵا',
    enterProductNameAndPrice: 'ناوی کاڵا و نرخ بنووسە',
    externalProductAdded: 'کاڵای دەرەکی زیاد کرا',
    addExternalProduct: 'زیادکردنی کاڵای دەرەکی',
    cashSale: 'فرۆشتن بە نەقد',
    debtSale: 'فرۆشتن بە قەرز',
    installmentSale: 'فرۆشتن بە قیست',
    parkInvoice: 'پارککردنی وەسڵ',
    parkInvoiceTitle: 'پارککردنی وەسڵ',
    invoiceNotes: 'تێبینی وەسڵ',
    noParkedInvoices: 'هیچ وەسڵێکی پارککراو نییە',
    writeNote: 'نووسینی تێبینی',
    writeInvoiceNoteHere: 'تێبینی وەسڵ لێرە بنووسە',
    paidAmountLabel: 'بڕی پارەدراو',
    debtPaymentDate: 'بەرواری پارەدانی قەرز',
    paidLabelShort: 'پارەدراو',
    remainingDebtLabel: 'قەرزی ماوە',
    
    // Returns Page
    pleaseSpecifyCashAmount: 'تکایە بڕی نەقد دیاری بکە',
    returnGoodsToSupplier: 'گەڕاندنەوەی کاڵا بۆ دابینکەر',
    supplierReturnRecorded: 'گەڕانەوەی دابینکەر تۆمار کرا',
    returnRecordError: 'هەڵە لە تۆمارکردنی گەڕانەوە',
    returnReportTitle: 'راپۆرتی گەڕانەوە',
    returnAndRefundGoods: 'گەڕاندنەوە و گەڕاندنەوەی پارە',
    returnNumber: 'ژمارەی گەڕانەوە',
    refundAmount: 'بڕی گەڕاندنەوە',
    reason: 'هۆکار',
    createdBy: 'دروستکراو لەلایەن',
    noReason: 'هیچ هۆکارێک نییە',
    totalReturnsLabel: 'کۆی گەڕانەوەکان',
    totalRefundLabel: 'کۆی گەڕاندنەوە',
    averageReturnAmount: 'نێوەندی بڕی گەڕانەوە',
    invoiceNumberShort: 'ژ. وەسڵ',
    priceLabel: 'نرخ',
    returnTo: 'گەڕاندنەوە بۆ',
    invoiceNumberShortLabel: 'ژ. وەسڵ',
    actionLabel: 'کار',
    returnButton: 'گەڕاندنەوە',
    returnGoodsTo: 'گەڕاندنەوەی کاڵا بۆ',
    itemsToReturn: 'کاڵا بۆ گەڕاندنەوە',
    purchasedQuantity: 'بڕی کڕدراو',
    searchForInvoiceOrSupplier: 'گەڕان بە وەسڵ یان دابینکەر',
    cashReceived: 'نەقد وەرگیراو',
    becameDebt: 'بوو بە قەرز',
    cashAmountReceived: 'بڕی نەقد وەرگیراو',
    writeCashAmount: 'بڕی نەقد بنووسە',
    debtAmount: 'بڕی قەرز',
    confirmReturn: 'دڵنیایی لە گەڕاندنەوە',
    waiting: 'چاوەڕێ',
    approve: 'پەسەندکردن',
    confirmSupplierReturnTitle: 'دڵنیایی لە گەڕاندنەوەی دابینکەر',
    confirmSupplierReturnMessage: 'دڵنیایت لە گەڕاندنەوەی کاڵاکان بۆ دابینکەر؟',
    cashReceivedLabel: 'نەقد وەرگیراو',
    returnDetails: 'وردەکارییەکانی گەڕانەوە',
    returnedItems: 'کاڵای گەڕاوەتەوە',
    noCustomerReturnsFound: 'هیچ گەڕانەوەیەکی کڕیار نەدۆزرایەوە',
    noSupplierReturnsFound: 'هیچ گەڕانەوەیەکی دابینکەر نەدۆزرایەوە',
    itemsReturned: 'کاڵای گەڕاوەتەوە',
    printInvoice: 'چاپکردنی وەسڵ',
    withoutSupplier: 'بێ دابینکەر',
    itemsLabel: 'کاڵا',
    productWithoutName: 'کاڵای بێ ناو',
    noItemsFound: 'هیچ کاڵایەک نەدۆزرایەوە',
    employeeInfo: 'زانیاری کارمەند',
    employeeNumber: 'ژمارەی کارمەند',
    mobileNumber: 'ژمارەی مۆبایل',
    employeeType: 'جۆری کارمەند',
    employeeStatus: 'دۆخی کارمەند',
    activeStatus: 'چالاک',
    inactiveStatus: 'ناچالاک',
    timeLabel: 'کات',
    
    // Table Headers
    customerNameHeader: 'ناوی کڕیار',
    phoneHeader: 'تەلەفۆن',
    totalSalesHeader: 'کۆی فرۆشتن',
    totalRemainingHeader: 'قەرز',
    salesCountHeader: 'ژمارەی فرۆشتن',
    balanceHeader: 'باڵانس',
    addressHeader: 'ناونیشان',
    totalProfitHeader: 'قازانج',
    invoiceIdHeader: 'ژمارەی پسوول',
    itemsCountHeader: 'ژمارەی کاڵا',
    productNameHeader: 'ناوی کاڵا',
    barcodeHeader: 'بارکۆد',
    quantityHeader: 'دانە',
    priceHeader: 'نرخ',
    discountHeader: 'داشکاندن',
    totalHeader: 'کۆی گشتی',
    saleDateHeader: 'بەروار',
    
    // Additional Table Headers
    idHeader: 'ID',
    profitPercentageHeader: 'نرخی قازانج %',
    saleIdHeader: 'ID فرۆشتن',
    purchaseIdHeader: 'ID کڕین',
    costPriceHeader: 'نرخی کرین',
    unitHeader: 'دانە',
    categoryHeader: 'پۆل',
    retailPriceHeader: 'نرخی تاک',
    wholesalePriceHeader: 'نرخی جوملە',
    specialPriceHeader: 'نرخی تایبەت',
    totalValueHeader: 'نرخی کۆی کۆگا',
    totalSoldHeader: 'فرۆشراو',
    totalPurchasedHeader: 'کڕدراو',
    totalPurchasesHeader: 'کۆی کڕین',
    purchasesCountHeader: 'ژمارەی کڕین',
    revenueHeader: 'داهات',
    grossProfitHeader: 'قازانجی خاو',
    totalExpensesHeader: 'کۆی خەرجی',
    netProfitHeader: 'قازانجی تەواو',
    totalCustomersHeader: 'کۆی کڕیارەکان',
    totalSuppliersHeader: 'کۆی دابینکەران',
    totalProductsHeader: 'کۆی کاڵاکان',
    monthHeader: 'مانگ',
    salesRevenueHeader: 'داهاتی فرۆشتن',
    salesProfitHeader: 'قازانجی فرۆشتن',
    purchasesTotalHeader: 'کۆی کڕین',
    typeHeader: 'جۆر',
    customerOrSupplierHeader: 'کڕیار/دابینکار',
    amountHeader: 'بڕ',
    descriptionHeader: 'وەسف',
    registrationDateHeader: 'بەرواری تۆمارکردن',
    totalSalesPaidHeader: 'پارەی وەرگیراو لە فرۆشتن',
    totalPurchasesPaidHeader: 'پارەی دراو بۆ کڕین',
    totalExpensesAmountHeader: 'کۆی خەرجی',
    netCashHeader: 'پارەی خاو',
    
    // Activity Types
    saleType: 'فرۆشتن',
    purchaseType: 'کڕین',
    
    // View Reports Page Buttons and Filters
    downloadPDF: 'PDF',
    backToReports: 'گەڕانەوە',
    searchPlaceholder: 'گەڕان...',
    allTime: 'هەموو کات',
    todayFilter: 'ئەمڕۆ',
    weekFilter: 'هەفتە',
    monthFilter: 'مانگ',
    yearFilter: 'ساڵ',
    allCustomers: 'هەموو کڕیارەکان',
    startDateLabel: 'ڕۆژی دەستپێک',
    endDateLabel: 'ڕۆژی کۆتایی',
    noReportSelected: 'هیچ راپۆرتێک هەڵنەبژێردراوە',
    detailedInformation: 'زانیاری ورد و تەواو',
    noDataToPrint: 'هیچ داتایەک بۆ چاپکردن نیە',
    totalData: 'کۆی گشتی',
    dataLabel: 'داتا',
    totalProfitLabel: 'کۆی قازانج',
    totalAmountLabel: 'کۆی گشتی',
    
    // Installments Page
    installments: 'قیستەکان',
    installmentsManagement: 'بەڕێوەبردنی قەرزی قیستی',
    totalInstallments: 'کۆی گشتی',
    activeInstallments: 'چالاک',
    overdueInstallments: 'دواکەوتوو',
    totalRemaining: 'کۆی ماوە',
    searchInstallmentsPlaceholder: 'گەڕان بە ناوی کڕیار، ژمارەی وەسڵ...',
    allStatuses: 'هەموو دۆخەکان',
    completedStatus: 'تەواو',
    overdueStatus: 'دواکەوتوو',
    cancelledStatus: 'هەڵوەشاوە',
    noInstallmentsFound: 'هیچ قیستێک نەدۆزرایەوە',
    invoiceLabel: 'وەسڵ',
    downPayment: 'پێشەکی',
    monthlyPayment: 'پارەی مانگانە',
    numberOfMonths: 'ژمارەی مانگەکان',
    monthsLabel: 'مانگ',
    remainingLabel: 'ماوە',
    daysOverdue: 'ڕۆژ دواکەوتوو',
    makePayment: 'پارەدان',
    installmentPayment: 'پارەدانی قیست',
    installmentCurrency: 'دراوی قیست',
    paymentCurrency: 'دراوی پارەدان',
    paymentAmountLabel: 'بڕی پارەدان',
    monthNumber: 'ژمارەی مانگ',
    installmentDetails: 'وردەکارییەکانی قیست',
    warrantyLabel: 'زیادە',
    hasWarranty: 'زیادەی هەیە',
    noPaymentsRecorded: 'هیچ پارەدانێک تۆمار نەکراوە',
    pleaseEnterPaymentAmount: 'تکایە بڕی پارەدان بنووسە',
    paymentAmountExceeds: 'بڕی پارەدان زیاترە لە قیستەکە',
    paymentRecordedSuccessfully: 'پارەدان بە سەرکەوتوویی تۆمار کرا ✓',
    errorOccurredInPayment: 'هەڵەیەک ڕوویدا لە پارەدانەکەدا',
    paymentIn: 'پارەدان بە',
    convertTo: 'گۆڕین بۆ',
    extraLabel: 'زیادە',
  },
  
  'ku-badini': {
    // Common
    appName: 'سیستەمی کاشێری جیهان',
    appVersion: 'Jihan Cashier System v1.0',
    loading: 'چاڤەڕێ بکە...',
    daysRemaining: 'ڕۆژ ماڤە',
    expiresToday: 'ئەمرۆ بەسەردەچێت',
    oneWeek: '١ هەفتە',
    oneMonth: '١ مانگ',
    threeMonths: '٣ مانگ',
    sixMonths: '٦ مانگ',
    oneYear: '١ ساڵ',
    lifetime: 'هەتا هەتایە',
    save: 'پاشەکەوتکرن',
    cancel: 'هەڵڤەشاندنەڤە',
    close: 'داخستن',
    delete: 'ژێبرن',
    edit: 'گۆڕین',
    add: 'زێدەکرن',
    search: 'گەڕان',
    filter: 'فلتەر',
    confirm: 'دڵنیایت؟',
    yes: 'بەلێ',
    no: 'نەخێر',
    
    // Login
    login: 'چوینە ژوورەڤە',
    username: 'ناڤێ بەکارهێنەر',
    password: 'ووشەێ نهێنی',
    loginButton: 'چوینە ژوورەڤە',
    logout: 'دەرچوون',
    loginError: 'ناڤێ بەکارهێنەر یان ووشەێ نهێنی هەڵەیە',
    managerAccount: 'بەڕێڤەبەر',
    cashierAccount: 'کاشێر',
    usersInfo: 'زانیاریێن بەکارهێنەران:',
    selectUserPlaceholder: 'هەڵبژارتنا بەکارهێنەر...',
    adminOrCashier: 'admin یان cashier',
    resetDatabase: 'دووبارە دروستکرنا داتابەیسێ',
    resetDatabaseConfirm: 'ئایا دڵنیایت لە ژێبرنێ و دووبارە دروستکرنا داتابەیسێ؟\n\nهەمی داتایێن دژێبن!',
    resetDatabaseSuccess: 'داتابەیس بە سەرکەفتی دووبارە دروستکرایەڤە!\n\nبەکارهێنەر: admin / admin123',
    resetDatabaseError: 'هەڵە لە دووبارە دروستکرنا داتابەیسێ',
    systemError: 'هەڵەیەک ڕوویدا. تکایە سیستەم دووبارە بکەرەڤە',
    resetting: 'دووبارە دروستکرنەڤە...',
    onlyIfLoginIssue: 'تەنێ ئەگەر کێشەت هەبێ لە داخڵبوونێ',
    
    // License
    licenseKey: 'کلیلێ چالاککرنێ',
    activate: 'چالاککرن',
    activating: 'چاڤەڕێ بکە...',
    activated: 'چالاککرا ✓',
    quickActivation: 'چالاککرنا خێرا - 1 هەفتە تاقیکاری',
    licenseError: 'کلیلێ چالاککرنێ هەڵەیە یان پێشتر بەکارهاتووە',
    licenseInvalid: 'کلیل هەڵەیە یان لەم وەشانێ پرۆگرامێدا نینە — وەشانا نوو دابەزینە',
    licenseAlreadyUsed: 'ئەڤ کلیلە پێشتر بەکارهاتییە. بۆ چاککرنێ تەنها بەرناما چالاککرنێ (Activation Helper) بەکاربینە',
    licenseRepair: 'چاککرنا لایسێنسێ',
    licenseRepairDone: 'کلیلێن بەکارهاتی هاتنە ژێبرن. ئانجا دووبارە کلیلێ داخڵ بکە.',
    licenseRepairHint: 'ئەگەر کلیل کار ناکەت، ڤێ دوگمەیێ بگرە پاشان دووبارە چالاک بکە',
    activationError: 'هەڵەیەک ڕوویدا. تکایە دووبارە هەوڵ بدە.',
    activationSuccess: 'چالاککرن سەرکەفتی بوو! ...',
    quickTrialUsedError: 'چالاککرنا خێرا پێشتر بەکارهاتووە لەسەر ڤێ کۆمپیوتەرێ. تکایە کلیلێکا ڕاستەقینە بەکاربێنە.',
    quickTrialFailedError: 'چالاککرنا خێرا سەرکەفتی نەبوو. ڤێ کلیلە لەوانەیە پێشتر بەکارهاتبێت.',
    quickTrialDescription: '⚡ چالاککرنا خودکار بۆ ماوێیا یەک هەفتەیێ - تەنها یەک جار لەسەر ڤێ کۆمپیوتەرێ',
    quickTrialAlreadyUsed: '💡 چالاککرنا خێرا پێشتر بەکارهاتووە. تکایە کلیلێکا ڕاستەقینە بەکاربێنە.',
    oneTimeOnly: '(یەک جار تەنها)',
    features: 'تایبەتمەندیێن:',
    featureFastSales: 'فرۆتنا خێرا و ئاسان',
    featureInventory: 'بەڕێڤەبرنا کاڵا و کڕیارێن',
    featureReports: 'ڕاپۆرتێ وردا فرۆتنێ و قازانجێ',
    featureDebtSystem: 'سیستەما قەرزێ و پارەدانێ',
    featureOfflineDatabase: 'داتابەیسا ئۆفڵاین و دڵنیا',
    contactForLicense: 'بۆ وەرگرتنا کلیلێ چالاککرنێ',
    contactPhone: 'پەیوەندی بکە: 07710500202 - 07511935352',
    or: 'یان',
    
    // Header
    notifications: 'ئاگەداریێن',
    calculator: 'ژمێرەر',
    manager: 'بەڕێڤەبەر',
    cashier: 'کاشێر',
    logoutConfirm: 'دڵنیایت لە دەرچوونێ؟',
    
    // Navigation
    dashboard: 'سەرەکی',
    pos: 'فرۆتن',
    addProduct: 'تۆمارکرنا کاڵا',
    products: 'کاڵایێن',
    customers: 'کڕیار و قەرز',
    purchases: 'کڕین',
    suppliers: 'دابینکەرێن',
    expenses: 'خەرجیێن',
    safe: 'سندوق',
    cashRegisters: 'قاسەکان',
    crashedItems: 'وەسڵێن شکاوەیێ',
    returns: 'ڤەگەڕاتنا کاڵا',
    reports: 'ڕاپۆرتێن',
    income: 'داهات',
    settings: 'ڕێکخستنێن',
    
    // Settings
    generalSettings: 'ڕێکخستنێن گشتی',
    userManagement: 'بەڕێڤەبرنا بەکارهێنەرێن',
    categoriesAndUnits: 'جۆرێن و یەکێن',
    barcodeGenerator: 'بارکۆد',
    backup: 'هەڵگرتن',
    shopInfo: 'زانیاریێن دوکانێ',
    shopName: 'ناڤێ دوکانێ',
    shopPhone: 'ژمارا تەلەفۆنێ',
    shopAddress: 'ناڤنیشان',
    printerSettings: 'ڕێکخستنا پرینتەرێ',
    printerType: 'جۆرێ پرینتەرێ',
    enableCashDrawer: 'چالاککرنا چەکمەجەیا پارە',
    enableCashDrawerDesc: 'دەمێ فرۆتنا نەقدی دهێتە کرن، چەکمەجە ژ ڕێکا پرینتەرێ thermal دهێتە ڤەکرن',
    testCashDrawer: 'تاقیکرنا چەکمەجەیێ',
    cashDrawerOpened: 'فەرمانا ڤەکرنا چەکمەجەیێ هاتە هنارتن',
    cashDrawerOpenFailed: 'نەشیا چەکمەجە بڤەکەت — پرینتەرێ بکە تاقیکرن',
    cashDrawerRequiresPrinter: 'پێدڤیە چەکمەجە ب RJ11 ب پرینتەرێ thermal هاتبیتە گرێدان',
    cashDrawerPrinter: 'پرینتەرێ چەکمەجەیێ (ویندۆز)',
    selectCashDrawerPrinter: '— هەڵبژارتنا پرینتەرێ —',
    cashDrawerWindowsHint: 'بۆ Xprinter XP-365B: پرینتەرێ ویندۆزێ هەلبژێرە. نموونە: Xprinter XP-365B',
    receiptPrinter: 'پرینتەرێ وەسڵێ (ویندۆز)',
    quickPrintSettingsHint: 'قیاس و پرینتەر هەلبژێرە — ل سەر فرۆشتنێ ب دوگمەیا «فرۆشتن + پرینت» ب خێرایی دفرۆشیت و وەسڵ ل باکگراوندێ دپرێنت بیت',
    saleAndPrint: 'فرۆشتن + پرینت',
    salePrintedToast: 'فرۆشتن تەواو بوو — وەسڵ ل باکگراوندێ دپرێنت بیت',
    appearance: 'روکار',
    appearanceDescription: 'شێوازێ نیشاندانا پەڕەیا فرۆشتنێ هەلبژێرە',
    posDisplayMode: 'مۆدێ پەڕەیا فرۆشتنێ',
    posModeClassic: 'کلاسیک',
    posModeClassicDesc: 'شێوازێ نوکە — گەڕان و بارکۆد',
    posModeImages: 'کاڵا ب وێنە',
    posModeImagesDesc: 'وێنێن کاڵایان ل گریدێ — وەک POSـێ جیهانی',
    printSettings: 'ڕێکخستنا پرێنتێ',
    printSettingsDescription: 'ڕێکخستنێن پرێنتکرنێ بۆ وەسڵ و کاڵایێن',
    thermal: 'تێرماڵ',
    paperSize: 'قیاسا کاغەزێ',
    autoPrint: 'پرێنتا خودکار',
    autoPrintDesc: 'پرێنت بکە بێ پرسیار',
    copies: 'ژمارا کۆپیێن',
    displayOptions: 'بژاردێن نیشاندانێ',
    showLogo: 'نیشاندانا لۆگۆیێ',
    showBarcode: 'نیشاندانا بارکۆدێ',
    showCost: 'نیشاندانا نرخێ کرینێ',
    showProfit: 'نیشاندانا قازانجێ',
    thermalFontSize: 'فۆنتێ تێرماڵێ',
    a4FontSize: 'فۆنتێ A4',
    medium: 'ناڤەندی',
    large: 'گەورە',
    customText: 'دەقێ تایبەتی',
    headerTextPlaceholder: 'بخێرهاتن بۆ دکانێ ما...',
    footerTextPlaceholder: 'سپاس بۆ هاتنا ئێوە...',
    currentSettings: 'ڕێکخستنێن ئێستا',
    enabled: 'چالاکە',
    disabled: 'ناچالاکە',
    reset: 'ڕێست',
    confirmReset: 'دڵنیایت ل گەڕاندنەوە بۆ ڕێکخستنێن بنەڕەتی؟',
    saving: 'پاشەکەوتکرن...',
    saved: 'پاشەکەوتکرا',
    standard: 'ئاسایی',
    autoPrinting: 'پرێنتا خودکار...',
    selectPrinter: 'هەڵبژاردنا پرێنتەرێ',
    printerSelectNote: 'ناڤێ پرێنتەرێ بنڤیسە وەکی د سیستەما تە دیارە (بۆ نموونە: "Xprinter XP-80C" یان "Microsoft Print to PDF")',
    printerName: 'ناڤێ پرێنتەرێ',
    printerNamePlaceholder: 'ناڤێ پرێنتەرێ بنڤیسە...',
    printerNameHint: 'ناڤەکە دڤێ ب وردی هاڤشێڤەی ئەڤێ بێت کە د ڕێکخستنێن سیستەما تەدا دیارە',
    howToFindPrinter: 'بۆ دۆزینەڤەیا ناڤێ پرێنتەرێ: بچە بۆ Settings → Devices → Printers & scanners لە ویندۆز',
    selectedPrinter: 'پرێنتەرا هەڵبژێردراو',
    printerList: 'لیستا پرێنتەران (درایڤان)',
    refreshList: 'نوێکرنا لیست',
    selectFromList: 'هەڵبژێرە د لیست',
    selectPrinterOption: 'پرێنتەر هەڵبژێرە',
    printerNameManual: 'ناڤێ پرێنتەرێ (دەستی)',
    printerListNotAvailable: 'لیستا پرێنتەر تەنها د ئەپەکە (Electron) بەردەستە',
    noPrintersFound: 'هیچ پرێنتەرێک نەدۆزرایەوە',
    printerSet: 'پرێنتەرا دانرا: ',
    openDesktopAppForList: 'ئەپەکە بە دێسکتۆپ (Electron) بکەرەوە بۆ بینینی لیست',
    windowsPrintDialog: 'ویندۆز — وەکی کاتێک پرێنت دەکەیت',
    windowsPrintDialogDesc: 'دیالۆگا پرێنتا ویندۆز بکەرەوە، کام پرێنتەر هەڵبژێرە، دواتر ئەگەر ویست پرێنتەرەکەت وەک بنەڕەت د ویندۆز دیاری کرد، دوگمەیا «بەکارهێنانی پرێنتەری بنەڕەتی ویندۆز» بکە.',
    openWindowsPrintDialog: 'کردنەوەیا دیالۆگا پرێنتا ویندۆز',
    useWindowsDefaultPrinter: 'بەکارهێنانی پرێنتەری بنەڕەتی ویندۆز',
    default: 'بنەڕەت',
    otherSettings: 'ڕێکخستنێن تر',
    currency: 'دراڤ',
    primaryCurrency: 'یەکا دراڤێ سەرەکی',
    selectPrimaryCurrency: 'هەڵبژارتنا دراڤێ سەرەکی',
    dinar: 'دینار',
    dollar: 'دۆلار',
    currencyAffectsAll: 'یەکا سەرەکی کاریگەری دبێت لسەر هەمی نرخێن و ڕاپۆرتێن لە سیستەمدا',
    currencyIndependentOfLanguage: 'یەکا دراڤێ جیایە لە زمان - دشێ بە دۆلار کاربکەیت و زمانێ بە کوردی/عەرەبی بمێنێتەڤە',
    lowStockThreshold: 'ئاگەداری بۆ کاڵایێ کەم',
    dollarSettings: 'ڕێکخستنا دۆلارێ',
    enableDollar: 'چالاککرنا دۆلارێ',
    dollarRate: 'نرخێ دۆلارێ بە دینار',
    saveChanges: 'پاشەکەوتکرنا گۆڕانکاریێن',
    dangerZone: 'زۆنا مەترسیێ',
    deactivateLicense: 'ناچالاککرنا لایسێنسێ',
    systemInfo: 'زانیاریێن سیستەمێ',
    systemVersion: 'ڤەرشنا سیستەمێ',
    licenseStatus: 'ستاتوسا لایسێنسێ',
    totalProducts: 'کۆیا کاڵایێن',
    totalCustomers: 'کۆیا کڕیارێن',
    purchaseValue: 'بەهایێ کڕینێ',
    sellingValue: 'بەهایێ فرۆشتنێ',
    expectedProfit: 'قازانجا چاڤەڕوان',
    stockAlert: 'ئاگەهداریا کۆگایێ',
    
    // Dashboard mode (settings)
    dashboardModeTitle: 'شێوازی داشبۆرد',
    dashboardModeDescription: 'شێوازی نمایشی داشبۆرد هەلبژێرە',
    dashboardModeNavbar: 'ناڤبار',
    dashboardModeNavbarDescription: 'ناڤبارێ لایەکی',
    dashboardModeGrid: 'گرید داشبۆرد',
    dashboardModeGridDescription: 'گرید بە ئایکۆن و ناڤ',
    dashboardModeNote: 'گۆڕانکاریان پاش پاشەکەوتکرن و دووبارە کردنەڤەی پەڕەکە دەردەکەڤن',
    selected: 'هەلبژێردراو',

    // Dark mode (settings)
    darkMode: 'دیمۆدێ تاریک',
    darkModeDescription: 'دیمۆدێ تاریک چالاک بکە بۆ نیشاندانا تاریکتری سیستەمێ',

    // Network / LAN sync (settings)
    networkSettingsTitle: 'بەستنا تۆرێ (LAN/Router)',
    networkSettingsDescription: 'بەستنا دوو کۆمپیوتەر بەیەکدی بە کێبڵ یان راوتەر بۆ هاوبەشکرنا داتایان',
    connectionStatusLabel: 'دۆخی پەیوەندی:',
    connectionStatusConnected: 'بەسترا',
    connectionStatusDisconnected: 'نەبەستراو',
    networkModeLabel: 'دۆخ:',
    networkModeOff: 'ناچالاک',
    networkModeServer: 'سێرڤەر (Host)',
    networkModeClient: 'کڵایەنت',
    serverIPLabel: 'IP Address-ی سێرڤەر:',
    serverIPPlaceholder: '192.168.1.100',
    serverIPHelp: 'IP address-ی کۆمپیوتەرا سێرڤەرە (مثلاً: 192.168.1.100)',
    thisComputerIPLabel: 'IP Address-ی ئەڤ کۆمپیوتەرە:',
    thisComputerIPHelp: 'ئەم IP-ە بەکاربهێنە لە کۆمپیوتەرێن دی دا بۆ بەستن',
    portLabel: 'پۆرت:',
    autoSyncLabel: 'خۆکار sync (هەر 5 چرکە جارێک)',
    autoSyncDescription: 'خۆکار هاوبەشکرنا داتایان لەنێوان سێرڤەر و کڵایەنتان',
    connectButton: 'بەستن',
    disconnectButton: 'دابەزاندن',
    sendDataToClients: 'ناردنا داتا بۆ کڵایەنتان',
    disableNetwork: 'ناچالاککرنا تۆرێ',
    networkInstructionsTitle: 'ڕێنمایی:',
    networkInstruction1: 'یەک کۆمپیوتەر بکە بە سێرڤەر (Host)',
    networkInstruction2: 'کۆمپیوتەرێن دی بکە بە کڵایەنت',
    networkInstruction3: 'IP address-ی سێرڤەر بنووسە لە کڵایەنتان دا',
    networkInstruction4: 'دوگمەی \"بەستن\" بگرە',
    networkInstruction5: 'داتایان بە خۆکار sync دەبن',
    
    // P2P Sync Settings
    p2pSync: 'هاوتەرازیا P2P',
    p2pDescription: 'هاوتەرازیکرنا داتایێ د ناڤبەرا چەند کۆمپیوتەرێن دا لسەر هەمان تۆڕێ',
    localIp: 'IP یا ڤێ کۆمپیوتەرێ',
    connectionStatus: 'دۆخا پەیوەندیێ',
    role: 'ڕۆڵ',
    selectRole: 'هەڵبژارتنا ڕۆڵا ڤێ کۆمپیوتەرێ',
    roleOff: 'ناچالاک',
    roleOffDesc: 'هاوتەرازیا P2P ناچالاکە',
    rolePrimary: 'کۆمپیوتەرێ سەرەکی',
    rolePrimaryDesc: 'ڤە کۆمپیوتەرە دبیتە Server و داتا ژ ڤێرێ تێت وەرگرتن',
    roleSecondary: 'کۆمپیوتەرێ لاوەکی',
    roleSecondaryDesc: 'پەیوەستە بە کۆمپیوتەرێ سەرەکی بۆ وەرگرتنا داتایێ',
    primaryComputer: 'کۆمپیوتەرێ سەرەکی (Server)',
    secondaryComputer: 'کۆمپیوتەرێ لاوەکی (Client)',
    serverInfo: 'زانیاریا Server',
    connectedDevices: 'کۆمپیوتەرێن پەیوەستکری',
    autoDiscovery: 'گەڕان بە خۆکار بۆ کۆمپیوتەرێ سەرەکی',
    manualConnect: 'پەیوەستبوون بە دەستەکی',
    foundDevices: 'کۆمپیوتەرێن دۆزکری:',
    syncStatistics: 'ئامارێن هاوتەرازیێ',
    changesSent: 'گۆڕانکاری شاندی',
    changesReceived: 'گۆڕانکاری وەرگرتی',
    lastSync: 'دوایین هاوتەرازی',
    
    // Language Settings
    language: 'زمان',
    selectLanguage: 'هەڵبژارتنا زمانێ',
    kurdishSorani: 'کوردیێ سۆرانی',
    kurdishBadini: 'کوردیێ بادینی',
    iraqiArabic: 'عەرەبیێ عێراقی',
    britishEnglish: 'ئینگلیزیێ بەریتانی',
    
    // Categories
    categories: 'جۆرێن',
    addCategory: 'زێدەکرنا جۆر',
    categoryAdded: 'جۆرێک ب سەرکەوتوویی زێدەکرا',
    categoryExists: 'ئەم جۆرێ هەیە',
    deleteCategory: 'ژێبرنا جۆر',
    units: 'یەکێن',
    addUnit: 'زێدەکرنا دانە',
    deleteUnit: 'ژێبرنا دانە',
    
    // Users
    users: 'بەکارهێنەرێن',
    user: 'بەکارهێنەر',
    employee: 'کارمەند',
    addUser: 'زێدەکرنا بەکارهێنەر',
    editUser: 'گۆڕینا بەکارهێنەر',
    deleteUser: 'ژێبرنا بەکارهێنەر',
    fullName: 'ناڤێ تەڤاو',
    role: 'ڕۆڵ',
    phone: 'تەلەفۆن',
    email: 'ئیمەیڵ',
    active: 'چالاک',
    inactive: 'ناچالاک',
    permissions: 'دەسەڵاتێن',
    lastLogin: 'کۆتا چوینەژوورەڤە',
    
    // Products
    productName: 'ناڤێ کاڵا',
    barcode: 'بارکۆد',
    category: 'جۆر',
    unit: 'دانە',
    priceType: 'جۆرێ نرخێ',
    buyPrice: 'نرخێ کڕینێ',
    sellPrice: 'نرخێ فرۆتنێ',
    stock: 'کۆگا',
    minStock: 'کەمترین کۆگا',
    addNewProduct: 'زێدەکرنا کاڵایێ نوێ',
    editProduct: 'گۆڕینا کاڵا',
    deleteProduct: 'ژێبرنا کاڵا',
    
    // Warranty
    warrantyManagement: 'بەڕێڤەبرنا زەمانێ',
    warranties: 'زەمانان',
    warrantyActive: 'زەمانێ چالاک',
    warrantyExpired: 'زەمانێ بەسەرچووی',
    warrantyStatus: 'بارودۆخێ زەمانێ',
    warrantyDetails: 'وردەکاریێن زەمانێ',
    warrantyDuration: 'ماوا زەمانێ',
    warrantyEndDate: 'بەرڤارێ کۆتایی زەمانێ',
    warrantyExpiredOn: 'زەمان بەسەرچووی لە',
    warrantyGivenToCustomer: 'زەمان دایە بە کڕیار',
    noWarranty: 'زەمان نینە',
    noWarrantySet: 'زەمان دانەنراوە',
    purchaseWarranty: 'زەمانێ کڕنێ',
    saleWarranty: 'زەمانێ فرۆشتنێ',
    months: 'مانگ',
    expiryDate: 'بەرڤارێ بەسەرچوونێ',
    expired: 'بەسەرچووی',
    expiredProducts: 'کاڵا بەسەرچووەکان',
    daysExpired: 'ڕۆژ بەسەرچووە',
    inventoryAdjustment: 'جەردی کۆگا',
    dollarRateChange: 'گۆڕانی نرخ بە دۆلار',
    noExpiredProducts: 'هیچ کاڵایەکی بەسەرچوو نییە',
    viewDetails: 'بینینی وردەکاری',
    returnToSupplier: 'گەڕاندنەوە بۆ دابینکار',
    sellAtDiscount: 'فرۆشتن بە نرخی کەم',
    discountPrice: 'نرخی داشکاندن',
    discountAmount: 'بڕی داشکاندن',
    originalPrice: 'نرخی بنەڕەت',
    willBeRecordedAsExpense: 'وەک خەرجی تۆمار دەکرێت',
    discountNote: 'تێبینی: بڕی داشکاندنەکە وەک خەرجی تۆمار دەکرێت',
    perUnit: 'بۆ هەر یەک',
    processing: 'چالاککردن...',
    selectPurchase: 'هەڵبژاردنی وەسڵی کڕین',
    mostRecentPurchase: 'دواترین وەسڵ',
    purchaseInfo: 'ئەگەر وەسڵ هەڵبژێریت، نرخی کڕین لە وەسڵەکە بەکار دەهێنرێت',
    unitCost: 'نرخی دانە',
    notAvailable: 'بەردەست نینە',
    available: 'بەردەست',
    days: 'ڕۆژ',
    discard: 'فرێدان',
    discardWarning: 'تێبینی: کاڵاکە لە کۆگا دەسڕێتەوە و وەک خەرجی تۆمار دەکرێت',
    totalLoss: 'کۆی خەسارەت',
    discardReasonPlaceholder: 'هۆکاری فرێدان...',
    cashAmount: 'بڕی نەقد',
    exchange: 'بەدڵکردنەوە',
    exchangeNote: 'تێبینی: کاڵاکە بە هەمان بڕ بەدڵدەکرێتەوە بە بەرواری نوێ',
    newExpiryDate: 'بەرواری نوێی بەسەرچوون',
    currentExpiryDate: 'بەرواری ئێستای بەسەرچوون',
    currentQuantity: 'بڕی ئێستا',
    notes: 'تێبینی',
    exchangeNotesPlaceholder: 'تێبینی دەربارەی بەدڵکردنەوە...',
    exchangeDateNote: 'بەرواری نوێ بۆ کاڵای بەدڵکراوە',
    exchangeQuantityNote: 'بڕەکە وەکو خۆی دەمێنێتەوە، تەنها بەرواری بەسەرچوون دەگۆڕێت',
    exchangeRevertNote: 'تێبینی: تەنها تۆمارەکە سڕایەوە. پێویستە بەرواری کۆن بە دەستی بنووسیتەوە',
    
    // Customers
    customerName: 'ناڤێ کڕیار',
    customerId: 'ID کڕیار',
    customerPhone: 'ژمارا تەلەفۆنێ',
    customerAddress: 'ناڤنیشان',
    balance: 'باڵانس',
    debt: 'قەرز',
    addNewCustomer: 'زێدەکرنا کڕیارێ نوێ',
    
    // Sales
    sale: 'فرۆتن',
    sales: 'فرۆتنێن',
    noSales: 'چ فرۆتنێک نییە',
    total: 'کۆیا گشتی',
    paid: 'پارێ دراڤ',
    remaining: 'پارێ ماڤە',
    discount: 'داشکاندن',
    change: 'پارا گەڕاڤە',
    payment: 'پارەدان',
    cash: 'کاش',
    card: 'کارت',
    package: 'پارچە',
    paymentMethod: 'جۆرێ پارەدانێ',
    print: 'پرینت',
    
    // Reports
    reportFilters: 'فیلتەرەکانی ڕاپۆرت',
    customDateRange: 'بەرواری تایبەت',
    startDate: 'بەرواری دەستپێک',
    endDate: 'بەرواری کۆتایی',
    filterByDate: 'فیلتەر بە بەروار',
    filterByCategory: 'فیلتەر بە جۆر',
    filterByCustomer: 'فیلتەر بە کڕیار',
    filterByProduct: 'فیلتەر بە کاڵا',
    filterBySupplier: 'فیلتەر بە دابینکەر',
    filterByPaymentMethod: 'فیلتەر بە شێوازی پارەدان',
    filterByAmount: 'فیلتەر بە بڕ',
    filterByStatus: 'فیلتەر بە دۆخ',
    filterByUser: 'فیلتەر بە بەکارهێنەر',
    filterByLocation: 'فیلتەر بە شوێن',
    filterByType: 'فیلتەر بە جۆر',
    filterByBrand: 'فیلتەر بە براند',
    filterByPrice: 'فیلتەر بە نرخ',
    filterByQuantity: 'فیلتەر بە ژمارە',
    filterByProfit: 'فیلتەر بە سوود',
    filterByLoss: 'فیلتەر بە لەدەستدان',
    filterByReturn: 'فیلتەر بە گەڕانەوە',
    filterByExpense: 'فیلتەر بە خەرجی',
    filterByIncome: 'فیلتەر بە داهات',
    filterByCash: 'فیلتەر بە نەقد',
    filterByCard: 'فیلتەر بە کارت',
    filterByDebt: 'فیلتەر بە قەرز',
    filterByCredit: 'فیلتەر بە کریت',
    paymentMethodFilter: 'فیلتەری شێوازی پارەدان',
    allPaymentMethods: 'هەموو شێوازەکانی پارەدان',
    customerFilter: 'فیلتەری کڕیار',
    allCustomers: 'هەموو کڕیارەکان',
    amountRange: 'مەودای بڕ',
    minAmount: 'کەمترین بڕ',
    maxAmount: 'زۆرترین بڕ',
    profitRange: 'مەودای قازانج',
    minProfit: 'کەمترین قازانج',
    maxProfit: 'زۆرترین قازانج',
    sortBy: 'ڕیزکردن بەپێی',
    sortByDate: 'ڕیزکردن بەپێی بەروار',
    sortByAmount: 'ڕیزکردن بەپێی بڕ',
    sortByProfit: 'ڕیزکردن بەپێی قازانج',
    sortByCustomer: 'ڕیزکردن بەپێی کڕیار',
    sortAscending: 'بەرەو سەرەوە',
    sortDescending: 'بەرەو خوارەوە',
    exportToPDF: 'دەرهێنان بۆ PDF',
    exportToExcel: 'دەرهێنان بۆ Excel',
    filterPresets: 'فیلتەرە پێشگریمانەکان',
    profitableSales: 'فرۆشتنە قازانجدارەکان',
    debtSales: 'فرۆشتنە قەرزدارەکان',
    cashSales: 'فرۆشتنە نەقدیەکان',
    cardSales: 'فرۆشتنە کارتیەکان',
    applyFilters: 'جێبەجێکردنی فیلتەر',
    resetFilters: 'دووبارەکردنەوەی فیلتەر',
    filterResults: 'ئەنجامەکانی فیلتەر',
    noResultsFound: 'هیچ ئەنجامێک نەدۆزرایەوە',
    hide: 'شاردنەوە',
    show: 'نیشاندان',
    success: 'سەرکەوتوو',
    error: 'هەڵە',
    warning: 'ئاگاداری',
    info: 'زانیاری',
    areYouSure: 'دڵنیایت؟',
    cannotUndo: 'ناتوانیت پاشگەز ببیتەوە',
    operationSuccess: 'کارەکە سەرکەوتوو بوو',
    operationFailed: 'کارەکە سەرکەوتوو نەبوو',
    pleaseWait: 'تکایە چاوەڕێ بکە',
    noResults: 'هیچ ئەنجامێک نییە',
    noData: 'هیچ داتایەک نییە',
    create: 'دروستکردن',
    deleteAction: 'سڕینەوە',
    saveAction: 'پاشەکەوتکردن',
    backAction: 'گەڕانەوە',
    cancelAction: 'هەڵوەشاندنەوە',
    previousAction: 'پێشوو',
    nextAction: 'دواتر',
    resetAction: 'دووبارەکردنەوە',
    submitAction: 'ناردن',
    clearAction: 'پاککردنەوە',
    selectAction: 'هەڵبژاردن',
    status: 'دۆخ',
    required: 'پێویست',
    enabled: 'چالاک',
    disabled: 'ناچالاک',
    none: 'هیچ',
    more: 'زیاتر',
    less: 'کەمتر',
    showMore: 'زیاتر نیشان بدە',
    showLess: 'کەمتر نیشان بدە',
    page: 'لاپەڕە',
    perPage: 'بۆ هەر لاپەڕەیەک',
    of: 'لە',
    noRecords: 'هیچ تۆمارێک نییە',
    records: 'تۆمار',
    
    // Activities Page
    salesAndPurchases: 'فرۆشتن و کڕین',
    employeeMonitoring: 'چاودێری کارمەند',
    activitiesTotalSales: 'کۆی فرۆشتن',
    activitiesTotalPurchases: 'کۆی کڕین',
    activitiesTotalPaid: 'کۆی پارەدراو',
    activitiesTotalDebt: 'کۆی قەرز',
    activitiesSearchPlaceholder: 'گەڕان بە ناوی بەکارهێنەر، بەش...',
    activitiesPeriod: 'ماوە',
    activitiesStartDate: 'بەرواری دەستپێک',
    activitiesEndDate: 'بەرواری کۆتایی',
    activitiesSelectDate: 'هەڵبژاردنی بەروار',
    activitiesClearFilters: 'پاککردنەوەی فیلتەر',
    noActivitiesFound: 'هیچ چالاکییەک نەدۆزرایەوە',
    activitiesMore: 'زیاتر',
    editNotes: 'دەستکاریکردنی تێبینی',
    startDateCannotBeGreater: 'بەرواری دەستپێک نابێت گەورەتر بێت لە بەرواری کۆتایی',
    pleaseSelectStartDate: 'تکایە بەرواری دەستپێک هەڵبژێرە',
    apply: 'جێبەجێکردن',
    customerOrSupplier: 'کڕیار/دابینکەر',
    activitiesTotal: 'کۆی گشتی',
    activitiesNotes: 'تێبینی',
    activitiesAction: 'کار',
    activitiesSection: 'بەش',
    activitiesDetails: 'وردەکاری',
    noActivityLogs: 'هیچ تۆمارێکی چالاکی نییە',
    activitiesCreate: 'دروستکردن',
    activitiesUpdate: 'نوێکردنەوە',
    activitiesDelete: 'سڕینەوە',
    activitiesView: 'بینین',
    activitiesLogin: 'چوونەژوورەوە',
    activitiesLogout: 'دەرچوون',
    activitiesType: 'جۆر',
    activitiesItems: 'کاڵا',
    sevenDays: '٧ ڕۆژ',
    thirtyDays: '٣٠ ڕۆژ',
    ninetyDays: '٩٠ ڕۆژ',
    threeHundredSixtyFiveDays: '٣٦٥ ڕۆژ',
    
    // Reports Page
    generalReportTitle: 'راپۆرتی گشتی',
    generalReportDescription: 'راپۆرتی گشتی بۆ هەموو بەشەکان',
    reportCustomerReports: 'راپۆرتی کڕیار',
    reportCustomerSpecial: 'راپۆرتی تایبەتی کڕیار',
    reportCustomerBalance: 'باڵانسی کڕیار',
    reportCustomerItems: 'کاڵاکانی کڕیار',
    reportCustomerGeneral: 'راپۆرتی گشتی کڕیار',
    reportCustomerInvoices: 'وەسڵەکانی کڕیار',
    reportProfit: 'راپۆرتی قازانج',
    reportProfitDetails: 'وردەکارییەکانی قازانج',
    reportSalesItems: 'کاڵاکانی فرۆشتن',
    reportPurchaseItems: 'کاڵاکانی کڕین',
    reportStockItems: 'کاڵاکانی کۆگا',
    reportExpiredProducts: 'کاڵاکانی بەسەرچوو',
    reportSupplierReports: 'راپۆرتی دابینکەر',
    reportSupplierSpecial: 'راپۆرتی تایبەتی دابینکەر',
    reportSupplierBalance: 'باڵانسی دابینکەر',
    reportSupplierItems: 'کاڵاکانی دابینکەر',
    reportSupplierGeneral: 'راپۆرتی گشتی دابینکەر',
    reportSupplierInvoices: 'وەسڵەکانی دابینکەر',
    reportSupplierProfit: 'قازانجی دابینکەر',
    reportGeneral: 'راپۆرتی گشتی',
    reportGeneralInfo: 'زانیاری گشتی',
    reportMonthly: 'راپۆرتی مانگانە',
    reportAccountantActivity: 'چالاکییەکانی ژمێریار',
    reportOtherReports: 'راپۆرتەکانی تر',
    reportAccountantSafe: 'سندوقی ژمێریار',
    reportExpenses: 'راپۆرتی خەرجی',
    reportRegistrationDate: 'بەرواری تۆمارکردن',
    viewReports: 'بینینی راپۆرتەکان',
    openInvoice: 'کردنەوەی وەسڵ',
    viewInvoice: 'بینینی وەسڵ',
    purchaseInvoiceDetails: 'وردەکارییەکانی وەسڵی کڕین',
    invoiceNumberLabel: 'ژمارەی وەسڵ',
    supplierLabel: 'دابینکەر',
    paymentMethodLabel: 'شێوازی پارەدان',
    userLabel: 'بەکارهێنەر',
    productNameLabel: 'ناوی کاڵا',
    quantityLabel: 'بڕ',
    paidLabel: 'پارەدراو',
    debtLabel: 'قەرز',
    notesLabel: 'تێبینی',
    invoiceLocked: 'وەسڵ قفڵکراوە',
    amountCannotBeLess: 'بڕ نابێت کەمتر بێت',
    noDiscountPermission: 'دەسەلاتی داشکاندن نییە',
    guestCustomer: 'کڕیاری میوان',
    externalProduct: 'کاڵای دەرەکی',
    invoiceUnparked: 'وەسڵ لابرا',
    newTabCreated: 'تابی نوێ دروست کرا',
    invoiceLoaded: 'وەسڵ بارکرا',
    invoiceCleared: 'وەسڵ پاککرایەوە',
    otherInvoiceNotFound: 'وەسڵی تر نەدۆزرایەوە',
    popupBlocked: 'پۆپئەپ بلاک کرا',
    printCart: 'چاپکردنی سەبەتە',
    shop: 'فرۆشگا',
    totalInWords: 'کۆی بە وشە',
    thanksForPurchase: 'سوپاس بۆ کڕینەکەت',
    discountLabel: 'داشکاندن',
    generalDiscount: 'داشکاندنی گشتی',
    codeLabel: 'کۆد',
    returned: 'گەڕاوەتەوە',
    partialReturned: 'بەشێکی گەڕاوەتەوە',
    sold: 'فرۆشراو',
    noSaleDebtPermission: 'دەسەلاتی فرۆشتن بە قەرز نییە',
    noSaleInstallmentPermission: 'دەسەلاتی فرۆشتن بە قیست نییە',
    selectCustomerForInstallment: 'کڕیارێک هەڵبژێرە بۆ قیست',
    enterAdvanceAndMonths: 'پێشەکی و ژمارەی مانگەکان بنووسە',
    advanceMustBeLess: 'پێشەکی دەبێت کەمتر بێت',
    installmentRecorded: 'قیست تۆمار کرا',
    enterPaymentAmount: 'بڕی پارەدان بنووسە',
    paymentAmountExceedsDebt: 'بڕی پارەدان زیاترە لە قەرز',
    paymentRecorded: 'پارەدان تۆمار کرا',
    enterDebtAmount: 'بڕی قەرز بنووسە',
    debtAdded: 'قەرز زیاد کرا',
    enterCustomerName: 'ناوی کڕیار بنووسە',
    enterPhoneNumber: 'ژمارەی تەلەفۆن بنووسە',
    customerAdded: 'کڕیار زیاد کرا',
    noPrintPermission: 'دەسەلاتی چاپکردن نییە',
    searchProduct: 'گەڕان بە کاڵا',
    enterProductNameAndPrice: 'ناوی کاڵا و نرخ بنووسە',
    externalProductAdded: 'کاڵای دەرەکی زیاد کرا',
    addExternalProduct: 'زیادکردنی کاڵای دەرەکی',
    cashSale: 'فرۆشتن بە نەقد',
    debtSale: 'فرۆشتن بە قەرز',
    installmentSale: 'فرۆشتن بە قیست',
    parkInvoice: 'پارککردنی وەسڵ',
    parkInvoiceTitle: 'پارککردنی وەسڵ',
    invoiceNotes: 'تێبینی وەسڵ',
    noParkedInvoices: 'هیچ وەسڵێکی پارککراو نییە',
    writeNote: 'نووسینی تێبینی',
    writeInvoiceNoteHere: 'تێبینی وەسڵ لێرە بنووسە',
    paidAmountLabel: 'بڕی پارەدراو',
    debtPaymentDate: 'بەرواری پارەدانی قەرز',
    paidLabelShort: 'پارەدراو',
    remainingDebtLabel: 'قەرزی ماوە',
    addDebtWithoutPurchase: 'زیادکردنی قەرزی بێ کڕین',
    printDebt: 'پرێنتی قەرز',
    viewDebts: 'بینینی قەرزەکان',
    currencyLabel: 'دراو',
    
    // Returns Page
    pleaseSpecifyCashAmount: 'تکایە بڕی نەقد دیاری بکە',
    returnGoodsToSupplier: 'گەڕاندنەوەی کاڵا بۆ دابینکەر',
    supplierReturnRecorded: 'گەڕانەوەی دابینکەر تۆمار کرا',
    returnRecordError: 'هەڵە لە تۆمارکردنی گەڕانەوە',
    returnReportTitle: 'راپۆرتی گەڕانەوە',
    returnAndRefundGoods: 'گەڕاندنەوە و گەڕاندنەوەی پارە',
    returnNumber: 'ژمارەی گەڕانەوە',
    refundAmount: 'بڕی گەڕاندنەوە',
    reason: 'هۆکار',
    createdBy: 'دروستکراو لەلایەن',
    noReason: 'هیچ هۆکارێک نییە',
    totalReturnsLabel: 'کۆی گەڕانەوەکان',
    totalRefundLabel: 'کۆی گەڕاندنەوە',
    averageReturnAmount: 'نێوەندی بڕی گەڕانەوە',
    invoiceNumberShort: 'ژ. وەسڵ',
    priceLabel: 'نرخ',
    returnTo: 'گەڕاندنەوە بۆ',
    invoiceNumberShortLabel: 'ژ. وەسڵ',
    actionLabel: 'کار',
    returnButton: 'گەڕاندنەوە',
    returnGoodsTo: 'گەڕاندنەوەی کاڵا بۆ',
    itemsToReturn: 'کاڵا بۆ گەڕاندنەوە',
    purchasedQuantity: 'بڕی کڕدراو',
    searchForInvoiceOrSupplier: 'گەڕان بە وەسڵ یان دابینکەر',
    cashReceived: 'نەقد وەرگیراو',
    becameDebt: 'بوو بە قەرز',
    cashAmountReceived: 'بڕی نەقد وەرگیراو',
    writeCashAmount: 'بڕی نەقد بنووسە',
    debtAmount: 'بڕی قەرز',
    confirmReturn: 'دڵنیایی لە گەڕاندنەوە',
    waiting: 'چاوەڕێ',
    approve: 'پەسەندکردن',
    confirmSupplierReturnTitle: 'دڵنیایی لە گەڕاندنەوەی دابینکەر',
    confirmSupplierReturnMessage: 'دڵنیایت لە گەڕاندنەوەی کاڵاکان بۆ دابینکەر؟',
    cashReceivedLabel: 'نەقد وەرگیراو',
    returnDetails: 'وردەکارییەکانی گەڕانەوە',
    returnedItems: 'کاڵای گەڕاوەتەوە',
    noCustomerReturnsFound: 'هیچ گەڕانەوەیەکی کڕیار نەدۆزرایەوە',
    noSupplierReturnsFound: 'هیچ گەڕانەوەیەکی دابینکەر نەدۆزرایەوە',
    itemsReturned: 'کاڵای گەڕاوەتەوە',
    printInvoice: 'چاپکردنی وەسڵ',
    withoutSupplier: 'بێ دابینکەر',
    itemsLabel: 'کاڵا',
    productWithoutName: 'کاڵای بێ ناو',
    noItemsFound: 'هیچ کاڵایەک نەدۆزرایەوە',
    employeeInfo: 'زانیاری کارمەند',
    employeeNumber: 'ژمارەی کارمەند',
    mobileNumber: 'ژمارەی مۆبایل',
    employeeType: 'جۆری کارمەند',
    employeeStatus: 'دۆخی کارمەند',
    activeStatus: 'چالاک',
    inactiveStatus: 'ناچالاک',
    timeLabel: 'کات',
    previousInvoice: 'وەسڵی پێشوو',
    nextInvoice: 'وەسڵی دواتر',
    parkedInvoices: 'وەسڵە هەڵگیراوەکان',
    invoiceCount: 'وەسڵ',
    invoiceNumberPrefix: 'وەسڵ #',
    unnamedInvoice: 'وەسڵی بێ ناو',
    itemCount: 'کاڵا',
    customerLabel: 'کڕیار: ',
    loadInvoice: 'هەڵگرتن',
    deleteInvoice: 'سڕینەوە',
    confirmDeleteInvoice: 'دڵنیایت لە سڕینەوەی ئەم وەسڵە؟',
    warranty: 'زەمان',
    showInvoice: 'نیشاندانی وەسڵ',
    selectACustomer: 'کڕیارێک هەڵبژێرە',
    searchForInvoice: 'گەران بۆ وەسڵ',
    customerSelection: 'هەڵبژاردنی کڕیار',
    dollarRateLabel: 'نرخی دۆلار:',
    advanceLabel: 'پێشەکی',
    installmentMonthsLabel: 'ژمارەی مانگەکان',
    monthlyPaymentLabel: 'پارەی مانگانە',
    totalInstallmentsLabel: 'کۆی قیستەکان:',
    remainingInstallmentLabel: 'قیستی ماوە:',
    hasAdvance: 'زیادەی هەیە',
    customDesignUsed: 'دیزاینی Custom-ت بەکاردێت',
    noAccessPermission: 'تۆ دەسەلاتی دەستگەیشتن بەم بەشەت نییە!',
    
    // Table Headers
    customerNameHeader: 'ناوی کڕیار',
    phoneHeader: 'تەلەفۆن',
    totalSalesHeader: 'کۆی فرۆشتن',
    totalRemainingHeader: 'قەرز',
    salesCountHeader: 'ژمارەی فرۆشتن',
    balanceHeader: 'باڵانس',
    addressHeader: 'ناونیشان',
    totalProfitHeader: 'قازانج',
    invoiceIdHeader: 'ژمارەی پسوول',
    itemsCountHeader: 'ژمارەی کاڵا',
    productNameHeader: 'ناوی کاڵا',
    barcodeHeader: 'بارکۆد',
    quantityHeader: 'دانە',
    priceHeader: 'نرخ',
    discountHeader: 'داشکاندن',
    totalHeader: 'کۆی گشتی',
    saleDateHeader: 'بەروار',
    idHeader: 'ID',
    profitPercentageHeader: 'نرخی قازانج %',
    saleIdHeader: 'ID فرۆشتن',
    purchaseIdHeader: 'ID کڕین',
    costPriceHeader: 'نرخی کرین',
    unitHeader: 'دانە',
    categoryHeader: 'پۆل',
    retailPriceHeader: 'نرخی تاک',
    wholesalePriceHeader: 'نرخی جوملە',
    specialPriceHeader: 'نرخی تایبەت',
    totalValueHeader: 'نرخی کۆی کۆگا',
    totalSoldHeader: 'فرۆشراو',
    totalPurchasedHeader: 'کڕدراو',
    totalPurchasesHeader: 'کۆی کڕین',
    purchasesCountHeader: 'ژمارەی کڕین',
    revenueHeader: 'داهات',
    grossProfitHeader: 'قازانجی خاو',
    totalExpensesHeader: 'کۆی خەرجی',
    netProfitHeader: 'قازانجی تەواو',
    totalCustomersHeader: 'کۆی کڕیارەکان',
    totalSuppliersHeader: 'کۆی دابینکەران',
    totalProductsHeader: 'کۆی کاڵاکان',
    monthHeader: 'مانگ',
    salesRevenueHeader: 'داهاتی فرۆشتن',
    salesProfitHeader: 'قازانجی فرۆشتن',
    purchasesTotalHeader: 'کۆی کڕین',
    typeHeader: 'جۆر',
    customerOrSupplierHeader: 'کڕیار/دابینکار',
    amountHeader: 'بڕ',
    descriptionHeader: 'وەسف',
    registrationDateHeader: 'بەرواری تۆمارکردن',
    totalSalesPaidHeader: 'پارەی وەرگیراو لە فرۆشتن',
    totalPurchasesPaidHeader: 'پارەی دراو بۆ کڕین',
    totalExpensesAmountHeader: 'کۆی خەرجی',
    netCashHeader: 'پارەی خاو',
    
    // Activity Types
    saleType: 'فرۆشتن',
    purchaseType: 'کڕین',
    
    // View Reports Page Buttons and Filters
    downloadPDF: 'PDF',
    backToReports: 'گەڕانەوە',
    searchPlaceholder: 'گەڕان...',
    allTime: 'هەموو کات',
    todayFilter: 'ئەمڕۆ',
    weekFilter: 'هەفتە',
    monthFilter: 'مانگ',
    yearFilter: 'ساڵ',
    startDateLabel: 'بەرواری دەستپێک',
    endDateLabel: 'بەرواری کۆتایی',
    noReportSelected: 'هیچ راپۆرتێک هەڵنەبژێردراوە',
    detailedInformation: 'زانیاری ورد و تەواو',
    noDataToPrint: 'هیچ داتایەک بۆ چاپکردن نیە',
    totalData: 'کۆی گشتی',
    dataLabel: 'داتا',
    totalProfitLabel: 'کۆی قازانج',
    totalAmountLabel: 'کۆی گشتی',
    invoiceLabel: 'وەسڵ',
    dailyReport: 'ڕاپۆرتا ڕۆژانە',
    monthlyReport: 'ڕاپۆرتا مانگانە',
    profit: 'قازانج',
    revenue: 'داهات',
    cost: 'نرخێ کڕینێ',
    
    // Dates
    today: 'ئەمڕۆ',
    yesterday: 'دوێنێ',
    thisWeek: 'ڤێ هەفتەیێ',
    lastWeek: 'هەفتەی پێشوو',
    thisMonth: 'ڤێ مانگێ',
    lastMonth: 'مانگی پێشوو',
    lastYear: 'ساڵی پێشوو',
    date: 'بەروار',
    from: 'لە',
    to: 'بۆ',
    
    // Dashboard
    welcome: 'بەخێربێیت!',
    dashboardOverview: 'پێشاندانا گشتی سیستەمێ کاشێرێ',
    todayRevenue: 'فرۆتنا ئەمڕۆ',
    todayProfit: 'قازانجا ئەمڕۆ',
    netProfit: 'قازانجا پاک',
    todayExpenses: 'خەرجیێن ئەمڕۆ',
    totalRevenue: 'کۆیا فرۆتنێ',
    totalProfit: 'کۆیا قازانجێ',
    totalExpenses: 'کۆیا خەرجیێن',
    cashInHand: 'پارێ دەست',
    lowStockAlert: 'ئاگەداریا کاڵایێ کەم',
    recentSales: 'فرۆتنێن نوێ',
    invoice: 'وەسڵ',
    invoiceNumber: 'ژمارەیا وەسڵێ',
    newInvoice: 'وەسڵێ نوێ',
    thankYouMessage: 'سوپاس بۆ کڕینا تە!',
    receipt: 'وسڵ',
    receiptNumber: 'ژمارا وسڵێ',
    paperSize: 'قەبارا کاغەزێ',
    visitAgain: 'چاڤەڕێیا دووبارە سەردانا تە',
    showRemainingOnReceipt: 'پیشاندانا پارێیا ماوە لە وسڵێدا',
    showCustomerName: 'پیشاندانا ناڤێ کڕیار',
    errorReturnNote: 'هەڵە و لەبیرچوون دگەڕێتەڤە بۆ هەردوو لایێن',
    items: 'کاڵایێن',
    amount: 'بڕ',
    view: 'بینین',
    updateDollarRate: 'نوێکرنا نرخێ دۆلارێ',
    currentRate: 'نرخا ئێستا',
    newRate: 'نرخا نوێ',
    update: 'نوێکرن',
    revenueMinusExpenses: 'داهات - خەرجی',
    selectSections: 'بەشەکان هەڵبژێرە',
    dollarRateTitle: 'نرخێ دۆلارێ',
    dollarRateInDinar: 'نرخ بە دینار',
    rateInDollar: 'نرخ بە دۆلار:',
    activities: 'چالاکیەکان',
    dollarRateNote: 'نرخێ دۆلارێ بۆ گۆڕینێ نرخان لە دینار بۆ دۆلار بەکار دێت.',
    dollarRateMustBeGreater: 'نرخێ دۆلارێ دەبێت گەورەتر بێت لە سفر',
    dollarRateTooLarge: 'نرخێ دۆلارێ زۆر گەورەیە',
    dollarRateUpdatedSuccess: 'نرخێ دۆلارێ بە سەرکەوتوویی نوێ کرایەوە ✓',
    dollarRateUpdateError: 'هەڵەیەک ڕوویدا لە نوێکرنا نرخێ دۆلارێ',
    totalLabel: 'کۆیا گشتی',
    expensesLabel: 'خەرجی',
    totalExpensesLabel: 'کۆیا خەرجی',
    productsLabel: 'بەرهەم',
    totalProductsLabel: 'کۆیا بەرهەم',
    salesLabel: 'فرۆشەکان',
    returnsLabel: 'گەڕانەوەی فرۆش',
    last10: 'کۆتا ١٠',
    noSalesFound: 'هیچ فرۆشتنێک نییە',
    noReturnsFound: 'هیچ گەڕانەوەیەک نییە',
    quickStats: 'ئامارێ خێراکان',
    productItem: 'کاڵا',
    
    // Purchase History
    purchaseHistory: 'ئاماریێن کرنێ',
    viewPurchaseHistory: 'سەیرکرنا مێژویێ کرنێن',
    noPurchaseHistory: 'هیچ مێژویەکا کرنێ نینە',
    productNotPurchasedYet: 'ئەڤ کاڵایێ هێشتا نەکریە',
    totalPurchases: 'کۆیا کرنێ',
    totalQuantity: 'کۆیا بڕێ',
    lastPurchasePrice: 'دوایین نرخ',
    oldPurchaseCost: 'نرخی کۆن',
    purchaseCostDiff: 'جیاوازی کرین',
    totalSpent: 'کۆیا کرنێ',
    times: 'جار',
    noPurchasesFound: 'هیچ کرنێک نەدۆزرایەڤە',
    tryDifferentFilters: 'فلتەرێ جیاواز تاقی بکەرەڤە',
    allSuppliers: 'هەمی دابینکاران',
    allProducts: 'هەمی کاڵایێن',
    dateFrom: 'لە بەرڤارێ',
    dateTo: 'بۆ بەرڤارێ',
    allCurrencies: 'هەمی دراوێن',
    allMethods: 'هەمی جۆرێن',
    searchInvoiceOrNotes: 'ژمارەیا وەسڵێ، تێبینی...',
    purchasesList: 'لیستا کرنێن',
    filters: 'فلتەر',
    clearFilters: 'ژێبرنا فلتەر',
    showImages: 'نیشاندانی وێنە',
    allPurchases: 'هەمی کرنێن',
    totalItems: 'کۆیا کاڵایێن',
    totalCost: 'کۆیا نرخێ',
    notSpecified: 'دیاری نەکریە',
    unknown: 'نەزانراو',
    
    cashBalance: 'باڵانسا کاشێ',
    cashAvailable: 'پارێ بەردەست',
    fromCustomers: 'لە کڕیارێن',
    alerts: 'ئاگەداریێن',
    lowStockProductsAlert: 'کاڵایێ نزیک لە بڕینێ',
    quantityLow: 'بڕیان کەمە',
    customerDebt: 'قەرزێ کڕیارێن',
    allGood: 'هەموو شتێک باشە!',
    noIssuesInSystem: 'هیچ کێشەیەک نینە لە سیستەمێدا',
    noSalesYet: 'هیچ فرۆتنێک نینە',
    productsLowQuantity: 'کاڵایێن بڕیان کەمە',
    
    // POS
    scanBarcode: 'سکانا بارکۆدێ',
    quantity: 'بڕ',
    quantityInStock: 'بڕی ناو کۆگا',
    price: 'نرخ',
    subtotal: 'کۆیا لاوەکی',
    totalAmount: 'کۆیا گشتی',
    selectCustomer: 'هەڵبژارتنا کڕیارێ',
    noCustomer: 'بێ کڕیار',
    addDiscount: 'داشکاندن',
    paymentType: 'جۆرێ پارەدانێ',
    completeSale: 'تەواوکرنا فرۆتنێ',
    clearCart: 'پاککرنا سەبەتێ',
    saveCart: 'پاشەکەوتکرنا سەبەتێ',
    savedCarts: 'سەبەتێن پاشەکەوتکری',
    cart: 'سەبەتە',
    loadCart: 'بارکرنا سەبەتێ',
    cartEmpty: 'سەبەتە بەتاڵە',
    invoices: 'وەسڵ',
    invoicesMenu: 'وەسڵێن',
    load: 'بارکرنەڤە',
    addItems: 'زێدەکرنا کاڵا',
    newTab: 'تابێ نوێ',
    paidAmount: 'بڕا پارێ',
    session: 'دانیشتن',
    tab: 'تاب',
    cannotCloseLastTab: 'ناتوانیت کۆتا تابەکە دابخەیت',
    tabHasItems: 'ڤێ تابێ کاڵای تێدایە. دڵنیایت لە داخستنێ؟',
    sureToCloseTab: 'دڵنیایت لە داخستنێ؟',
    confirmClearCart: 'دڵنیایت لە پاککرنا سەبەتێ؟',
    cartSaved: 'وەسڵەکە هەڵگیرا!',
    savingCart: 'سرینەوەی وەسڵ',
    restoringCart: 'دانەخستنەوەی وەسڵ',
    cartSavedMessage: 'هەڵگیرا',
    confirmLoadCart: 'سەبەتا ئێستا ژێبرە و ڤا وەسڵە بارکرێتەڤە؟',
    cartNotEmpty: 'سەبەتە بەتاڵ نینە',
    wantToSaveOrDiscard: 'دەتڤێت وەسڵەکە هەڵبگریت یان بژێبیت؟',
    saveCartPark: 'هەڵگرتنی وەسڵ',
    discardAndGo: 'ژێبرن و بڕۆ',
    goBack: 'پاشڤەگەڕاتن',
    selectCustomerForDebt: 'تکایە کڕیارێک هەڵبژێرە بۆ فرۆتنا بە قەرز',
    noProductsFound: 'هیچ کاڵایەک نەدۆزرایەڤە',
    allCategories: 'هەموو جۆرێن',
    seller: 'فرۆشیار',
    selectSeller: 'هەڵبژارتنا فرۆشیارێ',
    generalSale: 'فرۆتنا گشتی',
    soldBy: 'فرۆشراوە لەلایا',
    retail: 'تاک',
    wholesale: 'جوملە',
    special: 'تایبەت',
    retailPrice: 'نرخێ تاک',
    wholesalePrice: 'نرخێ کۆ',
    specialPrice: 'نرخێ تایبەت',
    piece: 'پارچە',
    carton: 'کارتۆن',
    box: 'قوتو',
    baseUnit: 'یەکا بنەڕەت',
    addProductsToStart: 'کاڵا زێدە بکە بۆ دەستپێکرنێ',
    updateButton: 'نوێکرن',
    addButton: 'زێدەکرن',
    drinks: 'خواردنەڤە',
    bread: 'نان',
    food: 'خواردن',
    cleaningSupplies: 'پاککەرەڤە',
    homeGoods: 'کەرەستێ ماڵەڤە',
    in: 'لە',
    barcodeRequired: 'بە لایەنی کەمەڤە یەک باڕکۆد پێڤستە',
    barcodeAlreadyExists: 'ئەم بارکۆدە بەکار هاتوە',
    productNameAlreadyExists: 'کاڵای بەم ناوە پێشتر تۆمار کراوە. تکایە ناوی جیاواز هەڵبژێرە.',
    productAddedSuccess: 'کاڵاکە بە سەرکەوتویی زێدەکرا ✓',
    errorOccurred: 'هەڵەیەک ڕوویدا',
    resetForm: 'ژێبرنا فۆرمێ',
    basicInfo: 'زانیارێ سەرەکی',
    selectOption: 'هەلبژێرە',
    company: 'کۆمپانیا',
    onlyUnit: 'تەنێ دانە',
    unitPlusPackage: 'دانە + پارچە',
    unitPlusCarton: 'دانە + کارتۆن',
    allUnits: 'هەموو (دانە + پارچە + کارتۆن)',
    purchasePrice: 'نرخێ کڕینێ',
    generate: 'دروست',
    prices: 'نرخێن',
    productImage: 'وێنا کاڵا',
    notes: 'تێبینی',
    notesPlaceholder: 'تێبینی بۆ کاڵایێ...',
    saveProduct: 'تۆمارکرنا کاڵا',
    productManagement: 'بەشی کۆگا',
    salePrice: 'نرخێ فرۆتنێ',
    selectCategory: 'جۆر هەلبژێرە',
    automatic: 'ئۆتۆماتیک',
    fromSettings: 'لە ڕێکخستنێن',
    confirmDeleteProduct: 'دڵنیای لە ژێبرنا ڤێ کاڵایێ؟',
    imageLabel: 'وێنە',
    cancelButton: 'هەڵڤەشاندنەڤە',
    customerManagement: 'بەڕێڤەبرنا کڕیارێن',
    
    // Offers
    createOffer: 'دروستکرنا ئۆفەر',
    offerName: 'ناڤێ ئۆفەر',
    offerDescription: 'وەسفێ ئۆفەر',
    offerStartDate: 'بەروارێ دەستپێکرنێ',
    offerEndDate: 'بەروارێ کۆتایی',
    offerPrice: 'نرخێ ئۆفەر',
    offerDiscount: 'داشکاندن',
    offerDiscountPercent: 'داشکاندن (%)',
    addProductToOffer: 'زێدەکرنا کاڵا بۆ ئۆفەر',
    offerProducts: 'کاڵایێن ئۆفەر',
    offerManagement: 'بەڕێڤەبرنا ئۆفەر',
    saveOffer: 'پاشەکەوتکرنا ئۆفەر',
    offerUpdated: 'ئۆفەر بە سەرکەوتویی نوێکرا',
    cancelOffer: 'هەڵڤەشاندنا ئۆفەر',
    noProductsInOffer: 'هیچ کاڵایەک لە ئۆفەردا نییە',
    selectProductsForOffer: 'کاڵا هەلبژێرە بۆ ئۆفەر',
    noOffers: 'هیچ ئۆفەرێک نییە',
    deactivate: 'ناچالاککرن',
    totalDiscount: 'کۆی داشکاندن',
    duplicateOffer: 'کۆپی کرنا ئۆفەر',
    copyOffer: 'کۆپی',
    printOffer: 'چاپکرنا ئۆفەر',
    exportOffer: 'دەرهێنانا ئۆفەر',
    importOffer: 'هاوردەکرنا ئۆفەر',
    offerCopied: 'ئۆفەر بە سەرکەوتویی کۆپی کرا',
    offerScope: 'جۆرێ ئۆفەر',
    exampleOffer: 'نمونە',
    specificOffer: 'بە دیاری',
    minimumQuantity: 'کەمترین بڕ',
    minQuantityPerCustomer: 'کەمترین بڕ بۆ هەر کڕیارێک',
    minQuantityPerCustomerDesc: 'کەمترین بڕی کڕین بۆ هەر کڕیارێک (ئەگەر 0 بێت، سنوور نییە)',
    maxQuantityPerCustomer: 'زۆرترین بڕ بۆ هەر کڕیارێک',
    maxQuantityPerCustomerDesc: 'زۆرترین بڕی کڕین بۆ هەر کڕیارێک (ئەگەر 0 بێت، سنوور نییە)',
    offerStatistics: 'ئامارێن ئۆفەر',
    offerType: 'جۆرێ ئۆفەر',
    discountOffer: 'داشکاندن',
    specialPriceOffer: 'نرخێ تایبەت',
    buyXGetYOffer: 'بکڕە X بگرە Y (هەمان کاڵا)',
    buyXGetYDifferentOffer: 'بکڕە X لە کاڵایێ A، بگرە Y لە کاڵایێ B',
    freeGiftOffer: 'بەخشی',
    percentageDiscount: 'داشکاندن بە لێکەوتە',
    fixedDiscount: 'داشکاندنا دیاریکرا',
    buyQuantity: 'بکڕە',
    getQuantity: 'بگرە',
    freeProduct: 'کاڵایێ بەخشی',
    buyProduct: 'کاڵایێ بکڕین',
    getProduct: 'کاڵایێ بگرتن',
    
    editCustomer: 'دەستکاریا کڕیار',
    confirmDeleteCustomer: 'دڵنیای لە ژێبرنا ڤێ کڕیارێ؟',
    phoneNumber: 'ژمارا تەلەفۆنێ',
    customerNamePlaceholder: 'ئەحمەد مەحمود',
    phoneNumberPlaceholder: '07501234567',
    
    // Suppliers
    supplierManagement: 'بەڕێڤەبرنا دابینکەرێن',
    supplierInfo: 'زانیاری و لیستا هەمی دابینکەرێن',
    newSupplier: 'دابینکەرێ نوێ',
    totalSuppliers: 'کۆیا دابینکەرێن',
    totalDebt: 'کۆیا قەرزێ',
    debtors: 'قەرزدار',
    searchSupplier: 'گەڕان بە ناڤێ یان تەلەفۆنێ...',
    noSuppliers: 'هیچ دابینکەرێکی تۆمار نەکراوە',
    editSupplier: 'دەستکاریا دابینکەر',
    confirmDeleteSupplier: 'دڵنیایت لە ژێبرنا ڤێ دابینکەرێ؟',
    supplierName: 'ناڤێ دابینکەر',
    address: 'ناڤنیشان',
    emailOptional: 'ئیمەیڵ (ئیختیاری)',
    notesOptional: 'تێبینی (ئیختیاری)',
    namePlaceholder: 'ناڤ...',
    addressPlaceholder: 'ناڤنیشانا تەواو...',
    
    // Purchases
    purchaseManagement: 'بەڕێڤەبرنا کرنێ',
    purchaseDescription: 'کرن لە دابینکەرێن و زێدەکرنا کاڵایێن بۆ کۆگا',
    selectSupplierForDebt: 'تکایە دابینکەرێک هەڵبژێرە بۆ کڕینی بە قەرز',
    totalExpense: 'کۆیا خەرجێ',
    supplierDebt: 'قەرزێ دابینکەرێن',
    newPurchase: 'کرنێ نوێ',
    purchaseDescription2: 'کاڵا زێدە بکە و کرنێکە تەواو بکە',
    selectSupplier: 'دابینکەر هەلبژێرە',
    selectProduct: 'کاڵایەک هەلبژێرە',
    productQuantity: 'ژمارا کاڵا',
    noItemsAdded: 'هیچ کاڵایەکی زێدە نەکراوە',
    grandTotal: 'کۆیا گشتی',
    amountPaid: 'بڕا پارەدراو',
    completePurchase: 'تەواوکرنا کرنێ',
    purchaseList: 'لیستا کرنێن',
    noPurchases: 'هیچ کرنێکی تۆمار نەکراوە',
    details: 'وردەکاری',
    purchaseDetails: 'وردەکاریێن کرنێ',
    fillAllFields: 'تکایە هەمی زانیارییێن پڕ بکەرەڤە',
    addAtLeastOneProduct: 'تکایە لانیکەم کاڵایەک زێدە بکە',
    purchaseRecorded: 'کرن بە سەرکەوتوویی تۆمار بوو',
    lastPrice: 'نرخا کۆتایی',
    product: 'کاڵا',
    optional: 'ئیختیاری',
    
    // Safe
    safeManagement: 'بەڕێڤەبرنا سندوقێ',
    cashTransactions: 'مامەڵێن کاشێ',
    safeBalance: 'باڵانسا سندوقێ',
    totalIn: 'کۆیا هاتنە ژوورەڤە',
    totalOut: 'کۆیا چوونە دەرڤە',
    newTransaction: 'مامەڵا نوێ',
    transactionList: 'لیستا مامەڵێن',
    noTransactions: 'هیچ مامەڵەیەکی تۆمار نەکراوە',
    transactionType: 'جۆرێ مامەڵێ',
    moneyIn: 'هاتنە ژوورەڤە',
    moneyOut: 'چوونە دەرڤە',
    transactionDetails: 'وردەکاریێن مامەڵێ',
    reference: 'مراجع',
    referenceOptional: 'ژمارا مراجعێ (ئیختیاری)',
    confirmDeleteTransaction: 'دڵنیایت لە ژێبرنا ڤێ مامەڵێ؟',
    allTransactions: 'هەموو',
    moneyAmount: 'بڕا پارێ',
    type: 'جۆر',
    dateLabel: 'بەروار',
    
    // Expenses
    expenseManagement: 'بەڕێڤەبرنا خەرجیێن',
    expenseDescription: 'تۆمارا هەمی خەرجیێن دوکانێ',
    newExpense: 'خەرجیا نوێ',
    expenseList: 'لیستا خەرجیێن',
    noExpenses: 'هیچ خەرجیەکی تۆمار نەکراوە',
    editExpense: 'دەستکاریا خەرجی',
    expenseType: 'جۆرێ خەرجیێ',
    expenseDetails: 'وردەکاریێن خەرجیێ',
    confirmDeleteExpense: 'دڵنیایت لە ژێبرنا ڤێ خەرجیێ؟',
    allTypes: 'هەموو جۆرێن',
    
    // Categories
    rent: 'کرێ',
    salary: 'مووچە',
    salaryAndRent: 'مەعاش و کرێ',
    salaryAndRentManagement: 'بەڕێوەبردنا مەعاشێ کارمەندێن و کرێیا دوکانێ',
    employeeSalaries: 'مەعاشێ کارمەندێن',
    shopRent: 'کرێیا دوکانێ',
    addSalary: 'زێدەکرنا مەعاشێ',
    editSalary: 'دەستکاریکرنا مەعاشێ',
    salaryType: 'جۆرێ مەعاشێ',
    salaryAmount: 'بڕێ مەعاشێ',
    daily: 'رۆژانە',
    monthly: 'مانگانە',
    salaryList: 'لیستا مەعاشێن',
    noSalaries: 'هیچ مەعاشێکی نییە',
    paymentDue: 'کاتێ پارەدانێ هاتیە',
    totalPaid: 'کۆیا پارەدراو',
    lastPayment: 'دوایین پارەدان',
    nextPayment: 'پارەدانی داهاتوو',
    noPayments: 'هیچ پارەیەکی نەدراوە',
    paymentHistory: 'مێژوویا پارەدانێ',
    paySalary: 'پارەدان',
    payRent: 'پارەدانیا کرێ',
    recordPayment: 'تۆمارکرنا پارەدانێ',
    selectEmployee: 'هەڵبژاردنا کارمەندێ',
    addRent: 'زێدەکرنا کرێ',
    updateRent: 'نوێکرنا کرێ',
    rentAmount: 'بڕێ کرێ',
    paymentDate: 'بەرواریا پارەدانێ',
    nextPaymentDate: 'پارەدانی داهاتوو',
    nextPaymentDateNote: 'تێبینی: بەرواریا پارەدانیا داهاتوو ئۆتۆماتیک ٣٠ رۆژ زێدە دەکرێت',
    noRentInfo: 'هیچ زانیاریا کرێ نییە',
    paymentAlertTitle: 'ئاگاداریا پارەدانێ',
    salaryPaymentDue: 'کاتێ پارەدانیا مەعاشێ',
    salaryPaymentNear: 'کاتێ پارەدانیا مەعاشێ',
    rentPaymentDue: 'کاتێ پارەدانیا کرێیا دوکانێ هاتیە!',
    rentPaymentNear: 'کاتێ پارەدانیا کرێیا دوکانێ نزیکە',
    employeeNotSelected: 'کارمەند هەڵبژێردراوە',
    confirmDeleteSalary: 'دڵنیایت لە ژێبرنا ڤێ مەعاشێ؟',
    loanGiven: 'قەرزدان',
    loanReceived: 'قەرزوەرگرتن',
    gift: 'دیاری',
    other: 'هیتر',
    electricity: 'کارەبا',
    water: 'ئاڤ',
    delivery: 'گەیاندن',
    repair: 'چاککرنەڤە',
    cleaning: 'پاککرنەڤە',
    internet: 'ئینتەرنێت',
    telephone: 'تەلەفۆن',
    storeSupplies: 'کەرەستا دوکانێ',
    
    // Reports
    profitLossReport: 'ڕاپۆرتا قازانج و زەرەر',
    todayReport: 'ڕاپۆرتا ئەمڕۆ',
    returnedGoods: 'گەڕانەڤەیا کاڵا',
    expenseBreakdown: 'بەشکرنا خەرجیێن',
    todayReturns: 'گەڕانەڤەیێن ئەمڕۆ',
    returnId: 'گەڕانەڤە',
    saleId: 'وەسڵێ',
    noReturnsToday: 'هیچ گەڕانەڤەیەکی ئەمڕۆ نینە',
    nearOutOfStock: 'کاڵایێ نزیک لە بڕینێ',
    allGoodsOk: 'هەموو کاڵایێن باشن',
    code: 'کۆد',
    totalSales: 'کۆیا فرۆتنێ',
    invoiceList: 'لیستا وەسڵێن',
    searchInvoice: 'گەڕان بە ژمارا وەسڵێ یان کڕیار...',
    all: 'هەموو',
    week: 'هەفتە',
    month: 'مانگ',
    noInvoicesFound: 'هیچ وەسڵێکی نەدۆزرایەڤە',
    returnFromCustomer: 'گەڕاندنەوە لە کڕیار',
    customerHistory: 'مێژووی کڕیار',
    supplierHistory: 'مێژووی دابینکار',
    searchForInvoiceOrCustomer: 'گەڕان بۆ وەسڵ یان کڕیار',
    selectInvoice: 'هەڵبژاردنی وەسڵ',
    selectItems: 'هەڵبژاردنی کاڵا',
    returnQuantity: 'کۆی گەڕانەوە:',
    returnReason: 'هۆکاری گەڕانەوە',
    writeReturnReason: 'هۆکاری گەڕاندنەوەی کاڵا بنووسە...',
    selectedItems: 'کاڵای هەڵبژاردوو:',
    totalReturn: 'کۆی گەڕانەوە:',
    returnHistoryCustomer: 'مێژووی گەڕانەوەی کڕیار',
    returnHistorySupplier: 'مێژووی گەڕانەوەی دابینکار',
    supplierReturnTo: 'گەڕاندنەوەی کاڵا بۆ:',
    returnCount: 'گەڕانەوە',
    editInvoice: 'دەستکاریکرنا وەسڵێ',
    customerNameLabel: 'ناڤێ کڕیار',
    cancelChanges: 'پاشگەزبوونەڤە',
    confirmDelete: 'دڵنیایی لە ژێبرنێ؟',
    confirmDeleteMessage: 'ئایا دڵنیایت لە ژێبرنا وەسڵێ',
    goodsWillReturn: 'کاڵایێن دگەڕنەڤە بۆ کۆگا',
    
    // Returns
    returnGoods: 'گەڕانەڤەیا کاڵا',
    returnManagement: 'بەڕێڤەبرنا گەڕانەڤەیا کاڵایێ فرۆتی',
    totalReturns: 'کۆیا گەڕانەڤەیێن',
    selectInvoiceForReturn: 'هەلبژاردنا وەسڵێ بۆ گەڕانەڤەیا کاڵا',
    hasReturn: 'هەیە گەڕانەڤە',
    returnedAmount: 'گەڕاڤەتەڤە',
    clickToReturn: 'کلیک بکە بۆ گەڕانەڤەیا کاڵا ←',
    selectGoodsToReturn: 'هەلبژاردنا کاڵایێن بۆ گەڕانەڤە',
    returnReasonPlaceholder: 'هۆکارێ گەڕانەڤەیا کاڵاکە بنڤێسە...',
    selectedGoods: 'کۆیا کاڵایێ هەلبژێردراو',
    returnTotal: 'کۆیا گەڕانەڤێ',
    processReturn: 'پرۆسا گەڕانەڤێ',
    confirmReturnTitle: 'دڵنیایی لە گەڕانەڤەکێ؟',
    confirmReturnMessage: 'دوایێ پرۆسا گەڕانەڤەکێ، کاڵایێن دگەڕنەڤە کۆگا و پارێ دگەڕتەڤە سندوق',
    totalGoods: 'کۆیا کاڵا',
    waitingText: 'چاڤەڕێ بە...',
    confirmButton: 'دڵنیام',
    returnHistory: 'مێژووا گەڕانەڤەیێن',
    returnRecorded: 'گەڕانەڤەکە بە سەرکەوتوویی تۆمار بوو!',
    returnError: 'هەڵە لە تۆمارکرنا گەڕانەڤەکێ!',
    history: 'مێژوو',
    noHistory: 'چ مێژوویێک نییە',
    deleted: 'ژێبرن',
    confirmRevert: 'دڵنیای لە وەرگرتنەوە؟ کاڵاکە دەگەڕێتەوە بۆ کۆگا.',
    reverted: 'وەرگیرایەوە',
    revert: 'وەرگرتنەوە',
    updated: 'نوێکرایەوە',
    
    // Products
    productList: 'لیستا کاڵایێن',
    productDetails: 'وردەکاریێن کاڵا',
    image: 'وێنە',
    description: 'پێناسە',
    supplier: 'دابینکەر',
    lowStock: 'کاڵایێ کەم',
    inStock: 'لە کۆگادا',
    outOfStock: 'لە کۆگا نییە',
    actions: 'کردارێن',
    
    // Customers
    customer: 'کڕیار',
    customerList: 'لیستا کڕیارێن',
    addCustomer: 'زێدەکرنا کڕیارێ',
    customerDetails: 'وردەکاریێن کڕیارێ',
    payDebt: 'پارەدانەڤەیا قەرزێ',
    debtHistory: 'مێژووا قەرزێ',
    noDebt: 'قەرز نییە',
    
    // Sales History
    salesHistory: 'مێژووا فرۆتنێ',
    saleDetails: 'وردەکاریێن فرۆتنێ',
    paymentStatus: 'بارودۆخا پارەدانێ',
    fullPaid: 'تەڤاو دراڤە',
    partialPaid: 'بەشێک دراڤە',
    unpaid: 'نەدراڤە',
    viewAllSalesReceipts: 'دیتنا هەمی وسڵێن بکە',
    salesList: 'لیستا فرۆتنێن',
    noResultsWithFilters: 'هیچ نەتیجەیەک بەپێی فلتەرەکان نەدۆزرایەوە',
    
    // Expenses
    addExpense: 'زێدەکرنا خەرجیێ',
    expenseDate: 'بەرڤارا خەرجیێ',
    expenseAmount: 'بڕا خەرجیێ',
    expenseNote: 'تێبینی',
    
    // Suppliers
    supplierList: 'لیستا دابینکەرێن',
    addSupplier: 'زێدەکرنا دابینکەرێ',
    supplierAdded: 'دابینکەرێک ب سەرکەوتوویی زێدەکرا',
    supplierPhone: 'ژمارا دابینکەرێ',
    supplierAddress: 'ناڤنیشانا دابینکەرێ',
    supplierProducts: 'کاڵایێن دابینکەرێ',
    
    // Purchases
    addPurchase: 'زێدەکرنا کڕینێ',
    purchaseDate: 'بەرڤارا کڕینێ',
    purchaseAmount: 'بڕا کڕینێ',
    purchaseItems: 'کاڵایێن کڕینێ',
    
    // Safe
    deposits: 'داخلکرن',
    withdrawals: 'دەرکرنێ',
    addDeposit: 'زێدەکرنا داخلکرنێ',
    addWithdrawal: 'زێدەکرنا دەرکرنێ',
    transactionHistory: 'مێژووا مامەڵێن',
    deposit: 'داخلکرن',
    withdrawal: 'دەرکرنێ',
    note: 'تێبینی',
    
    // Returns
    returnsList: 'لیستا ڤەگەڕاتنێن',
    addReturn: 'زێدەکرنا ڤەگەڕاتنێ',
    returnDate: 'بەرڤارا ڤەگەڕاتنێ',
    returnAmount: 'بڕا ڤەگەڕاتنێ',
    refund: 'ڤەگەڕاتنا پارێ',
    
    // Reports
    salesReport: 'ڕاپۆرتا فرۆتنێ',
    profitReport: 'ڕاپۆرتا قازانجێ',
    expensesReport: 'ڕاپۆرتا خەرجیێن',
    inventoryReport: 'ڕاپۆرتا کۆگا',
    customerReport: 'ڕاپۆرتا کڕیارێن',
    generateReport: 'دروستکرنا ڕاپۆرتێ',
    exportReport: 'هەناردەکرنا ڕاپۆرتێ',
    printReport: 'پرینتکرنا ڕاپۆرتێ',
    period: 'ماوە',
    summary: 'پوختە',
    
    // Backup
    createBackup: 'دروستکرنا هەڵگرتنێ',
    restoreBackup: 'ڤەگەڕاتنا هەڵگرتنێ',
    autoBackup: 'هەڵگرتنا خۆکار',
    backupNow: 'هەڵگرتن ئێستا',
    lastBackup: 'کۆتا هەڵگرتن',
    backupHistory: 'مێژووا هەڵگرتنێن',
    downloadBackup: 'داگرتنا هەڵگرتنێ',
    uploadBackup: 'بارکرنا هەڵگرتنێ',
    backupRestoreTitle: 'هەڵگرتن و ڤەگەڕاتنا داتا',
    backupRestoreDesc: 'داتایێن تە هەڵگرە و ڤەگەڕێنە بۆ پاراستنا وان',
    dbStatistics: 'ئامارێن داتابەیسێ',
    invoiceDesigner: 'دیزاینا وەسڵێ',
    backupFolder: 'فۆڵدەرا هەڵگرتنێ',
    selectBackupFolder: 'هەڵبژارتنا فۆڵدەرێ',
    noFolderSelected: 'فۆڵدەرێک هەڵنەبژێردراڤە',
    autoBackupEvery24Hours: 'هەڵگرتنا خۆکار (٢٤ کاتژمێر)',
    autoBackupEnabled: 'هەڵگرتنا خۆکار چالاکە',
    autoBackupDisabled: 'هەڵگرتنا خۆکار ناچالاککرا',
    backupManual: 'هەڵگرتنا داتا',
    backupDescription: 'هەمی داتایێن سیستەمێ هەڵدگرێت وەکو فایلێکا JSON کو دتوانی لە هەر شوێنێک هەڵیگریت',
    whatWillBeBackedUp: 'چی هەڵدگرێت:',
    allSalesPurchases: 'فرۆتنێن و کڕینێن',
    suppliersExpenses: 'دابینکەرێن و خەرجێن',
    usersSettings: 'بەکارهێنەرێن و ڕێکخستنێن',
    licensePayments: 'مۆڵەتێن و پارەدانێن',
    backingUp: 'هەڵگرتن...',
    restoreData: 'ڤەگەڕاتنا داتا',
    restoreWarning: 'ئاگەداری:',
    restoreWarningDesc: 'ڤەگەڕاتنا داتا هەمی داتایا ئێستا دژێبێ و داتایا کۆن دگەڕێنێتەڤە. تکایە پێش ڤەگەڕاتنێ داتایێن تە هەڵگرە!',
    selectBackupFile: 'فایلا هەڵگرتنێ هەلبژێرە:',
    fileSize: 'قەبارە',
    restoring: 'ڤەگەڕاتن...',
    tips: 'ئامۆژگاریێن',
    backupDaily: 'هەموو ڕۆژێک داتایێن تە هەڵگرە بۆ پاراستنا وان',
    saveBackupsSafely: 'فایلێن هەڵگرتنێ لە شوێنێکا سەلامەت هەڵیگرە',
    validateBeforeRestore: 'پێش ڤەگەڕاتنا داتا، دڵنیابە کو فایلەکە دروستە',
    oldDataWillBeDeleted: 'داتایا کۆن دژێبێتەڤە، بۆیە ئاگەدار بە',
    backupSuccess: 'داتایێن بە سەرکەوتویی هەڵگیرا',
    backupError: 'هەڵەیەک ڕوویدا لە هەڵگرتنا داتا',
    restoreSuccess: 'داتایێن بە سەرکەوتویی ڤەگەڕان',
    restoreError: 'هەڵەیەک ڕوویدا لە ڤەگەڕاتنا داتا',
    selectDataToBackup: 'هەڵبژارتنا داتایێن بۆ هەڵگرتنێ',
    selectDataToRestore: 'هەڵبژارتنا داتایێن بۆ ڤەگەڕاتنێ',
    selectAll: 'هەڵبژارتنا هەموو',
    deselectAll: 'لابرنا هەموو',
    resetAllData: 'ژێبرنا هەمی داتایێن',
    resetAllDataDesc: 'ژێبرنا هەمی داتایێن سیستەمێ (بێ لایسێنس)',
    confirmResetAllData: 'دڵنیایت لە ژێبرنا هەمی داتایێن؟ ڤا کردارە ناگەڕێتەڤە!',
    confirmResetAgain: 'جارێکا دی دڵنیایێ! هەمی داتایێن دژێبن و ناگەڕنەڤە!',
    allDataDeleted: 'هەمی داتایێن ژێبران! پەیجەکە دووبارە بارد دبێ...',
    allDataWillBeDeleted: 'هەمی داتایێن دژێبن',
    cannotBeUndone: 'ڤا کردارە ناگەڕێتەڤە',
    licenseWillBeKept: 'لایسێنس دمێنێتەڤە',
    backupBeforeReset: 'پێش Reset، Backup بکە!',
    selectiveBackup: 'دەشێ تەنێ داتایێن پێڤست هەلبژێری بۆ هەڵگرتنێ',
    selectiveRestore: 'دەشێ تەنێ داتایێن پێڤست هەلبژێری بۆ ڤەگەڕاتنێ',
    manual: 'بە دەست',
    
    // Barcode Generator
    barcodeGeneratorDesc: 'دروستکرن و پرینتکرنا بارکۆدێن بۆ کاڵایێن',
    selectProducts: 'هەڵبژارتنا کاڵایێن',
    barcodeType: 'جۆرێ بارکۆدێ',
    labelSize: 'قەبارێ لەیبڵێ',
    copies: 'کۆپی',
    showProductName: 'پێشاندانا ناڤێ کاڵا',
    showPrice: 'پێشاندانا نرخێ',
    download: 'داگرتن',
    preview: 'پێشبینین',
    noProductsSelected: 'هیچ کاڵایەک هەڵنەبژێردراڤە',
    clearSelection: 'پاککرنا هەڵبژارتنێ',
    selectedCount: 'هەڵبژێردراو',
    printBarcodes: 'پرینتکرنا بارکۆدێن',
    searchProducts: 'گەڕان بەدوای کاڵا...',
    advancedFilters: 'فلتەری پێشکەوتوو',
    priceRange: 'مەودای نرخ',
    minPrice: 'کەمترین',
    maxPrice: 'زۆرترین',
    stockLevel: 'ئاستی کۆگا',
    allStock: 'هەموو ئاستەکان',
    updateSuccess: 'کاڵاکە بە سەرکەوتوویی نوێکرایەوە! ✓',
    productAdded: 'کاڵاکە بە سەرکەوتوویی زیادکرا! ✓',
    small: 'بچووک',
    medium: 'ناڤین',
    large: 'گەورە',
    customBarcode: 'بارکۆدێ تایبەت',
    autoGenerateActive: '🎯 دروستکرنا ئۆتۆماتیک چالاکە - بارکۆد خۆکار دروست دبێت!',
    enterName: 'ناڤ بنڤێسە...',
    enterCode: 'کۆد بنڤێسە...',
    addToPreview: 'زێدەکرن بۆ پێشبینینێ',
    clear: 'پاککرنەڤە',
    fillRequired: 'تکایە خانێن پێڤست پڕ بکەرەڤە!',
    
    // Messages
    
    // Actions
    
    // Misc
    
    // PDF Report Labels
    generalFinancialReport: 'راپۆرتی گشتی دارایی',
    periodLabel: 'ماوە',
    dateLabelPDF: 'بەروار',
    shopNameLabel: 'ناوی فرۆشگا',
    phoneNumberLabel: 'ژمارەی تەلەفۆن',
    financialSummary: 'کورتەی دارایی',
    subjectLabel: 'بابەت',
    amountLabel: 'بڕ',
    totalSalesRevenue: 'کۆی داهاتی فرۆشتن',
    grossProfit: 'قازانجی خاو',
    balancesLabel: 'باڵانسەکان',
    warehouseBalance: 'باڵانسی کۆگا',
    customerDebts: 'قەرزی کڕیاران',
    supplierDebts: 'قەرزی دابینکەران',
    salesDebts: 'قەرزی فرۆشتنەکان',
    purchaseDebts: 'قەرزی کڕینەکان',
    todayPeriod: 'ئەمڕۆ',
    weekPeriod: 'هەفتە',
    monthPeriod: 'مانگ',
    yearPeriod: 'ساڵ',
    customPeriod: 'کاتی تایبەت',
    custom: 'تایبەت',
    
    // Installments Page
    installments: 'قیستەکان',
    installmentsManagement: 'بەڕێوەبردنی قەرزی قیستی',
    totalInstallments: 'کۆی گشتی',
    activeInstallments: 'چالاک',
    overdueInstallments: 'دواکەوتوو',
    totalRemaining: 'کۆی ماوە',
    searchInstallmentsPlaceholder: 'گەڕان بە ناوی کڕیار، ژمارەی وەسڵ...',
    allStatuses: 'هەموو دۆخەکان',
    completedStatus: 'تەواو',
    overdueStatus: 'دواکەوتوو',
    cancelledStatus: 'هەڵوەشاوە',
    noInstallmentsFound: 'هیچ قیستێک نەدۆزرایەوە',
    downPayment: 'پێشەکی',
    monthlyPayment: 'پارەی مانگانە',
    numberOfMonths: 'ژمارەی مانگەکان',
    monthsLabel: 'مانگ',
    remainingLabel: 'ماوە',
    daysOverdue: 'ڕۆژ دواکەوتوو',
    makePayment: 'پارەدان',
    installmentPayment: 'پارەدانی قیست',
    installmentCurrency: 'دراوی قیست',
    paymentCurrency: 'دراوی پارەدان',
    paymentAmountLabel: 'بڕی پارەدان',
    monthNumber: 'ژمارەی مانگ',
    installmentDetails: 'وردەکارییەکانی قیست',
    warrantyLabel: 'زیادە',
    hasWarranty: 'زیادەی هەیە',
    noPaymentsRecorded: 'هیچ پارەدانێک تۆمار نەکراوە',
    monthLabel: 'مانگی',
    pleaseEnterPaymentAmount: 'تکایە بڕی پارەدان بنووسە',
    paymentAmountExceeds: 'بڕی پارەدان زیاترە لە قیستەکە',
    paymentRecordedSuccessfully: 'پارەدان بە سەرکەوتوویی تۆمار کرا ✓',
    errorOccurredInPayment: 'هەڵەیەک ڕوویدا لە پارەدانەکەدا',
    paymentIn: 'پارەدان بە',
    convertTo: 'گۆڕین بۆ',
    extraLabel: 'زیادە',
  },
  
  'ar-iq': {
    // Common
    appName: 'نظام كاشير جيهان',
    appVersion: 'Jihan Cashier System v1.0',
    loading: 'انتظر...',
    daysRemaining: 'يوم متبقي',
    expiresToday: 'ينتهي اليوم',
    oneWeek: '١ أسبوع',
    oneMonth: '١ شهر',
    threeMonths: '٣ أشهر',
    sixMonths: '٦ أشهر',
    oneYear: '١ سنة',
    lifetime: 'مدى الحياة',
    save: 'حفظ',
    cancel: 'إلغاء',
    close: 'إغلاق',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    search: 'بحث',
    filter: 'فلتر',
    confirm: 'هل أنت متأكد؟',
    yes: 'نعم',
    no: 'لا',
    
    // Login
    login: 'تسجيل الدخول',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    loginButton: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    loginError: 'اسم المستخدم أو كلمة المرور خاطئة',
    managerAccount: 'المدير',
    cashierAccount: 'الكاشير',
    usersInfo: 'معلومات المستخدمين:',
    selectUserPlaceholder: 'اختر المستخدم...',
    adminOrCashier: 'admin أو cashier',
    resetDatabase: 'إعادة إنشاء قاعدة البيانات',
    resetDatabaseConfirm: 'هل أنت متأكد من حذف وإعادة إنشاء قاعدة البيانات؟\n\nسيتم حذف جميع البيانات!',
    resetDatabaseSuccess: 'تم إعادة إنشاء قاعدة البيانات بنجاح!\n\nالمستخدم: admin / admin123',
    resetDatabaseError: 'خطأ في إعادة إنشاء قاعدة البيانات',
    systemError: 'حدث خطأ. الرجاء إعادة تشغيل النظام',
    resetting: 'جاري إعادة الإنشاء...',
    onlyIfLoginIssue: 'فقط إذا كانت لديك مشكلة في تسجيل الدخول',
    
    // License
    licenseKey: 'مفتاح التفعيل',
    activate: 'تفعيل',
    activating: 'انتظر...',
    activated: 'تم التفعيل ✓',
    quickActivation: 'تفعيل سريع - أسبوع تجريبي',
    licenseError: 'مفتاح التفعيل خاطئ أو مستخدم مسبقاً',
    licenseInvalid: 'المفتاح غير صالح أو غير موجود في هذا الإصدار — نزّل النسخة الجديدة',
    licenseAlreadyUsed: 'تم استخدام هذا المفتاح مسبقاً. للإصلاح استخدم فقط برنامج التفعيل (Activation Helper)',
    licenseRepair: 'إصلاح الترخيص',
    licenseRepairDone: 'تم مسح المفاتيح المستخدمة. أدخل المفتاح مرة أخرى الآن.',
    licenseRepairHint: 'إذا لم يعمل المفتاح، اضغط هذا الزر ثم فعّل مجدداً',
    activationError: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    activationSuccess: 'تم التفعيل بنجاح! ...',
    quickTrialUsedError: 'تم استخدام التفعيل السريع مسبقاً على هذا الكمبيوتر. يرجى استخدام مفتاح حقيقي.',
    quickTrialFailedError: 'فشل التفعيل السريع. قد يكون هذا المفتاح مستخدماً مسبقاً.',
    quickTrialDescription: '⚡ تفعيل تلقائي لمدة أسبوع واحد - مرة واحدة فقط على هذا الكمبيوتر',
    quickTrialAlreadyUsed: '💡 تم استخدام التفعيل السريع مسبقاً. يرجى استخدام مفتاح حقيقي.',
    oneTimeOnly: '(مرة واحدة فقط)',
    features: 'المميزات:',
    featureFastSales: 'مبيعات سريعة وسهلة',
    featureInventory: 'إدارة المنتجات والعملاء',
    featureReports: 'تقارير مفصلة للمبيعات والأرباح',
    featureDebtSystem: 'نظام الديون والمدفوعات',
    featureOfflineDatabase: 'قاعدة بيانات غير متصلة بالإنترنت وآمنة',
    contactForLicense: 'للحصول على مفتاح التفعيل',
    contactPhone: 'اتصل على: 07710500202 - 07511935352',
    or: 'أو',
    
    // Header
    notifications: 'الإشعارات',
    calculator: 'الآلة الحاسبة',
    manager: 'المدير',
    cashier: 'الكاشير',
    logoutConfirm: 'هل أنت متأكد من تسجيل الخروج؟',
    
    // Navigation
    dashboard: 'الرئيسية',
    pos: 'البيع',
    addProduct: 'تسجيل منتج',
    products: 'المنتجات',
    customers: 'الزبائن',
    purchases: 'الشراء',
    suppliers: 'الموردين',
    expenses: 'المصروفات',
    safe: 'الخزنة',
    cashRegisters: 'الصناديق النقدية',
    crashedItems: 'الفواتير المعطلة',
    returns: 'المرتجعات',
    reports: 'التقارير',
    income: 'الدخل',
    settings: 'الإعدادات',
    
    // Settings
    generalSettings: 'الإعدادات العامة',
    userManagement: 'إدارة المستخدمين',
    categoriesAndUnits: 'الأصناف والوحدات',
    barcodeGenerator: 'الباركود',
    backup: 'النسخ الاحتياطي',
    shopInfo: 'معلومات المحل',
    shopName: 'اسم المحل',
    shopPhone: 'رقم الهاتف',
    shopAddress: 'العنوان',
    printerSettings: 'إعدادات الطابعة',
    printerType: 'نوع الطابعة',
    enableCashDrawer: 'تفعيل درج النقد',
    enableCashDrawerDesc: 'عند إتمام بيع نقدي يُفتح درج النقد عبر الطابعة الحرارية',
    testCashDrawer: 'اختبار درج النقد',
    cashDrawerOpened: 'تم إرسال أمر فتح درج النقد',
    cashDrawerOpenFailed: 'تعذر فتح درج النقد — تحقق من الطابعة',
    cashDrawerRequiresPrinter: 'يجب توصيل درج النقد بمنفذ RJ11 في الطابعة الحرارية',
    cashDrawerPrinter: 'طابعة درج النقد (ويندوز)',
    selectCashDrawerPrinter: '— اختر الطابعة —',
    cashDrawerWindowsHint: 'لـ Xprinter XP-365B اختر طابعة ويندوز (مثل: Xprinter XP-365B)',
    receiptPrinter: 'طابعة الإيصال (ويندوز)',
    quickPrintSettingsHint: 'اختر الحجم والطابعة — زر «بيع + طباعة» في نقطة البيع يبيع بسرعة ويطبع الإيصال في الخلفية',
    saleAndPrint: 'بيع + طباعة',
    salePrintedToast: 'تم البيع — جاري طباعة الإيصال في الخلفية',
    appearance: 'الواجهة',
    appearanceDescription: 'اختر شكل عرض صفحة البيع',
    posDisplayMode: 'وضع صفحة البيع',
    posModeClassic: 'كلاسيكي',
    posModeClassicDesc: 'الوضع الحالي — بحث وباركود',
    posModeImages: 'منتجات بالصور',
    posModeImagesDesc: 'شبكة صور المنتجات — مثل نقاط البيع العالمية',
    printSettings: 'إعدادات الطباعة',
    printSettingsDescription: 'إعدادات الطباعة للفواتير والمنتجات',
    thermal: 'حراري',
    paperSize: 'حجم الورق',
    autoPrint: 'الطباعة التلقائية',
    autoPrintDesc: 'الطباعة بدون سؤال',
    copies: 'عدد النسخ',
    displayOptions: 'خيارات العرض',
    showLogo: 'إظهار الشعار',
    showBarcode: 'إظهار الباركود',
    showCost: 'إظهار سعر الشراء',
    showProfit: 'إظهار الربح',
    thermalFontSize: 'حجم خط الحراري',
    a4FontSize: 'حجم خط A4',
    medium: 'متوسط',
    large: 'كبير',
    customText: 'نص مخصص',
    headerTextPlaceholder: 'مرحباً بكم في متجرنا...',
    footerTextPlaceholder: 'شكراً لزيارتكم...',
    currentSettings: 'الإعدادات الحالية',
    enabled: 'مفعل',
    disabled: 'غير مفعل',
    reset: 'إعادة تعيين',
    confirmReset: 'هل أنت متأكد من إعادة التعيين إلى الإعدادات الافتراضية؟',
    saving: 'جاري الحفظ...',
    saved: 'تم الحفظ',
    standard: 'قياسي',
    autoPrinting: 'طباعة تلقائية...',
    selectPrinter: 'اختيار الطابعة',
    printerSelectNote: 'اكتب اسم الطابعة كما يظهر في النظام (مثال: "Xprinter XP-80C" أو "Microsoft Print to PDF")',
    printerName: 'اسم الطابعة',
    printerNamePlaceholder: 'اكتب اسم الطابعة...',
    printerNameHint: 'يجب أن يكون الاسم مطابقاً تماماً لما يظهر في إعدادات النظام',
    howToFindPrinter: 'للعثور على اسم الطابعة: اذهب إلى Settings → Devices → Printers & scanners في ويندوز',
    selectedPrinter: 'الطابعة المختارة',
    printerList: 'قائمة الطابعات (الدرايفات)',
    refreshList: 'تحديث القائمة',
    selectFromList: 'اختر من القائمة',
    selectPrinterOption: 'اختر الطابعة',
    printerNameManual: 'اسم الطابعة (يدوياً)',
    printerListNotAvailable: 'قائمة الطابعات متاحة فقط في التطبيق (Electron)',
    noPrintersFound: 'لم يتم العثور على طابعات',
    printerSet: 'تم تعيين الطابعة: ',
    openDesktopAppForList: 'افتح التطبيق على سطح المكتب (Electron) لرؤية القائمة',
    windowsPrintDialog: 'ويندوز — كما عند الطباعة',
    windowsPrintDialogDesc: 'افتح نافذة طباعة ويندوز واختر الطابعة، ثم إن حددت طابعتك كافتراضية في ويندوز اضغط «استخدام الطابعة الافتراضية لويندوز».',
    openWindowsPrintDialog: 'فتح نافذة طباعة ويندوز',
    useWindowsDefaultPrinter: 'استخدام الطابعة الافتراضية لويندوز',
    default: 'افتراضي',
    otherSettings: 'إعدادات أخرى',
    currency: 'العملة',
    primaryCurrency: 'العملة الأساسية',
    selectPrimaryCurrency: 'اختيار العملة الأساسية',
    dinar: 'دينار',
    dollar: 'دولار',
    currencyAffectsAll: 'العملة الأساسية ستؤثر على جميع الأسعار والتقارير في النظام',
    currencyIndependentOfLanguage: 'العملة مستقلة عن اللغة - يمكنك العمل بالدولار وإبقاء اللغة كردية/عربية',
    lowStockThreshold: 'تنبيه للمنتجات القليلة',
    dollarSettings: 'إعدادات الدولار',
    enableDollar: 'تفعيل الدولار',
    dollarRate: 'سعر الدولار بالدينار',
    saveChanges: 'حفظ التغييرات',
    dangerZone: 'المنطقة الخطرة',
    deactivateLicense: 'إلغاء تفعيل الترخيص',
    systemInfo: 'معلومات النظام',
    systemVersion: 'إصدار النظام',
    licenseStatus: 'حالة الترخيص',
    totalProducts: 'إجمالي المنتجات',
    totalCustomers: 'إجمالي الزبائن',
    purchaseValue: 'قيمة الشراء',
    sellingValue: 'قيمة البيع',
    expectedProfit: 'الربح المتوقع',
    stockAlert: 'تنبيه المخزون',
    
    // Dashboard mode (settings)
    dashboardModeTitle: 'وضع لوحة التحكم',
    dashboardModeDescription: 'اختر طريقة عرض لوحة التحكم',
    dashboardModeNavbar: 'شريط جانبي',
    dashboardModeNavbarDescription: 'قائمة جانبية للتنقل',
    dashboardModeGrid: 'شبكة لوحة التحكم',
    dashboardModeGridDescription: 'شبكة بأيقونات وأسماء الأقسام',
    dashboardModeNote: 'التغييرات تظهر بعد الحفظ وإعادة تحميل الصفحة',
    selected: 'محدد',

    // Dark mode (settings)
    darkMode: 'الوضع الداكن',
    darkModeDescription: 'قم بتفعيل الوضع الداكن لعرض واجهة أغمق للنظام',

    // Network / LAN sync (settings)
    networkSettingsTitle: 'اتصال الشبكة (LAN/راوتر)',
    networkSettingsDescription: 'ربط جهازين معاً عن طريق كابل أو راوتر لمشاركة البيانات',
    connectionStatusLabel: 'حالة الاتصال:',
    connectionStatusConnected: 'متصل',
    connectionStatusDisconnected: 'غير متصل',
    networkModeLabel: 'الوضع:',
    networkModeOff: 'متوقف',
    networkModeServer: 'سيرفر (Host)',
    networkModeClient: 'كلَاينت',
    serverIPLabel: 'IP السيرفر:',
    serverIPPlaceholder: '192.168.1.100',
    serverIPHelp: 'عنوان IP لجهاز السيرفر (مثال: 192.168.1.100)',
    thisComputerIPLabel: 'IP هذا الجهاز:',
    thisComputerIPHelp: 'استخدم هذا الـ IP في الأجهزة الأخرى للاتصال',
    portLabel: 'المنفذ (Port):',
    autoSyncLabel: 'مزامنة تلقائية (كل 5 ثواني)',
    autoSyncDescription: 'مزامنة تلقائية للبيانات بين السيرفر والأجهزة المتصلة',
    connectButton: 'اتصال',
    disconnectButton: 'قطع الاتصال',
    sendDataToClients: 'إرسال البيانات إلى الكلاينتات',
    disableNetwork: 'إيقاف الشبكة',
    networkInstructionsTitle: 'التعليمات:',
    networkInstruction1: 'اجعل أحد الأجهزة في وضع سيرفر (Host)',
    networkInstruction2: 'اجعل الأجهزة الأخرى في وضع كلاينت',
    networkInstruction3: 'اكتب IP السيرفر في أجهزة الكلاينت',
    networkInstruction4: 'اضغط زر \"اتصال\"',
    networkInstruction5: 'سيتم مزامنة البيانات تلقائياً',
    
    // P2P Sync Settings
    p2pSync: 'مزامنة P2P',
    p2pDescription: 'مزامنة البيانات بين عدة أجهزة على نفس الشبكة',
    localIp: 'IP هذا الجهاز',
    connectionStatus: 'حالة الاتصال',
    role: 'الدور',
    selectRole: 'اختر دور هذا الجهاز',
    roleOff: 'غير نشط',
    roleOffDesc: 'مزامنة P2P غير نشطة',
    rolePrimary: 'جهاز رئيسي',
    rolePrimaryDesc: 'هذا الجهاز يصبح Server وتؤخذ البيانات منه',
    roleSecondary: 'جهاز ثانوي',
    roleSecondaryDesc: 'الاتصال بالجهاز الرئيسي لاستلام البيانات',
    primaryComputer: 'الجهاز الرئيسي (Server)',
    secondaryComputer: 'الجهاز الثانوي (Client)',
    serverInfo: 'معلومات Server',
    connectedDevices: 'الأجهزة المتصلة',
    autoDiscovery: 'البحث التلقائي عن الجهاز الرئيسي',
    manualConnect: 'الاتصال اليدوي',
    foundDevices: 'الأجهزة المكتشفة:',
    syncStatistics: 'إحصائيات المزامنة',
    changesSent: 'التغييرات المرسلة',
    changesReceived: 'التغييرات المستلمة',
    lastSync: 'آخر مزامنة',
    
    // Language Settings
    language: 'اللغة',
    selectLanguage: 'اختر اللغة',
    kurdishSorani: 'الكردية السورانية',
    kurdishBadini: 'الكردية البادينية',
    iraqiArabic: 'العربية العراقية',
    britishEnglish: 'الإنجليزية البريطانية',
    
    // Categories
    categories: 'الأصناف',
    addCategory: 'إضافة صنف',
    categoryAdded: 'تمت إضافة الصنف بنجاح',
    categoryExists: 'هذا الصنف موجود',
    categoryAdded: 'تمت إضافة الصنف بنجاح',
    categoryExists: 'هذا الصنف موجود',
    deleteCategory: 'حذف صنف',
    units: 'الوحدات',
    addUnit: 'إضافة وحدة',
    deleteUnit: 'حذف وحدة',
    
    // Users
    users: 'المستخدمين',
    user: 'مستخدم',
    employee: 'موظف',
    addUser: 'إضافة مستخدم',
    editUser: 'تعديل مستخدم',
    deleteUser: 'حذف مستخدم',
    fullName: 'الاسم الكامل',
    role: 'الدور',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    active: 'نشط',
    inactive: 'غير نشط',
    permissions: 'الصلاحيات',
    lastLogin: 'آخر تسجيل دخول',
    
    // Products
    productName: 'اسم المنتج',
    barcode: 'الباركود',
    category: 'الصنف',
    unit: 'الوحدة',
    priceType: 'نوع السعر',
    buyPrice: 'سعر الشراء',
    sellPrice: 'سعر البيع',
    stock: 'المخزون',
    minStock: 'أقل مخزون',
    addNewProduct: 'إضافة منتج جديد',
    editProduct: 'تعديل منتج',
    deleteProduct: 'حذف منتج',
    
    // Warranty
    warrantyManagement: 'إدارة الضمان',
    warranties: 'الضمانات',
    warrantyActive: 'ضمان نشط',
    warrantyExpired: 'ضمان منتهي',
    warrantyStatus: 'حالة الضمان',
    warrantyDetails: 'تفاصيل الضمان',
    warrantyDuration: 'مدة الضمان',
    warrantyEndDate: 'تاريخ انتهاء الضمان',
    warrantyExpiredOn: 'انتهى الضمان في',
    warrantyGivenToCustomer: 'ضمان مقدم للزبون',
    noWarranty: 'لا يوجد ضمان',
    noWarrantySet: 'لم يتم تعيين ضمان',
    purchaseWarranty: 'ضمان الشراء',
    saleWarranty: 'ضمان البيع',
    months: 'أشهر',
    expiryDate: 'تاريخ الانتهاء',
    expired: 'منتهي',
    expiredProducts: 'المنتجات المنتهية الصلاحية',
    daysExpired: 'أيام منتهية',
    inventoryAdjustment: 'تعديل المخزون',
    dollarRateChange: 'تغيير سعر الصرف بالدولار',
    noExpiredProducts: 'لا توجد منتجات منتهية الصلاحية',
    viewDetails: 'عرض التفاصيل',
    returnToSupplier: 'إرجاع إلى المورد',
    sellAtDiscount: 'بيع بسعر مخفض',
    discountPrice: 'السعر المخفض',
    discountAmount: 'مبلغ الخصم',
    originalPrice: 'السعر الأصلي',
    willBeRecordedAsExpense: 'سيتم تسجيله كمصروف',
    discountNote: 'ملاحظة: سيتم تسجيل مبلغ الخصم كمصروف',
    perUnit: 'لكل وحدة',
    processing: 'جاري المعالجة...',
    selectPurchase: 'اختيار فاتورة الشراء',
    mostRecentPurchase: 'أحدث فاتورة',
    purchaseInfo: 'إذا تم اختيار فاتورة، سيتم استخدام سعر الشراء من الفاتورة',
    unitCost: 'سعر الوحدة',
    notAvailable: 'غير متوفر',
    available: 'متاح',
    days: 'أيام',
    discard: 'تجاهل',
    discardWarning: 'تحذير: سيتم حذف المنتج من المخزون وتسجيله كمصروف',
    totalLoss: 'إجمالي الخسارة',
    discardReasonPlaceholder: 'سبب التجاهل...',
    cashAmount: 'المبلغ النقدي',
    exchange: 'استبدال',
    exchangeNote: 'ملاحظة: سيتم استبدال المنتج بنفس الكمية بتاريخ صلاحية جديد',
    newExpiryDate: 'تاريخ الصلاحية الجديد',
    currentExpiryDate: 'تاريخ الصلاحية الحالي',
    currentQuantity: 'الكمية الحالية',
    notes: 'ملاحظات',
    exchangeNotesPlaceholder: 'ملاحظات حول الاستبدال...',
    exchangeDateNote: 'التاريخ الجديد للمنتج المستبدل',
    exchangeQuantityNote: 'الكمية تبقى كما هي، فقط تاريخ الصلاحية يتغير',
    exchangeRevertNote: 'ملاحظة: تم حذف السجل فقط. يجب إعادة كتابة التاريخ القديم يدوياً',
    
    // Customers
    customerName: 'اسم الزبون',
    customerPhone: 'رقم الهاتف',
    customerAddress: 'العنوان',
    balance: 'الرصيد',
    debt: 'الدين',
    addNewCustomer: 'إضافة زبون جديد',
    
    // Sales
    sale: 'البيع',
    sales: 'المبيعات',
    noSales: 'لا توجد مبيعات',
    total: 'الإجمالي',
    paid: 'المدفوع',
    remaining: 'الباقي',
    discount: 'الخصم',
    change: 'الباقي',
    payment: 'الدفع',
    cash: 'نقدي',
    card: 'بطاقة',
    package: 'درزن',
    paymentMethod: 'طريقة الدفع',
    print: 'طباعة',
    
    // Reports
    dailyReport: 'التقرير اليومي',
    monthlyReport: 'التقرير الشهري',
    profit: 'الربح',
    revenue: 'الإيرادات',
    cost: 'التكلفة',
    
    // Dates
    today: 'اليوم',
    yesterday: 'أمس',
    thisWeek: 'هذا الأسبوع',
    lastWeek: 'الأسبوع الماضي',
    thisMonth: 'هذا الشهر',
    lastMonth: 'الشهر الماضي',
    lastYear: 'السنة الماضية',
    date: 'التاريخ',
    from: 'من',
    to: 'إلى',
    
    // Dashboard
    welcome: 'أهلاً وسهلاً!',
    dashboardOverview: 'نظرة عامة على نظام الكاشير',
    todayRevenue: 'مبيعات اليوم',
    todayProfit: 'ربح اليوم',
    netProfit: 'الربح الصافي',
    todayExpenses: 'مصروفات اليوم',
    totalRevenue: 'إجمالي المبيعات',
    totalProfit: 'إجمالي الربح',
    totalExpenses: 'إجمالي المصروفات',
    cashInHand: 'المبلغ النقدي',
    lowStockAlert: 'تنبيه المنتجات القليلة',
    recentSales: 'المبيعات الحديثة',
    invoice: 'فاتورة',
    invoiceNumber: 'رقم الفاتورة',
    newInvoice: 'فاتورة جديدة',
    thankYouMessage: 'شكراً لك على الشراء!',
    receipt: 'الإيصال',
    receiptNumber: 'رقم الإيصال',
    paperSize: 'حجم الورق',
    visitAgain: 'نتطلع لزيارتك مرة أخرى',
    showRemainingOnReceipt: 'إظهار المبلغ المتبقي في الإيصال',
    showCustomerName: 'إظهار اسم العميل',
    errorReturnNote: 'الخطأ والنسيان من الطرفين',
    items: 'المنتجات',
    amount: 'المبلغ',
    view: 'عرض',
    updateDollarRate: 'تحديث سعر الدولار',
    currentRate: 'السعر الحالي',
    newRate: 'السعر الجديد',
    update: 'تحديث',
    revenueMinusExpenses: 'الإيرادات - المصروفات',
    selectSections: 'اختر الأقسام',
    dollarRateTitle: 'سعر الدولار',
    dollarRateInDinar: 'السعر بالدينار',
    rateInDollar: 'السعر بالدولار:',
    activities: 'الأنشطة',
    dollarRateNote: 'يستخدم سعر الدولار لتحويل الأسعار من الدينار إلى الدولار.',
    dollarRateMustBeGreater: 'يجب أن يكون سعر الدولار أكبر من الصفر',
    dollarRateTooLarge: 'سعر الدولار كبير جداً',
    dollarRateUpdatedSuccess: 'تم تحديث سعر الدولار بنجاح ✓',
    dollarRateUpdateError: 'حدث خطأ في تحديث سعر الدولار',
    totalLabel: 'الإجمالي',
    expensesLabel: 'المصروفات',
    totalExpensesLabel: 'إجمالي المصروفات',
    productsLabel: 'المنتجات',
    totalProductsLabel: 'إجمالي المنتجات',
    salesLabel: 'المبيعات',
    returnsLabel: 'مرتجعات المبيعات',
    last10: 'آخر ١٠',
    noSalesFound: 'لا توجد مبيعات',
    noReturnsFound: 'لا توجد مرتجعات',
    quickStats: 'إحصائيات سريعة',
    productItem: 'منتج',
    
    // Purchase History
    purchaseHistory: 'إحصائيات المشتريات',
    viewPurchaseHistory: 'عرض تاريخ المشتريات',
    noPurchaseHistory: 'لا يوجد تاريخ شراء',
    productNotPurchasedYet: 'لم يتم شراء هذا المنتج بعد',
    totalPurchases: 'إجمالي المشتريات',
    totalQuantity: 'الكمية الإجمالية',
    lastPurchasePrice: 'آخر سعر شراء',
    oldPurchaseCost: 'السعر القديم',
    purchaseCostDiff: 'فرق الشراء',
    perUnit: 'لكل وحدة',
    totalSpent: 'إجمالي الشراء',
    times: 'مرات',
    noPurchasesFound: 'لم يتم العثور على مشتريات',
    tryDifferentFilters: 'جرب فلاتر مختلفة',
    allSuppliers: 'جميع الموردين',
    allProducts: 'جميع المنتجات',
    dateFrom: 'من تاريخ',
    dateTo: 'إلى تاريخ',
    allCurrencies: 'جميع العملات',
    allMethods: 'جميع الطرق',
    searchInvoiceOrNotes: 'رقم الفاتورة، ملاحظات...',
    purchasesList: 'قائمة المشتريات',
    filters: 'الفلاتر',
    clearFilters: 'مسح الفلاتر',
    showImages: 'عرض الصور',
    allPurchases: 'جميع المشتريات',
    totalItems: 'إجمالي المنتجات',
    totalCost: 'التكلفة الإجمالية',
    notSpecified: 'غير محدد',
    unknown: 'غير معروف',
    
    cashBalance: 'رصيد النقد',
    cashAvailable: 'النقد المتاح',
    fromCustomers: 'من الزبائن',
    dollar: 'دولار',
    dinar: 'دينار',
    alerts: 'التنبيهات',
    lowStockProductsAlert: 'منتجات على وشك النفاد',
    quantityLow: 'الكمية قليلة',
    customerDebt: 'ديون الزبائن',
    allGood: 'كل شيء على ما يرام!',
    noIssuesInSystem: 'لا توجد مشاكل في النظام',
    noSalesYet: 'لا توجد مبيعات بعد',
    productsLowQuantity: 'منتجات كميتها قليلة',
    
    // POS
    scanBarcode: 'مسح الباركود',
    quantity: 'الكمية',
    quantityInStock: 'الكمية في المخزن',
    price: 'السعر',
    subtotal: 'المجموع الفرعي',
    totalAmount: 'المجموع الكلي',
    selectCustomer: 'اختر زبون',
    noCustomer: 'بدون زبون',
    addDiscount: 'خصم',
    paymentType: 'طريقة الدفع',
    completeSale: 'إتمام البيع',
    clearCart: 'مسح السلة',
    saveCart: 'حفظ السلة',
    savedCarts: 'السلات المحفوظة',
    loadCart: 'تحميل السلة',
    cartEmpty: 'السلة فارغة',
    invoices: 'فواتير',
    invoicesMenu: 'فواتير',
    load: 'تحميل',
    addItems: 'إضافة منتج',
    newTab: 'تبويب جديد',
    paidAmount: 'المبلغ المدفوع',
    session: 'جلسة',
    tab: 'تبويب',
    cannotCloseLastTab: 'لا يمكن إغلاق آخر تبويب',
    tabHasItems: 'هذا التبويب يحتوي على منتجات. هل أنت متأكد من الإغلاق؟',
    sureToCloseTab: 'هل أنت متأكد من الإغلاق؟',
    confirmClearCart: 'هل أنت متأكد من مسح السلة؟',
    cartSaved: 'تم حفظ السلة!',
    savingCart: 'جاري حفظ السلة',
    restoringCart: 'استعادة السلة',
    cartSavedMessage: 'تم الحفظ',
    confirmLoadCart: 'مسح السلة الحالية وتحميل هذه؟',
    cartNotEmpty: 'السلة ليست فارغة',
    wantToSaveOrDiscard: 'هل تريد حفظ الفاتورة أو حذفها؟',
    saveCartPark: 'حفظ (باركنق)',
    discardAndGo: 'حذف والذهاب',
    goBack: 'رجوع',
    selectCustomerForDebt: 'الرجاء اختيار زبون للبيع بالدين',
    noProductsFound: 'لم يتم العثور على منتجات',
    allCategories: 'كل الأصناف',
    seller: 'البائع',
    selectSeller: 'اختر البائع',
    generalSale: 'بيع عام',
    soldBy: 'تم البيع من قبل',
    retail: 'مفرد',
    wholesale: 'جملة',
    special: 'خاص',
    retailPrice: 'سعر المفرد',
    wholesalePrice: 'سعر الجملة',
    specialPrice: 'سعر خاص',
    piece: 'قطعة',
    carton: 'كرتون',
    box: 'صندوق',
    baseUnit: 'الوحدة الأساسية',
    addProductsToStart: 'أضف منتجات للبدء',
    updateButton: 'تحديث',
    addButton: 'إضافة',
    drinks: 'مشروبات',
    bread: 'خبز',
    food: 'طعام',
    cleaningSupplies: 'مواد تنظيف',
    homeGoods: 'أدوات منزلية',
    in: 'في',
    barcodeRequired: 'يجب إدخال رمز شريطي واحد على الأقل',
    barcodeAlreadyExists: 'هذا الباركود مستخدم بالفعل',
    productNameAlreadyExists: 'تم تسجيل منتج بهذا الاسم مسبقاً. يرجى اختيار اسم مختلف.',
    productAddedSuccess: 'تمت إضافة المنتج بنجاح ✓',
    errorOccurred: 'حدث خطأ',
    resetForm: 'مسح النموذج',
    basicInfo: 'المعلومات الأساسية',
    selectOption: 'اختر',
    company: 'الشركة',
    onlyUnit: 'وحدة فقط',
    unitPlusPackage: 'وحدة + درزن',
    unitPlusCarton: 'وحدة + كرتون',
    allUnits: 'الكل (وحدة + درزن + كرتون)',
    purchasePrice: 'سعر الشراء',
    generate: 'توليد',
    prices: 'الأسعار',
    productImage: 'صورة المنتج',
    notes: 'ملاحظات',
    notesPlaceholder: 'ملاحظات للمنتج...',
    saveProduct: 'حفظ المنتج',
    productManagement: 'إدارة المنتجات',
    salePrice: 'سعر البيع',
    editProduct: 'تعديل المنتج',
    addNewProduct: 'إضافة منتج جديد',
    selectCategory: 'اختر الفئة',
    automatic: 'تلقائي',
    fromSettings: 'من الإعدادات',
    confirmDeleteProduct: 'هل أنت متأكد من حذف هذا المنتج؟',
    imageLabel: 'صورة',
    cancelButton: 'إلغاء',
    customerManagement: 'إدارة العملاء',
    
    // Offers
    createOffer: 'إنشاء عرض',
    offerName: 'اسم العرض',
    offerDescription: 'وصف العرض',
    offerStartDate: 'تاريخ البدء',
    offerEndDate: 'تاريخ الانتهاء',
    offerPrice: 'سعر العرض',
    offerDiscount: 'خصم',
    offerDiscountPercent: 'خصم (%)',
    addProductToOffer: 'إضافة منتج إلى العرض',
    offerProducts: 'منتجات العرض',
    originalPrice: 'السعر الأصلي',
    offerManagement: 'إدارة العروض',
    saveOffer: 'حفظ العرض',
    offerUpdated: 'تم تحديث العرض بنجاح',
    cancelOffer: 'إلغاء العرض',
    noProductsInOffer: 'لا توجد منتجات في العرض',
    selectProductsForOffer: 'اختر المنتجات للعرض',
    noOffers: 'لا توجد عروض',
    activate: 'تفعيل',
    deactivate: 'إلغاء التفعيل',
    totalDiscount: 'إجمالي الخصم',
    duplicateOffer: 'نسخ العرض',
    copyOffer: 'نسخ',
    printOffer: 'طباعة العرض',
    exportOffer: 'تصدير العرض',
    importOffer: 'استيراد العرض',
    offerCopied: 'تم نسخ العرض بنجاح',
    offerScope: 'نطاق العرض',
    exampleOffer: 'مثال',
    specificOffer: 'محدد',
    minimumQuantity: 'الحد الأدنى للكمية',
    minQuantityPerCustomer: 'الحد الأدنى للكمية لكل عميل',
    minQuantityPerCustomerDesc: 'الحد الأدنى للكمية لكل عميل (إذا كان 0، لا يوجد حد)',
    maxQuantityPerCustomer: 'الحد الأقصى للكمية لكل عميل',
    maxQuantityPerCustomerDesc: 'الحد الأقصى للكمية لكل عميل (إذا كان 0، لا يوجد حد)',
    offerStatistics: 'إحصائيات العروض',
    offerType: 'نوع العرض',
    discountOffer: 'خصم',
    specialPriceOffer: 'سعر خاص',
    buyXGetYOffer: 'اشتري X احصل على Y (نفس المنتج)',
    buyXGetYDifferentOffer: 'اشتري X من المنتج A، احصل على Y من المنتج B',
    freeGiftOffer: 'هدية مجانية',
    percentageDiscount: 'خصم بنسبة مئوية',
    fixedDiscount: 'خصم ثابت',
    buyQuantity: 'اشتري',
    getQuantity: 'احصل على',
    freeProduct: 'منتج مجاني',
    buyProduct: 'منتج الشراء',
    getProduct: 'منتج الحصول',
    
    addNewCustomer: 'إضافة عميل جديد',
    editCustomer: 'تعديل العميل',
    confirmDeleteCustomer: 'هل أنت متأكد من حذف هذا العميل؟',
    phoneNumber: 'رقم الهاتف',
    customerNamePlaceholder: 'أحمد محمود',
    phoneNumberPlaceholder: '07501234567',
    updateButton: 'تحديث',
    addButton: 'إضافة',
    
    // Suppliers
    supplierManagement: 'إدارة الموردين',
    supplierInfo: 'معلومات وقائمة جميع الموردين',
    newSupplier: 'مورد جديد',
    totalSuppliers: 'إجمالي الموردين',
    totalDebt: 'إجمالي الديون',
    debtors: 'المدينون',
    searchSupplier: 'البحث بالاسم أو الهاتف...',
    noSuppliers: 'لم يتم تسجيل أي مورد',
    editSupplier: 'تعديل المورد',
    confirmDeleteSupplier: 'هل أنت متأكد من حذف هذا المورد؟',
    supplierName: 'اسم المورد',
    address: 'العنوان',
    email: 'البريد الإلكتروني',
    emailOptional: 'البريد الإلكتروني (اختياري)',
    notesOptional: 'ملاحظات (اختياري)',
    namePlaceholder: 'الاسم...',
    addressPlaceholder: 'العنوان الكامل...',
    notesPlaceholder: 'ملاحظاتك...',
    
    // Purchases
    purchaseManagement: 'إدارة المشتريات',
    purchaseDescription: 'الشراء من الموردين وإضافة البضائع إلى المخزن',
    totalPurchases: 'إجمالي المشتريات',
    totalExpense: 'إجمالي المصروفات',
    supplierDebt: 'ديون الموردين',
    newPurchase: 'شراء جديد',
    purchaseDescription2: 'أضف المنتجات وأكمل عملية الشراء',
    selectSupplier: 'اختر المورد',
    selectSupplierForDebt: 'الرجاء اختيار مورد للشراء بالدين',
    selectProduct: 'اختر المنتج',
    productQuantity: 'كمية المنتج',
    items: 'منتجات',
    noItemsAdded: 'لم تتم إضافة أي منتجات',
    grandTotal: 'الإجمالي الكلي',
    paymentMethod: 'طريقة الدفع',
    amountPaid: 'المبلغ المدفوع',
    remaining: 'الدين',
    completePurchase: 'إتمام الشراء',
    purchaseList: 'قائمة المشتريات',
    noPurchases: 'لم يتم تسجيل أي مشتريات',
    details: 'تفاصيل',
    purchaseDetails: 'تفاصيل الشراء',
    amountPaid: 'المبلغ المدفوع',
    fillAllFields: 'الرجاء ملء جميع الحقول',
    addAtLeastOneProduct: 'الرجاء إضافة منتج واحد على الأقل',
    purchaseRecorded: 'تم تسجيل الشراء بنجاح',
    perUnit: 'للوحدة الواحدة',
    lastPrice: 'آخر سعر',
    product: 'منتج',
    optional: 'اختياري',
    
    // Safe
    safeManagement: 'إدارة الصندوق',
    cashTransactions: 'معاملات النقدية',
    safeBalance: 'رصيد الصندوق',
    totalIn: 'إجمالي الدخول',
    totalOut: 'إجمالي الخروج',
    newTransaction: 'معاملة جديدة',
    transactionList: 'قائمة المعاملات',
    noTransactions: 'لا توجد معاملات مسجلة',
    transactionType: 'نوع المعاملة',
    moneyIn: 'دخول',
    moneyOut: 'خروج',
    transactionDetails: 'تفاصيل المعاملة',
    reference: 'المرجع',
    referenceOptional: 'رقم المرجع (اختياري)',
    confirmDeleteTransaction: 'هل أنت متأكد من حذف هذه المعاملة؟',
    allTransactions: 'الكل',
    moneyAmount: 'المبلغ',
    type: 'النوع',
    dateLabel: 'التاريخ',
    
    // Expenses
    expenseManagement: 'إدارة المصروفات',
    expenseDescription: 'تسجيل جميع مصروفات المتجر',
    newExpense: 'مصروف جديد',
    totalExpenses: 'إجمالي المصروفات',
    expenseList: 'قائمة المصروفات',
    noExpenses: 'لا توجد مصروفات مسجلة',
    editExpense: 'تعديل المصروف',
    expenseType: 'نوع المصروف',
    expenseDetails: 'تفاصيل المصروف',
    confirmDeleteExpense: 'هل أنت متأكد من حذف هذا المصروف؟',
    allTypes: 'جميع الأنواع',
    
    // Categories
    sales: 'مبيعات',
    purchases: 'مشتريات',
    rent: 'إيجار',
    salary: 'راتب',
    salaryAndRent: 'راتب وإيجار',
    salaryAndRentManagement: 'إدارة رواتب الموظفين وإيجار المحل',
    employeeSalaries: 'رواتب الموظفين',
    shopRent: 'إيجار المحل',
    addSalary: 'إضافة راتب',
    editSalary: 'تعديل راتب',
    salaryType: 'نوع الراتب',
    salaryAmount: 'مبلغ الراتب',
    daily: 'يومي',
    monthly: 'شهري',
    salaryList: 'قائمة الرواتب',
    noSalaries: 'لا توجد رواتب',
    paymentDue: 'حان وقت الدفع',
    daysRemaining: 'أيام متبقية',
    totalPaid: 'إجمالي المدفوع',
    lastPayment: 'آخر دفعة',
    nextPayment: 'الدفعة القادمة',
    noPayments: 'لم يتم الدفع',
    paymentHistory: 'سجل الدفعات',
    paySalary: 'دفع',
    payRent: 'دفع الإيجار',
    recordPayment: 'تسجيل الدفعة',
    selectEmployee: 'اختر موظف',
    addRent: 'إضافة إيجار',
    updateRent: 'تحديث الإيجار',
    rentAmount: 'مبلغ الإيجار',
    paymentDate: 'تاريخ الدفع',
    nextPaymentDate: 'الدفعة القادمة',
    nextPaymentDateNote: 'ملاحظة: تاريخ الدفعة القادمة سيتم إضافته تلقائياً بعد 30 يوماً',
    noRentInfo: 'لا توجد معلومات إيجار',
    paymentAlertTitle: 'تنبيه الدفع',
    salaryPaymentDue: 'حان وقت دفع راتب',
    salaryPaymentNear: 'اقترب وقت دفع راتب',
    rentPaymentDue: 'حان وقت دفع إيجار المحل!',
    rentPaymentNear: 'اقترب وقت دفع إيجار المحل',
    employeeNotSelected: 'لم يتم اختيار موظف',
    errorOccurred: 'حدث خطأ',
    confirmDeleteSalary: 'هل أنت متأكد من حذف هذا الراتب؟',
    loanGiven: 'قرض ممنوح',
    loanReceived: 'قرض مستلم',
    gift: 'هدية',
    profit: 'ربح',
    other: 'أخرى',
    electricity: 'كهرباء',
    water: 'ماء',
    delivery: 'توصيل',
    repair: 'صيانة',
    cleaning: 'تنظيف',
    internet: 'إنترنت',
    telephone: 'هاتف',
    storeSupplies: 'مستلزمات المتجر',
    
    // Reports
    profitLossReport: 'تقرير الأرباح والخسائر',
    todayReport: 'تقرير اليوم',
    revenue: 'الإيرادات (المبيعات)',
    returnedGoods: 'البضائع المرتجعة',
    netProfit: 'صافي الربح',
    grandTotal: 'الإجمالي الكلي',
    expenseBreakdown: 'تفصيل المصروفات',
    todayReturns: 'مرتجعات اليوم',
    returnId: 'مرتجع',
    saleId: 'فاتورة',
    noReturnsToday: 'لا توجد مرتجعات اليوم',
    nearOutOfStock: 'منتجات قريبة من النفاذ',
    allGoodsOk: 'جميع المنتجات جيدة',
    code: 'الرمز',
    totalSales: 'إجمالي المبيعات',
    totalProfit: 'إجمالي الأرباح',
    totalProducts: 'إجمالي المنتجات',
    totalCustomers: 'إجمالي العملاء',
    invoiceList: 'قائمة الفواتير',
    searchInvoice: 'البحث برقم الفاتورة أو العميل...',
    all: 'الكل',
    week: 'أسبوع',
    month: 'شهر',
    returnFromCustomer: 'إرجاع من العميل',
    returnToSupplier: 'إرجاع إلى المورد',
    customerHistory: 'تاريخ العميل',
    supplierHistory: 'تاريخ المورد',
    searchForInvoiceOrCustomer: 'البحث عن الفاتورة أو العميل',
    selectInvoice: 'اختيار الفاتورة',
    selectItems: 'اختيار المنتجات',
    returnQuantity: 'إجمالي الإرجاع:',
    returnReason: 'سبب الإرجاع',
    writeReturnReason: 'اكتب سبب إرجاع البضائع...',
    selectedItems: 'المنتجات المختارة:',
    totalReturn: 'إجمالي الإرجاع:',
    processReturn: 'معالجة الإرجاع',
    purchasesList: 'قائمة المشتريات',
    searchForInvoiceOrSupplier: 'البحث برقم الفاتورة أو المورد...',
    noPurchasesFound: 'لم يتم العثور على مشتريات',
    returnHistoryCustomer: 'تاريخ إرجاع العميل',
    returnHistorySupplier: 'تاريخ إرجاع المورد',
    supplierReturnTo: 'إرجاع البضائع إلى:',
    noInvoicesFound: 'لم يتم العثور على فواتير',
    customerName: 'اسم العميل',
    customerId: 'معرف العميل',
    editInvoice: 'تعديل الفاتورة',
    customerNameLabel: 'اسم العميل',
    saveChanges: 'حفظ التغييرات',
    cancelChanges: 'إلغاء',
    confirmDelete: 'تأكيد الحذف؟',
    confirmDeleteMessage: 'هل أنت متأكد من حذف الفاتورة',
    goodsWillReturn: 'ستعود البضائع إلى المخزن',
    yes: 'نعم، احذف',
    no: 'لا',
    unknown: 'غير معروف',
    discount: 'خصم',
    dollarRate: 'سعر الدولار',
    
    // Returns
    returnGoods: 'إرجاع البضائع',
    returnManagement: 'إدارة إرجاع البضائع المباعة',
    totalReturns: 'إجمالي المرتجعات',
    selectInvoiceForReturn: 'اختر الفاتورة لإرجاع البضائع',
    hasReturn: 'يوجد مرتجع',
    returnedAmount: 'المبلغ المرتجع',
    clickToReturn: 'انقر لإرجاع البضائع ←',
    invoice: 'فاتورة',
    selectGoodsToReturn: 'اختر المنتجات للإرجاع',
    returnReason: 'سبب الإرجاع (اختياري)',
    returnReasonPlaceholder: 'اكتب سبب إرجاع البضائع...',
    selectedGoods: 'إجمالي المنتجات المحددة',
    returnTotal: 'إجمالي المرتجع',
    processReturn: 'عملية الإرجاع',
    confirmReturnTitle: 'تأكيد الإرجاع؟',
    confirmReturnMessage: 'بعد عملية الإرجاع، ستعود البضائع إلى المخزن والمال إلى الصندوق',
    totalGoods: 'إجمالي البضائع',
    waitingText: 'انتظر...',
    confirmButton: 'أؤكد',
    returnHistory: 'سجل المرتجعات',
    returnRecorded: 'تم تسجيل الإرجاع بنجاح!',
    returnError: 'خطأ في تسجيل الإرجاع!',
    history: 'التاريخ',
    noHistory: 'لا يوجد تاريخ',
    deleted: 'تم الحذف',
    confirmRevert: 'هل أنت متأكد من الاسترجاع؟ سيتم إرجاع المنتج إلى المخزون.',
    reverted: 'تم الاسترجاع',
    revert: 'استرجاع',
    updated: 'تم التحديث',
    
    // Products
    productList: 'قائمة المنتجات',
    productDetails: 'تفاصيل المنتج',
    image: 'صورة',
    description: 'وصف',
    supplier: 'المورد',
    lowStock: 'مخزون قليل',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر',
    actions: 'الإجراءات',
    
    // Customers
    customerList: 'قائمة الزبائن',
    addCustomer: 'إضافة زبون',
    customerDetails: 'تفاصيل الزبون',
    totalDebt: 'إجمالي الدين',
    payDebt: 'دفع الدين',
    debtHistory: 'سجل الديون',
    noDebt: 'لا يوجد دين',
    
    // Sales History
    salesHistory: 'سجل المبيعات',
    saleDetails: 'تفاصيل البيع',
    paymentStatus: 'حالة الدفع',
    fullPaid: 'مدفوع بالكامل',
    partialPaid: 'مدفوع جزئياً',
    unpaid: 'غير مدفوع',
    viewAllSalesReceipts: 'عرض جميع الفواتير',
    totalPaid: 'إجمالي المدفوع',
    salesList: 'قائمة المبيعات',
    noResultsWithFilters: 'لم يتم العثور على نتائج مع الفلاتر',
    
    // Expenses
    expenseList: 'قائمة المصروفات',
    addExpense: 'إضافة مصروف',
    expenseType: 'نوع المصروف',
    expenseDate: 'تاريخ المصروف',
    expenseAmount: 'مبلغ المصروف',
    expenseNote: 'ملاحظة',
    
    // Suppliers
    supplierList: 'قائمة الموردين',
    addSupplier: 'إضافة مورد',
    supplierAdded: 'تمت إضافة المورد بنجاح',
    supplierName: 'اسم المورد',
    supplierPhone: 'رقم المورد',
    supplierAddress: 'عنوان المورد',
    supplierProducts: 'منتجات المورد',
    
    // Purchases
    purchaseList: 'قائمة المشتريات',
    addPurchase: 'إضافة مشترى',
    purchaseDate: 'تاريخ الشراء',
    purchaseAmount: 'مبلغ الشراء',
    purchaseItems: 'منتجات الشراء',
    
    // Safe
    safeBalance: 'رصيد الخزنة',
    deposits: 'الإيداعات',
    withdrawals: 'السحوبات',
    addDeposit: 'إضافة إيداع',
    addWithdrawal: 'إضافة سحب',
    transactionHistory: 'سجل المعاملات',
    deposit: 'إيداع',
    withdrawal: 'سحب',
    note: 'ملاحظة',
    
    // Returns
    returnsList: 'قائمة المرتجعات',
    addReturn: 'إضافة مرتجع',
    returnDate: 'تاريخ الإرجاع',
    returnReason: 'سبب الإرجاع',
    returnAmount: 'مبلغ الإرجاع',
    refund: 'استرجاع المبلغ',
    
    // Reports
    salesReport: 'تقرير المبيعات',
    profitReport: 'تقرير الأرباح',
    expensesReport: 'تقرير المصروفات',
    inventoryReport: 'تقرير المخزون',
    customerReport: 'تقرير الزبائن',
    generateReport: 'إنشاء تقرير',
    exportReport: 'تصدير تقرير',
    printReport: 'طباعة تقرير',
    period: 'الفترة',
    summary: 'ملخص',
    details: 'التفاصيل',
    
    // Backup
    createBackup: 'إنشاء نسخة احتياطية',
    restoreBackup: 'استرجاع نسخة احتياطية',
    autoBackup: 'نسخ احتياطي تلقائي',
    backupNow: 'نسخ احتياطي الآن',
    lastBackup: 'آخر نسخة احتياطية',
    backupHistory: 'سجل النسخ الاحتياطية',
    downloadBackup: 'تحميل نسخة احتياطية',
    uploadBackup: 'رفع نسخة احتياطية',
    backupRestoreTitle: 'النسخ الاحتياطي واسترجاع البيانات',
    backupRestoreDesc: 'احفظ بياناتك واسترجعها لحمايتها',
    dbStatistics: 'إحصائيات قاعدة البيانات',
    invoiceDesigner: 'مصمم الفواتير',
    backupFolder: 'مجلد النسخ الاحتياطي',
    selectBackupFolder: 'اختيار مجلد',
    noFolderSelected: 'لم يتم اختيار مجلد',
    autoBackupEvery24Hours: 'نسخ احتياطي تلقائي (٢٤ ساعة)',
    autoBackupEnabled: 'النسخ الاحتياطي التلقائي مفعّل',
    autoBackupDisabled: 'تم إلغاء النسخ الاحتياطي التلقائي',
    backupManual: 'نسخ احتياطي للبيانات',
    backupDescription: 'يحفظ جميع بيانات النظام كملف JSON يمكنك حفظه في أي مكان',
    whatWillBeBackedUp: 'ما الذي سيُحفظ:',
    allProducts: 'جميع المنتجات والعملاء',
    allSalesPurchases: 'المبيعات والمشتريات',
    suppliersExpenses: 'الموردين والمصروفات',
    usersSettings: 'المستخدمين والإعدادات',
    licensePayments: 'التراخيص والمدفوعات',
    backingUp: 'جارٍ الحفظ...',
    restoreData: 'استرجاع البيانات',
    restoreWarning: 'تحذير:',
    restoreWarningDesc: 'استرجاع البيانات سيحذف جميع البيانات الحالية ويسترجع البيانات القديمة. الرجاء حفظ بياناتك قبل الاسترجاع!',
    selectBackupFile: 'اختر ملف النسخ الاحتياطي:',
    fileSize: 'الحجم',
    restoring: 'جارٍ الاسترجاع...',
    tips: 'نصائح',
    backupDaily: 'احفظ بياناتك يومياً لحمايتها',
    saveBackupsSafely: 'احفظ ملفات النسخ الاحتياطي في مكان آمن',
    validateBeforeRestore: 'قبل استرجاع البيانات، تأكد من أن الملف صحيح',
    oldDataWillBeDeleted: 'ستُحذف البيانات القديمة، لذا كن حذراً',
    backupSuccess: 'تم حفظ البيانات بنجاح',
    backupError: 'حدث خطأ في حفظ البيانات',
    restoreSuccess: 'تم استرجاع البيانات بنجاح',
    restoreError: 'حدث خطأ في استرجاع البيانات',
    selectDataToBackup: 'اختيار البيانات للنسخ الاحتياطي',
    selectDataToRestore: 'اختيار البيانات للاسترجاع',
    selectAll: 'اختيار الكل',
    deselectAll: 'إلغاء الاختيار',
    resetAllData: 'حذف جميع البيانات',
    resetAllDataDesc: 'حذف جميع بيانات النظام (باستثناء الترخيص)',
    confirmResetAllData: 'هل أنت متأكد من حذف جميع البيانات؟ لا يمكن التراجع!',
    confirmResetAgain: 'تأكد مرة أخرى! سيتم حذف جميع البيانات ولن تعود!',
    allDataDeleted: 'تم حذف جميع البيانات! ستتم إعادة تحميل الصفحة...',
    allDataWillBeDeleted: 'سيتم حذف جميع البيانات',
    cannotBeUndone: 'لا يمكن التراجع عن هذا الإجراء',
    licenseWillBeKept: 'سيبقى الترخيص',
    backupBeforeReset: 'قم بالنسخ الاحتياطي قبل الحذف!',
    resetting: 'جاري الحذف...',
    selectiveBackup: 'يمكنك اختيار البيانات المطلوبة فقط للنسخ الاحتياطي',
    selectiveRestore: 'يمكنك اختيار البيانات المطلوبة فقط للاسترجاع',
    manual: 'يدوي',
    
    // Barcode Generator
    barcodeGenerator: 'مولد الباركود',
    barcodeGeneratorDesc: 'إنشاء وطباعة الباركود للمنتجات',
    selectProducts: 'اختيار المنتجات',
    barcodeType: 'نوع الباركود',
    labelSize: 'حجم الملصق',
    copies: 'نسخ',
    showProductName: 'إظهار اسم المنتج',
    showPrice: 'إظهار السعر',
    print: 'طباعة',
    download: 'تحميل',
    preview: 'معاينة',
    noProductsSelected: 'لم يتم اختيار أي منتجات',
    clearSelection: 'مسح الاختيار',
    selectedCount: 'المحدد',
    printBarcodes: 'طباعة الباركودات',
    searchProducts: 'البحث عن المنتجات...',
    clearFilters: 'مسح الفلاتر',
    showImages: 'عرض الصور',
    advancedFilters: 'فلاتر متقدم',
    priceRange: 'نطاق السعر',
    minPrice: 'الحد الأدنى',
    maxPrice: 'الحد الأقصى',
    stockLevel: 'مستوى المخزون',
    allStock: 'جميع المستويات',
    inStock: 'متوفر',
    lowStock: 'قليل',
    outOfStock: 'نفد',
    supplier: 'المورد',
    allSuppliers: 'جميع الموردين',
    date: 'التاريخ',
    updateSuccess: 'تم تحديث المنتج بنجاح! ✓',
    productAdded: 'تم إضافة المنتج بنجاح! ✓',
    small: 'صغير',
    medium: 'متوسط',
    large: 'كبير',
    customBarcode: 'باركود مخصص',
    autoGenerateActive: '🎯 التوليد التلقائي نشط - سيتم إنشاء الباركود تلقائياً!',
    enterName: 'اكتب الاسم...',
    enterCode: 'اكتب الكود...',
    optional: 'اختياري',
    addToPreview: 'إضافة للمعاينة',
    clear: 'مسح',
    fillRequired: 'الرجاء ملء الحقول المطلوبة!',
    hide: 'إخفاء',
    show: 'إظهار',
    
    // Messages
    success: 'نجح',
    error: 'خطأ',
    warning: 'تحذير',
    info: 'معلومات',
    areYouSure: 'هل أنت متأكد؟',
    cannotUndo: 'لا يمكن التراجع',
    operationSuccess: 'نجحت العملية',
    operationFailed: 'فشلت العملية',
    pleaseWait: 'الرجاء الانتظار',
    noData: 'لا توجد بيانات',
    noResults: 'لا توجد نتائج',
    
    // Actions
    create: 'إنشاء',
    deleteAction: 'حذف',
    saveAction: 'حفظ',
    cancelAction: 'إلغاء',
    backAction: 'رجوع',
    nextAction: 'التالي',
    previousAction: 'السابق',
    submitAction: 'إرسال',
    resetAction: 'حذف',
    clearAction: 'مسح',
    selectAction: 'اختيار',
    selectAll: 'اختر الكل',
    deselectAll: 'إلغاء الكل',
    
    // Misc
    required: 'مطلوب',
    optional: 'اختياري',
    status: 'الحالة',
    enabled: 'مفعّل',
    disabled: 'معطّل',
    all: 'الكل',
    none: 'لا شيء',
    other: 'آخر',
    more: 'المزيد',
    less: 'أقل',
    showMore: 'عرض المزيد',
    showLess: 'عرض أقل',
    page: 'صفحة',
    of: 'من',
    perPage: 'لكل صفحة',
    noRecords: 'لا توجد سجلات',
    records: 'السجلات',
    
    // Missing properties
    cart: 'السلة',
    reportFilters: 'مرشحات التقرير',
    customDateRange: 'نطاق تاريخ مخصص',
    startDate: 'تاريخ البداية',
    endDate: 'تاريخ النهاية',
    filterByDate: 'تصفية حسب التاريخ',
    filterByCategory: 'تصفية حسب الفئة',
    filterByCustomer: 'تصفية حسب العميل',
    filterByProduct: 'تصفية حسب المنتج',
    filterBySupplier: 'تصفية حسب المورد',
    filterByPaymentMethod: 'تصفية حسب طريقة الدفع',
    filterByAmount: 'تصفية حسب المبلغ',
    filterByStatus: 'تصفية حسب الحالة',
    filterByUser: 'تصفية حسب المستخدم',
    filterByLocation: 'تصفية حسب الموقع',
    filterByType: 'تصفية حسب النوع',
    filterByBrand: 'تصفية حسب العلامة التجارية',
    filterByPrice: 'تصفية حسب السعر',
    filterByQuantity: 'تصفية حسب الكمية',
    filterByProfit: 'تصفية حسب الربح',
    filterByLoss: 'تصفية حسب الخسارة',
    filterByReturn: 'تصفية حسب الإرجاع',
    filterByExpense: 'تصفية حسب المصروف',
    filterByIncome: 'تصفية حسب الدخل',
    filterByDebt: 'تصفية حسب الدين',
    filterByCredit: 'تصفية حسب الائتمان',
    filterByCash: 'تصفية حسب النقد',
    filterByCard: 'تصفية حسب البطاقة',
    
    // Activities Page
    salesAndPurchases: 'المبيعات والمشتريات',
    employeeMonitoring: 'مراقبة الموظفين',
    activitiesTotalSales: 'إجمالي المبيعات',
    activitiesTotalPurchases: 'إجمالي المشتريات',
    activitiesTotalPaid: 'إجمالي المدفوع',
    activitiesTotalDebt: 'إجمالي الدين',
    activitiesSearchPlaceholder: 'البحث بالمعرف، الاسم، المنتج...',
    activitiesPeriod: 'الفترة',
    activitiesStartDate: 'تاريخ البداية',
    activitiesEndDate: 'تاريخ النهاية',
    activitiesSelectDate: 'اختر التاريخ',
    activitiesClearFilters: 'مسح',
    noActivitiesFound: 'لم يتم العثور على أي نشاط',
    activitiesMore: 'المزيد',
    editNotes: 'ملاحظات التعديل:',
    startDateCannotBeGreater: 'تاريخ البداية لا يمكن أن يكون أكبر من تاريخ النهاية',
    pleaseSelectStartDate: 'الرجاء اختيار تاريخ البداية',
    apply: 'تطبيق',
    customerOrSupplier: 'العميل/المورد',
    activitiesTotal: 'الإجمالي',
    activitiesNotes: 'ملاحظات',
    activitiesAction: 'الإجراء',
    activitiesSection: 'القسم',
    activitiesDetails: 'التفاصيل',
    noActivityLogs: 'لم يتم تسجيل أي نشاط',
    activitiesCreate: 'إنشاء',
    activitiesUpdate: 'تحديث',
    activitiesDelete: 'حذف',
    activitiesView: 'عرض',
    activitiesLogin: 'تسجيل الدخول',
    activitiesLogout: 'تسجيل الخروج',
    activitiesType: 'النوع',
    activitiesItems: 'المنتجات',
    sevenDays: 'سبعة أيام',
    thirtyDays: 'شهر (30 يوم)',
    ninetyDays: 'ثلاثة أشهر (90 يوم)',
    threeHundredSixtyFiveDays: 'سنة (365 يوم)',
    
    // Reports Page
    generalReportTitle: 'التقرير العام',
    generalReportDescription: 'معلومات كاملة عن الشراء والبيع والربح والخسارة والمصروفات',
    reportCustomerReports: 'تقرير الزبائن',
    reportCustomerSpecial: 'تقرير خاص بالزبون',
    reportCustomerBalance: 'رصيد الزبون',
    reportCustomerItems: 'تقرير مواد الزبون',
    reportCustomerGeneral: 'تقرير عام للزبون',
    reportCustomerInvoices: 'جميع فواتير الزبون',
    reportProfit: 'تقرير الربح',
    reportProfitDetails: 'تقرير تفاصيل الربح',
    reportSalesItems: 'تقرير بيع المواد',
    reportPurchaseItems: 'تقرير شراء المواد',
    reportStockItems: 'تقرير المخزون',
    reportExpiredProducts: 'تقرير المنتجات المنتهية الصلاحية',
    reportSupplierReports: 'تقرير المورد',
    reportSupplierSpecial: 'تقرير خاص بالمورد',
    reportSupplierBalance: 'رصيد المورد',
    reportSupplierItems: 'تقرير مواد المورد',
    reportSupplierGeneral: 'تقرير عام للمورد',
    reportSupplierInvoices: 'جميع فواتير المورد',
    reportSupplierProfit: 'تقرير الربح من المورد',
    reportGeneral: 'التقرير العام',
    reportGeneralInfo: 'تقرير المعلومات العامة',
    reportMonthly: 'تقرير الأشهر',
    reportAccountantActivity: 'تقرير نشاط المحاسب',
    reportOtherReports: 'تقارير أخرى',
    reportAccountantSafe: 'حساب المحاسب',
    reportExpenses: 'تقرير المصروفات',
    reportRegistrationDate: 'تقرير تاريخ التسجيل',
    viewReports: 'عرض التقارير',
    
    // Activities Page
    openInvoice: 'فتح الفاتورة',
    viewInvoice: 'عرض',
    invoice: 'فاتورة',
    purchaseInvoiceDetails: 'تفاصيل فاتورة الشراء',
    invoiceNumberLabel: 'رقم الفاتورة',
    dateLabel: 'التاريخ',
    supplierLabel: 'المورد',
    currencyLabel: 'العملة',
    paymentMethodLabel: 'طريقة الدفع',
    userLabel: 'المستخدم',
    productNameLabel: 'اسم المنتج',
    quantityLabel: 'الكمية',
    totalLabel: 'الإجمالي',
    paidLabel: 'المدفوع',
    debtLabel: 'الدين',
    notesLabel: 'ملاحظات',
    discountLabel: 'خصم:',
    generalDiscount: 'الخصم العام',
    codeLabel: 'كود:',
    printInvoice: 'طباعة',
    withoutSupplier: 'بدون مورد',
    itemsLabel: 'المنتجات',
    productWithoutName: 'منتج بدون اسم',
    noItemsFound: 'لا توجد منتجات',
    employeeInfo: 'معلومات الموظف',
    employeeNumber: 'رقم الموظف',
    mobileNumber: 'رقم الجوال',
    employeeType: 'نوع الموظف',
    employeeStatus: 'حالة الموظف',
    activeStatus: 'نشط',
    inactiveStatus: 'غير نشط',
    timeLabel: 'الوقت',
    invoiceLocked: 'الفاتورة مقفلة، يرجى فتح أول فاتورة',
    amountCannotBeLess: 'المبلغ لا يمكن أن يكون أقل من الصفر',
    noDiscountPermission: 'ليس لديك صلاحية الخصم!',
    guestCustomer: 'عميل ضيف',
    externalProduct: 'منتج خارجي',
    invoiceUnparked: 'تم استرجاع الفاتورة المحفوظة بنجاح!',
    newTabCreated: 'تم إنشاء تبويب جديد للفاتورة الجديدة',
    invoiceLoaded: 'تم تحميل الفاتورة بنجاح',
    invoiceCleared: 'تم تفريغ الفاتورة',
    otherInvoiceNotFound: 'لم يتم العثور على فاتورة أخرى',
    popupBlocked: 'النوافذ المنبثقة محظورة، يرجى السماح بالنوافذ المنبثقة',
    printCart: 'طباعة السلة',
    shop: 'المحل',
    totalInWords: 'المجموع الكلي بالكتابة:',
    thanksForPurchase: 'شكراً لكم على الشراء',
    discountLabel: 'خصم:',
    generalDiscount: 'الخصم العام',
    codeLabel: 'كود:',
    returned: 'مرتجع',
    partialReturned: 'مرتجع جزئياً',
    sold: 'مباع',
    noSaleDebtPermission: 'ليس لديك صلاحية البيع بالدين!',
    noSaleInstallmentPermission: 'ليس لديك صلاحية البيع بالقسط!',
    selectCustomerForInstallment: 'يرجى اختيار عميل للبيع بالقسط',
    enterAdvanceAndMonths: 'يرجى إدخال المبلغ المقدم وعدد الأشهر بشكل صحيح',
    advanceMustBeLess: 'المبلغ المقدم يجب أن يكون أقل من الإجمالي',
    installmentRecorded: 'حدث خطأ في تسجيل القسط',
    enterPaymentAmount: 'يرجى إدخال مبلغ الدفع',
    paymentAmountExceedsDebt: 'مبلغ الدفع أكبر من الدين',
    paymentRecorded: 'تم تسجيل الدفعة بنجاح!',
    enterDebtAmount: 'يرجى إدخال مبلغ الدين',
    debtAdded: 'تم إضافة الدين بنجاح!',
    enterCustomerName: 'يرجى إدخال اسم العميل',
    enterPhoneNumber: 'يرجى إدخال رقم الهاتف',
    customerAdded: 'تم إضافة العميل بنجاح!',
    noPrintPermission: 'ليس لديك صلاحية طباعة الفاتورة!',
    searchProduct: 'البحث عن المنتج',
    enterProductNameAndPrice: 'يرجى إدخال اسم المنتج والسعر',
    externalProductAdded: 'تم إضافة المنتج الخارجي بنجاح',
    addExternalProduct: 'إضافة منتج خارجي',
    cashSale: 'بيع نقدي',
    debtSale: 'بيع بالدين',
    installmentSale: 'بيع بالقسط',
    parkInvoice: 'حفظ الفاتورة',
    parkInvoiceTitle: 'حفظ الفاتورة وبدء فاتورة جديدة',
    clear: 'مسح',
    addDebtWithoutPurchase: 'إضافة دين بدون شراء',
    printDebt: 'طباعة الدين',
    viewDebts: 'عرض الديون',
    previousInvoice: 'الفاتورة السابقة',
    nextInvoice: 'الفاتورة التالية',
    parkedInvoices: 'الفواتير المحفوظة',
    invoiceCount: 'فاتورة',
    invoiceNumberPrefix: 'فاتورة #',
    unnamedInvoice: 'فاتورة بدون اسم',
    itemCount: 'منتج',
    customerLabel: 'العميل: ',
    loadInvoice: 'تحميل',
    deleteInvoice: 'حذف',
    confirmDeleteInvoice: 'هل أنت متأكد من حذف هذه الفاتورة؟',
    warranty: 'الضمان',
    showInvoice: 'عرض الفاتورة',
    selectACustomer: 'اختر عميلاً',
    searchForInvoice: 'البحث عن الفاتورة',
    invoiceNotes: 'ملاحظات الفاتورة',
    noParkedInvoices: 'لا توجد فواتير محفوظة',
    writeNote: 'اكتب ملاحظة:',
    writeInvoiceNoteHere: 'اكتب ملاحظة الفاتورة هنا...',
    paidAmountLabel: 'المبلغ المدفوع',
    debtPaymentDate: 'تاريخ دفع الدين',
    paidLabelShort: 'المدفوع:',
    remainingDebtLabel: 'الدين المتبقي:',
    completeSale: 'إتمام البيع',
    customerSelection: 'اختيار العميل',
    currencyLabel: 'العملة',
    dollarRateLabel: 'سعر الدولار:',
    advanceLabel: 'المقدم',
    installmentMonthsLabel: 'عدد الأشهر',
    monthlyPaymentLabel: 'الدفع الشهري',
    monthLabel: 'شهر',
    totalInstallmentsLabel: 'إجمالي الأقساط:',
    remainingInstallmentLabel: 'القسط المتبقي:',
    hasAdvance: 'يوجد ضمان',
    customDesignUsed: 'يتم استخدام التصميم المخصص',
    noAccessPermission: 'ليس لديك صلاحية الوصول إلى هذا القسم!',
    
    // PDF Report Labels
    generalFinancialReport: 'التقرير المالي العام',
    periodLabel: 'الفترة',
    dateLabelPDF: 'التاريخ',
    shopNameLabel: 'اسم المتجر',
    phoneNumberLabel: 'رقم الهاتف',
    financialSummary: 'ملخص مالي',
    subjectLabel: 'الموضوع',
    amountLabel: 'المبلغ',
    totalSalesRevenue: 'إجمالي إيرادات المبيعات',
    grossProfit: 'الربح الإجمالي',
    totalPurchases: 'إجمالي المشتريات',
    totalExpenses: 'إجمالي المصروفات',
    totalReturns: 'إجمالي المرتجعات',
    netProfit: 'صافي الربح',
    balancesLabel: 'الأرصدة',
    warehouseBalance: 'رصيد المستودع',
    customerDebts: 'ديون العملاء',
    supplierDebts: 'ديون الموردين',
    salesDebts: 'ديون المبيعات',
    purchaseDebts: 'ديون المشتريات',
    todayPeriod: 'اليوم',
    weekPeriod: 'أسبوع',
    monthPeriod: 'شهر',
    yearPeriod: 'سنة',
    customPeriod: 'فترة مخصصة',
    custom: 'مخصص',
    
    // Table Headers
    customerNameHeader: 'اسم العميل',
    phoneHeader: 'الهاتف',
    totalSalesHeader: 'إجمالي المبيعات',
    totalRemainingHeader: 'المتبقي',
    salesCountHeader: 'عدد المبيعات',
    balanceHeader: 'الرصيد',
    addressHeader: 'العنوان',
    totalProfitHeader: 'الربح',
    invoiceIdHeader: 'رقم الفاتورة',
    itemsCountHeader: 'عدد المنتجات',
    productNameHeader: 'اسم المنتج',
    barcodeHeader: 'الباركود',
    quantityHeader: 'الكمية',
    priceHeader: 'السعر',
    discountHeader: 'الخصم',
    totalHeader: 'الإجمالي',
    saleDateHeader: 'التاريخ',
    
    // Additional Table Headers
    idHeader: 'ID',
    profitPercentageHeader: 'نسبة الربح %',
    saleIdHeader: 'ID البيع',
    purchaseIdHeader: 'ID الشراء',
    costPriceHeader: 'سعر الشراء',
    unitHeader: 'الوحدة',
    categoryHeader: 'الفئة',
    retailPriceHeader: 'سعر التجزئة',
    wholesalePriceHeader: 'سعر الجملة',
    specialPriceHeader: 'سعر خاص',
    totalValueHeader: 'قيمة المخزون الإجمالية',
    totalSoldHeader: 'مباع',
    totalPurchasedHeader: 'مشترى',
    totalPurchasesHeader: 'إجمالي المشتريات',
    purchasesCountHeader: 'عدد المشتريات',
    revenueHeader: 'الإيرادات',
    grossProfitHeader: 'الربح الإجمالي',
    totalExpensesHeader: 'إجمالي المصروفات',
    netProfitHeader: 'صافي الربح',
    totalCustomersHeader: 'إجمالي العملاء',
    totalSuppliersHeader: 'إجمالي الموردين',
    totalProductsHeader: 'إجمالي المنتجات',
    monthHeader: 'الشهر',
    salesRevenueHeader: 'إيرادات المبيعات',
    salesProfitHeader: 'ربح المبيعات',
    purchasesTotalHeader: 'إجمالي المشتريات',
    typeHeader: 'النوع',
    customerOrSupplierHeader: 'عميل/مورد',
    amountHeader: 'المبلغ',
    descriptionHeader: 'الوصف',
    registrationDateHeader: 'تاريخ التسجيل',
    totalSalesPaidHeader: 'المبلغ المستلم من المبيعات',
    totalPurchasesPaidHeader: 'المبلغ المدفوع للشراء',
    totalExpensesAmountHeader: 'إجمالي المصروفات',
    netCashHeader: 'النقد المتاح',
    
    // Activity Types
    saleType: 'بيع',
    purchaseType: 'شراء',
    
    // View Reports Page Buttons and Filters
    downloadPDF: 'PDF',
    printReport: 'طباعة',
    backToReports: 'العودة',
    searchPlaceholder: 'بحث...',
    allTime: 'كل الوقت',
    todayFilter: 'اليوم',
    weekFilter: 'أسبوع',
    monthFilter: 'شهر',
    yearFilter: 'سنة',
    allCustomers: 'جميع العملاء',
    allSuppliers: 'جميع الموردين',
    startDateLabel: 'تاريخ البداية',
    endDateLabel: 'تاريخ النهاية',
    noReportSelected: 'لم يتم اختيار تقرير',
    detailedInformation: 'معلومات مفصلة وكاملة',
    noDataToPrint: 'لا توجد بيانات للطباعة',
    totalData: 'الإجمالي',
    dataLabel: 'بيانات',
    totalProfitLabel: 'إجمالي الربح',
    totalAmountLabel: 'الإجمالي',
    
    // Installments Page
    installments: 'الأقساط',
    installmentsManagement: 'إدارة ديون الأقساط',
    totalInstallments: 'الإجمالي',
    activeInstallments: 'نشط',
    overdueInstallments: 'متأخر',
    totalRemaining: 'المتبقي',
    searchInstallmentsPlaceholder: 'البحث بالاسم، رقم الفاتورة...',
    allStatuses: 'جميع الحالات',
    activeStatus: 'نشط',
    completedStatus: 'مكتمل',
    overdueStatus: 'متأخر',
    cancelledStatus: 'ملغي',
    noInstallmentsFound: 'لم يتم العثور على أقساط',
    invoiceLabel: 'فاتورة',
    totalAmountLabel: 'الإجمالي',
    downPayment: 'المقدم',
    monthlyPayment: 'الدفعة الشهرية',
    numberOfMonths: 'عدد الأشهر',
    monthsLabel: 'شهر',
    startDateLabel: 'تاريخ البداية',
    endDateLabel: 'تاريخ النهاية',
    remainingLabel: 'المتبقي',
    daysRemaining: 'أيام متبقية',
    daysOverdue: 'أيام متأخرة',
    paidLabel: 'المدفوع',
    viewDetails: 'عرض',
    makePayment: 'دفع',
    installmentPayment: 'دفع القسط',
    installmentCurrency: 'عملة القسط',
    paymentCurrency: 'عملة الدفع',
    paymentAmountLabel: 'مبلغ الدفع',
    monthNumber: 'رقم الشهر',
    notesLabel: 'ملاحظات',
    cancel: 'إلغاء',
    installmentDetails: 'تفاصيل القسط',
    warrantyLabel: 'ضمان',
    hasWarranty: 'يوجد ضمان',
    paymentHistory: 'سجل المدفوعات',
    noPaymentsRecorded: 'لم يتم تسجيل أي دفعات',
    monthLabel: 'شهر',
    pleaseEnterPaymentAmount: 'الرجاء إدخال مبلغ الدفع',
    paymentAmountExceeds: 'مبلغ الدفع أكبر من القسط',
    paymentRecordedSuccessfully: 'تم تسجيل الدفعة بنجاح ✓',
    errorOccurredInPayment: 'حدث خطأ في الدفعة',
    paymentIn: 'الدفع بـ',
    convertTo: 'تحويل إلى',
    dollarRateLabel: 'سعر الدولار',
    extraLabel: 'إضافي',
  },
  
  'en-gb': {
    // Common
    appName: 'Jihan Cashier System',
    appVersion: 'Jihan Cashier System v1.0',
    loading: 'Please wait...',
    daysRemaining: 'days remaining',
    expiresToday: 'expires today',
    oneWeek: '1 Week',
    oneMonth: '1 Month',
    threeMonths: '3 Months',
    sixMonths: '6 Months',
    oneYear: '1 Year',
    lifetime: 'Lifetime',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    filter: 'Filter',
    confirm: 'Are you sure?',
    yes: 'Yes',
    no: 'No',
    
    // Login
    login: 'Login',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    logout: 'Logout',
    loginError: 'Incorrect username or password',
    managerAccount: 'Manager',
    cashierAccount: 'Cashier',
    usersInfo: 'User Credentials:',
    selectUserPlaceholder: 'Select user...',
    adminOrCashier: 'admin or cashier',
    resetDatabase: 'Reset Database',
    resetDatabaseConfirm: 'Are you sure you want to delete and recreate the database?\n\nAll data will be deleted!',
    resetDatabaseSuccess: 'Database reset successfully!\n\nUser: admin / admin123',
    resetDatabaseError: 'Error resetting database',
    systemError: 'An error occurred. Please restart the system',
    resetting: 'Resetting...',
    onlyIfLoginIssue: 'Only if you have login issues',
    
    // License
    licenseKey: 'Licence Key',
    activate: 'Activate',
    activating: 'Please wait...',
    activated: 'Activated ✓',
    quickActivation: 'Quick Activation - 1 Week Trial',
    licenseError: 'Invalid or already used licence key',
    licenseInvalid: 'Invalid key or not in this app version — install the new build',
    licenseAlreadyUsed: 'This key was already used. To repair, use only the Activation Helper app',
    licenseRepair: 'Repair licence',
    licenseRepairDone: 'Used keys cleared. Enter your key again now.',
    licenseRepairHint: 'If activation fails, click this then activate again',
    activationError: 'An error occurred. Please try again.',
    activationSuccess: 'Activation successful! ...',
    quickTrialUsedError: 'Quick activation has already been used on this computer. Please use a genuine key.',
    quickTrialFailedError: 'Quick activation failed. This key may have been used before.',
    quickTrialDescription: '⚡ Automatic activation for one week - one time only on this computer',
    quickTrialAlreadyUsed: '💡 Quick activation has already been used. Please use a genuine key.',
    oneTimeOnly: '(one time only)',
    features: 'Features:',
    featureFastSales: 'Fast and easy sales',
    featureInventory: 'Product and customer management',
    featureReports: 'Detailed sales and profit reports',
    featureDebtSystem: 'Debt and payment system',
    featureOfflineDatabase: 'Offline and secure database',
    contactForLicense: 'To get an activation key',
    contactPhone: 'Contact: 07710500202 - 07511935352',
    or: 'or',
    
    // Header
    notifications: 'Notifications',
    calculator: 'Calculator',
    manager: 'Manager',
    cashier: 'Cashier',
    logoutConfirm: 'Are you sure you want to logout?',
    
    // Navigation
    dashboard: 'Dashboard',
    pos: 'Sales',
    addProduct: 'Add Product',
    products: 'Products',
    customers: 'Customers',
    purchases: 'Purchases',
    suppliers: 'Suppliers',
    expenses: 'Expenses',
    safe: 'Safe',
    cashRegisters: 'Cash Registers',
    crashedItems: 'Crashed Invoices',
    returns: 'Returns',
    reports: 'Reports',
    income: 'Income',
    settings: 'Settings',
    
    // Settings
    generalSettings: 'General Settings',
    userManagement: 'User Management',
    categoriesAndUnits: 'Categories & Units',
    barcodeGenerator: 'Barcode',
    backup: 'Backup',
    shopInfo: 'Shop Information',
    shopName: 'Shop Name',
    shopPhone: 'Phone Number',
    shopAddress: 'Address',
    printerSettings: 'Printer Settings',
    printerType: 'Printer Type',
    enableCashDrawer: 'Enable Cash Drawer',
    enableCashDrawerDesc: 'When a cash sale is completed, open the cash drawer via the thermal printer',
    testCashDrawer: 'Test Cash Drawer',
    cashDrawerOpened: 'Cash drawer open command sent',
    cashDrawerOpenFailed: 'Could not open cash drawer — check the printer',
    cashDrawerRequiresPrinter: 'Cash drawer must be connected to the thermal printer via RJ11',
    cashDrawerPrinter: 'Cash drawer printer (Windows)',
    selectCashDrawerPrinter: '— Select printer —',
    cashDrawerWindowsHint: 'For Xprinter XP-365B: select the Windows printer (e.g. Xprinter XP-365B), not raw USB',
    receiptPrinter: 'Receipt printer (Windows)',
    quickPrintSettingsHint: 'Choose paper size and printer — the POS “Sale + Print” button sells instantly and prints in the background',
    saleAndPrint: 'Sale + Print',
    salePrintedToast: 'Sale complete — receipt printing in background',
    appearance: 'Appearance',
    appearanceDescription: 'Choose how the sales page looks',
    posDisplayMode: 'POS display mode',
    posModeClassic: 'Classic',
    posModeClassicDesc: 'Current layout — search and barcode',
    posModeImages: 'Products with images',
    posModeImagesDesc: 'Image grid of products — like standard world POS',
    printSettings: 'Print Settings',
    printSettingsDescription: 'Print settings for receipts and products',
    thermal: 'Thermal',
    paperSize: 'Paper Size',
    autoPrint: 'Auto Print',
    autoPrintDesc: 'Print without asking',
    copies: 'Number of Copies',
    displayOptions: 'Display Options',
    showLogo: 'Show Logo',
    showBarcode: 'Show Barcode',
    showCost: 'Show Cost',
    showProfit: 'Show Profit',
    thermalFontSize: 'Thermal Font Size',
    a4FontSize: 'A4 Font Size',
    medium: 'Medium',
    large: 'Large',
    customText: 'Custom Text',
    headerTextPlaceholder: 'Welcome to our store...',
    footerTextPlaceholder: 'Thank you for your visit...',
    currentSettings: 'Current Settings',
    enabled: 'Enabled',
    disabled: 'Disabled',
    reset: 'Reset',
    confirmReset: 'Are you sure you want to reset to default settings?',
    saving: 'Saving...',
    saved: 'Saved',
    standard: 'Standard',
    autoPrinting: 'Auto Printing...',
    selectPrinter: 'Select Printer',
    printerSelectNote: 'Enter the printer name as it appears in your system (e.g., "Xprinter XP-80C" or "Microsoft Print to PDF")',
    printerName: 'Printer Name',
    printerNamePlaceholder: 'Enter printer name...',
    printerNameHint: 'The name must exactly match what appears in your system settings',
    howToFindPrinter: 'To find printer name: Go to Settings → Devices → Printers & scanners in Windows',
    selectedPrinter: 'Selected Printer',
    printerList: 'Printer list (drivers)',
    refreshList: 'Refresh list',
    selectFromList: 'Select from list',
    selectPrinterOption: 'Select printer',
    printerNameManual: 'Printer name (manual)',
    printerListNotAvailable: 'Printer list is only available in the app (Electron)',
    noPrintersFound: 'No printers found',
    printerSet: 'Printer set: ',
    openDesktopAppForList: 'Open the desktop app (Electron) to see the list',
    windowsPrintDialog: 'Windows — as when you print',
    windowsPrintDialogDesc: 'Open the Windows print dialog and choose your printer; if you set that printer as default in Windows, click «Use Windows default printer».',
    openWindowsPrintDialog: 'Open Windows print dialog',
    useWindowsDefaultPrinter: 'Use Windows default printer',
    default: 'Default',
    otherSettings: 'Other Settings',
    currency: 'Currency',
    primaryCurrency: 'Primary Currency',
    selectPrimaryCurrency: 'Select Primary Currency',
    dinar: 'Dinar',
    dollar: 'Dollar',
    currencyAffectsAll: 'Primary currency will affect all prices and reports in the system',
    currencyIndependentOfLanguage: 'Currency is independent of language - you can work with dollars and keep the language Kurdish/Arabic',
    lowStockThreshold: 'Low Stock Alert (Quantity)',
    dollarSettings: 'Dollar Settings',
    enableDollar: 'Enable Dollar',
    dollarRate: 'Dollar Rate in Dinar',
    saveChanges: 'Save Changes',
    dangerZone: 'Danger Zone',
    deactivateLicense: 'Deactivate Licence',
    systemInfo: 'System Information',
    systemVersion: 'System Version',
    licenseStatus: 'Licence Status',
    totalProducts: 'Total Products',
    totalCustomers: 'Total Customers',
    purchaseValue: 'Purchase Value',
    sellingValue: 'Selling Value',
    expectedProfit: 'Expected Profit',
    stockAlert: 'Stock Alert',
    
    // Dashboard mode (settings)
    dashboardModeTitle: 'Dashboard Layout',
    dashboardModeDescription: 'Choose how the main dashboard is displayed',
    dashboardModeNavbar: 'Sidebar',
    dashboardModeNavbarDescription: 'Side navigation menu',
    dashboardModeGrid: 'Grid Dashboard',
    dashboardModeGridDescription: 'Grid with icons and titles',
    dashboardModeNote: 'Changes will appear after saving and reloading the page',
    selected: 'Selected',

    // Dark mode (settings)
    darkMode: 'Dark Mode',
    darkModeDescription: 'Enable dark mode to display a darker interface for the system',

    // Network / LAN sync (settings)
    networkSettingsTitle: 'Network Connection (LAN/Router)',
    networkSettingsDescription: 'Connect two computers via cable or router to share data',
    connectionStatusLabel: 'Connection status:',
    connectionStatusConnected: 'Connected',
    connectionStatusDisconnected: 'Disconnected',
    networkModeLabel: 'Mode:',
    networkModeOff: 'Disabled',
    networkModeServer: 'Server (Host)',
    networkModeClient: 'Client',
    serverIPLabel: 'Server IP Address:',
    serverIPPlaceholder: '192.168.1.100',
    serverIPHelp: 'IP address of the server computer (e.g. 192.168.1.100)',
    thisComputerIPLabel: 'This computer IP Address:',
    thisComputerIPHelp: 'Use this IP on the other computers to connect',
    portLabel: 'Port:',
    autoSyncLabel: 'Auto sync (every 5 seconds)',
    autoSyncDescription: 'Automatically sync data between server and clients',
    connectButton: 'Connect',
    disconnectButton: 'Disconnect',
    sendDataToClients: 'Send data to clients',
    disableNetwork: 'Disable network',
    networkInstructionsTitle: 'Instructions:',
    networkInstruction1: 'Set one computer as Server (Host)',
    networkInstruction2: 'Set the other computers as Clients',
    networkInstruction3: 'Enter the Server IP address on the client computers',
    networkInstruction4: 'Click the \"Connect\" button',
    networkInstruction5: 'Data will be synced automatically',
    
    // P2P Sync Settings
    p2pSync: 'P2P Sync',
    p2pDescription: 'Synchronize data between multiple computers on the same network',
    localIp: 'This Computer IP',
    connectionStatus: 'Connection Status',
    role: 'Role',
    selectRole: 'Select This Computer Role',
    roleOff: 'Off',
    roleOffDesc: 'P2P Sync is disabled',
    rolePrimary: 'Primary Computer',
    rolePrimaryDesc: 'This computer becomes Server and data is sourced from here',
    roleSecondary: 'Secondary Computer',
    roleSecondaryDesc: 'Connect to primary computer to receive data',
    primaryComputer: 'Primary Computer (Server)',
    secondaryComputer: 'Secondary Computer (Client)',
    serverInfo: 'Server Info',
    connectedDevices: 'Connected Devices',
    autoDiscovery: 'Auto-Discovery for Primary Computer',
    manualConnect: 'Manual Connection',
    foundDevices: 'Discovered Devices:',
    syncStatistics: 'Sync Statistics',
    changesSent: 'Changes Sent',
    changesReceived: 'Changes Received',
    lastSync: 'Last Sync',
    
    // Language Settings
    language: 'Language',
    selectLanguage: 'Select Language',
    kurdishSorani: 'Kurdish Sorani',
    kurdishBadini: 'Kurdish Badini',
    iraqiArabic: 'Iraqi Arabic',
    britishEnglish: 'British English',
    
    // Categories
    categories: 'Categories',
    addCategory: 'Add Category',
    categoryAdded: 'Category added successfully',
    categoryExists: 'This category already exists',
    categoryAdded: 'Category added successfully',
    categoryExists: 'This category already exists',
    deleteCategory: 'Delete Category',
    units: 'Units',
    addUnit: 'Add Unit',
    deleteUnit: 'Delete Unit',
    
    // Users
    users: 'Users',
    user: 'User',
    employee: 'Employee',
    addUser: 'Add User',
    editUser: 'Edit User',
    deleteUser: 'Delete User',
    fullName: 'Full Name',
    role: 'Role',
    phone: 'Phone',
    email: 'Email',
    active: 'Active',
    inactive: 'Inactive',
    permissions: 'Permissions',
    lastLogin: 'Last Login',
    
    // Products
    productName: 'Product Name',
    barcode: 'Barcode',
    category: 'Category',
    unit: 'Unit',
    priceType: 'Price Type',
    buyPrice: 'Buy Price',
    sellPrice: 'Sell Price',
    stock: 'Stock',
    minStock: 'Minimum Stock',
    addNewProduct: 'Add New Product',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete Product',
    
    // Warranty
    warrantyManagement: 'Warranty Management',
    warranties: 'Warranties',
    warrantyActive: 'Active Warranty',
    warrantyExpired: 'Expired Warranty',
    warrantyStatus: 'Warranty Status',
    warrantyDetails: 'Warranty Details',
    warrantyDuration: 'Warranty Duration',
    warrantyEndDate: 'Warranty End Date',
    warrantyExpiredOn: 'Warranty expired on',
    warrantyGivenToCustomer: 'Warranty given to customer',
    noWarranty: 'No Warranty',
    noWarrantySet: 'No warranty set',
    purchaseWarranty: 'Purchase Warranty',
    saleWarranty: 'Sale Warranty',
    months: 'months',
    expiryDate: 'Expiry Date',
    expired: 'Expired',
    expiredProducts: 'Expired Products',
    daysExpired: 'Days Expired',
    inventoryAdjustment: 'Inventory Adjustment',
    dollarRateChange: 'Dollar Rate Change',
    noExpiredProducts: 'No Expired Products',
    viewDetails: 'View Details',
    returnToSupplier: 'Return to Supplier',
    sellAtDiscount: 'Sell at Discount',
    discountPrice: 'Discount Price',
    discountAmount: 'Discount Amount',
    originalPrice: 'Original Price',
    willBeRecordedAsExpense: 'Will be recorded as expense',
    discountNote: 'Note: The discount amount will be recorded as an expense',
    perUnit: 'Per Unit',
    processing: 'Processing...',
    selectPurchase: 'Select Purchase Invoice',
    mostRecentPurchase: 'Most Recent Purchase',
    purchaseInfo: 'If a purchase is selected, the purchase price from that invoice will be used',
    unitCost: 'Unit Cost',
    notAvailable: 'Not Available',
    available: 'Available',
    days: 'Days',
    discard: 'Discard',
    discardWarning: 'Warning: Product will be removed from inventory and recorded as expense',
    totalLoss: 'Total Loss',
    discardReasonPlaceholder: 'Reason for discard...',
    cashAmount: 'Cash Amount',
    exchange: 'Exchange',
    exchangeNote: 'Note: Product will be exchanged for the same quantity with new expiry date',
    newExpiryDate: 'New Expiry Date',
    currentExpiryDate: 'Current Expiry Date',
    currentQuantity: 'Current Quantity',
    notes: 'Notes',
    exchangeNotesPlaceholder: 'Notes about exchange...',
    exchangeDateNote: 'New date for exchanged product',
    exchangeQuantityNote: 'Quantity stays the same, only expiry date changes',
    exchangeRevertNote: 'Note: Only the record was deleted. You need to manually restore the old date',
    
    // Customers
    customerName: 'Customer Name',
    customerId: 'Customer ID',
    customerPhone: 'Phone Number',
    customerAddress: 'Address',
    balance: 'Balance',
    debt: 'Debt',
    addNewCustomer: 'Add New Customer',
    
    // Sales
    sale: 'Sale',
    sales: 'Sales',
    noSales: 'No Sales',
    total: 'Total',
    paid: 'Paid',
    remaining: 'Remaining',
    discount: 'Discount',
    change: 'Change',
    payment: 'Payment',
    cash: 'Cash',
    card: 'Card',
    package: 'Package',
    paymentMethod: 'Payment Method',
    print: 'Print',
    
    // Reports
    dailyReport: 'Daily Report',
    monthlyReport: 'Monthly Report',
    profit: 'Profit',
    revenue: 'Revenue',
    cost: 'Cost',
    
    // Dates
    today: 'Today',
    yesterday: 'Yesterday',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    lastYear: 'Last Year',
    date: 'Date',
    from: 'From',
    to: 'To',
    
    // Dashboard
    welcome: 'Welcome!',
    dashboardOverview: 'System Overview',
    todayRevenue: "Today's Revenue",
    todayProfit: "Today's Profit",
    netProfit: 'Net Profit',
    todayExpenses: "Today's Expenses",
    totalRevenue: 'Total Revenue',
    totalProfit: 'Total Profit',
    totalExpenses: 'Total Expenses',
    cashInHand: 'Cash in Hand',
    lowStockAlert: 'Low Stock Alert',
    recentSales: 'Recent Sales',
    invoice: 'Invoice',
    invoiceNumber: 'Invoice Number',
    newInvoice: 'New Invoice',
    thankYouMessage: 'Thank you for your purchase!',
    receipt: 'Receipt',
    receiptNumber: 'Receipt Number',
    paperSize: 'Paper Size',
    visitAgain: 'We look forward to seeing you again',
    showRemainingOnReceipt: 'Show Remaining Amount on Receipt',
    showCustomerName: 'Show Customer Name',
    errorReturnNote: 'Errors and omissions excepted',
    items: 'Items',
    amount: 'Amount',
    view: 'View',
    updateDollarRate: 'Update Dollar Rate',
    currentRate: 'Current Rate',
    newRate: 'New Rate',
    update: 'Update',
    revenueMinusExpenses: 'Revenue - Expenses',
    selectSections: 'Select Sections',
    dollarRateTitle: 'Dollar Rate',
    dollarRateInDinar: 'Rate in Dinar',
    rateInDollar: 'Rate in Dollar:',
    activities: 'Activities',
    dollarRateNote: 'The dollar rate is used to convert prices from Dinar to Dollar.',
    dollarRateMustBeGreater: 'Dollar rate must be greater than zero',
    dollarRateTooLarge: 'Dollar rate is too large',
    dollarRateUpdatedSuccess: 'Dollar rate updated successfully ✓',
    dollarRateUpdateError: 'An error occurred while updating dollar rate',
    totalLabel: 'Total',
    expensesLabel: 'Expenses',
    totalExpensesLabel: 'Total Expenses',
    productsLabel: 'Products',
    totalProductsLabel: 'Total Products',
    salesLabel: 'Sales',
    returnsLabel: 'Returns',
    last10: 'Last 10',
    noSalesFound: 'No sales found',
    noReturnsFound: 'No returns found',
    quickStats: 'Quick Stats',
    productItem: 'item',
    
    // Purchase History
    purchaseHistory: 'Purchase Statistics',
    viewPurchaseHistory: 'View Purchase History',
    noPurchaseHistory: 'No Purchase History',
    productNotPurchasedYet: 'Product Not Purchased Yet',
    totalPurchases: 'Total Purchases',
    totalQuantity: 'Total Quantity',
    lastPurchasePrice: 'Last Purchase Price',
    oldPurchaseCost: 'Previous Cost',
    purchaseCostDiff: 'Purchase Diff',
    perUnit: 'Per Unit',
    totalSpent: 'Total Purchase',
    times: 'Times',
    noPurchasesFound: 'No Purchases Found',
    tryDifferentFilters: 'Try Different Filters',
    allSuppliers: 'All Suppliers',
    allProducts: 'All Products',
    dateFrom: 'Date From',
    dateTo: 'Date To',
    allCurrencies: 'All Currencies',
    allMethods: 'All Methods',
    searchInvoiceOrNotes: 'Invoice Number, Notes...',
    purchasesList: 'Purchases List',
    filters: 'Filters',
    clearFilters: 'Clear Filters',
    allPurchases: 'All Purchases',
    totalItems: 'Total Items',
    totalCost: 'Total Cost',
    notSpecified: 'Not Specified',
    unknown: 'Unknown',
    
    cashBalance: 'Cash Balance',
    cashAvailable: 'Cash Available',
    fromCustomers: 'From Customers',
    dollar: 'Dollar',
    dinar: 'Dinar',
    alerts: 'Alerts',
    lowStockProductsAlert: 'Products Running Low',
    quantityLow: 'Quantity Low',
    customerDebt: 'Customer Debt',
    allGood: 'All Good!',
    noIssuesInSystem: 'No Issues in the System',
    noSalesYet: 'No Sales Yet',
    productsLowQuantity: 'Products with Low Quantity',
    
    // POS
    scanBarcode: 'Scan Barcode',
    quantity: 'Quantity',
    quantityInStock: 'Quantity in stock',
    price: 'Price',
    subtotal: 'Subtotal',
    totalAmount: 'Total Amount',
    selectCustomer: 'Select Customer',
    noCustomer: 'No Customer',
    addDiscount: 'Discount',
    paymentType: 'Payment Type',
    completeSale: 'Complete Sale',
    clearCart: 'Clear Cart',
    saveCart: 'Save Cart',
    savedCarts: 'Saved Carts',
    loadCart: 'Load Cart',
    cartEmpty: 'Cart is Empty',
    invoices: 'Invoices',
    invoicesMenu: 'Invoices',
    orders: 'Orders',
    load: 'Load',
    addItems: 'Add Items',
    newTab: 'New Tab',
    paidAmount: 'Paid Amount',
    session: 'Session',
    tab: 'Tab',
    cannotCloseLastTab: 'Cannot close the last tab',
    tabHasItems: 'This tab has items. Are you sure to close?',
    sureToCloseTab: 'Are you sure to close?',
    confirmClearCart: 'Are you sure to clear the cart?',
    cartSaved: 'Cart saved!',
    savingCart: 'Saving cart',
    restoringCart: 'Restoring cart',
    cartSavedMessage: 'Saved',
    confirmLoadCart: 'Clear current cart and load this one?',
    cartNotEmpty: 'Cart is not empty',
    wantToSaveOrDiscard: 'Do you want to save the receipt or delete it?',
    saveCartPark: 'Save (Park)',
    discardAndGo: 'Discard and Go',
    goBack: 'Go Back',
    selectCustomerForDebt: 'Please select a customer for debt sale',
    noProductsFound: 'No products found',
    allCategories: 'All Categories',
    seller: 'Seller',
    selectSeller: 'Select Seller',
    generalSale: 'General Sale',
    soldBy: 'Sold By',
    retail: 'Retail',
    wholesale: 'Wholesale',
    special: 'Special',
    retailPrice: 'Retail Price',
    wholesalePrice: 'Wholesale Price',
    specialPrice: 'Special Price',
    piece: 'Piece',
    carton: 'Carton',
    box: 'Box',
    baseUnit: 'Base Unit',
    addProductsToStart: 'Add products to start',
    updateButton: 'Update',
    addButton: 'Add',
    drinks: 'Drinks',
    bread: 'Bread',
    food: 'Food',
    cleaningSupplies: 'Cleaning Supplies',
    homeGoods: 'Home Goods',
    in: 'in',
    barcodeRequired: 'At least one barcode is required',
    barcodeAlreadyExists: 'This barcode is already in use',
    productNameAlreadyExists: 'A product with this name already exists. Please choose a different name.',
    productAddedSuccess: 'Product added successfully ✓',
    errorOccurred: 'An error occurred',
    resetForm: 'Reset Form',
    basicInfo: 'Basic Information',
    selectOption: 'Select',
    company: 'Company',
    onlyUnit: 'Unit Only',
    unitPlusPackage: 'Unit + Package',
    unitPlusCarton: 'Unit + Carton',
    allUnits: 'All (Unit + Package + Carton)',
    purchasePrice: 'Purchase Price',
    generate: 'Generate',
    prices: 'Prices',
    productImage: 'Product Image',
    notes: 'Notes',
    notesPlaceholder: 'Notes for product...',
    saveProduct: 'Save Product',
    productManagement: 'Warehouse Section',
    salePrice: 'Sale Price',
    editProduct: 'Edit Product',
    addNewProduct: 'Add New Product',
    selectCategory: 'Select Category',
    automatic: 'Automatic',
    fromSettings: 'From Settings',
    confirmDeleteProduct: 'Are you sure you want to delete this product?',
    imageLabel: 'Image',
    cancelButton: 'Cancel',
    customerManagement: 'Customer Management',
    
    // Offers
    createOffer: 'Create Offer',
    offerName: 'Offer Name',
    offerDescription: 'Offer Description',
    offerStartDate: 'Start Date',
    offerEndDate: 'End Date',
    offerPrice: 'Offer Price',
    offerDiscount: 'Discount',
    offerDiscountPercent: 'Discount (%)',
    addProductToOffer: 'Add Product to Offer',
    offerProducts: 'Offer Products',
    originalPrice: 'Original Price',
    offerManagement: 'Offer Management',
    saveOffer: 'Save Offer',
    offerUpdated: 'Offer updated successfully',
    cancelOffer: 'Cancel Offer',
    noProductsInOffer: 'No products in offer',
    selectProductsForOffer: 'Select Products for Offer',
    noOffers: 'No offers',
    activate: 'Activate',
    deactivate: 'Deactivate',
    totalDiscount: 'Total Discount',
    duplicateOffer: 'Duplicate Offer',
    copyOffer: 'Copy',
    printOffer: 'Print Offer',
    exportOffer: 'Export Offer',
    importOffer: 'Import Offer',
    offerCopied: 'Offer copied successfully',
    offerScope: 'Offer Scope',
    exampleOffer: 'Example',
    specificOffer: 'Specific',
    minimumQuantity: 'Minimum Quantity',
    minQuantityPerCustomer: 'Minimum Quantity Per Customer',
    minQuantityPerCustomerDesc: 'Minimum purchase quantity per customer (if 0, no limit)',
    maxQuantityPerCustomer: 'Maximum Quantity Per Customer',
    maxQuantityPerCustomerDesc: 'Maximum purchase quantity per customer (if 0, no limit)',
    offerStatistics: 'Offer Statistics',
    offerType: 'Offer Type',
    discountOffer: 'Discount',
    specialPriceOffer: 'Special Price',
    buyXGetYOffer: 'Buy X Get Y (Same Product)',
    buyXGetYDifferentOffer: 'Buy X from Product A, Get Y from Product B',
    freeGiftOffer: 'Free Gift',
    percentageDiscount: 'Percentage Discount',
    fixedDiscount: 'Fixed Discount',
    buyQuantity: 'Buy',
    getQuantity: 'Get',
    freeProduct: 'Free Product',
    buyProduct: 'Buy Product',
    getProduct: 'Get Product',
    exampleOffer: 'Example',
    specificOffer: 'Specific',
    maxQuantityPerCustomer: 'Max Quantity Per Customer',
    maxQuantityPerCustomerDesc: 'If 0, no limit',
    
    addNewCustomer: 'Add New Customer',
    editCustomer: 'Edit Customer',
    confirmDeleteCustomer: 'Are you sure you want to delete this customer?',
    phoneNumber: 'Phone Number',
    customerNamePlaceholder: 'Ahmad Mahmoud',
    phoneNumberPlaceholder: '07501234567',
    updateButton: 'Update',
    addButton: 'Add',
    
    // Suppliers
    supplierManagement: 'Supplier Management',
    supplierInfo: 'Information and list of all suppliers',
    newSupplier: 'New Supplier',
    totalSuppliers: 'Total Suppliers',
    totalDebt: 'Total Debt',
    debtors: 'Debtors',
    searchSupplier: 'Search by name or phone...',
    noSuppliers: 'No suppliers recorded',
    editSupplier: 'Edit Supplier',
    confirmDeleteSupplier: 'Are you sure you want to delete this supplier?',
    supplierName: 'Supplier Name',
    address: 'Address',
    email: 'Email',
    emailOptional: 'Email (Optional)',
    notesOptional: 'Notes (Optional)',
    namePlaceholder: 'Name...',
    addressPlaceholder: 'Full address...',
    notesPlaceholder: 'Your notes...',
    
    // Purchases
    purchaseManagement: 'Purchase Management',
    purchaseDescription: 'Purchase from suppliers and add products to inventory',
    totalPurchases: 'Total Purchases',
    totalExpense: 'Total Expense',
    supplierDebt: 'Supplier Debt',
    newPurchase: 'New Purchase',
    purchaseDescription2: 'Add products and complete the purchase',
    selectSupplier: 'Select Supplier',
    selectSupplierForDebt: 'Please select a supplier for debt purchase',
    selectProduct: 'Select Product',
    productQuantity: 'Product Quantity',
    items: 'Items',
    noItemsAdded: 'No items added',
    grandTotal: 'Grand Total',
    paymentMethod: 'Payment Method',
    amountPaid: 'Amount Paid',
    remaining: 'Remaining',
    completePurchase: 'Complete Purchase',
    purchaseList: 'Purchase List',
    noPurchases: 'No purchases recorded',
    details: 'Details',
    purchaseDetails: 'Purchase Details',
    amountPaid: 'Amount Paid',
    fillAllFields: 'Please fill all fields',
    addAtLeastOneProduct: 'Please add at least one product',
    purchaseRecorded: 'Purchase recorded successfully',
    perUnit: 'Per unit',
    lastPrice: 'Last Price',
    product: 'Product',
    optional: 'Optional',
    
    // Safe
    safeManagement: 'Safe Management',
    cashTransactions: 'Cash Transactions',
    safeBalance: 'Safe Balance',
    totalIn: 'Total In',
    totalOut: 'Total Out',
    newTransaction: 'New Transaction',
    transactionList: 'Transaction List',
    noTransactions: 'No transactions recorded',
    transactionType: 'Transaction Type',
    moneyIn: 'Money In',
    moneyOut: 'Money Out',
    transactionDetails: 'Transaction Details',
    reference: 'Reference',
    referenceOptional: 'Reference Number (Optional)',
    confirmDeleteTransaction: 'Are you sure you want to delete this transaction?',
    allTransactions: 'All',
    moneyAmount: 'Amount',
    type: 'Type',
    dateLabel: 'Date',
    
    // Expenses
    expenseManagement: 'Expense Management',
    expenseDescription: 'Record all store expenses',
    newExpense: 'New Expense',
    totalExpenses: 'Total Expenses',
    expenseList: 'Expense List',
    noExpenses: 'No expenses recorded',
    editExpense: 'Edit Expense',
    expenseType: 'Expense Type',
    expenseDetails: 'Expense Details',
    confirmDeleteExpense: 'Are you sure you want to delete this expense?',
    allTypes: 'All Types',
    
    // Categories
    sales: 'Sales',
    purchases: 'Purchases',
    rent: 'Rent',
    salary: 'Salary',
    salaryAndRent: 'Salary and Rent',
    salaryAndRentManagement: 'Employee Salary and Shop Rent Management',
    employeeSalaries: 'Employee Salaries',
    shopRent: 'Shop Rent',
    addSalary: 'Add Salary',
    editSalary: 'Edit Salary',
    salaryType: 'Salary Type',
    salaryAmount: 'Salary Amount',
    daily: 'Daily',
    monthly: 'Monthly',
    salaryList: 'Salary List',
    noSalaries: 'No salaries',
    paymentDue: 'Payment Due',
    daysRemaining: 'days remaining',
    totalPaid: 'Total Paid',
    lastPayment: 'Last Payment',
    nextPayment: 'Next Payment',
    noPayments: 'No payments made',
    paymentHistory: 'Payment History',
    paySalary: 'Pay',
    payRent: 'Pay Rent',
    recordPayment: 'Record Payment',
    selectEmployee: 'Select Employee',
    addRent: 'Add Rent',
    updateRent: 'Update Rent',
    rentAmount: 'Rent Amount',
    paymentDate: 'Payment Date',
    nextPaymentDate: 'Next Payment',
    nextPaymentDateNote: 'Note: Next payment date will be automatically set 30 days later',
    noRentInfo: 'No rent information',
    paymentAlertTitle: 'Payment Alert',
    salaryPaymentDue: 'Time to pay salary for',
    salaryPaymentNear: 'Time to pay salary for',
    rentPaymentDue: 'Time to pay shop rent!',
    rentPaymentNear: 'Time to pay shop rent is near',
    employeeNotSelected: 'Employee not selected',
    errorOccurred: 'An error occurred',
    confirmDeleteSalary: 'Are you sure you want to delete this salary?',
    loanGiven: 'Loan Given',
    loanReceived: 'Loan Received',
    gift: 'Gift',
    profit: 'Profit',
    other: 'Other',
    electricity: 'Electricity',
    water: 'Water',
    delivery: 'Delivery',
    repair: 'Repair',
    cleaning: 'Cleaning',
    internet: 'Internet',
    telephone: 'Telephone',
    storeSupplies: 'Store Supplies',
    
    // Reports
    profitLossReport: 'Profit & Loss Report',
    todayReport: 'Today\'s Report',
    revenue: 'Revenue (Sales)',
    returnedGoods: 'Returned Goods',
    netProfit: 'Net Profit',
    grandTotal: 'Grand Total',
    expenseBreakdown: 'Expense Breakdown',
    todayReturns: 'Today\'s Returns',
    returnId: 'Return',
    saleId: 'Invoice',
    noReturnsToday: 'No returns today',
    nearOutOfStock: 'Near Out of Stock',
    allGoodsOk: 'All goods are fine',
    code: 'Code',
    totalSales: 'Total Sales',
    totalProfit: 'Total Profit',
    totalProducts: 'Total Products',
    totalCustomers: 'Total Customers',
    invoiceList: 'Invoice List',
    searchInvoice: 'Search by invoice number or customer...',
    all: 'All',
    week: 'Week',
    month: 'Month',
    noInvoicesFound: 'No invoices found',
    returnFromCustomer: 'Return from Customer',
    returnToSupplier: 'Return to Supplier',
    customerHistory: 'Customer History',
    supplierHistory: 'Supplier History',
    searchForInvoiceOrCustomer: 'Search for invoice or customer',
    selectInvoice: 'Select Invoice',
    selectItems: 'Select Items',
    returnQuantity: 'Return Total:',
    returnReason: 'Return Reason',
    writeReturnReason: 'Write return reason...',
    selectedItems: 'Selected Items:',
    totalReturn: 'Return Total:',
    processReturn: 'Process Return',
    purchasesList: 'Purchases List',
    searchForInvoiceOrSupplier: 'Search by invoice number or supplier...',
    noPurchasesFound: 'No purchases found',
    returnHistoryCustomer: 'Customer Return History',
    returnHistorySupplier: 'Supplier Return History',
    supplierReturnTo: 'Return Goods to:',
    returnCount: 'return',
    selectItems: 'Select Items',
    returnQuantity: 'Return Total:',
    returnReason: 'Return Reason',
    writeReturnReason: 'Write return reason...',
    selectedItems: 'Selected Items:',
    totalReturn: 'Return Total:',
    processReturn: 'Process Return',
    purchasesList: 'Purchases List',
    searchForInvoiceOrSupplier: 'Search by invoice number or supplier...',
    noPurchasesFound: 'No purchases found',
    returnHistoryCustomer: 'Customer Return History',
    returnHistorySupplier: 'Supplier Return History',
    supplierReturnTo: 'Return Goods to:',
    returnCount: 'return',
    customerName: 'Customer Name',
    editInvoice: 'Edit Invoice',
    customerNameLabel: 'Customer Name',
    saveChanges: 'Save Changes',
    cancelChanges: 'Cancel',
    confirmDelete: 'Confirm Delete?',
    confirmDeleteMessage: 'Are you sure you want to delete invoice',
    goodsWillReturn: 'Goods will return to inventory',
    yes: 'Yes, Delete',
    no: 'No',
    unknown: 'Unknown',
    discount: 'Discount',
    dollarRate: 'Dollar Rate',
    
    // Returns
    returnGoods: 'Return Goods',
    returnManagement: 'Manage returns of sold goods',
    totalReturns: 'Total Returns',
    selectInvoiceForReturn: 'Select invoice for return',
    hasReturn: 'Has return',
    returnedAmount: 'Returned',
    clickToReturn: 'Click to return goods ←',
    invoice: 'Invoice',
    selectGoodsToReturn: 'Select goods to return',
    returnReason: 'Return Reason (Optional)',
    returnReasonPlaceholder: 'Write the reason for return...',
    selectedGoods: 'Total Selected Goods',
    returnTotal: 'Return Total',
    processReturn: 'Process Return',
    confirmReturnTitle: 'Confirm Return?',
    confirmReturnMessage: 'After the return process, goods will return to inventory and money to safe',
    totalGoods: 'Total Goods',
    waitingText: 'Please wait...',
    confirmButton: 'Confirm',
    returnHistory: 'Return History',
    returnRecorded: 'Return recorded successfully!',
    returnError: 'Error recording return!',
    history: 'History',
    noHistory: 'No history',
    deleted: 'Deleted',
    confirmRevert: 'Are you sure you want to revert? The product will be returned to inventory.',
    reverted: 'Reverted',
    revert: 'Revert',
    updated: 'Updated',
    
    // Products
    productList: 'Product List',
    productDetails: 'Product Details',
    image: 'Image',
    description: 'Description',
    supplier: 'Supplier',
    lowStock: 'Low Stock',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    actions: 'Actions',
    
    // Customers
    customer: 'Customer',
    customerList: 'Customer List',
    addCustomer: 'Add Customer',
    customerDetails: 'Customer Details',
    totalDebt: 'Total Debt',
    payDebt: 'Pay Debt',
    debtHistory: 'Debt History',
    noDebt: 'No Debt',
    
    // Sales History
    salesHistory: 'Sales History',
    saleDetails: 'Sale Details',
    paymentStatus: 'Payment Status',
    fullPaid: 'Fully Paid',
    partialPaid: 'Partially Paid',
    unpaid: 'Unpaid',
    viewAllSalesReceipts: 'View All Receipts',
    totalPaid: 'Total Paid',
    salesList: 'Sales List',
    noResultsWithFilters: 'No results found with filters',
    
    // Expenses
    expenseList: 'Expense List',
    addExpense: 'Add Expense',
    expenseType: 'Expense Type',
    expenseDate: 'Expense Date',
    expenseAmount: 'Expense Amount',
    expenseNote: 'Note',
    
    // Suppliers
    supplierList: 'Supplier List',
    addSupplier: 'Add Supplier',
    supplierAdded: 'Supplier added successfully',
    supplierName: 'Supplier Name',
    supplierPhone: 'Supplier Phone',
    supplierAddress: 'Supplier Address',
    supplierProducts: 'Supplier Products',
    
    // Purchases
    purchaseList: 'Purchase List',
    addPurchase: 'Add Purchase',
    purchaseDate: 'Purchase Date',
    purchaseAmount: 'Purchase Amount',
    purchaseItems: 'Purchase Items',
    
    // Safe
    safeBalance: 'Safe Balance',
    deposits: 'Deposits',
    withdrawals: 'Withdrawals',
    addDeposit: 'Add Deposit',
    addWithdrawal: 'Add Withdrawal',
    transactionHistory: 'Transaction History',
    deposit: 'Deposit',
    withdrawal: 'Withdrawal',
    note: 'Note',
    
    // Returns
    returnsList: 'Returns List',
    addReturn: 'Add Return',
    returnDate: 'Return Date',
    returnReason: 'Return Reason',
    returnAmount: 'Return Amount',
    refund: 'Refund',
    
    // Reports
    salesReport: 'Sales Report',
    profitReport: 'Profit Report',
    expensesReport: 'Expenses Report',
    inventoryReport: 'Inventory Report',
    customerReport: 'Customer Report',
    generateReport: 'Generate Report',
    exportReport: 'Export Report',
    printReport: 'Print Report',
    period: 'Period',
    summary: 'Summary',
    details: 'Details',
    
    // Backup
    createBackup: 'Create Backup',
    restoreBackup: 'Restore Backup',
    autoBackup: 'Auto Backup',
    backupNow: 'Backup Now',
    lastBackup: 'Last Backup',
    backupHistory: 'Backup History',
    downloadBackup: 'Download Backup',
    uploadBackup: 'Upload Backup',
    backupRestoreTitle: 'Backup & Restore Data',
    backupRestoreDesc: 'Save and restore your data to protect it',
    dbStatistics: 'Database Statistics',
    invoiceDesigner: 'Invoice Designer',
    backupFolder: 'Backup Folder',
    selectBackupFolder: 'Select Folder',
    noFolderSelected: 'No folder selected',
    autoBackupEvery24Hours: 'Automatic Backup (24 Hours)',
    autoBackupEnabled: 'Automatic backup is enabled',
    autoBackupDisabled: 'Automatic backup disabled',
    backupManual: 'Backup Data',
    backupDescription: 'Backs up all system data as a JSON file which you can save anywhere',
    whatWillBeBackedUp: 'What will be backed up:',
    allProducts: 'All products and customers',
    allSalesPurchases: 'Sales and purchases',
    suppliersExpenses: 'Suppliers and expenses',
    usersSettings: 'Users and settings',
    licensePayments: 'Licences and payments',
    backingUp: 'Backing up...',
    restoreData: 'Restore Data',
    restoreWarning: 'Warning:',
    restoreWarningDesc: 'Restoring data will delete all current data and restore the old data. Please backup your data before restoring!',
    selectBackupFile: 'Select backup file:',
    fileSize: 'Size',
    restoring: 'Restoring...',
    tips: 'Tips',
    backupDaily: 'Back up your data daily to protect it',
    saveBackupsSafely: 'Save backup files in a safe location',
    validateBeforeRestore: 'Before restoring data, make sure the file is correct',
    oldDataWillBeDeleted: 'Old data will be deleted, so be careful',
    backupSuccess: 'Data backed up successfully',
    backupError: 'An error occurred while backing up data',
    restoreSuccess: 'Data restored successfully',
    restoreError: 'An error occurred while restoring data',
    selectDataToBackup: 'Select Data to Backup',
    selectDataToRestore: 'Select Data to Restore',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    resetAllData: 'Reset All Data',
    resetAllDataDesc: 'Delete all system data (except licence)',
    confirmResetAllData: 'Are you sure you want to delete all data? This cannot be undone!',
    confirmResetAgain: 'Confirm again! All data will be deleted and cannot be recovered!',
    allDataDeleted: 'All data deleted! Page will refresh...',
    allDataWillBeDeleted: 'All data will be deleted',
    cannotBeUndone: 'This action cannot be undone',
    licenseWillBeKept: 'Licence will be kept',
    backupBeforeReset: 'Backup before Reset!',
    resetting: 'Resetting...',
    selectiveBackup: 'You can select only the data you need for backup',
    selectiveRestore: 'You can select only the data you need to restore',
    manual: 'Manual',
    
    // Barcode Generator
    barcodeGenerator: 'Barcode Generator',
    barcodeGeneratorDesc: 'Create and print barcodes for products',
    selectProducts: 'Select Products',
    barcodeType: 'Barcode Type',
    labelSize: 'Label Size',
    copies: 'Copies',
    showProductName: 'Show Product Name',
    showPrice: 'Show Price',
    print: 'Print',
    download: 'Download',
    preview: 'Preview',
    noProductsSelected: 'No products selected',
    clearSelection: 'Clear Selection',
    selectedCount: 'Selected',
    printBarcodes: 'Print Barcodes',
    searchProducts: 'Search products...',
    clearFilters: 'Clear Filters',
    showImages: 'Show Images',
    advancedFilters: 'Advanced Filters',
    priceRange: 'Price Range',
    minPrice: 'Min Price',
    maxPrice: 'Max Price',
    stockLevel: 'Stock Level',
    allStock: 'All Levels',
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    supplier: 'Supplier',
    allSuppliers: 'All Suppliers',
    date: 'Date',
    updateSuccess: 'Product updated successfully! ✓',
    productAdded: 'Product added successfully! ✓',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    customBarcode: 'Custom Barcode',
    autoGenerateActive: '🎯 Auto-generation is active - barcode will be generated automatically!',
    enterName: 'Enter name...',
    enterCode: 'Enter code...',
    optional: 'Optional',
    addToPreview: 'Add to Preview',
    clear: 'Clear',
    fillRequired: 'Please fill in the required fields!',
    hide: 'Hide',
    show: 'Show',
    
    // Messages
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Information',
    areYouSure: 'Are you sure?',
    cannotUndo: 'Cannot undo',
    operationSuccess: 'Operation successful',
    operationFailed: 'Operation failed',
    pleaseWait: 'Please wait',
    noData: 'No data',
    noResults: 'No results',
    
    // Actions
    create: 'Create',
    deleteAction: 'Delete',
    saveAction: 'Save',
    cancelAction: 'Cancel',
    backAction: 'Back',
    nextAction: 'Next',
    previousAction: 'Previous',
    submitAction: 'Submit',
    resetAction: 'Reset',
    clearAction: 'Clear',
    selectAction: 'Select',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    
    // Misc
    required: 'Required',
    optional: 'Optional',
    status: 'Status',
    enabled: 'Enabled',
    disabled: 'Disabled',
    all: 'All',
    none: 'None',
    other: 'Other',
    more: 'More',
    less: 'Less',
    showMore: 'Show More',
    showLess: 'Show Less',
    page: 'Page',
    of: 'of',
    perPage: 'per page',
    noRecords: 'No records',
    records: 'Records',
    
    // Missing properties
    cart: 'Cart',
    reportFilters: 'Report Filters',
    customDateRange: 'Custom Date Range',
    startDate: 'Start Date',
    endDate: 'End Date',
    filterByDate: 'Filter by Date',
    filterByCategory: 'Filter by Category',
    filterByCustomer: 'Filter by Customer',
    filterByProduct: 'Filter by Product',
    filterBySupplier: 'Filter by Supplier',
    filterByPaymentMethod: 'Filter by Payment Method',
    filterByAmount: 'Filter by Amount',
    filterByStatus: 'Filter by Status',
    filterByUser: 'Filter by User',
    filterByLocation: 'Filter by Location',
    filterByType: 'Filter by Type',
    filterByBrand: 'Filter by Brand',
    filterByPrice: 'Filter by Price',
    filterByQuantity: 'Filter by Quantity',
    filterByProfit: 'Filter by Profit',
    filterByLoss: 'Filter by Loss',
    filterByReturn: 'Filter by Return',
    filterByExpense: 'Filter by Expense',
    filterByIncome: 'Filter by Income',
    filterByDebt: 'Filter by Debt',
    filterByCredit: 'Filter by Credit',
    filterByCash: 'Filter by Cash',
    filterByCard: 'Filter by Card',
    
    // Activities Page
    salesAndPurchases: 'Sales and Purchases',
    employeeMonitoring: 'Employee Monitoring',
    activitiesTotalSales: 'Total Sales',
    activitiesTotalPurchases: 'Total Purchases',
    activitiesTotalPaid: 'Total Paid',
    activitiesTotalDebt: 'Total Debt',
    activitiesSearchPlaceholder: 'Search by ID, name, product...',
    activitiesPeriod: 'Period',
    activitiesStartDate: 'Start Date',
    activitiesEndDate: 'End Date',
    activitiesSelectDate: 'Select Date',
    activitiesClearFilters: 'Clear',
    noActivitiesFound: 'No activities found',
    activitiesMore: 'More',
    editNotes: 'Edit Notes:',
    startDateCannotBeGreater: 'Start date cannot be greater than end date',
    pleaseSelectStartDate: 'Please select start date',
    apply: 'Apply',
    customerOrSupplier: 'Customer/Supplier',
    activitiesTotal: 'Total',
    activitiesNotes: 'Notes',
    activitiesAction: 'Action',
    activitiesSection: 'Section',
    activitiesDetails: 'Details',
    noActivityLogs: 'No activity logs recorded',
    activitiesCreate: 'Create',
    activitiesUpdate: 'Update',
    activitiesDelete: 'Delete',
    activitiesView: 'View',
    activitiesLogin: 'Login',
    activitiesLogout: 'Logout',
    activitiesType: 'Type',
    activitiesItems: 'Items',
    sevenDays: 'Seven Days',
    thirtyDays: 'Month (30 Days)',
    ninetyDays: 'Three Months (90 Days)',
    threeHundredSixtyFiveDays: 'Year (365 Days)',
    
    // Reports Page
    generalReportTitle: 'General Report',
    generalReportDescription: 'Complete information on purchases, sales, profit, loss and expenses',
    reportCustomerReports: 'Customer Reports',
    reportCustomerSpecial: 'Special Customer Report',
    reportCustomerBalance: 'Customer Balance',
    reportCustomerItems: 'Customer Items Report',
    reportCustomerGeneral: 'General Customer Report',
    reportCustomerInvoices: 'All Customer Invoices',
    reportProfit: 'Profit Report',
    reportProfitDetails: 'Profit Details Report',
    reportSalesItems: 'Sales Items Report',
    reportPurchaseItems: 'Purchase Items Report',
    reportStockItems: 'Stock Items Report',
    reportExpiredProducts: 'Expired Products Report',
    reportSupplierReports: 'Supplier Reports',
    reportSupplierSpecial: 'Special Supplier Report',
    reportSupplierBalance: 'Supplier Balance',
    reportSupplierItems: 'Supplier Items Report',
    reportSupplierGeneral: 'General Supplier Report',
    reportSupplierInvoices: 'All Supplier Invoices',
    reportSupplierProfit: 'Profit from Supplier Report',
    reportGeneral: 'General Report',
    reportGeneralInfo: 'General Information Report',
    reportMonthly: 'Monthly Report',
    reportAccountantActivity: 'Accountant Activity Report',
    reportOtherReports: 'Other Reports',
    reportAccountantSafe: 'Accountant Safe',
    reportExpenses: 'Expenses Report',
    reportRegistrationDate: 'Registration Date Report',
    viewReports: 'View Reports',
    
    // Activities Page
    openInvoice: 'Open Invoice',
    viewInvoice: 'View',
    invoice: 'Invoice',
    purchaseInvoiceDetails: 'Purchase Invoice Details',
    invoiceNumberLabel: 'Invoice Number',
    dateLabel: 'Date',
    supplierLabel: 'Supplier',
    currencyLabel: 'Currency',
    paymentMethodLabel: 'Payment Method',
    userLabel: 'User',
    productNameLabel: 'Product Name',
    quantityLabel: 'Quantity',
    totalLabel: 'Total',
    paidLabel: 'Paid',
    debtLabel: 'Debt',
    notesLabel: 'Notes',
    printInvoice: 'Print',
    withoutSupplier: 'Without Supplier',
    itemsLabel: 'Items',
    productWithoutName: 'Product Without Name',
    noItemsFound: 'No Items Found',
    employeeInfo: 'Employee Information',
    employeeNumber: 'Employee Number',
    mobileNumber: 'Mobile Number',
    employeeType: 'Employee Type',
    employeeStatus: 'Employee Status',
    activeStatus: 'Active',
    inactiveStatus: 'Inactive',
    timeLabel: 'Time',
    invoiceLocked: 'Invoice is locked, please unlock first invoice',
    amountCannotBeLess: 'Amount cannot be less than zero',
    noDiscountPermission: 'You do not have discount permission!',
    guestCustomer: 'Guest Customer',
    externalProduct: 'External Product',
    invoiceUnparked: 'Unparked invoice loaded successfully!',
    newTabCreated: 'New tab created for new invoice',
    invoiceLoaded: 'Invoice loaded successfully',
    invoiceCleared: 'Invoice cleared',
    otherInvoiceNotFound: 'Other invoice not found',
    popupBlocked: 'Popup is blocked, please allow popups',
    printCart: 'Print Cart',
    shop: 'Shop',
    totalInWords: 'Total in words:',
    thanksForPurchase: 'Thanks for your purchase',
    discountLabel: 'Discount:',
    generalDiscount: 'General Discount',
    codeLabel: 'Code:',
    returned: 'Returned',
    partialReturned: 'Partially returned',
    sold: 'Sold',
    noSaleDebtPermission: 'You do not have permission to sell on debt!',
    noSaleInstallmentPermission: 'You do not have permission to sell on installment!',
    selectCustomerForInstallment: 'Please select a customer for installment sale',
    enterAdvanceAndMonths: 'Please enter advance and number of months correctly',
    advanceMustBeLess: 'Advance must be less than total',
    installmentRecorded: 'An error occurred while recording installment',
    enterPaymentAmount: 'Please enter payment amount',
    paymentAmountExceedsDebt: 'Payment amount exceeds debt',
    paymentRecorded: 'Payment recorded successfully!',
    enterDebtAmount: 'Please enter debt amount',
    debtAdded: 'Debt added successfully!',
    enterCustomerName: 'Please enter customer name',
    enterPhoneNumber: 'Please enter phone number',
    customerAdded: 'Customer added successfully!',
    noPrintPermission: 'You do not have permission to print invoice!',
    searchProduct: 'Search Product',
    enterProductNameAndPrice: 'Please enter product name and price',
    externalProductAdded: 'External product added successfully',
    addExternalProduct: 'Add External Product',
    cashSale: 'Cash Sale',
    debtSale: 'Debt Sale',
    installmentSale: 'Installment Sale',
    parkInvoice: 'Park Invoice',
    parkInvoiceTitle: 'Park invoice and start a new invoice',
    clear: 'Clear',
    addDebtWithoutPurchase: 'Add Debt Without Purchase',
    printDebt: 'Print Debt',
    viewDebts: 'View Debts',
    previousInvoice: 'Previous Invoice',
    nextInvoice: 'Next Invoice',
    parkedInvoices: 'Parked Invoices',
    invoiceCount: 'invoice',
    invoiceNumberPrefix: 'Invoice #',
    unnamedInvoice: 'Unnamed Invoice',
    itemCount: 'item',
    customerLabel: 'Customer: ',
    loadInvoice: 'Load',
    deleteInvoice: 'Delete',
    confirmDeleteInvoice: 'Are you sure you want to delete this invoice?',
    warranty: 'Warranty',
    showInvoice: 'Show Invoice',
    selectACustomer: 'Select a Customer',
    searchForInvoice: 'Search for Invoice',
    invoiceNotes: 'Invoice Notes',
    noParkedInvoices: 'No Parked Invoices',
    writeNote: 'Write Note:',
    writeInvoiceNoteHere: 'Write your invoice note here...',
    paidAmountLabel: 'Paid Amount',
    debtPaymentDate: 'Debt Payment Date',
    paidLabelShort: 'Paid:',
    remainingDebtLabel: 'Remaining Debt:',
    completeSale: 'Complete Sale',
    customerSelection: 'Customer Selection',
    currencyLabel: 'Currency',
    dollarRateLabel: 'Dollar Rate:',
    advanceLabel: 'Advance',
    installmentMonthsLabel: 'Number of Months',
    monthlyPaymentLabel: 'Monthly Payment',
    monthLabel: 'Month',
    totalInstallmentsLabel: 'Total Installments:',
    remainingInstallmentLabel: 'Remaining Installment:',
    hasAdvance: 'Has Warranty',
    customDesignUsed: 'Custom design is being used',
    noAccessPermission: 'You do not have permission to access this section!',
    
    // PDF Report Labels
    generalFinancialReport: 'General Financial Report',
    periodLabel: 'Period',
    dateLabelPDF: 'Date',
    shopNameLabel: 'Shop Name',
    phoneNumberLabel: 'Phone Number',
    financialSummary: 'Financial Summary',
    subjectLabel: 'Subject',
    amountLabel: 'Amount',
    totalSalesRevenue: 'Total Sales Revenue',
    grossProfit: 'Gross Profit',
    totalPurchases: 'Total Purchases',
    totalExpenses: 'Total Expenses',
    totalReturns: 'Total Returns',
    netProfit: 'Net Profit',
    balancesLabel: 'Balances',
    warehouseBalance: 'Warehouse Balance',
    customerDebts: 'Customer Debts',
    supplierDebts: 'Supplier Debts',
    salesDebts: 'Sales Debts',
    purchaseDebts: 'Purchase Debts',
    todayPeriod: 'Today',
    weekPeriod: 'Week',
    monthPeriod: 'Month',
    yearPeriod: 'Year',
    customPeriod: 'Custom Period',
    custom: 'Custom',
    
    // Table Headers
    customerNameHeader: 'Customer Name',
    phoneHeader: 'Phone',
    totalSalesHeader: 'Total Sales',
    totalRemainingHeader: 'Remaining',
    salesCountHeader: 'Sales Count',
    balanceHeader: 'Balance',
    addressHeader: 'Address',
    totalProfitHeader: 'Profit',
    invoiceIdHeader: 'Invoice ID',
    itemsCountHeader: 'Items Count',
    productNameHeader: 'Product Name',
    barcodeHeader: 'Barcode',
    quantityHeader: 'Quantity',
    priceHeader: 'Price',
    discountHeader: 'Discount',
    totalHeader: 'Total',
    saleDateHeader: 'Date',
    
    // Activity Types
    saleType: 'Sale',
    purchaseType: 'Purchase',
    
    // View Reports Page Buttons and Filters
    downloadPDF: 'PDF',
    printReport: 'Print',
    backToReports: 'Back',
    searchPlaceholder: 'Search...',
    allTime: 'All Time',
    todayFilter: 'Today',
    weekFilter: 'Week',
    monthFilter: 'Month',
    yearFilter: 'Year',
    allCustomers: 'All Customers',
    allSuppliers: 'All Suppliers',
    startDateLabel: 'Start Date',
    endDateLabel: 'End Date',
    noReportSelected: 'No Report Selected',
    detailedInformation: 'Detailed and Complete Information',
    noDataToPrint: 'No Data to Print',
    totalData: 'Total',
    dataLabel: 'Data',
    totalProfitLabel: 'Total Profit',
    totalAmountLabel: 'Total Amount',
    
    // Installments Page
    installments: 'Installments',
    installmentsManagement: 'Installment Debt Management',
    totalInstallments: 'Total',
    activeInstallments: 'Active',
    overdueInstallments: 'Overdue',
    totalRemaining: 'Total Remaining',
    searchInstallmentsPlaceholder: 'Search by customer name, invoice number...',
    allStatuses: 'All Statuses',
    activeStatus: 'Active',
    completedStatus: 'Completed',
    overdueStatus: 'Overdue',
    cancelledStatus: 'Cancelled',
    noInstallmentsFound: 'No Installments Found',
    invoiceLabel: 'Invoice',
    totalAmountLabel: 'Total Amount',
    downPayment: 'Down Payment',
    monthlyPayment: 'Monthly Payment',
    numberOfMonths: 'Number of Months',
    monthsLabel: 'Months',
    startDateLabel: 'Start Date',
    endDateLabel: 'End Date',
    remainingLabel: 'Remaining',
    daysRemaining: 'Days Remaining',
    daysOverdue: 'Days Overdue',
    paidLabel: 'Paid',
    viewDetails: 'View',
    makePayment: 'Make Payment',
    installmentPayment: 'Installment Payment',
    installmentCurrency: 'Installment Currency',
    paymentCurrency: 'Payment Currency',
    paymentAmountLabel: 'Payment Amount',
    monthNumber: 'Month Number',
    notesLabel: 'Notes',
    cancel: 'Cancel',
    installmentDetails: 'Installment Details',
    warrantyLabel: 'Warranty',
    hasWarranty: 'Has Warranty',
    paymentHistory: 'Payment History',
    noPaymentsRecorded: 'No Payments Recorded',
    monthLabel: 'Month',
    pleaseEnterPaymentAmount: 'Please enter payment amount',
    paymentAmountExceeds: 'Payment amount exceeds installment',
    paymentRecordedSuccessfully: 'Payment recorded successfully ✓',
    errorOccurredInPayment: 'An error occurred in payment',
    paymentIn: 'Payment in',
    convertTo: 'Convert to',
    dollarRateLabel: 'Dollar Rate',
    extraLabel: 'Extra',
  },
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations['ku-sorani'];
}

