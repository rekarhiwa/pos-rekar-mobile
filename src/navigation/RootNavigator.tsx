import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { I18nManager, View, Text, TouchableOpacity } from 'react-native';
import {
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  LayoutDashboard,
  RotateCcw,
  Receipt,
  PackagePlus,
  Truck,
  ShoppingBag,
  TrendingDown,
  Banknote,
  Tags,
  Barcode,
  Shield,
  Activity,
  CreditCard,
  Database,
  DollarSign,
  AlertTriangle,
  Edit,
  ArrowLeftRight,
  Printer,
  Image as ImageIcon,
  ClipboardList,
  TrendingUp,
  FileText,
} from 'lucide-react-native';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { getCurrentUser, hasPermission } from '../hooks';
import type { Page } from './types';
import { cn } from '../lib/cn';

import DashboardPage from '../screens/DashboardPage';
import POSPage from '../screens/POSPage';
import ProductsPage from '../screens/ProductsPage';
import AddProductPage from '../screens/AddProductPage';
import CustomersPage from '../screens/CustomersPage';
import PurchasesPage from '../screens/PurchasesPage';
import PurchaseHistoryPage from '../screens/PurchaseHistoryPage';
import SuppliersPage from '../screens/SuppliersPage';
import ExpensesPage from '../screens/ExpensesPage';
import SafePage from '../screens/SafePage';
import ReportsPage from '../screens/ReportsPage';
import ViewReportsPage from '../screens/ViewReportsPage';
import ReturnsPage from '../screens/ReturnsPage';
import SalesHistoryPage from '../screens/SalesHistoryPage';
import CategoriesUnitsPage from '../screens/CategoriesUnitsPage';
import BarcodeGeneratorPage from '../screens/BarcodeGeneratorPage';
import ShelfBarcodePage from '../screens/ShelfBarcodePage';
import WarrantyPage from '../screens/WarrantyPage';
import SettingsPage from '../screens/SettingsPage';
import InvoicesPage from '../screens/InvoicesPage';
import ActivitiesPage from '../screens/ActivitiesPage';
import InstallmentsPage from '../screens/InstallmentsPage';
import BackupRestorePage from '../screens/BackupRestorePage';
import ExpiredProductsPage from '../screens/ExpiredProductsPage';
import LowStockProductsPage from '../screens/LowStockProductsPage';
import CashRegistersPage from '../screens/CashRegistersPage';
import CrashedItemsPage from '../screens/CrashedItemsPage';
import InventoryAdjustmentPage from '../screens/InventoryAdjustmentPage';
import DollarRateChangePage from '../screens/DollarRateChangePage';
import PrintInvoicesPage from '../screens/PrintInvoicesPage';
import InvoiceImagesPage from '../screens/InvoiceImagesPage';
import OrdersPage from '../screens/OrdersPage';
import IncomePage from '../screens/IncomePage';
import SalaryAndRentPage from '../screens/SalaryAndRentPage';

const Drawer = createDrawerNavigator();

const SCREEN_MAP: Record<Page, React.ComponentType<any>> = {
  dashboard: DashboardPage,
  pos: POSPage,
  products: ProductsPage,
  'add-product': AddProductPage,
  customers: CustomersPage,
  purchases: PurchasesPage,
  'purchase-history': PurchaseHistoryPage,
  suppliers: SuppliersPage,
  expenses: ExpensesPage,
  safe: SafePage,
  reports: ReportsPage,
  'view-reports': ViewReportsPage,
  returns: ReturnsPage,
  'sales-history': SalesHistoryPage,
  'categories-units': CategoriesUnitsPage,
  'barcode-generator': BarcodeGeneratorPage,
  'shelf-barcode': ShelfBarcodePage,
  warranty: WarrantyPage,
  settings: SettingsPage,
  invoices: InvoicesPage,
  activities: ActivitiesPage,
  installments: InstallmentsPage,
  'backup-restore': BackupRestorePage,
  'salary-rent': SalaryAndRentPage,
  'expired-products': ExpiredProductsPage,
  'low-stock-products': LowStockProductsPage,
  'cash-registers': CashRegistersPage,
  'crashed-items': CrashedItemsPage,
  'inventory-adjustment': InventoryAdjustmentPage,
  'dollar-rate-change': DollarRateChangePage,
  'print-invoices': PrintInvoicesPage,
  'invoice-images': InvoiceImagesPage,
  orders: OrdersPage,
  income: IncomePage,
};

type NavItem = {
  id: Page;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  permission?: Parameters<typeof hasPermission>[0];
};

function CustomDrawerContent(props: any) {
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const user = getCurrentUser();

  const navItems: NavItem[] = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard, permission: 'canViewDashboard' },
    { id: 'pos', label: t.pos, icon: ShoppingCart, permission: 'canAccessPOS' },
    { id: 'returns', label: t.returns, icon: RotateCcw, permission: 'canManageReturns' },
    { id: 'sales-history', label: t.salesHistory || 'مێژووی فرۆشتن', icon: Receipt, permission: 'canViewSalesHistory' },
    { id: 'invoices', label: t.invoicesMenu || t.invoices || 'وەسڵەکان', icon: FileText, permission: 'canViewSalesHistory' },
    { id: 'orders', label: (t as any).orders || 'ئۆردەرەکان', icon: ClipboardList, permission: 'canViewSalesHistory' },
    { id: 'print-invoices', label: 'پرێنتکردنی وەسڵ', icon: Printer, permission: 'canViewSalesHistory' },
    { id: 'activities', label: t.activities, icon: Activity, permission: 'canViewSalesHistory' },
    { id: 'add-product', label: t.addProduct, icon: PackagePlus, permission: 'canAddProducts' },
    { id: 'products', label: t.products, icon: Package, permission: 'canViewProducts' },
    { id: 'inventory-adjustment', label: t.inventoryAdjustment || 'جەردی کۆگا', icon: Edit, permission: 'canViewProducts' },
    { id: 'dollar-rate-change', label: t.dollarRateChange || 'گۆڕانی نرخ', icon: ArrowLeftRight, permission: 'canAccessSettings' },
    { id: 'expired-products', label: t.expiredProducts || 'بەسەرچوو', icon: AlertTriangle, permission: 'canViewProducts' },
    { id: 'low-stock-products', label: 'کەمبوو', icon: Package, permission: 'canViewProducts' },
    { id: 'warranty', label: t.warranties || 'زەمان', icon: Shield, permission: 'canManageWarranty' },
    { id: 'customers', label: t.customers, icon: Users, permission: 'canViewCustomers' },
    { id: 'installments', label: t.installments || 'قیست', icon: CreditCard, permission: 'canViewCustomers' },
    { id: 'purchases', label: t.purchases, icon: ShoppingBag, permission: 'canManagePurchases' },
    { id: 'purchase-history', label: t.purchaseHistory || 'مێژووی کڕین', icon: TrendingUp, permission: 'canViewPurchaseHistory' },
    { id: 'invoice-images', label: 'وێنەی وەسڵ', icon: ImageIcon, permission: 'canViewPurchaseHistory' },
    { id: 'suppliers', label: t.suppliers, icon: Truck, permission: 'canManageSuppliers' },
    { id: 'expenses', label: t.expenses, icon: TrendingDown, permission: 'canManageExpenses' },
    { id: 'salary-rent', label: t.salaryAndRent || 'مەعاش و کرێ', icon: DollarSign, permission: 'canManageExpenses' },
    { id: 'cash-registers', label: t.cashRegisters || 'قاسە', icon: Banknote, permission: 'canAccessSafe' },
    { id: 'reports', label: t.reports, icon: BarChart3, permission: 'canViewReports' },
    { id: 'income', label: t.income || 'داهات', icon: TrendingUp, permission: 'canViewReports' },
    { id: 'categories-units', label: t.categoriesAndUnits, icon: Tags, permission: 'canManageCategoriesUnits' },
    { id: 'barcode-generator', label: t.barcodeGenerator || 'بارکۆد', icon: Barcode, permission: 'canGenerateBarcode' },
    { id: 'shelf-barcode', label: 'بارکۆدی رەفە', icon: Barcode, permission: 'canGenerateBarcode' },
    { id: 'settings', label: t.settings, icon: Settings, permission: 'canAccessSettings' },
    { id: 'backup-restore', label: t.backupRestoreTitle || 'هەڵگرتن', icon: Database, permission: 'canBackupRestore' },
  ];

  const filtered = navItems.filter((item) => {
    if (user?.role === 'manager') return true;
    return item.permission ? hasPermission(item.permission) : true;
  });

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1 }}
      className={darkMode ? 'bg-gray-900' : 'bg-white'}
    >
      <View className={cn('px-4 py-4 border-b mb-2', darkMode ? 'border-gray-700' : 'border-gray-200')}>
        <Text className={cn('text-lg font-bold', darkMode ? 'text-white' : 'text-gray-900')}>Kurdish POS</Text>
        <Text className={cn('text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>{user?.fullName}</Text>
      </View>
      {filtered.map(({ id, label, icon: Icon }) => (
        <DrawerItem
          key={id}
          label={label}
          icon={({ color, size }) => <Icon size={size} color={color} />}
          focused={props.state.index === props.state.routes.findIndex((r: { name: string }) => r.name === id)}
          onPress={() => props.navigation.navigate(id)}
          activeTintColor="#2563eb"
          inactiveTintColor={darkMode ? '#9ca3af' : '#374151'}
          labelStyle={{ textAlign: I18nManager.isRTL ? 'right' : 'left' }}
        />
      ))}
    </DrawerContentScrollView>
  );
}

export default function RootNavigator() {
  const { darkMode } = useDarkMode();
  const pages = Object.keys(SCREEN_MAP) as Page[];

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="dashboard"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: I18nManager.isRTL ? 'right' : 'left',
          drawerStyle: { width: 280, backgroundColor: darkMode ? '#111827' : '#ffffff' },
        }}
      >
        {pages.map((page) => (
          <Drawer.Screen key={page} name={page} component={SCREEN_MAP[page]} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
