import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useProducts, useCustomers, addSale, getCurrentUser } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { useSettings } from '../hooks';
import type { Product, Customer, SaleItem } from '../db/db';
import { buildReceiptHtml, printHtml } from '../services/print';
import { cn } from '../lib/cn';

interface CartItem extends SaleItem {
  id: number;
  lineTotal: number;
}

export default function POSPage() {
  const products = useProducts() || [];
  const customers = useCustomers() || [];
  const settings = useSettings();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPay, setShowPay] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomers, setShowCustomers] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('pos_current_cart');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) setCart(parsed);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('pos_current_cart', JSON.stringify(cart));
  }, [cart]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products.slice(0, 50);
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.barcode?.toLowerCase().includes(q) ||
        (p.barcodes || []).some((b) => b.toLowerCase().includes(q))
    );
  }, [products, search]);

  const total = cart.reduce((s, i) => s + i.lineTotal, 0);
  const profit = cart.reduce((s, i) => s + (i.price - i.cost) * i.cartQuantity, 0);

  const addToCart = (product: Product) => {
    const price = product.baseRetailPrice || product.price || 0;
    const cost = product.cost || 0;
    const unit = product.baseUnit || 'دانە';
    setCart((prev) => {
      const idx = prev.findIndex((c) => c.productId === product.id && c.unit === unit);
      if (idx >= 0) {
        const next = [...prev];
        const qty = next[idx].cartQuantity + 1;
        next[idx] = { ...next[idx], cartQuantity: qty, lineTotal: qty * price };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id!,
          productId: product.id!,
          name: product.name,
          barcode: product.barcode || product.barcodes?.[0] || '',
          price,
          cost,
          cartQuantity: 1,
          discount: 0,
          unit,
          lineTotal: price,
        },
      ];
    });
  };

  const updateQty = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.productId !== productId) return c;
          const qty = Math.max(0, c.cartQuantity + delta);
          return { ...c, cartQuantity: qty, lineTotal: qty * c.price };
        })
        .filter((c) => c.cartQuantity > 0)
    );
  };

  const completeSale = async (method: 'cash' | 'debt' = 'cash') => {
    if (!cart.length || processing) return;
    if (method === 'debt' && !selectedCustomer) {
      setShowCustomers(true);
      return;
    }
    setProcessing(true);
    try {
      const user = getCurrentUser();
      const items: SaleItem[] = cart.map(({ lineTotal: _lt, id: _id, ...rest }) => rest);
      const paid = method === 'cash' ? total : 0;
      const remaining = method === 'debt' ? total : 0;
      const invoiceNumber = localStorage.getItem('pos_invoice_number') || undefined;
      await addSale({
        date: new Date(),
        total,
        paid,
        remaining,
        items,
        paymentMethod: method,
        profit,
        currency: 'IQD',
        customerId: selectedCustomer?.id,
        customerName: selectedCustomer?.name,
        userId: user?.id,
        username: user?.fullName,
        invoiceNumber,
      });
      const html = buildReceiptHtml({
        shopName: settings?.shopName || 'Kurdish POS',
        shopPhone: settings?.shopPhone,
        items: cart.map((c) => ({
          name: c.name,
          qty: c.cartQuantity,
          price: c.price,
          total: c.lineTotal,
        })),
        total,
        paid,
        invoiceNumber,
      });
      await printHtml(html);
      setCart([]);
      localStorage.setItem('pos_current_cart', '[]');
      setShowPay(false);
    } catch (e) {
      console.error(e);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <ScreenShell title={t.pos}>
      <TextInput
        className={cn(
          'border rounded-lg px-3 py-2 mb-3',
          darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white text-gray-900'
        )}
        placeholder={t.searchProduct || 'گەڕان بۆ کاڵا...'}
        placeholderTextColor="#9ca3af"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(p) => String(p.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-28 mb-3"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => addToCart(item)}
            className={cn(
              'mr-2 p-3 rounded-lg min-w-[120px] border',
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            )}
          >
            <Text className={cn('font-semibold', darkMode ? 'text-white' : 'text-gray-900')} numberOfLines={2}>
              {item.name}
            </Text>
            <Text className="text-blue-600 text-sm">{formatPrice(item.baseRetailPrice || item.price || 0)}</Text>
            <Text className="text-gray-500 text-xs">{(item.quantity || 0).toLocaleString()}</Text>
          </TouchableOpacity>
        )}
      />

      <Text className={cn('font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>
        {t.cart || 'سەبەتە'} ({cart.length})
      </Text>
      <FlatList
        data={cart}
        keyExtractor={(c) => String(c.productId)}
        className="flex-1 min-h-[200px]"
        ListEmptyComponent={
          <Text className="text-gray-500 text-center py-8">{t.emptyCart || 'سەبەتە بەتاڵە'}</Text>
        }
        renderItem={({ item }) => (
          <View
            className={cn(
              'flex-row items-center justify-between p-3 mb-2 rounded-lg border',
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            )}
          >
            <View className="flex-1">
              <Text className={darkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'}>{item.name}</Text>
              <Text className="text-gray-500 text-sm">{formatPrice(item.price)}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={() => updateQty(item.productId, -1)} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
                <Text>-</Text>
              </TouchableOpacity>
              <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{item.cartQuantity}</Text>
              <TouchableOpacity onPress={() => updateQty(item.productId, 1)} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <Text className={cn('font-bold ml-2', darkMode ? 'text-white' : 'text-gray-900')}>
              {formatPrice(item.lineTotal)}
            </Text>
          </View>
        )}
      />

      <View className={cn('p-4 rounded-xl mt-2 border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
        <Text className={cn('text-xl font-bold text-center mb-3', darkMode ? 'text-white' : 'text-gray-900')}>
          {t.total}: {formatPrice(total)}
        </Text>
        <TouchableOpacity
          onPress={() => setShowPay(true)}
          disabled={!cart.length}
          className={cn('bg-green-600 rounded-lg py-3 items-center', !cart.length && 'opacity-50')}
        >
          <Text className="text-white font-bold text-lg">{t.checkout || 'تەواوکردن'}</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showPay} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className={cn('rounded-t-2xl p-6', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <Text className={cn('text-xl font-bold mb-4 text-center', darkMode ? 'text-white' : 'text-gray-900')}>
              {formatPrice(total)}
            </Text>
            <TouchableOpacity
              onPress={() => completeSale('cash')}
              className="bg-green-600 rounded-lg py-3 mb-3 items-center"
            >
              {processing ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-bold">{t.cash || 'نەقد'}</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => completeSale('debt')}
              className="bg-amber-600 rounded-lg py-3 mb-3 items-center"
            >
              <Text className="text-white font-bold">{t.debt || 'قەرز'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowCustomers(true)} className="mb-3">
              <Text className="text-blue-600 text-center">
                {selectedCustomer ? selectedCustomer.name : t.selectCustomer || 'هەڵبژاردنی کڕیار'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPay(false)}>
              <Text className="text-gray-500 text-center">{t.cancel || 'داخستن'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={showCustomers} transparent animationType="slide">
        <View className="flex-1 bg-black/40 justify-end">
          <View className={cn('rounded-t-2xl p-4 max-h-96', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <FlatList
              data={customers}
              keyExtractor={(c) => String(c.id)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-3 border-b border-gray-200 dark:border-gray-700"
                  onPress={() => {
                    setSelectedCustomer(item);
                    setShowCustomers(false);
                  }}
                >
                  <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{item.name}</Text>
                  <Text className="text-gray-500">{item.phone}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowCustomers(false)} className="py-3">
              <Text className="text-center text-blue-600">{t.close || 'داخستن'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenShell>
  );
}
