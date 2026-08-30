import React from 'react';
import { View, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useStats } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function ReportsPage() {
  const stats = useStats();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  return (
    <ScreenShell title={t.reports}>
      {stats ? (
        <View className="gap-3">
          <Text className={cn('p-4 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
            {t.totalSales}: {stats.total.sales}
          </Text>
          <Text className={cn('p-4 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
            {t.revenue}: {formatPrice(stats.total.revenue)}
          </Text>
          <Text className={cn('p-4 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
            {t.profit}: {formatPrice(stats.total.profit)}
          </Text>
          <Text className={cn('p-4 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
            {t.debt}: {formatPrice(stats.total.debt)}
          </Text>
        </View>
      ) : null}
    </ScreenShell>
  );
}
