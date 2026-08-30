import React, { useMemo } from 'react';
import { FlatList, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { usePurchases } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function PurchaseHistoryPage() {
  const purchases = usePurchases() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const total = useMemo(() => purchases.reduce((s, p) => s + (p.total || 0), 0), [purchases]);

  return (
    <ScreenShell title={t.purchaseHistory || 'مێژووی کڕین'}>
      <Text className={cn('mb-3 font-bold', darkMode ? 'text-white' : 'text-gray-900')}>
        {t.total}: {formatPrice(total)} ({purchases.length})
      </Text>
      <FlatList
        data={purchases}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <ListRow title={item.invoiceNumber || `#${item.id}`} subtitle={item.supplierName} right={formatPrice(item.total)} />
        )}
      />
    </ScreenShell>
  );
}
