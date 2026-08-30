import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useSales } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function InvoicesPage() {
  const sales = useSales() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.invoicesMenu || t.invoices || 'وەسڵەکان'}>
      <FlatList
        data={[...sales].reverse()}
        keyExtractor={(s) => String(s.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.invoiceNumber || item.customId || `#${item.id}`}
            subtitle={item.customerName}
            right={formatPrice(item.total)}
          />
        )}
      />
    </ScreenShell>
  );
}
