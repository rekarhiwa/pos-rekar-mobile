import React from 'react';
import { View, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useStats } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

function StatCard({
  label,
  value,
  darkMode,
}: {
  label: string;
  value: string;
  darkMode: boolean;
}) {
  return (
    <View
      className={cn(
        'flex-1 min-w-[45%] rounded-xl p-4 m-1 border',
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      )}
    >
      <Text className={cn('text-sm mb-1', darkMode ? 'text-gray-400' : 'text-gray-500')}>{label}</Text>
      <Text className={cn('text-lg font-bold', darkMode ? 'text-white' : 'text-gray-900')}>{value}</Text>
    </View>
  );
}

export default function DashboardPage() {
  const stats = useStats();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  if (!stats) {
    return (
      <ScreenShell title={t.dashboard}>
        <Text className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.loading || '...'}</Text>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell title={t.dashboard}>
      <Text className={cn('text-base font-semibold mb-3', darkMode ? 'text-white' : 'text-gray-800')}>
        {t.today || 'ئەمڕۆ'}
      </Text>
      <View className="flex-row flex-wrap">
        <StatCard darkMode={darkMode} label={t.sales || 'فرۆشتن'} value={String(stats.today.sales)} />
        <StatCard darkMode={darkMode} label={t.revenue || 'داهات'} value={formatPrice(stats.today.revenue)} />
        <StatCard darkMode={darkMode} label={t.profit || 'قازانج'} value={formatPrice(stats.today.profit)} />
      </View>

      <Text className={cn('text-base font-semibold mb-3 mt-4', darkMode ? 'text-white' : 'text-gray-800')}>
        {t.total || 'کۆی گشتی'}
      </Text>
      <View className="flex-row flex-wrap">
        <StatCard darkMode={darkMode} label={t.products} value={String(stats.total.products)} />
        <StatCard darkMode={darkMode} label={t.customers} value={String(stats.total.customers)} />
        <StatCard darkMode={darkMode} label={t.debt || 'قەرز'} value={formatPrice(stats.total.debt)} />
        <StatCard
          darkMode={darkMode}
          label={t.lowStock || 'کەمبوو'}
          value={String(stats.lowStockProducts.length)}
        />
      </View>
    </ScreenShell>
  );
}
