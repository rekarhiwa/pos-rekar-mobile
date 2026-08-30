import { useLiveQuery } from '../db/db';
import { useState, useEffect, useCallback } from 'react';
import { db, Product, Customer, Sale, Settings, Expense, Supplier, CashTransaction, Purchase, User, Return, Payment, DebtRecord, WarrantyRecord, ActivityLog, Installment, InstallmentPayment, EmployeeSalary, SalaryPayment, ShopRent, CashRegister, CashRegisterTransaction, CrashedItem, Order, OrderStatus, ShippingStatus, PaymentStatus } from '../db/db';
import { networkSync } from '../lib/network-sync';
import { getUnitToBaseMultiplier, getLargestUnitName } from '../lib/unit-utils';

function normalizeProductName(name: unknown): string {
  return String(name ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function normalizeBarcode(code: unknown): string {
  // Keep digits/letters; ignore spaces/dashes for matching
  return String(code ?? '')
    .trim()
    .replace(/[\s-]+/g, '')
    .toLowerCase();
}

function getAllBarcodesFromProductLike(p: Partial<Product> | any): string[] {
  const barcodes: string[] = [];
  if (Array.isArray(p?.barcodes)) barcodes.push(...p.barcodes);
  if (p?.barcode) barcodes.push(p.barcode);
  return barcodes.map(normalizeBarcode).filter(Boolean);
}

async function assertProductUnique(input: Partial<Product>, opts?: { ignoreId?: number }) {
  const ignoreId = opts?.ignoreId;
  const nameKey = normalizeProductName(input.name);
  const incomingBarcodes = new Set(getAllBarcodesFromProductLike(input));

  // If we have neither a meaningful name nor any barcode, skip uniqueness check.
  if (!nameKey && incomingBarcodes.size === 0) return;

  const all = await db.products.toArray();
  for (const existing of all) {
    if (ignoreId && existing.id === ignoreId) continue;

    const existingNameKey = normalizeProductName(existing.name);
    if (nameKey && existingNameKey && existingNameKey === nameKey) {
      throw new Error('کاڵا بە هەمان ناوەوە پێشتر هەیە');
    }

    const existingBarcodes = getAllBarcodesFromProductLike(existing);
    if (incomingBarcodes.size > 0 && existingBarcodes.length > 0) {
      for (const b of existingBarcodes) {
        if (incomingBarcodes.has(b)) {
          throw new Error('کاڵا بە هەمان باڕکۆدەوە پێشتر هەیە');
        }
      }
    }
  }
}

function convertCostPerUnit(
  product: Product,
  fromUnitName: string,
  toUnitName: string,
  costPerFromUnitIQD: number
): number {
  const fromMult = getUnitToBaseMultiplier(product, fromUnitName || product.baseUnit || '');
  const toMult = getUnitToBaseMultiplier(product, toUnitName || product.baseUnit || '');
  if (!fromMult || !toMult) return Number(costPerFromUnitIQD || 0);
  return Number(costPerFromUnitIQD || 0) * (toMult / fromMult);
}

// Products
export function useProducts() {
  return useLiveQuery(() => db.products.toArray());
}

export function useProduct(id: number) {
  return useLiveQuery(() => db.products.get(id), [id]);
}

export function useProductByBarcode(barcode: string) {
  return useLiveQuery(() => db.products.where('barcode').equals(barcode).first(), [barcode]);
}

export function useLowStockProducts(threshold: number = 10) {
  // بەکارهێنانی lowStockThreshold تایبەت بە کاڵا ئەگەر هەبێت
  return useLiveQuery(async () => {
    const allProducts = await db.products.toArray();
    const settings = await db.settings.get(1);
    const globalThreshold = settings?.lowStockThreshold || threshold;
    
    return allProducts.filter(product => {
      const quantity = product.quantity || 0;
      const productThreshold = product.lowStockThreshold !== undefined && product.lowStockThreshold !== null && product.lowStockThreshold !== 0
        ? product.lowStockThreshold
        : globalThreshold;
      return quantity <= productThreshold;
    });
  }, [threshold]);
}

// Customers
export function useCustomers() {
  return useLiveQuery(() => db.customers.toArray());
}

export function useCustomer(id: number) {
  return useLiveQuery(() => db.customers.get(id), [id]);
}

export function useCustomersWithDebt() {
  return useLiveQuery(() => db.customers.where('debt').above(0).toArray());
}

// Payments
export function usePayments() {
  return useLiveQuery(() => db.payments.orderBy('date').reverse().toArray());
}

export function usePaymentsByCustomer(customerId: number) {
  return useLiveQuery(() => {
    return db.payments
      .where('customerId')
      .equals(customerId)
      .reverse()
      .sortBy('date');
  }, [customerId]);
}

export function useDebtsByCustomer(customerId: number) {
  return useLiveQuery(() => {
    return db.debts
      .where('customerId')
      .equals(customerId)
      .reverse()
      .sortBy('date');
  }, [customerId]);
}

export async function addPayment(payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();
  
  const newPayment: Payment = {
    ...payment,
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };

  const paymentId = await db.payments.add(newPayment);
  
  // Update customer debt
  const customer = await db.customers.get(payment.customerId);
  if (customer) {
    await db.customers.update(payment.customerId, {
      debt: Math.max(0, customer.debt - payment.amount),
      updatedAt: now,
    });
  }

  return paymentId;
}

export async function addDebt(debt: Omit<DebtRecord, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();
  
  const newDebt: DebtRecord = {
    ...debt,
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };

  const debtId = await db.debts.add(newDebt);
  
  // Update customer debt
  const customer = await db.customers.get(debt.customerId);
  if (customer) {
    await db.customers.update(debt.customerId, {
      debt: (customer.debt || 0) + debt.amount,
      updatedAt: now,
    });
  }

  return debtId;
}

// Installments
export function useInstallments() {
  return useLiveQuery(() => db.installments.orderBy('createdAt').reverse().toArray());
}

export function useInstallment(id: number) {
  return useLiveQuery(() => db.installments.get(id), [id]);
}

export function useInstallmentsByCustomer(customerId: number) {
  return useLiveQuery(() => {
    return db.installments
      .where('customerId')
      .equals(customerId)
      .reverse()
      .sortBy('createdAt');
  }, [customerId]);
}

export function useInstallmentsBySale(saleId: number) {
  return useLiveQuery(() => {
    return db.installments
      .where('saleId')
      .equals(saleId)
      .toArray();
  }, [saleId]);
}

export function useInstallmentPayments(installmentId: number) {
  return useLiveQuery(() => {
    return db.installmentPayments
      .where('installmentId')
      .equals(installmentId)
      .sortBy('paymentDate');
  }, [installmentId]);
}

export async function addInstallment(installment: Omit<Installment, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();

  // Idempotency: one sale → at most one installment schedule (prevents duplicate obligations).
  if (installment.saleId) {
    const existingForSale = await db.installments
      .where('saleId')
      .equals(installment.saleId)
      .first();
    if (existingForSale?.id != null) {
      await db.sales.update(installment.saleId, {
        installmentId: existingForSale.id,
      } as Partial<Sale>);
      return existingForSale.id;
    }
  }

  const newInstallment: Installment = {
    ...installment,
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };

  const installmentId = await db.installments.add(newInstallment);

  // Update sale with installmentId
  if (installment.saleId) {
    await db.sales.update(installment.saleId, {
      installmentId: installmentId as number,
    } as Partial<Sale>);
  }

  // BUG-C02: Do NOT increase customer.debt here.
  // Customer debt is owned exclusively by addSale/updateSale via sale.remaining (IQD).
  // Incrementing again (especially with USD remainingAmount) double-counts and mixes currencies.

  return installmentId;
}

export async function updateInstallment(id: number, installment: Partial<Installment>) {
  const now = new Date();
  await db.installments.update(id, {
    ...installment,
    updatedAt: now
  });
}

export async function addInstallmentPayment(payment: Omit<InstallmentPayment, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();
  
  const newPayment: InstallmentPayment = {
    ...payment,
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };

  const paymentId = await db.installmentPayments.add(newPayment);
  
  // Update installment
  const installment = await db.installments.get(payment.installmentId);
  if (installment) {
    const newPaidAmount = installment.paidAmount + payment.amount;
    const newRemainingAmount = installment.remainingAmount - payment.amount;
    const newStatus = newRemainingAmount <= 0 ? 'completed' : 
                     (new Date() > installment.endDate && newRemainingAmount > 0) ? 'overdue' : 
                     installment.status;

    await db.installments.update(payment.installmentId, {
      paidAmount: newPaidAmount,
      remainingAmount: newRemainingAmount,
      status: newStatus,
      updatedAt: now
    });

    // Update customer debt
    const customer = await db.customers.get(installment.customerId);
    if (customer) {
      await db.customers.update(installment.customerId, {
        debt: Math.max(0, customer.debt - payment.amount),
        updatedAt: now,
      });
    }
  }

  return paymentId;
}

export async function deleteInstallmentPayment(paymentId: number) {
  const payment = await db.installmentPayments.get(paymentId);
  if (!payment) return;

  // Update installment
  const installment = await db.installments.get(payment.installmentId);
  if (installment) {
    const newPaidAmount = Math.max(0, installment.paidAmount - payment.amount);
    const newRemainingAmount = installment.totalAmount - newPaidAmount;
    const newStatus = newRemainingAmount <= 0 ? 'completed' : 
                     (new Date() > installment.endDate && newRemainingAmount > 0) ? 'overdue' : 
                     'active';

    await db.installments.update(payment.installmentId, {
      paidAmount: newPaidAmount,
      remainingAmount: newRemainingAmount,
      status: newStatus,
      updatedAt: new Date()
    });

    // Update customer debt
    const customer = await db.customers.get(installment.customerId);
    if (customer) {
      await db.customers.update(installment.customerId, {
        debt: customer.debt + payment.amount,
        updatedAt: new Date(),
      });
    }
  }

  await db.installmentPayments.delete(paymentId);
}

// Sales
export function useSalesByCustomer(customerId: number) {
  return useLiveQuery(() => {
    return db.sales
      .where('customerId')
      .equals(customerId)
      .reverse()
      .sortBy('date');
  }, [customerId]);
}

export function useSales() {
  return useLiveQuery(() => db.sales.orderBy('date').reverse().toArray());
}

export function useSale(id: number) {
  return useLiveQuery(() => db.sales.get(id), [id]);
}

export function useTodaySales() {
  return useLiveQuery(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return db.sales.where('date').above(today).toArray();
  });
}

export function useSalesByDateRange(startDate: Date, endDate: Date) {
  return useLiveQuery(() => {
    return db.sales
      .where('date')
      .between(startDate, endDate, true, true)
      .toArray();
  }, [startDate, endDate]);
}

// Orders
export function useOrders() {
  return useLiveQuery(() => db.orders.orderBy('orderDate').reverse().toArray());
}

export function useOrder(id: number) {
  return useLiveQuery(() => db.orders.get(id), [id]);
}

export async function createOrder(partial: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'orderDate' | 'orderNumber' | 'stockLinked'>) {
  const now = new Date();

  // Generate simple auto order number: ORD-YYYYMMDD-XXXX
  const datePart = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
  const countToday = await db.orders.where('orderDate').between(
    new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999),
    true,
    true
  ).count();
  const sequence = (countToday + 1).toString().padStart(4, '0');
  const orderNumber = `ORD-${datePart}-${sequence}`;

  const order: Order = {
    ...partial,
    orderNumber,
    orderDate: now,
    createdAt: now,
    updatedAt: now,
    stockLinked: false
  };

  return db.orders.add(order);
}

export async function updateOrder(id: number, changes: Partial<Order>) {
  const existing = await db.orders.get(id);
  if (!existing) return;

  await db.orders.update(id, {
    ...changes,
    updatedAt: new Date()
  });
}

export async function updateOrderStatuses(
  id: number,
  statuses: {
    orderStatus?: OrderStatus;
    shippingStatus?: ShippingStatus;
    paymentStatus?: PaymentStatus;
    paidAmount?: number;
    paymentDate?: Date;
  }
) {
  const order = await db.orders.get(id);
  if (!order) return;

  const updated: Partial<Order> = {
    ...statuses,
    updatedAt: new Date()
  };

  // Auto adjust payment status if paidAmount and total are present
  if (typeof statuses.paidAmount === 'number') {
    const paid = statuses.paidAmount;
    const total = order.totalAmount || 0;
    if (paid <= 0) {
      updated.paymentStatus = 'unpaid';
    } else if (paid >= total) {
      updated.paymentStatus = 'paid';
    } else {
      updated.paymentStatus = 'partial';
    }
  }

  await db.orders.update(id, updated);
}

// Settings
export function useSettings() {
  return useLiveQuery(() => db.settings.toCollection().first());
}

// Statistics
export function useStats() {
  return useLiveQuery(async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todaySales = await db.sales.where('date').above(today).toArray();
    const totalSales = await db.sales.count();
    const totalCustomers = await db.customers.count();
    const totalProducts = await db.products.count();
    
    const todayRevenue = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    const todayProfit = todaySales.reduce((sum, sale) => sum + sale.profit, 0);
    
    const allSales = await db.sales.toArray();
    const totalRevenue = allSales.reduce((sum, sale) => sum + sale.total, 0);
    const totalProfit = allSales.reduce((sum, sale) => sum + sale.profit, 0);
    
    const customersWithDebt = await db.customers.where('debt').above(0).toArray();
    const totalDebt = customersWithDebt.reduce((sum, customer) => sum + customer.debt, 0);
    
    // بەکارهێنانی lowStockThreshold تایبەت بە کاڵا ئەگەر هەبێت
    const allProducts = await db.products.toArray();
    const settings = await db.settings.get(1);
    const globalThreshold = settings?.lowStockThreshold || 10;
    const lowStock = allProducts.filter(product => {
      const quantity = product.quantity || 0;
      const productThreshold = product.lowStockThreshold !== undefined && product.lowStockThreshold !== null && product.lowStockThreshold !== 0
        ? product.lowStockThreshold
        : globalThreshold;
      return quantity <= productThreshold;
    });
    
    return {
      today: {
        sales: todaySales.length,
        revenue: todayRevenue,
        profit: todayProfit
      },
      total: {
        sales: totalSales,
        customers: totalCustomers,
        products: totalProducts,
        revenue: totalRevenue,
        profit: totalProfit,
        debt: totalDebt
      },
      lowStockProducts: lowStock
    };
  });
}

// Database operations
export async function addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
  await assertProductUnique(product);
  const newProduct = {
    ...product,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const id = await db.products.add(newProduct);
  
  // Sync to network (بۆ هەردوو server و client)
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('products', 'create', { ...newProduct, id });
      console.log('✅ Product synced to network');
    } catch (error) {
      console.error('❌ Failed to sync product:', error);
    }
  }
  
  return id;
}

export async function updateProduct(id: number, product: Partial<Product>) {
  // Prevent duplicates when renaming or changing barcodes
  const current = await db.products.get(id);
  if (current) {
    await assertProductUnique(
      {
        ...current,
        ...product,
      },
      { ignoreId: id }
    );
  }
  const updated = {
    ...product,
    updatedAt: new Date()
  };
  await db.products.update(id, updated);
  
  // Sync to network (بۆ هەردوو server و client)
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      const fullProduct = await db.products.get(id);
      if (fullProduct) {
        await networkSync.sendChange('products', 'update', fullProduct);
        console.log('✅ Product update synced to network');
      }
    } catch (error) {
      console.error('❌ Failed to sync product update:', error);
    }
  }
}

export async function deleteProduct(id: number) {
  await db.products.delete(id);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('products', 'delete', { id });
      console.log('✅ Product delete synced to network');
    } catch (error) {
      console.error('❌ Failed to sync product delete:', error);
    }
  }
}

export async function addCustomer(customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>) {
  const newCustomer = {
    ...customer,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const id = await db.customers.add(newCustomer);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('customers', 'create', { ...newCustomer, id });
      console.log('✅ Customer synced to network');
    } catch (error) {
      console.error('❌ Failed to sync customer:', error);
    }
  }
  
  return id;
}

export async function updateCustomer(id: number, customer: Partial<Customer>) {
  const updated = {
    ...customer,
    updatedAt: new Date()
  };
  await db.customers.update(id, updated);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      const fullCustomer = await db.customers.get(id);
      if (fullCustomer) {
        await networkSync.sendChange('customers', 'update', fullCustomer);
        console.log('✅ Customer update synced to network');
      }
    } catch (error) {
      console.error('❌ Failed to sync customer update:', error);
    }
  }
}

export async function deleteCustomer(id: number) {
  await db.customers.delete(id);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('customers', 'delete', { id });
      console.log('✅ Customer delete synced to network');
    } catch (error) {
      console.error('❌ Failed to sync customer delete:', error);
    }
  }
}

// Generate custom ID for sales (f1, f2, f3...)
async function generateSaleCustomId(): Promise<string> {
  const allSales = await db.sales.toArray();
  const saleIds = allSales
    .filter(s => s.customId && s.customId.startsWith('f'))
    .map(s => {
      const num = parseInt(s.customId!.substring(1));
      return isNaN(num) ? 0 : num;
    });
  
  const nextNumber = saleIds.length > 0 ? Math.max(...saleIds) + 1 : 1;
  return `f${nextNumber}`;
}

// Generate custom ID for purchases (k1, k2, k3...)
async function generatePurchaseCustomId(): Promise<string> {
  const allPurchases = await db.purchases.toArray();
  const purchaseIds = allPurchases
    .filter(p => p.customId && p.customId.startsWith('k'))
    .map(p => {
      const num = parseInt(p.customId!.substring(1));
      return isNaN(num) ? 0 : num;
    });
  
  const nextNumber = purchaseIds.length > 0 ? Math.max(...purchaseIds) + 1 : 1;
  return `k${nextNumber}`;
}

export async function addSale(sale: Omit<Sale, 'id' | 'customId'>) {
  try {
    // Generate custom ID
    const customId = await generateSaleCustomId();
    
    // Update product quantities
    for (const item of sale.items) {
      if (!item.productId) {
        console.warn('Sale item missing productId:', item);
        continue;
      }
      const product = await db.products.get(item.productId);
      if (product) {
        const unitMultiplier = getUnitToBaseMultiplier(product, item.unit || product.baseUnit || '');
        const actualQuantity = item.cartQuantity * unitMultiplier;
        const updatedQuantity = product.quantity - actualQuantity;
        await db.products.update(item.productId, {
          quantity: updatedQuantity,
          updatedAt: new Date()
        });
        
        // Sync product quantity change بۆ network
        const config = networkSync.getConfig();
        if (config.mode === 'server' || config.mode === 'client') {
          try {
            const updatedProduct = await db.products.get(item.productId);
            if (updatedProduct) {
              await networkSync.sendChange('products', 'update', updatedProduct);
              console.log('✅ Product quantity synced after sale');
            }
          } catch (error) {
            console.error('❌ Failed to sync product quantity:', error);
          }
        }
      }
    }
    
    // Update customer debt if applicable
    if (sale.customerId && sale.remaining > 0) {
      const customer = await db.customers.get(sale.customerId);
      if (customer) {
        await db.customers.update(sale.customerId, {
          debt: customer.debt + sale.remaining,
          updatedAt: new Date()
        });
      }
    }
    
    const saleId = await db.sales.add({ ...sale, customId, action: 'create' });
    
    // Sync to network (بۆ هەردوو server و client)
    const config = networkSync.getConfig();
    if (config.mode === 'server' || config.mode === 'client') {
      try {
        const fullSale = await db.sales.get(saleId as number);
        if (fullSale) {
          await networkSync.sendChange('sales', 'create', fullSale);
          console.log('✅ Sale synced to network');
        }
      } catch (error) {
        console.error('❌ Failed to sync sale:', error);
      }
    }
    
    // Log activity
    await logActivity('pos', 'create', {
      entityType: 'sale',
      entityId: saleId as number,
      description: `فرۆشتنێکی نوێ دروست کرا - ID: ${customId}, کۆی گشتی: ${sale.total.toLocaleString()}`
    });
    
    return saleId;
  } catch (error: any) {
    // Save crashed item
    const currentUser = await getCurrentUser();
    try {
      await addCrashedItem({
        type: 'sale',
        date: sale.date,
        total: sale.total,
        items: sale.items,
        errorMessage: error.message || 'هەڵەی نادیار',
        errorStack: error.stack,
        customerId: sale.customerId,
        customerName: sale.customerName,
        paymentMethod: sale.paymentMethod,
        paid: sale.paid,
        remaining: sale.remaining,
        userId: currentUser?.id,
        username: currentUser?.fullName,
        status: 'pending'
      });
    } catch (crashError) {
      console.error('Failed to save crashed item:', crashError);
    }
    throw error; // Re-throw to let caller handle it
  }
}

export async function updateSale(saleId: number, sale: Omit<Sale, 'id' | 'customId'>) {
  try {
    // Get the old sale to reverse quantity changes
    const oldSale = await db.sales.get(saleId);
    if (!oldSale) {
      throw new Error('Sale not found');
    }

    // Reverse old product quantities
    for (const item of oldSale.items) {
      if (!item.productId) continue;
      const product = await db.products.get(item.productId);
      if (product) {
        const unitMultiplier = getUnitToBaseMultiplier(product, item.unit || product.baseUnit || '');
        const actualQuantity = item.cartQuantity * unitMultiplier;
        const updatedQuantity = product.quantity + actualQuantity;
        await db.products.update(item.productId, {
          quantity: updatedQuantity,
          updatedAt: new Date()
        });
      }
    }

    // Reverse old customer debt if applicable
    if (oldSale.customerId && oldSale.remaining > 0) {
      const customer = await db.customers.get(oldSale.customerId);
      if (customer) {
        await db.customers.update(oldSale.customerId, {
          debt: Math.max(0, customer.debt - oldSale.remaining),
          updatedAt: new Date()
        });
      }
    }

    // Apply new product quantities
    for (const item of sale.items) {
      if (!item.productId) continue;
      const product = await db.products.get(item.productId);
      if (product) {
        const unitMultiplier = getUnitToBaseMultiplier(product, item.unit || product.baseUnit || '');
        const actualQuantity = item.cartQuantity * unitMultiplier;
        const updatedQuantity = product.quantity - actualQuantity;
        await db.products.update(item.productId, {
          quantity: updatedQuantity,
          updatedAt: new Date()
        });
        
        // Sync product quantity change
        const config = networkSync.getConfig();
        if (config.mode === 'server' || config.mode === 'client') {
          try {
            const updatedProduct = await db.products.get(item.productId);
            if (updatedProduct) {
              await networkSync.sendChange('products', 'update', updatedProduct);
            }
          } catch (error) {
            console.error('Failed to sync product quantity:', error);
          }
        }
      }
    }
    
    // Update customer debt with new remaining
    if (sale.customerId && sale.remaining > 0) {
      const customer = await db.customers.get(sale.customerId);
      if (customer) {
        await db.customers.update(sale.customerId, {
          debt: customer.debt + sale.remaining,
          updatedAt: new Date()
        });
      }
    }
    
    // Update the sale (keep old invoiceNumber and customId)
    await db.sales.update(saleId, { 
      ...sale, 
      invoiceNumber: oldSale.invoiceNumber, // پاراستنی ژمارەی کۆن
      action: 'update' 
    });
    
    // Sync to network
    const config = networkSync.getConfig();
    if (config.mode === 'server' || config.mode === 'client') {
      try {
        const fullSale = await db.sales.get(saleId);
        if (fullSale) {
          await networkSync.sendChange('sales', 'update', fullSale);
          console.log('✅ Sale updated and synced to network');
        }
      } catch (error) {
        console.error('❌ Failed to sync sale update:', error);
      }
    }
    
    // Log activity
    await logActivity('pos', 'update', {
      entityType: 'sale',
      entityId: saleId,
      description: `وەسڵ نوێکرایەوە - ID: ${saleId}, کۆی نوێ: ${sale.total.toLocaleString()}`
    });
    
    return saleId;
  } catch (error: any) {
    console.error('Failed to update sale:', error);
    throw error;
  }
}

export async function deleteSale(saleId: number) {
  try {
    const sale = await db.sales.get(saleId);
    if (!sale) {
      throw new Error('وەسڵەکە نەدۆزرایەوە');
    }

    // 1. Return quantities to products
    for (const item of sale.items) {
      if (!item.productId) continue;
      const product = await db.products.get(item.productId);
      if (product) {
        const freeQty = item.freeQuantity || 0;
        const totalQuantity = item.cartQuantity + freeQty;
        const unitMultiplier = getUnitToBaseMultiplier(product, item.unit || product.baseUnit || '');
        const actualQuantity = totalQuantity * unitMultiplier;
        
        await db.products.update(item.productId, {
          quantity: product.quantity + actualQuantity,
          updatedAt: new Date()
        });

        // Sync product quantity change
        const config = networkSync.getConfig();
        if (config.mode === 'server' || config.mode === 'client') {
          try {
            const updatedProduct = await db.products.get(item.productId);
            if (updatedProduct) {
              await networkSync.sendChange('products', 'update', updatedProduct);
            }
          } catch (error) {
            console.error('❌ Failed to sync product quantity:', error);
          }
        }
      }
    }

    // 2. Reduce customer debt if applicable
    if (sale.customerId && sale.remaining > 0) {
      const customer = await db.customers.get(sale.customerId);
      if (customer) {
        await db.customers.update(sale.customerId, {
          debt: Math.max(0, customer.debt - sale.remaining),
          updatedAt: new Date()
        });
      }
    }

    // 3. Delete cash transactions related to this sale
    if (sale.paymentMethod === 'cash' || sale.paymentMethod === 'card') {
      try {
        const allCashTransactions = await db.cashTransactions.toArray();
        const relatedTransactions = allCashTransactions.filter(t => 
          t.reference === `SALE-${saleId}` || 
          (t.description && t.description.includes(`وەسڵ #${saleId}`))
        );
        
        for (const transaction of relatedTransactions) {
          if (transaction.id) {
            await db.cashTransactions.delete(transaction.id);
          }
        }
      } catch (error) {
        console.error('Error deleting cash transactions:', error);
      }
    }

    // 4. Delete warranty records related to this sale
    if (sale.id) {
      try {
        const allWarrantyRecords = await db.warrantyRecords.toArray();
        const relatedWarranties = allWarrantyRecords.filter(w => w.saleId === sale.id);
        
        for (const warranty of relatedWarranties) {
          if (warranty.id) {
            await db.warrantyRecords.delete(warranty.id);
          }
        }
      } catch (error) {
        console.error('Error deleting warranty records:', error);
      }
    }

    // 5. Delete installment if exists
    if (sale.installmentId) {
      try {
        // Delete installment payments first
        const allPayments = await db.installmentPayments.toArray();
        const relatedPayments = allPayments.filter(p => p.installmentId === sale.installmentId);
        
        for (const payment of relatedPayments) {
          if (payment.id) {
            await db.installmentPayments.delete(payment.id);
          }
        }

        // Delete installment
        await db.installments.delete(sale.installmentId);
      } catch (error) {
        console.error('Error deleting installment:', error);
      }
    }

    // 6. Delete the sale
    await db.sales.delete(saleId);

    // Sync to network
    const config = networkSync.getConfig();
    if (config.mode === 'server' || config.mode === 'client') {
      try {
        await networkSync.sendChange('sales', 'delete', { id: saleId });
      } catch (error) {
        console.error('❌ Failed to sync sale deletion:', error);
      }
    }

    // Log activity
    await logActivity('pos', 'delete', {
      entityType: 'sale',
      entityId: saleId,
      description: `وەسڵ #${sale.customId || saleId} سڕایەوە - کۆی گشتی: ${sale.total.toLocaleString()}`
    });

    return true;
  } catch (error) {
    console.error('Error deleting sale:', error);
    throw error;
  }
}

export async function updateSettings(settings: Partial<Settings>) {
  const current = await db.settings.toCollection().first();
  if (current && current.id) {
    return await db.settings.update(current.id, settings);
  } else {
    return await db.settings.add(settings as Settings);
  }
}

// Expenses
export function useExpenses() {
  return useLiveQuery(() => db.expenses.orderBy('date').reverse().toArray());
}

export function useExpensesByDateRange(startDate: Date, endDate: Date) {
  return useLiveQuery(() => {
    return db.expenses
      .where('date')
      .between(startDate, endDate, true, true)
      .toArray();
  }, [startDate, endDate]);
}

export function useExpensesByCategory(category: string) {
  return useLiveQuery(() => db.expenses.where('category').equals(category).toArray(), [category]);
}

export async function addExpense(expense: Omit<Expense, 'id' | 'createdAt'>) {
  const newExpense = {
    ...expense,
    createdAt: new Date()
  };
  const id = await db.expenses.add(newExpense);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('expenses', 'create', { ...newExpense, id });
      console.log('✅ Expense synced to network');
    } catch (error) {
      console.error('❌ Failed to sync expense:', error);
    }
  }
  
  return id;
}

export async function updateExpense(id: number, expense: Partial<Expense>) {
  await db.expenses.update(id, expense);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      const fullExpense = await db.expenses.get(id);
      if (fullExpense) {
        await networkSync.sendChange('expenses', 'update', fullExpense);
        console.log('✅ Expense update synced to network');
      }
    } catch (error) {
      console.error('❌ Failed to sync expense update:', error);
    }
  }
}

export async function deleteExpense(id: number) {
  await db.expenses.delete(id);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('expenses', 'delete', { id });
      console.log('✅ Expense delete synced to network');
    } catch (error) {
      console.error('❌ Failed to sync expense delete:', error);
    }
  }
}

// Suppliers
export function useSuppliers() {
  return useLiveQuery(() => db.suppliers.toArray());
}

export function useSupplier(id: number) {
  return useLiveQuery(() => db.suppliers.get(id), [id]);
}

export function useSuppliersWithDebt() {
  return useLiveQuery(() => db.suppliers.where('debt').above(0).toArray());
}

export async function addSupplier(supplier: Omit<Supplier, 'id' | 'createdAt' | 'updatedAt'>) {
  const newSupplier = {
    ...supplier,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const id = await db.suppliers.add(newSupplier);
  
  // Sync to network
  const config = networkSync.getConfig();
  if (config.mode === 'server' || config.mode === 'client') {
    try {
      await networkSync.sendChange('suppliers', 'create', { ...newSupplier, id });
      console.log('✅ Supplier synced to network');
    } catch (error) {
      console.error('❌ Failed to sync supplier:', error);
    }
  }
  
  return id;
}

export async function updateSupplier(id: number, supplier: Partial<Supplier>) {
  return await db.suppliers.update(id, {
    ...supplier,
    updatedAt: new Date()
  });
}

export async function deleteSupplier(id: number) {
  return await db.suppliers.delete(id);
}

// Cash Transactions
export function useCashTransactions() {
  return useLiveQuery(() => db.cashTransactions.orderBy('date').reverse().toArray());
}

export function useCashBalance() {
  return useLiveQuery(async () => {
    const transactions = await db.cashTransactions.toArray();
    const balance = transactions.reduce((sum, t) => {
      return t.type === 'in' ? sum + t.amount : sum - t.amount;
    }, 0);
    return balance;
  });
}

export function useCashTransactionsByDateRange(startDate: Date, endDate: Date) {
  return useLiveQuery(() => {
    return db.cashTransactions
      .where('date')
      .between(startDate, endDate, true, true)
      .toArray();
  }, [startDate, endDate]);
}

export async function addCashTransaction(transaction: Omit<CashTransaction, 'id'>) {
  return await db.cashTransactions.add(transaction);
}

export async function deleteCashTransaction(id: number) {
  return await db.cashTransactions.delete(id);
}

// Cash Registers
export function useCashRegisters() {
  return useLiveQuery(async () => {
    try {
      const registers = await db.cashRegisters.toArray();
      return registers.sort((a, b) => {
        const dateA = a.createdAt?.getTime() || 0;
        const dateB = b.createdAt?.getTime() || 0;
        return dateB - dateA; // Reverse order (newest first)
      });
    } catch (error) {
      console.error('Error fetching cash registers:', error);
      return [];
    }
  });
}

export function useCashRegister(id: number) {
  return useLiveQuery(() => db.cashRegisters.get(id), [id]);
}

export function useCashRegisterTransactions(registerId: number) {
  return useLiveQuery(() => {
    if (!registerId || registerId === 0) {
      return db.cashRegisterTransactions.where('id').below(0).toArray();
    }
    return db.cashRegisterTransactions
      .where('registerId')
      .equals(registerId)
      .reverse()
      .sortBy('date');
  }, [registerId]);
}

export async function addCashRegister(register: Omit<CashRegister, 'id'>) {
  try {
    console.log('Adding register to database:', register);
    // Check if table exists
    const count = await db.cashRegisters.count();
    console.log('Current cash registers count:', count);
    
    // Handle backward compatibility - convert old format to new format
    const balanceIQD = register.balanceIQD ?? (register.currentBalance ?? register.initialBalance ?? 0);
    const balanceUSD = register.balanceUSD ?? 0;
    const initialBalanceIQD = register.initialBalanceIQD ?? (register.initialBalance ?? 0);
    const initialBalanceUSD = register.initialBalanceUSD ?? 0;
    
    const newRegister = {
      ...register,
      balanceIQD,
      balanceUSD,
      initialBalanceIQD,
      initialBalanceUSD,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const id = await db.cashRegisters.add(newRegister);
    console.log('Register added with ID:', id);
    return id;
  } catch (error: any) {
    console.error('Error in addCashRegister:', error);
    if (error.name === 'NotFoundError' || error.message?.includes('not found')) {
      throw new Error('داتابەیسەکە پێویست بە نوێکردنەوەی هەیە. تکایە پەڕەکە refresh بکە.');
    }
    throw error;
  }
}

export async function updateCashRegister(id: number, updates: Partial<CashRegister>) {
  return await db.cashRegisters.update(id, {
    ...updates,
    updatedAt: new Date()
  });
}

export async function deleteCashRegister(id: number) {
  // Check if there are transactions
  const transactions = await db.cashRegisterTransactions.where('registerId').equals(id).count();
  if (transactions > 0) {
    throw new Error('ناتوانیت قاسە بسڕیتەوە چونکە مامەڵەی تێدایە');
  }
  return await db.cashRegisters.delete(id);
}

export async function addCashRegisterTransaction(transaction: Omit<CashRegisterTransaction, 'id'>) {
  try {
    console.log('addCashRegisterTransaction called with:', transaction);
    
    const register = await db.cashRegisters.get(transaction.registerId);
    if (!register) {
      console.error('Register not found:', transaction.registerId);
      throw new Error('قاسە نەدۆزرایەوە');
    }
    
    // Handle backward compatibility - get balances
    const currentBalanceIQD = register.balanceIQD ?? (register.currentBalance ?? 0);
    const currentBalanceUSD = register.balanceUSD ?? 0;
    
    // Get transaction amounts (handle backward compatibility)
    const amountIQD = transaction.amountIQD ?? (transaction.currency === 'IQD' ? transaction.amount ?? 0 : 0);
    const amountUSD = transaction.amountUSD ?? (transaction.currency === 'USD' ? transaction.amount ?? 0 : 0);
    
    // If old format (only amount), assume IQD
    const finalAmountIQD = transaction.amountIQD !== undefined ? transaction.amountIQD : 
                          (transaction.amountUSD === undefined && transaction.amount !== undefined ? transaction.amount ?? 0 : amountIQD);
    const finalAmountUSD = transaction.amountUSD ?? amountUSD;
    
    console.log('Current register balance IQD:', currentBalanceIQD, 'USD:', currentBalanceUSD);
    console.log('Transaction amounts IQD:', finalAmountIQD, 'USD:', finalAmountUSD);

    // Calculate new balances
    let newBalanceIQD = currentBalanceIQD;
    let newBalanceUSD = currentBalanceUSD;
    
    if (transaction.type === 'add' || transaction.type === 'transfer_in') {
      newBalanceIQD += finalAmountIQD;
      newBalanceUSD += finalAmountUSD;
    } else if (transaction.type === 'subtract' || transaction.type === 'transfer_out') {
      newBalanceIQD -= finalAmountIQD;
      newBalanceUSD -= finalAmountUSD;
      if (newBalanceIQD < 0 || newBalanceUSD < 0) {
        throw new Error('بڕی پارە کەمترە لە سفر');
      }
    }
    
    console.log('New balance will be IQD:', newBalanceIQD, 'USD:', newBalanceUSD);

  // Handle transfers
  if (transaction.type === 'transfer_out' && transaction.transferToRegisterId) {
    const toRegister = await db.cashRegisters.get(transaction.transferToRegisterId);
    if (!toRegister) {
      throw new Error('قاسەی ناردن نەدۆزرایەوە');
    }
    const toBalanceIQD = toRegister.balanceIQD ?? (toRegister.currentBalance ?? 0);
    const toBalanceUSD = toRegister.balanceUSD ?? 0;
    await db.cashRegisters.update(transaction.transferToRegisterId, {
      balanceIQD: toBalanceIQD + finalAmountIQD,
      balanceUSD: toBalanceUSD + finalAmountUSD,
      updatedAt: new Date()
    });
  }

  if (transaction.type === 'transfer_in' && transaction.transferFromRegisterId) {
    const fromRegister = await db.cashRegisters.get(transaction.transferFromRegisterId);
    if (!fromRegister) {
      throw new Error('قاسەی وەرگرتن نەدۆزرایەوە');
    }
    const fromBalanceIQD = fromRegister.balanceIQD ?? (fromRegister.currentBalance ?? 0);
    const fromBalanceUSD = fromRegister.balanceUSD ?? 0;
    if (fromBalanceIQD < finalAmountIQD || fromBalanceUSD < finalAmountUSD) {
      throw new Error('بڕی پارە لە قاسەی وەرگرتندا کەمترە');
    }
    await db.cashRegisters.update(transaction.transferFromRegisterId, {
      balanceIQD: fromBalanceIQD - finalAmountIQD,
      balanceUSD: fromBalanceUSD - finalAmountUSD,
      updatedAt: new Date()
    });
  }

    // Update register balance
    await db.cashRegisters.update(transaction.registerId, {
      balanceIQD: newBalanceIQD,
      balanceUSD: newBalanceUSD,
      updatedAt: new Date()
    });
    console.log('Register balance updated to IQD:', newBalanceIQD, 'USD:', newBalanceUSD);

    // Add transaction
    const transactionData = {
      ...transaction,
      amountIQD: finalAmountIQD,
      amountUSD: finalAmountUSD,
      createdAt: new Date()
    };
    console.log('Adding transaction to database:', transactionData);
    
    const transactionId = await db.cashRegisterTransactions.add(transactionData);
    console.log('Transaction added with ID:', transactionId);
    
    return transactionId;
  } catch (error: any) {
    console.error('Error in addCashRegisterTransaction:', error);
    if (error.name === 'NotFoundError' || error.message?.includes('not found')) {
      throw new Error('داتابەیسەکە پێویست بە نوێکردنەوەی هەیە. تکایە پەڕەکە refresh بکە.');
    }
    throw error;
  }
}

export async function updateCashRegisterTransaction(id: number, updates: Partial<CashRegisterTransaction>) {
  const oldTransaction = await db.cashRegisterTransactions.get(id);
  if (!oldTransaction) {
    throw new Error('مامەڵە نەدۆزرایەوە');
  }

  const register = await db.cashRegisters.get(oldTransaction.registerId);
  if (!register) {
    throw new Error('قاسە نەدۆزرایەوە');
  }

  // Get old amounts
  const oldAmountIQD = oldTransaction.amountIQD ?? oldTransaction.amount ?? 0;
  const oldAmountUSD = oldTransaction.amountUSD ?? 0;

  // Get new amounts
  const newAmountIQD = updates.amountIQD ?? oldAmountIQD;
  const newAmountUSD = updates.amountUSD ?? oldAmountUSD;

  // Reverse old transaction
  let currentBalanceIQD = register.balanceIQD ?? (register.currentBalance ?? 0);
  let currentBalanceUSD = register.balanceUSD ?? 0;

  if (oldTransaction.type === 'add' || oldTransaction.type === 'transfer_in') {
    currentBalanceIQD -= oldAmountIQD;
    currentBalanceUSD -= oldAmountUSD;
  } else if (oldTransaction.type === 'subtract' || oldTransaction.type === 'transfer_out') {
    currentBalanceIQD += oldAmountIQD;
    currentBalanceUSD += oldAmountUSD;
  }

  // Reverse old transfers
  if (oldTransaction.type === 'transfer_out' && oldTransaction.transferToRegisterId) {
    const toRegister = await db.cashRegisters.get(oldTransaction.transferToRegisterId);
    if (toRegister) {
      const toBalanceIQD = toRegister.balanceIQD ?? (toRegister.currentBalance ?? 0);
      const toBalanceUSD = toRegister.balanceUSD ?? 0;
      await db.cashRegisters.update(oldTransaction.transferToRegisterId, {
        balanceIQD: toBalanceIQD - oldAmountIQD,
        balanceUSD: toBalanceUSD - oldAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  if (oldTransaction.type === 'transfer_in' && oldTransaction.transferFromRegisterId) {
    const fromRegister = await db.cashRegisters.get(oldTransaction.transferFromRegisterId);
    if (fromRegister) {
      const fromBalanceIQD = fromRegister.balanceIQD ?? (fromRegister.currentBalance ?? 0);
      const fromBalanceUSD = fromRegister.balanceUSD ?? 0;
      await db.cashRegisters.update(oldTransaction.transferFromRegisterId, {
        balanceIQD: fromBalanceIQD + oldAmountIQD,
        balanceUSD: fromBalanceUSD + oldAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  // Apply new transaction
  if (oldTransaction.type === 'add' || oldTransaction.type === 'transfer_in') {
    currentBalanceIQD += newAmountIQD;
    currentBalanceUSD += newAmountUSD;
  } else if (oldTransaction.type === 'subtract' || oldTransaction.type === 'transfer_out') {
    currentBalanceIQD -= newAmountIQD;
    currentBalanceUSD -= newAmountUSD;
    if (currentBalanceIQD < 0 || currentBalanceUSD < 0) {
      throw new Error('بڕی پارە کەمترە لە سفر');
    }
  }

  // Apply new transfers
  if (oldTransaction.type === 'transfer_out' && oldTransaction.transferToRegisterId) {
    const toRegister = await db.cashRegisters.get(oldTransaction.transferToRegisterId);
    if (toRegister) {
      const toBalanceIQD = toRegister.balanceIQD ?? (toRegister.currentBalance ?? 0);
      const toBalanceUSD = toRegister.balanceUSD ?? 0;
      await db.cashRegisters.update(oldTransaction.transferToRegisterId, {
        balanceIQD: toBalanceIQD + newAmountIQD,
        balanceUSD: toBalanceUSD + newAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  if (oldTransaction.type === 'transfer_in' && oldTransaction.transferFromRegisterId) {
    const fromRegister = await db.cashRegisters.get(oldTransaction.transferFromRegisterId);
    if (fromRegister) {
      const fromBalanceIQD = fromRegister.balanceIQD ?? (fromRegister.currentBalance ?? 0);
      const fromBalanceUSD = fromRegister.balanceUSD ?? 0;
      if (fromBalanceIQD < newAmountIQD || fromBalanceUSD < newAmountUSD) {
        throw new Error('بڕی پارە لە قاسەی وەرگرتندا کەمترە');
      }
      await db.cashRegisters.update(oldTransaction.transferFromRegisterId, {
        balanceIQD: fromBalanceIQD - newAmountIQD,
        balanceUSD: fromBalanceUSD - newAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  // Update register balance
  await db.cashRegisters.update(oldTransaction.registerId, {
    balanceIQD: currentBalanceIQD,
    balanceUSD: currentBalanceUSD,
    updatedAt: new Date()
  });

  // Update transaction
  return await db.cashRegisterTransactions.update(id, {
    ...updates,
    amountIQD: newAmountIQD,
    amountUSD: newAmountUSD
  });
}

export async function deleteCashRegisterTransaction(id: number) {
  const transaction = await db.cashRegisterTransactions.get(id);
  if (!transaction) {
    throw new Error('مامەڵە نەدۆزرایەوە');
  }

  const register = await db.cashRegisters.get(transaction.registerId);
  if (!register) {
    throw new Error('قاسە نەدۆزرایەوە');
  }

  // Reverse the transaction
  const oldAmountIQD = transaction.amountIQD ?? transaction.amount ?? 0;
  const oldAmountUSD = transaction.amountUSD ?? 0;
  
  let currentBalanceIQD = register.balanceIQD ?? (register.currentBalance ?? 0);
  let currentBalanceUSD = register.balanceUSD ?? 0;
  
  if (transaction.type === 'add' || transaction.type === 'transfer_in') {
    currentBalanceIQD -= oldAmountIQD;
    currentBalanceUSD -= oldAmountUSD;
  } else if (transaction.type === 'subtract' || transaction.type === 'transfer_out') {
    currentBalanceIQD += oldAmountIQD;
    currentBalanceUSD += oldAmountUSD;
  }

  if (currentBalanceIQD < 0 || currentBalanceUSD < 0) {
    throw new Error('ناتوانیت ئەم مامەڵەیە بسڕیتەوە');
  }

  // Reverse transfers
  if (transaction.type === 'transfer_out' && transaction.transferToRegisterId) {
    const toRegister = await db.cashRegisters.get(transaction.transferToRegisterId);
    if (toRegister) {
      const toBalanceIQD = toRegister.balanceIQD ?? (toRegister.currentBalance ?? 0);
      const toBalanceUSD = toRegister.balanceUSD ?? 0;
      await db.cashRegisters.update(transaction.transferToRegisterId, {
        balanceIQD: toBalanceIQD - oldAmountIQD,
        balanceUSD: toBalanceUSD - oldAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  if (transaction.type === 'transfer_in' && transaction.transferFromRegisterId) {
    const fromRegister = await db.cashRegisters.get(transaction.transferFromRegisterId);
    if (fromRegister) {
      const fromBalanceIQD = fromRegister.balanceIQD ?? (fromRegister.currentBalance ?? 0);
      const fromBalanceUSD = fromRegister.balanceUSD ?? 0;
      await db.cashRegisters.update(transaction.transferFromRegisterId, {
        balanceIQD: fromBalanceIQD + oldAmountIQD,
        balanceUSD: fromBalanceUSD + oldAmountUSD,
        updatedAt: new Date()
      });
    }
  }

  // Update register balance
  await db.cashRegisters.update(transaction.registerId, {
    balanceIQD: currentBalanceIQD,
    balanceUSD: currentBalanceUSD,
    updatedAt: new Date()
  });

  // Delete transaction
  return await db.cashRegisterTransactions.delete(id);
}

// Purchases
export function usePurchases() {
  return useLiveQuery(() => db.purchases.orderBy('date').reverse().toArray());
}

export function usePurchase(id: number) {
  return useLiveQuery(() => db.purchases.get(id), [id]);
}

export function usePurchasesBySupplier(supplierId: number) {
  return useLiveQuery(() => db.purchases.where('supplierId').equals(supplierId).toArray(), [supplierId]);
}

export async function addPurchase(purchase: Omit<Purchase, 'id' | 'customId'>) {
  try {
    // Generate custom ID
    const customId = await generatePurchaseCustomId();
    
    
    // ✅ Update product quantities and supplier (add to warehouse immediately)
    for (const item of purchase.items) {
      const itemWithData = item as any;
      
      // ✅ ئەگەر کاڵا نوێ بێت (productId negative یان temporaryProductData هەبێت)
      if (item.productId < 0 || itemWithData.temporaryProductData) {
        // زیادکردنی کاڵای نوێ بۆ products table
        const tempProductData = itemWithData.temporaryProductData;
        if (tempProductData) {
          try {
            // دروستکردنی product data بەبەکارهێنانی temporaryProductData
            const tempAsProduct = tempProductData as Product;
            const purchaseUnitName = (item as any).unit || tempAsProduct.baseUnit || '';
            const largestUnit = getLargestUnitName(tempAsProduct);
            const costForLargestUnit = convertCostPerUnit(tempAsProduct, purchaseUnitName, largestUnit, item.cost);

            const giftBase = Math.max(0, Number(itemWithData.giftQuantity) || 0);
            const newProductData: any = {
              ...tempProductData,
              quantity: (Number(item.quantity) || 0) + giftBase, // بڕی کڕین + دیاری (بە دانە)
              cost: costForLargestUnit, // نرخی کڕین بۆ یەکەی گەورە
              supplierId: itemWithData.supplierId || purchase.supplierId,
              updatedAt: new Date(),
              createdAt: new Date()
            };
            
            // Prevent adding duplicates (name/barcode)
            await assertProductUnique(newProductData);
            
            // زیادکردنی کاڵای نوێ
            const newProductId = await db.products.add(newProductData);
            console.log(`✅ New product added to warehouse: ${item.name} (ID: ${newProductId})`);
            
            // Sync new product to network
            const config = networkSync.getConfig();
            if (config.mode === 'server' || config.mode === 'client') {
              try {
                const addedProduct = await db.products.get(newProductId as number);
                if (addedProduct) {
                  await networkSync.sendChange('products', 'create', addedProduct);
                  console.log('✅ New product synced to network');
                }
              } catch (error) {
                console.error('❌ Failed to sync new product:', error);
              }
            }
          } catch (error) {
            console.error(`❌ Failed to add new product ${item.name}:`, error);
            throw new Error(`ناتوانرێت کاڵای نوێ زیاد بکرێت: ${item.name}`);
          }
        }
      } else {
        // کاڵای پێشوو - تەنها quantity و cost update بکە
        const product = await db.products.get(item.productId);
        if (product) {
          // Keep product cost always in the largest unit (carton if exists), regardless of purchase unit.
          const purchaseUnitName = (item as any).unit || product.baseUnit || '';
          const largestUnit = getLargestUnitName(product);
          const costForLargestUnit = convertCostPerUnit(product, purchaseUnitName, largestUnit, item.cost);
          const giftBase = Math.max(0, Number(itemWithData.giftQuantity) || 0);

          // Update product quantity and cost (quantity + gift are stored in base units)
          const updateData: any = {
            quantity: product.quantity + (Number(item.quantity) || 0) + giftBase,
            cost: costForLargestUnit,
            updatedAt: new Date()
          };
          
          // ✅ نوێکردنەوەی بەرواری بەسەرچوون بەپێی بەرواری کڕین
          if (purchase.autoUpdateExpirationDate && product.expirationDate) {
            try {
              // دۆزینەوەی کڕینی پێشوو بۆ کاڵاکە
              const purchases = await db.purchases
                .orderBy('date')
                .reverse()
                .toArray();
              
              // دۆزینەوەی کڕینی پێشوو کە هەمان کاڵای تێدایە
              let lastPurchaseDate: Date | null = null;
              for (const prevPurchase of purchases) {
                // Skip the current purchase (if it's already saved)
                if (prevPurchase.id && (purchase as any).id && prevPurchase.id === (purchase as any).id) {
                  continue;
                }
                
                const prevItem = prevPurchase.items.find(pi => pi.productId === item.productId);
                if (prevItem) {
                  lastPurchaseDate = new Date(prevPurchase.date);
                  break;
                }
              }
              
              if (lastPurchaseDate) {
                const oldExpirationDate = new Date(product.expirationDate);
                // حیسابکردنی رۆژەکانی جیاوازی لە کڕینی پێشوو
                const daysDifference = Math.floor((oldExpirationDate.getTime() - lastPurchaseDate.getTime()) / (1000 * 60 * 60 * 24));
                
                // ئەگەر daysDifference > 0 بێت، بەرواری بەسەرچوونی نوێ = بەرواری کڕین + رۆژەکانی جیاوازی
                if (daysDifference > 0) {
                  const purchaseDate = new Date(purchase.date);
                  const newExpirationDate = new Date(purchaseDate);
                  newExpirationDate.setDate(newExpirationDate.getDate() + daysDifference);
                  updateData.expirationDate = newExpirationDate;
                  console.log(`✅ Expiration date updated for product ${product.name}: ${oldExpirationDate.toLocaleDateString()} → ${newExpirationDate.toLocaleDateString()} (${daysDifference} days from purchase date)`);
                }
              }
            } catch (error) {
              console.error('Error updating expiration date:', error);
            }
          }
          
          // ✅ Update supplier if item has a specific supplier
          if (itemWithData.supplierId && itemWithData.supplierId !== product.supplierId) {
            updateData.supplierId = itemWithData.supplierId;
          } else if (purchase.supplierId && purchase.supplierId !== product.supplierId) {
            // Otherwise use the main purchase supplier
            updateData.supplierId = purchase.supplierId;
          }
          
          await db.products.update(item.productId, updateData);
          
          // Sync product quantity change to network
          const config = networkSync.getConfig();
          if (config.mode === 'server' || config.mode === 'client') {
            try {
              const updatedProduct = await db.products.get(item.productId);
              if (updatedProduct) {
                await networkSync.sendChange('products', 'update', updatedProduct);
                console.log('✅ Product quantity synced after purchase');
              }
            } catch (error) {
              console.error('❌ Failed to sync product quantity:', error);
            }
          }
        }
      }
    }
    
    // ✅ Deduct from wallet (add cash transaction) - for cash/card payments OR partial debt payments
    if (purchase.paid > 0) {
      const currentUser = await getCurrentUser();
      const paymentLabel = purchase.paymentMethod === 'debt' ? 'کڕین (پارەی دراو لە قەرز)' : 'کڕین';
      await db.cashTransactions.add({
        type: 'out',
        amount: purchase.paid,
        category: 'کڕین',
        description: `${paymentLabel} - وەسڵ #${purchase.invoiceNumber || customId}${purchase.supplierName ? ` - ${purchase.supplierName}` : ''}`,
        date: purchase.date,
        reference: `PURCHASE-${customId}`,
        userId: currentUser?.id,
        username: currentUser?.fullName || purchase.username
      });
    }
    
    // Update supplier debt if applicable (only for cash/card purchases with remaining amount)
    if (purchase.supplierId && purchase.remaining > 0) {
      const supplier = await db.suppliers.get(purchase.supplierId);
      if (supplier) {
        await db.suppliers.update(purchase.supplierId, {
          debt: supplier.debt + purchase.remaining,
          updatedAt: new Date()
        });
      }
    }
    
    // Set archived status: only archive if remaining is 0 (fully paid)
    // Unpaid purchases (remaining > 0) should stay in PurchasesPage, not go to history
    const archived = purchase.remaining === 0;
    
    // Save purchase as completed - warehouse already updated
    const purchaseId = await db.purchases.add({ 
      ...purchase, 
      customId, 
      archived, 
      action: 'create',
      status: 'completed' // ✅ یەکسەر تەواو دەکرێت
    });
    
    // Sync to network
    const config = networkSync.getConfig();
    if (config.mode === 'server' || config.mode === 'client') {
      try {
        const fullPurchase = await db.purchases.get(purchaseId as number);
        if (fullPurchase) {
          await networkSync.sendChange('purchases', 'create', fullPurchase);
          console.log('✅ Purchase synced to network');
        }
      } catch (error) {
        console.error('❌ Failed to sync purchase:', error);
      }
    }
    
    // Log activity
    const activityLabel = purchase.paymentMethod === 'debt' ? 'کڕینێکی قەرز' : 'کڕینێکی نوێ';
    await logActivity('purchases', 'create', {
      entityType: 'purchase',
      entityId: purchaseId as number,
      description: `${activityLabel} تۆمار کرا - ID: ${customId}, کۆی گشتی: ${purchase.total.toLocaleString()}${purchase.remaining > 0 ? `, قەرز: ${purchase.remaining.toLocaleString()}` : ''}`
    });
    
    return purchaseId;
  } catch (error: any) {
    // Save crashed item
    const currentUser = await getCurrentUser();
    try {
      await addCrashedItem({
        type: 'purchase',
        date: purchase.date,
        total: purchase.total,
        items: purchase.items,
        errorMessage: error.message || 'هەڵەی نادیار',
        errorStack: error.stack,
        supplierId: purchase.supplierId,
        supplierName: purchase.supplierName,
        invoiceNumber: purchase.invoiceNumber,
        userId: currentUser?.id,
        username: currentUser?.fullName,
        status: 'pending'
      });
    } catch (crashError) {
      console.error('Failed to save crashed item:', crashError);
    }
    throw error; // Re-throw to let caller handle it
  }
}

/**
 * Complete a pending purchase - updates warehouse and deducts from wallet
 * This function should be called when user wants to execute/complete a purchase
 */
export async function completePurchase(purchaseId: number) {
  try {
    const purchase = await db.purchases.get(purchaseId);
    if (!purchase) {
      throw new Error('کڕین نەدۆزرایەوە');
    }
    
    // Check if already completed
    if (purchase.status === 'completed') {
      throw new Error('کڕینەکە پێشتر تەواوکراوە');
    }
    
    // Skip if payment method is debt (debt purchases don't update warehouse)
    if (purchase.paymentMethod === 'debt') {
      // Just mark as completed without updating warehouse
      await db.purchases.update(purchaseId, { status: 'completed' });
      return;
    }
    
    // ✅ Update product quantities and supplier (add to warehouse)
    for (const item of purchase.items) {
      const itemWithData = item as any;
      
      // ✅ ئەگەر کاڵا نوێ بێت (productId negative یان temporaryProductData هەبێت)
      if (item.productId < 0 || itemWithData.temporaryProductData) {
        // زیادکردنی کاڵای نوێ بۆ products table
        const tempProductData = itemWithData.temporaryProductData;
        if (tempProductData) {
          try {
            // دروستکردنی product data بەبەکارهێنانی temporaryProductData
            const tempAsProduct = tempProductData as Product;
            const purchaseUnitName = (item as any).unit || tempAsProduct.baseUnit || '';
            const largestUnit = getLargestUnitName(tempAsProduct);
            const costForLargestUnit = convertCostPerUnit(tempAsProduct, purchaseUnitName, largestUnit, item.cost);

            const giftBase = Math.max(0, Number(itemWithData.giftQuantity) || 0);
            const newProductData: any = {
              ...tempProductData,
              quantity: (Number(item.quantity) || 0) + giftBase, // بڕی کڕین + دیاری (بە دانە)
              cost: costForLargestUnit, // نرخی کڕین بۆ یەکەی گەورە
              supplierId: itemWithData.supplierId || purchase.supplierId,
              updatedAt: new Date(),
              createdAt: new Date()
            };
            
            // Prevent adding duplicates (name/barcode)
            await assertProductUnique(newProductData);
            
            // زیادکردنی کاڵای نوێ
            const newProductId = await db.products.add(newProductData);
            console.log(`✅ New product added to warehouse: ${item.name} (ID: ${newProductId})`);
            
            // Sync new product to network
            const config = networkSync.getConfig();
            if (config.mode === 'server' || config.mode === 'client') {
              try {
                const addedProduct = await db.products.get(newProductId as number);
                if (addedProduct) {
                  await networkSync.sendChange('products', 'create', addedProduct);
                  console.log('✅ New product synced to network');
                }
              } catch (error) {
                console.error('❌ Failed to sync new product:', error);
              }
            }
          } catch (error) {
            console.error(`❌ Failed to add new product ${item.name}:`, error);
            throw new Error(`ناتوانرێت کاڵای نوێ زیاد بکرێت: ${item.name}`);
          }
        } else {
          console.warn(`⚠️ Temporary product data missing for item: ${item.name}`);
        }
      } else {
        // کاڵای پێشوو - تەنها quantity و cost update بکە
        const product = await db.products.get(item.productId);
        if (product) {
          // Keep product cost always in the largest unit (carton if exists), regardless of purchase unit.
          const purchaseUnitName = (item as any).unit || product.baseUnit || '';
          const largestUnit = getLargestUnitName(product);
          const costForLargestUnit = convertCostPerUnit(product, purchaseUnitName, largestUnit, item.cost);
          const giftBase = Math.max(0, Number(itemWithData.giftQuantity) || 0);

          // Update product quantity and cost (quantity + gift are stored in base units)
          const updateData: any = {
            quantity: product.quantity + (Number(item.quantity) || 0) + giftBase,
            cost: costForLargestUnit,
            updatedAt: new Date()
          };
          
          // ✅ Update supplier if item has a specific supplier
          if (itemWithData.supplierId && itemWithData.supplierId !== product.supplierId) {
            updateData.supplierId = itemWithData.supplierId;
          } else if (purchase.supplierId && purchase.supplierId !== product.supplierId) {
            // Otherwise use the main purchase supplier
            updateData.supplierId = purchase.supplierId;
          }
          
          await db.products.update(item.productId, updateData);
          
          // Sync product quantity change to network
          const config = networkSync.getConfig();
          if (config.mode === 'server' || config.mode === 'client') {
            try {
              const updatedProduct = await db.products.get(item.productId);
              if (updatedProduct) {
                await networkSync.sendChange('products', 'update', updatedProduct);
                console.log('✅ Product quantity synced after purchase completion');
              }
            } catch (error) {
              console.error('❌ Failed to sync product quantity:', error);
            }
          }
        } else {
          console.warn(`⚠️ Product not found: ${item.productId} - ${item.name}`);
        }
      }
    }
    
    // ✅ Deduct from wallet (add cash transaction) - only for cash/card payments
    if ((purchase.paymentMethod === 'cash' || purchase.paymentMethod === 'card') && purchase.paid > 0) {
      const currentUser = await getCurrentUser();
      await db.cashTransactions.add({
        type: 'out',
        amount: purchase.paid,
        category: 'کڕین',
        description: `کڕین - وەسڵ #${purchase.invoiceNumber || purchase.customId || purchaseId}${purchase.supplierName ? ` - ${purchase.supplierName}` : ''}`,
        date: purchase.date,
        reference: `PURCHASE-${purchaseId}`,
        userId: currentUser?.id,
        username: currentUser?.fullName || purchase.username
      });
    }
    
    // Update supplier debt if applicable (only for cash/card purchases with remaining amount)
    if (purchase.supplierId && purchase.remaining > 0) {
      const supplier = await db.suppliers.get(purchase.supplierId);
      if (supplier) {
        await db.suppliers.update(purchase.supplierId, {
          debt: supplier.debt + purchase.remaining,
          updatedAt: new Date()
        });
      }
    }
    
    // Mark purchase as completed
    await db.purchases.update(purchaseId, { 
      status: 'completed',
      action: 'update'
    });
    
    // Sync to network
    const config = networkSync.getConfig();
    if (config.mode === 'server' || config.mode === 'client') {
      try {
        const updatedPurchase = await db.purchases.get(purchaseId);
        if (updatedPurchase) {
          await networkSync.sendChange('purchases', 'update', updatedPurchase);
          console.log('✅ Purchase completion synced to network');
        }
      } catch (error) {
        console.error('❌ Failed to sync purchase completion:', error);
      }
    }
    
    // Log activity
    await logActivity('purchases', 'update', {
      entityType: 'purchase',
      entityId: purchaseId,
      description: `کڕین تەواو کرا - ID: ${purchase.customId || purchaseId}, کۆی گشتی: ${purchase.total.toLocaleString()}`
    });
    
  } catch (error: any) {
    console.error('Error completing purchase:', error);
    throw error;
  }
}

export async function updatePurchase(id: number, purchase: Partial<Purchase>) {
  // وەرگرتنی purchase ی پێشوو بۆ بەراوردکردن
  const oldPurchase = await db.purchases.get(id);
  if (!oldPurchase) {
    throw new Error('Purchase not found');
  }
  
  // دروستکردنی تێبینی بۆ دەستکارییەکان
  const changes: string[] = [];
  const currentDate = new Date().toLocaleDateString('ar-EG');
  
  if (purchase.supplierName !== undefined && oldPurchase.supplierName !== purchase.supplierName) {
    changes.push(`ناوی دابینکار: "${oldPurchase.supplierName || '-'}" → "${purchase.supplierName}"`);
  }
  
  if (purchase.paymentMethod !== undefined && oldPurchase.paymentMethod !== purchase.paymentMethod) {
    const oldMethod = oldPurchase.paymentMethod === 'cash' ? 'نەقد' : 
                     oldPurchase.paymentMethod === 'card' ? 'کارت' : 'قەرز';
    const newMethod = purchase.paymentMethod === 'cash' ? 'نەقد' : 
                     purchase.paymentMethod === 'card' ? 'کارت' : 'قەرز';
    changes.push(`جۆری پارەدان: "${oldMethod}" → "${newMethod}"`);
  }
  
  if (purchase.paid !== undefined && oldPurchase.paid !== purchase.paid) {
    changes.push(`پارەدراو: ${oldPurchase.paid.toLocaleString()} → ${purchase.paid.toLocaleString()}`);
  }
  
  if (purchase.remaining !== undefined && oldPurchase.remaining !== purchase.remaining) {
    changes.push(`قەرز: ${oldPurchase.remaining.toLocaleString()} → ${purchase.remaining.toLocaleString()}`);
  }
  
  if (purchase.total !== undefined && oldPurchase.total !== purchase.total) {
    changes.push(`کۆی گشتی: ${oldPurchase.total.toLocaleString()} → ${purchase.total.toLocaleString()}`);
  }
  
  if (purchase.date !== undefined && new Date(oldPurchase.date).getTime() !== new Date(purchase.date).getTime()) {
    const oldDate = new Date(oldPurchase.date).toLocaleDateString('ar-EG');
    const newDate = new Date(purchase.date).toLocaleDateString('ar-EG');
    changes.push(`بەروار: ${oldDate} → ${newDate}`);
  }
  
  // زیادکردنی تێبینی پێشووەکان (ئەگەر هەبوون)
  const existingNotes = oldPurchase.changeNotes || '';
  const changeNotes = changes.length > 0 
    ? `${existingNotes ? existingNotes + '\n\n' : ''}بەرواری دەستکاری: ${currentDate}\n${changes.join('\n')}`
    : existingNotes;
  
  // If remaining is being updated to 0, automatically archive the purchase
  const updateData: Partial<Purchase> = { 
    ...purchase, 
    action: 'update',
    changeNotes: changeNotes || undefined
  };
  if (purchase.remaining !== undefined && purchase.remaining === 0) {
    updateData.archived = true;
  } else if (purchase.remaining !== undefined && purchase.remaining > 0) {
    // If remaining becomes > 0, unarchive it (should stay in PurchasesPage)
    updateData.archived = false;
  }
  await db.purchases.update(id, updateData);
  
  // Update supplier debt if remaining amount changed
  if (purchase.remaining !== undefined && oldPurchase.supplierId) {
    const supplier = await db.suppliers.get(oldPurchase.supplierId);
    if (supplier) {
      const debtDifference = purchase.remaining - oldPurchase.remaining;
      await db.suppliers.update(oldPurchase.supplierId, {
        debt: Math.max(0, supplier.debt + debtDifference),
        updatedAt: new Date()
      });
    }
  }
  
  // Log activity
  await logActivity('purchases', 'update', {
    entityType: 'purchase',
    entityId: id,
    description: `کڕین نوێکرایەوە - ID: ${oldPurchase.customId || id}`
  });
}

// Get last purchase price for a product
export async function getLastPurchasePrice(productId: number): Promise<number | null> {
  const details = await getLastPurchaseCostDetails(productId);
  return details ? details.costIqd : null;
}

/** دوایین نرخی کڕین لەگەڵ یەکە و دراو — بۆ نرخی کۆن و جیاوازی لە پەیجی کرین */
export async function getLastPurchaseCostDetails(productId: number): Promise<{
  costIqd: number;
  costUSD?: number;
  unit?: string;
  unitMultiplier?: number;
  currency?: 'IQD' | 'USD';
  dollarRate?: number;
} | null> {
  try {
    const purchases = await db.purchases
      .orderBy('date')
      .reverse()
      .toArray();

    for (const purchase of purchases) {
      const item = purchase.items.find((i) => i.productId === productId);
      if (!item) continue;

      const currency: 'IQD' | 'USD' = purchase.currency === 'USD' ? 'USD' : 'IQD';
      const dollarRate =
        typeof purchase.dollarRate === 'number' && purchase.dollarRate > 0
          ? purchase.dollarRate
          : undefined;
      const costIqd = Number(item.cost) || 0;
      let costUSD =
        typeof (item as any).costUSD === 'number' && isFinite((item as any).costUSD)
          ? Number((item as any).costUSD)
          : undefined;

      // وەسڵی دۆلار بەبێ costUSD: لە دینار و نرخی وەسڵ حساب بکە
      if (currency === 'USD' && (costUSD === undefined || !isFinite(costUSD)) && costIqd > 0 && dollarRate) {
        costUSD = costIqd / dollarRate;
      }

      // هەڵەی کۆن: costUSD = هەمان ژمارەی دینار (نەک دۆلار)
      if (
        currency === 'USD' &&
        costUSD !== undefined &&
        dollarRate &&
        dollarRate > 10 &&
        costIqd > 0 &&
        Math.abs(costUSD - costIqd) < 0.0001
      ) {
        costUSD = costIqd / dollarRate;
      }

      return {
        costIqd,
        costUSD,
        unit: (item as any).unit || (item as any).selectedUnit,
        unitMultiplier: (item as any).selectedUnitMultiplier,
        currency,
        dollarRate,
      };
    }

    return null;
  } catch (error) {
    console.error('Error getting last purchase cost details:', error);
    return null;
  }
}

// Get purchase history for a product
export interface ProductPurchaseHistory {
  purchaseId: number;
  date: Date;
  supplierName?: string;
  supplierId?: number;
  quantity: number;
  cost: number;
  totalCost: number;
  invoiceNumber?: string;
  notes?: string;
  username?: string;
  unit?: string; // یەکەی کڕین
  currency?: 'IQD' | 'USD'; // دراوی کڕین
  dollarRate?: number; // نرخی دۆلار بە دینار
}

export async function getProductPurchaseHistory(productId: number): Promise<ProductPurchaseHistory[]> {
  try {
    // Find all purchases that contain this product
    const purchases = await db.purchases
      .orderBy('date')
      .reverse()
      .toArray();
    
    const history: ProductPurchaseHistory[] = [];
    
    for (const purchase of purchases) {
      const item = purchase.items.find(item => item.productId === productId);
      if (item) {
        // ✅ Get supplier name from item first, then from purchase
        let supplierName = (item as any).supplierName || purchase.supplierName;
        let supplierId = (item as any).supplierId || purchase.supplierId;
        
        // ✅ If still no supplier, try to get from product
        if (!supplierName && supplierId) {
          const supplier = await db.suppliers.get(supplierId);
          if (supplier) {
            supplierName = supplier.name;
          }
        }
        
        // ✅ Get unit from item or default to product's base unit
        const product = await db.products.get(productId);
        let unit = (item as any).unit;
        if (!unit) {
          unit = product?.baseUnit || 'دانە';
        }
        // quantity لە کڕین بە دانەی بنەڕەت هەڵدەگیرێت؛ بۆ پیشاندان ÷ multiplier
        const unitMult =
          product && unit ? getUnitToBaseMultiplier(product, unit) || 1 : 1;
        const displayQty =
          unitMult > 1
            ? Math.round(((Number(item.quantity) || 0) / unitMult) * 1000) / 1000
            : Number(item.quantity) || 0;
        const unitCount = unitMult > 0 ? (Number(item.quantity) || 0) / unitMult : Number(item.quantity) || 0;
        
        history.push({
          purchaseId: purchase.id!,
          date: purchase.date,
          supplierName: supplierName,
          supplierId: supplierId,
          quantity: displayQty,
          cost: item.cost,
          totalCost: (item.cost || 0) * unitCount,
          invoiceNumber: purchase.invoiceNumber || purchase.receiptNumber || purchase.id?.toString(),
          notes: purchase.notes,
          username: purchase.username,
          unit: unit,
          currency: purchase.currency, // ✅ دراوی کڕین
          dollarRate: purchase.dollarRate // ✅ نرخی دۆلار بە دینار
        });
      }
    }
    
    return history;
  } catch (error) {
    console.error('Error getting product purchase history:', error);
    return [];
  }
}

// Get supplier name for a product
export async function getProductSupplier(productId: number): Promise<string | null> {
  try {
    const product = await db.products.get(productId);
    if (!product || !product.supplierId) {
      return null;
    }
    
    const supplier = await db.suppliers.get(product.supplierId);
    return supplier ? supplier.name : null;
  } catch (error) {
    console.error('Error getting product supplier:', error);
    return null;
  }
}

export async function deletePurchase(id: number) {
  return await db.purchases.delete(id);
}

// Users
export function useUsers() {
  return useLiveQuery(() => db.users.toArray().then(users => 
    users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  ));
}

export function useUser(id: number) {
  return useLiveQuery(() => db.users.get(id), [id]);
}

export function useActiveUsers() {
  return useLiveQuery(() => db.users.where('isActive').equals(1).toArray());
}

export async function loginUser(username: string, password: string): Promise<User | null> {
  try {
    const normalizedUsername = username.trim();
    if (!normalizedUsername || !password) return null;

    // Case-insensitive username match
    const allUsers = await db.users.toArray();
    const user = allUsers.find(
      (u) => (u.username || '').toLowerCase() === normalizedUsername.toLowerCase()
    );
    
    if (!user || !user.isActive) {
      return null;
    }
    
    if (user.password !== password) {
      return null;
    }
    
    // Update last login
    await db.users.update(user.id!, { lastLogin: new Date() });
    
    // Log login activity
    await logActivity('system', 'login', {
      description: `چوونەژوورەوە بە ناوی ${user.fullName || user.username}`
    });
    
    // Store session without password
    const { password: _pw, ...safeUser } = user;
    localStorage.setItem('currentUser', JSON.stringify(safeUser));
    
    return user;
  } catch (error) {
    console.error('loginUser: Error:', error);
    return null;
  }
}

export function getCurrentUser(): User | null {
  const stored = localStorage.getItem('currentUser');
  if (!stored) return null;
  try {
    const user = JSON.parse(stored);
    // Legacy sessions may still contain password — strip it
    if (user && 'password' in user) {
      delete user.password;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  } catch {
    return null;
  }
}

export function logout() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    // Log logout activity before removing user
    logActivity('system', 'logout', {
      description: `دەرهێنان بە ناوی ${currentUser.fullName || currentUser.username}`
    });
  }
  localStorage.removeItem('currentUser');
}

// Check if user has specific permission
export function hasPermission(permission: keyof import('../db/db').UserPermissions): boolean {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;
  
  // Managers have all permissions
  if (currentUser.role === 'manager') return true;
  
  // Check cashier permissions
  if (!currentUser.permissions) return false;
  return currentUser.permissions[permission] || false;
}

// Get user permissions
export function getUserPermissions(): import('../db/db').UserPermissions | null {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  
  // Managers have all permissions
  if (currentUser.role === 'manager') {
    return {
      // کاڵاکان
      canManageProducts: true,
      canAddProducts: true,
      canEditProducts: true,
      canDeleteProducts: true,
      canViewProducts: true,
      
      // کڕیاران
      canManageCustomers: true,
      canAddCustomers: true,
      canEditCustomers: true,
      canDeleteCustomers: true,
      canViewCustomers: true,
      
      // دابینکەران
      canManageSuppliers: true,
      canAddSuppliers: true,
      canEditSuppliers: true,
      canDeleteSuppliers: true,
      
      // خەرجیەکان
      canManageExpenses: true,
      canAddExpenses: true,
      canEditExpenses: true,
      canDeleteExpenses: true,
      
      // کڕین
      canManagePurchases: true,
      canAddPurchases: true,
      canEditPurchases: true,
      canDeletePurchases: true,
      canViewPurchaseHistory: true,
      
      // فرۆشتن - POS
      canAccessPOS: true,
      canAddCustomerInPOS: true,
      canManageDebt: true,
      canReceivePayment: true,
      canGiveDiscount: true,
      canDeleteSales: true,
      canViewSalesHistory: true,
      canPrintInvoice: true,
      
      // گەڕاندنەوە
      canManageReturns: true,
      canAddReturns: true,
      canDeleteReturns: true,
      
      // زەمان
      canManageWarranty: true,
      canAddWarranty: true,
      canEditWarranty: true,
      
      // ڕاپۆرت
      canViewReports: true,
      canViewProfit: true,
      canExportReports: true,
      
      // داشبۆرد
      canViewDashboard: true,
      
      // تر
      canAccessSafe: true,
      canAddSafeTransaction: true,
      canManageCategoriesUnits: true,
      canGenerateBarcode: true,
      canBackupRestore: true,
      canAccessSettings: true
    };
  }
  
  return currentUser.permissions || null;
}

export async function addUser(user: Omit<User, 'id' | 'createdAt'>) {
  return await db.users.add({
    ...user,
    createdAt: new Date()
  });
}

export async function updateUser(id: number, user: Partial<User>) {
  return await db.users.update(id, user);
}

export async function deleteUser(id: number) {
  return await db.users.delete(id);
}

export async function changePassword(userId: number, newPassword: string) {
  // In production, hash the password
  return await db.users.update(userId, { password: newPassword });
}

// Returns
export function useReturns() {
  return useLiveQuery(() => db.returns.orderBy('date').reverse().toArray());
}

export function useReturn(id: number) {
  return useLiveQuery(() => db.returns.get(id), [id]);
}

export function useReturnsBySale(saleId: number) {
  return useLiveQuery(() => db.returns.where('saleId').equals(saleId).toArray(), [saleId]);
}

export async function addReturn(returnData: Omit<Return, 'id'>) {
  // Ensure returnType is set
  if (!returnData.returnType) {
    returnData.returnType = returnData.saleId ? 'customer' : 'supplier';
  }

  // Add quantities back to products (for customer returns, add to stock; for supplier returns, remove from stock)
  for (const item of returnData.items) {
    const product = await db.products.get(item.productId);
    if (product) {
      if (returnData.returnType === 'customer') {
        // Customer return: add quantity back to stock
        await db.products.update(item.productId, {
          quantity: product.quantity + item.returnQuantity,
          updatedAt: new Date()
        });
      } else {
        // Supplier return: remove quantity from stock
        await db.products.update(item.productId, {
          quantity: Math.max(0, product.quantity - item.returnQuantity),
          updatedAt: new Date()
        });
      }
    }
  }
  
  // Add cash transaction for refund (only for customer returns)
  if (returnData.returnType === 'customer' && returnData.refundAmount > 0) {
    await db.cashTransactions.add({
      type: 'out',
      amount: returnData.refundAmount,
      category: 'گەڕانەوەی کاڵا',
      description: `گەڕانەوەی کاڵا بۆ وەسڵی #${returnData.saleId}`,
      date: new Date(),
      reference: `RETURN-${returnData.saleId}`,
      userId: returnData.userId,
      username: returnData.username
    });
  }

  // For supplier returns, handle payment method
  if (returnData.returnType === 'supplier' && returnData.total > 0) {
    const cashAmount = returnData.cashAmount || 0;
    const debtAmount = returnData.debtAmount || (returnData.total - cashAmount);
    
    // Add cash transaction if cash amount > 0
    if (cashAmount > 0) {
      await db.cashTransactions.add({
        type: 'in',
        amount: cashAmount,
        category: 'گەڕانەوەی کاڵا بۆ دابینکار',
        description: `گەڕانەوەی کاڵا بۆ دابینکار - وەسڵ #${returnData.invoiceNumber || returnData.purchaseId}${debtAmount > 0 ? ` (بەشێک: ${cashAmount.toLocaleString()} دینار)` : ''}`,
        date: new Date(),
        reference: `SUPPLIER-RETURN-${returnData.purchaseId}`,
        userId: returnData.userId,
        username: returnData.username
      });
    }
    
    // Reduce supplier debt if debt amount > 0
    if (debtAmount > 0 && returnData.purchaseId) {
      const purchase = await db.purchases.get(returnData.purchaseId);
      if (purchase && purchase.supplierId) {
        const supplier = await db.suppliers.get(purchase.supplierId);
        if (supplier) {
          await db.suppliers.update(purchase.supplierId, {
            debt: Math.max(0, supplier.debt - debtAmount),
            updatedAt: new Date()
          });
        }
      }
    }
  }
  
  return await db.returns.add(returnData);
}

export async function addSupplierReturn(returnData: Omit<Return, 'id'>) {
  // Ensure returnType is set to supplier
  returnData.returnType = 'supplier';
  return await addReturn(returnData);
}

export async function updateReturn(id: number, returnData: Partial<Return>) {
  return await db.returns.update(id, returnData);
}

export async function deleteReturn(id: number) {
  return await db.returns.delete(id);
}

// Crashed Items
export function useCrashedItems() {
  return useLiveQuery(() => db.crashedItems.orderBy('createdAt').reverse().toArray());
}

export function useCrashedItem(id: number) {
  return useLiveQuery(() => db.crashedItems.get(id), [id]);
}

export function useCrashedItemsByType(type: 'sale' | 'purchase') {
  return useLiveQuery(() => db.crashedItems.where('type').equals(type).reverse().sortBy('createdAt'), [type]);
}

export function usePendingCrashedItems() {
  return useLiveQuery(() => db.crashedItems.where('status').equals('pending').reverse().sortBy('createdAt'));
}

export async function addCrashedItem(crashedItem: Omit<CrashedItem, 'id' | 'createdAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();
  
  const newCrashedItem: CrashedItem = {
    ...crashedItem,
    status: crashedItem.status || 'pending',
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
  };
  
  return await db.crashedItems.add(newCrashedItem);
}

export async function updateCrashedItem(id: number, crashedItem: Partial<CrashedItem>) {
  return await db.crashedItems.update(id, crashedItem);
}

export async function resolveCrashedItem(id: number) {
  return await db.crashedItems.update(id, {
    status: 'resolved',
    resolvedAt: new Date()
  });
}

export async function ignoreCrashedItem(id: number) {
  return await db.crashedItems.update(id, {
    status: 'ignored',
    resolvedAt: new Date()
  });
}

export async function deleteCrashedItem(id: number) {
  return await db.crashedItems.delete(id);
}

// Warranty Records
export function useWarrantyRecords() {
  return useLiveQuery(() => db.warrantyRecords.orderBy('createdAt').reverse().toArray());
}

export function useWarrantyRecord(id: number) {
  return useLiveQuery(() => db.warrantyRecords.get(id), [id]);
}

export function useWarrantyRecordsByProduct(productId: number) {
  return useLiveQuery(() => db.warrantyRecords.where('productId').equals(productId).toArray(), [productId]);
}

export function useWarrantyRecordsByCustomer(customerId: number) {
  return useLiveQuery(() => db.warrantyRecords.where('customerId').equals(customerId).toArray(), [customerId]);
}

export function useActiveWarrantyRecords() {
  return useLiveQuery(() => db.warrantyRecords.where('status').equals('active').toArray());
}

export async function addWarrantyRecord(warrantyData: Omit<WarrantyRecord, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = await getCurrentUser();
  const now = new Date();
  
  const newWarranty: WarrantyRecord = {
    ...warrantyData,
    userId: currentUser?.id,
    username: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };

  return await db.warrantyRecords.add(newWarranty);
}

export async function updateWarrantyRecord(id: number, warrantyData: Partial<WarrantyRecord>) {
  const now = new Date();
  return await db.warrantyRecords.update(id, {
    ...warrantyData,
    updatedAt: now,
  });
}

export async function deleteWarrantyRecord(id: number) {
  return await db.warrantyRecords.delete(id);
}

// Activity Logs - چاودێری کارمەند
export function useActivityLogs() {
  return useLiveQuery(() => db.activityLogs.orderBy('timestamp').reverse().toArray());
}

export function useActivityLogsByUser(userId: number) {
  return useLiveQuery(() => 
    db.activityLogs
      .where('userId')
      .equals(userId)
      .reverse()
      .sortBy('timestamp')
      .then(logs => logs.reverse()),
    [userId]
  );
}

export function useActivityLogsBySection(section: string) {
  return useLiveQuery(() => 
    db.activityLogs
      .where('section')
      .equals(section)
      .reverse()
      .sortBy('timestamp')
      .then(logs => logs.reverse()),
    [section]
  );
}

export async function logActivity(
  section: string,
  action: ActivityLog['action'],
  options?: {
    entityType?: string;
    entityId?: number;
    description?: string;
    details?: any;
  }
) {
  try {
    const currentUser = getCurrentUser();
    const log: Omit<ActivityLog, 'id'> = {
      userId: currentUser?.id,
      username: currentUser?.fullName || currentUser?.username,
      section,
      action,
      entityType: options?.entityType,
      entityId: options?.entityId,
      description: options?.description,
      details: options?.details ? JSON.stringify(options.details) : undefined,
      timestamp: new Date(),
    };
    
    await db.activityLogs.add(log);
  } catch (error) {
    console.error('Error logging activity:', error);
    // Don't throw - activity logging should not break the app
  }
}

// Hook to persist input values in localStorage
export function usePersistedState<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Get the page name from the key or use a generic key
  const storageKey = `page_input_${key}`;
  
  // Initialize state from localStorage
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = localStorage.getItem(storageKey);
      if (item !== null) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.error(`Error loading persisted state for ${storageKey}:`, error);
    }
    return initialValue;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(state));
      } catch (error) {
        console.error(`Error saving persisted state for ${storageKey}:`, error);
      }
    }
  }, [storageKey, state]);

  // Update function that works with both direct values and functions
  const setPersistedState = useCallback((value: T | ((val: T) => T)) => {
    setState(prev => {
      const next = typeof value === 'function' ? (value as (val: T) => T)(prev) : value;
      return next;
    });
  }, []);

  return [state, setPersistedState];
}

// Employee Salaries
export function useEmployeeSalaries() {
  return useLiveQuery(async () => {
    const all = await db.employeeSalaries.toArray();
    return all.filter(s => s.isActive === true);
  });
}

export function useAllEmployeeSalaries() {
  return useLiveQuery(() => db.employeeSalaries.toArray());
}

export function useEmployeeSalary(id: number) {
  return useLiveQuery(() => db.employeeSalaries.get(id), [id]);
}

export async function addEmployeeSalary(salary: Omit<EmployeeSalary, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  const nextPaymentDate = new Date(now);
  
  // Calculate next payment date based on salary type
  if (salary.salaryType === 'daily') {
    nextPaymentDate.setDate(nextPaymentDate.getDate() + 30); // 30 days for daily salary
  } else {
    nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1); // 1 month for monthly salary
  }
  
  const newSalary: EmployeeSalary = {
    ...salary,
    nextPaymentDate,
    createdAt: now,
    updatedAt: now,
  };
  
  return await db.employeeSalaries.add(newSalary);
}

export async function updateEmployeeSalary(id: number, updates: Partial<EmployeeSalary>) {
  const now = new Date();
  await db.employeeSalaries.update(id, {
    ...updates,
    updatedAt: now,
  });
}

export async function deleteEmployeeSalary(id: number) {
  await db.employeeSalaries.update(id, { isActive: false });
}

// Salary Payments
export function useSalaryPayments() {
  return useLiveQuery(() => db.salaryPayments.orderBy('paymentDate').reverse().toArray());
}

export function useSalaryPaymentsByEmployee(employeeSalaryId: number) {
  return useLiveQuery(() => {
    return db.salaryPayments
      .where('employeeSalaryId')
      .equals(employeeSalaryId)
      .reverse()
      .sortBy('paymentDate');
  }, [employeeSalaryId]);
}

export async function addSalaryPayment(payment: Omit<SalaryPayment, 'id' | 'createdAt'>) {
  const currentUser = getCurrentUser();
  const now = new Date();
  
  const newPayment: SalaryPayment = {
    ...payment,
    paidBy: currentUser?.id,
    paidByUsername: currentUser?.fullName,
    createdAt: now,
  };
  
  const paymentId = await db.salaryPayments.add(newPayment);
  
  // Update employee salary last payment date and next payment date
  const salary = await db.employeeSalaries.get(payment.employeeSalaryId);
  if (salary) {
    const nextPaymentDate = new Date(payment.paymentDate);
    if (salary.salaryType === 'daily') {
      nextPaymentDate.setDate(nextPaymentDate.getDate() + 30);
    } else {
      nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
    }
    
    await db.employeeSalaries.update(payment.employeeSalaryId, {
      lastPaymentDate: payment.paymentDate,
      nextPaymentDate,
      updatedAt: now,
    });
  }
  
  return paymentId;
}

// Shop Rent
export function useShopRents() {
  return useLiveQuery(() => db.shopRents.orderBy('paymentDate').reverse().toArray());
}

export function useLatestShopRent() {
  return useLiveQuery(() => db.shopRents.orderBy('paymentDate').reverse().first());
}

export async function addShopRent(rent: Omit<ShopRent, 'id' | 'createdAt' | 'updatedAt'>) {
  const currentUser = getCurrentUser();
  const now = new Date();
  
  const newRent: ShopRent = {
    ...rent,
    paidBy: currentUser?.id,
    paidByUsername: currentUser?.fullName,
    createdAt: now,
    updatedAt: now,
  };
  
  return await db.shopRents.add(newRent);
}

export async function updateShopRent(id: number, updates: Partial<ShopRent>) {
  const now = new Date();
  await db.shopRents.update(id, {
    ...updates,
    updatedAt: now,
  });
}
