import React, { useState } from 'react';
import { FlatList, TextInput, Text, View } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useProducts } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function ShelfBarcodePage() {
  const products = useProducts() || [];
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [q, setQ] = useState('');

  const filtered = products.filter((p) => !q || p.name?.includes(q));

  return (
    <ScreenShell title="بارکۆدی رەفە">
      <TextInput
        className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white')}
        placeholder={t.search}
        value={q}
        onChangeText={setQ}
        placeholderTextColor="#9ca3af"
      />
      <FlatList
        data={filtered}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <View className={cn('p-4 mb-2 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
            <Text className={cn('font-bold', darkMode ? 'text-white' : 'text-gray-900')}>{item.name}</Text>
            <Text className="text-blue-600 text-lg mt-1">{item.barcode || item.barcodes?.[0] || '-'}</Text>
          </View>
        )}
      />
    </ScreenShell>
  );
}
