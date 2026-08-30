import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useSales } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function ViewReportsPage() {
  const sales = useSales() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  const recent = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    return sales.filter((s) => new Date(s.date) >= cutoff);
  }, [sales]);

  return (
    <ScreenShell title={t.viewReports || 'ڕاپۆرت'}>
      <FlatList
        data={recent}
        keyExtractor={(s) => String(s.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.customerName || item.customId || `#${item.id}`}
            subtitle={new Date(item.date).toLocaleDateString('ar-IQ')}
            right={formatPrice(item.total)}
          />
        )}
      />
    </ScreenShell>
  );
}
