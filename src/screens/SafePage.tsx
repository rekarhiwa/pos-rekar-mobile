import React from 'react';
import { FlatList, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useCashTransactions, useCashBalance } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function SafePage() {
  const txs = useCashTransactions() || [];
  const balance = useCashBalance();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  return (
    <ScreenShell title={t.safe || 'قاسە'}>
      <Text className={cn('text-xl font-bold mb-4', darkMode ? 'text-white' : 'text-gray-900')}>
        {t.balance || 'باڵانس'}: {formatPrice(balance ?? 0)}
      </Text>
      <FlatList
        data={txs}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.description || item.category || item.type}
            subtitle={item.date ? new Date(item.date).toLocaleDateString('ar-IQ') : ''}
            right={formatPrice(item.amount)}
          />
        )}
      />
    </ScreenShell>
  );
}
