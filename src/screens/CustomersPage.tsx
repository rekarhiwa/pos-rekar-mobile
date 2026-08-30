import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useCustomers, addCustomer } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function CustomersPage() {
  const customers = useCustomers() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const save = async () => {
    if (!name.trim()) return;
    await addCustomer({ name: name.trim(), phone: phone.trim(), debt: 0 } as any);
    setName('');
    setPhone('');
    setShowAdd(false);
  };

  return (
    <ScreenShell
      title={t.customers}
      headerRight={
        <TouchableOpacity onPress={() => setShowAdd(true)}>
          <Text className="text-blue-600 font-bold text-lg">+</Text>
        </TouchableOpacity>
      }
    >
      <FlatList
        data={customers}
        keyExtractor={(c) => String(c.id)}
        renderItem={({ item }) => (
          <View className={cn('p-3 mb-2 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
            <Text className={cn('font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>{item.name}</Text>
            <Text className="text-gray-500">{item.phone}</Text>
            {(item.debt || 0) > 0 ? (
              <Text className="text-red-500">{t.debt}: {formatPrice(item.debt)}</Text>
            ) : null}
          </View>
        )}
      />
      <Modal visible={showAdd} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className={cn('p-6 rounded-t-2xl', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <TextInput
              className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')}
              placeholder={t.customerName || 'ناو'}
              placeholderTextColor="#9ca3af"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')}
              placeholder={t.phone || 'مۆبایل'}
              placeholderTextColor="#9ca3af"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center mb-2">
              <Text className="text-white font-bold">{t.save}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowAdd(false)}>
              <Text className="text-center text-gray-500">{t.cancel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenShell>
  );
}
