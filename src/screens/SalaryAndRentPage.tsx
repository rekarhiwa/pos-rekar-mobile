import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useEmployeeSalaries, useShopRents } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function SalaryAndRentPage() {
  const salaries = useEmployeeSalaries() || [];
  const rents = useShopRents() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  return (
    <ScreenShell title={t.salaryAndRent || 'مەعاش و کرێ'}>
      <Text className={cn('font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>{t.salary || 'مەعاش'}</Text>
      <FlatList
        data={salaries}
        keyExtractor={(s) => String(s.id)}
        scrollEnabled={false}
        renderItem={({ item }) => <ListRow title={item.employeeName} subtitle={item.salaryType} right={formatPrice(item.amount)} />}
      />
      <Text className={cn('font-bold mb-2 mt-4', darkMode ? 'text-white' : 'text-gray-900')}>{t.rent || 'کرێ'}</Text>
      <FlatList
        data={rents}
        keyExtractor={(r) => String(r.id)}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <ListRow
            title={item.notes || t.rent}
            subtitle={item.paymentDate ? new Date(item.paymentDate).toLocaleDateString('ar-IQ') : ''}
            right={formatPrice(item.amount)}
          />
        )}
      />
    </ScreenShell>
  );
}
