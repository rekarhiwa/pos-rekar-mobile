import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useInstallments } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function InstallmentsPage() {
  const installments = useInstallments() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.installments || 'قیستەکان'}>
      <FlatList
        data={installments}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.customerName}
            subtitle={`${item.status} • ${item.numberOfMonths} ${t.months || 'مانگ'}`}
            right={formatPrice(item.remainingAmount)}
          />
        )}
      />
    </ScreenShell>
  );
}
