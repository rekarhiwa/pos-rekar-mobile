import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useReturns } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function ReturnsPage() {
  const returns = useReturns() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.returns}>
      <FlatList
        data={returns}
        keyExtractor={(r) => String(r.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.returnType || t.returns}
            subtitle={item.reason}
            right={formatPrice(item.total)}
          />
        )}
      />
    </ScreenShell>
  );
}
