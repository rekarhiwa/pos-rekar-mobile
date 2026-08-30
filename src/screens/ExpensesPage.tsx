import React, { useState } from 'react';
import { FlatList, Modal, TextInput, TouchableOpacity, Text, View } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useExpenses, addExpense } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function ExpensesPage() {
  const expenses = useExpenses() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const save = async () => {
    const a = parseFloat(amount);
    if (!a) return;
    await addExpense({
      amount: a,
      category: category || 'گشتی',
      description: '',
      date: new Date(),
      createdBy: '',
      createdAt: new Date(),
    } as any);
    setShow(false);
    setAmount('');
  };

  return (
    <ScreenShell
      title={t.expenses}
      headerRight={
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text className="text-blue-600 text-lg font-bold">+</Text>
        </TouchableOpacity>
      }
    >
      <FlatList
        data={expenses}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => (
          <ListRow title={item.category || ''} subtitle={item.description} right={formatPrice(item.amount)} />
        )}
      />
      <Modal visible={show} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className={cn('p-6 rounded-t-2xl', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <TextInput
              className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')}
              placeholder={t.amount}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholderTextColor="#9ca3af"
            />
            <TextInput
              className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')}
              placeholder={t.category}
              value={category}
              onChangeText={setCategory}
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center">
              <Text className="text-white font-bold">{t.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenShell>
  );
}
