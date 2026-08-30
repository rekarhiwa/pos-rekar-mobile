import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useSales } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function SalesHistoryPage() {
  const sales = useSales() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.salesHistory || 'مێژووی فرۆشتن'}>
      <FlatList
        data={[...sales].reverse()}
        keyExtractor={(s) => String(s.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.customerName || item.customId || `#${item.id}`}
            subtitle={`${new Date(item.date).toLocaleDateString('ar-IQ')} • ${item.paymentMethod}`}
            right={formatPrice(item.total)}
          />
        )}
      />
    </ScreenShell>
  );
}
