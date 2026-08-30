import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useLowStockProducts } from '../hooks';
import { useLanguage } from '../contexts/language-context';

export default function LowStockProductsPage() {
  const lowStock = useLowStockProducts() || [];
  const { t } = useLanguage();

  return (
    <ScreenShell title="کاڵا کەمبووەکان">
      <FlatList
        data={lowStock}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <ListRow title={item.name} subtitle={item.category} right={String(item.quantity ?? 0)} />
        )}
        ListEmptyComponent={<ListRow title={t.noResults || 'هیچ نییە'} />}
      />
    </ScreenShell>
  );
}
