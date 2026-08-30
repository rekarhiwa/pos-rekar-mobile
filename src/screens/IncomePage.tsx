import React from 'react';
import { Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useStats } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function IncomePage() {
  const stats = useStats();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  return (
    <ScreenShell title={t.income || 'داهات'}>
      <Text className={cn('text-2xl font-bold p-4 rounded-xl border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
        {t.today}: {formatPrice(stats?.today.profit ?? 0)}
      </Text>
      <Text className={cn('text-lg mt-4 p-4 rounded-xl border', darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200')}>
        {t.total}: {formatPrice(stats?.total.profit ?? 0)}
      </Text>
    </ScreenShell>
  );
}
