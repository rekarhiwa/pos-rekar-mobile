import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Sharing from 'expo-sharing';
import ScreenShell from '../components/ScreenShell';
import { useProducts } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function BarcodeGeneratorPage() {
  const products = useProducts() || [];
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [query, setQuery] = useState('');
  const product = products.find((p) => p.name?.includes(query) || p.barcode === query);

  const share = async () => {
    if (!product?.barcode) return;
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(undefined as any, { dialogTitle: product.barcode }).catch(() => {});
    }
  };

  return (
    <ScreenShell title={t.barcodeGenerator || 'بارکۆد'}>
      <TextInput
        className={cn('border rounded-lg px-3 py-2 mb-4', darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white')}
        placeholder={t.searchProduct}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="#9ca3af"
      />
      {product ? (
        <View className={cn('p-6 rounded-xl items-center border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
          <Text className={cn('text-lg font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>{product.name}</Text>
          <Text className="text-2xl tracking-widest text-blue-600">{product.barcode || product.barcodes?.[0] || '-'}</Text>
          <TouchableOpacity onPress={share} className="mt-4 bg-blue-600 px-6 py-2 rounded-lg">
            <Text className="text-white">{t.share || 'هاوبەشکردن'}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text className="text-gray-500 text-center">{t.noResults || 'هیچ نەدۆزرایەوە'}</Text>
      )}
    </ScreenShell>
  );
}
