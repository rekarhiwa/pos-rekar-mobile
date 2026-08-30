import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useProducts, updateProduct } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function InventoryAdjustmentPage() {
  const products = useProducts() || [];
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [delta, setDelta] = useState('');

  const selected = products.find((p) => p.id === selectedId);

  const apply = async () => {
    if (!selected?.id) return;
    const d = parseFloat(delta);
    if (isNaN(d)) return;
    await updateProduct(selected.id, { quantity: (selected.quantity || 0) + d });
    setDelta('');
    setSelectedId(null);
  };

  return (
    <ScreenShell title={t.inventoryAdjustment || 'جەردی کۆگا'}>
      {selected ? (
        <View className={cn('p-4 rounded-xl mb-4 border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
          <Text className={cn('font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>{selected.name}</Text>
          <Text className="text-gray-500 mb-3">{t.quantity}: {selected.quantity}</Text>
          <TextInput
            className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')}
            placeholder="+/- بڕ"
            value={delta}
            onChangeText={setDelta}
            keyboardType="numeric"
            placeholderTextColor="#9ca3af"
          />
          <TouchableOpacity onPress={apply} className="bg-blue-600 rounded-lg py-3 items-center mb-2">
            <Text className="text-white font-bold">{t.apply || 'جێبەجێکردن'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedId(null)}>
            <Text className="text-center text-gray-500">{t.cancel}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(p) => String(p.id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedId(item.id!)}
              className={cn('p-3 mb-2 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}
            >
              <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{item.name}</Text>
              <Text className="text-gray-500">{item.quantity}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </ScreenShell>
  );
}
