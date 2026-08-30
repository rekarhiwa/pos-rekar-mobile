import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { usePurchases } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function PurchasesPage() {
  const purchases = usePurchases() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  return (
    <ScreenShell title={t.purchases}>
      <FlatList
        data={purchases}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.supplierName || t.supplier || 'دابینکەر'}
            subtitle={item.date ? new Date(item.date).toLocaleDateString('ar-IQ') : ''}
            right={formatPrice(item.total)}
          />
        )}
      />
    </ScreenShell>
  );
}
