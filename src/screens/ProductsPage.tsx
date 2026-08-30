import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenShell from '../components/ScreenShell';
import { useProducts, deleteProduct } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { showConfirm } from '../lib/modern-alerts';
import { cn } from '../lib/cn';

export default function ProductsPage() {
  const products = useProducts() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.barcode?.toLowerCase().includes(q)
    );
  }, [products, search]);

  const onDelete = async (id: number, name: string) => {
    const ok = await showConfirm(t.confirmDelete || 'دڵنیایت؟', name);
    if (ok) await deleteProduct(id);
  };

  return (
    <ScreenShell
      title={t.products}
      headerRight={
        <TouchableOpacity onPress={() => navigation.navigate('add-product')}>
          <Text className="text-blue-600 font-semibold">+</Text>
        </TouchableOpacity>
      }
    >
      <TextInput
        className={cn(
          'border rounded-lg px-3 py-2 mb-3',
          darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white'
        )}
        placeholder={t.search || 'گەڕان...'}
        placeholderTextColor="#9ca3af"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('add-product', { productId: item.id })}
            onLongPress={() => item.id && onDelete(item.id, item.name)}
            className={cn(
              'p-3 mb-2 rounded-lg border flex-row justify-between',
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            )}
          >
            <View className="flex-1">
              <Text className={cn('font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>{item.name}</Text>
              <Text className="text-gray-500 text-sm">{item.category || '-'}</Text>
            </View>
            <View className="items-end">
              <Text className="text-blue-600">{formatPrice(item.baseRetailPrice || item.price || 0)}</Text>
              <Text className="text-gray-500 text-sm">{(item.quantity || 0).toLocaleString()}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenShell>
  );
}
