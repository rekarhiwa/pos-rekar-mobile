import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useProducts } from '../hooks';
import { useLanguage } from '../contexts/language-context';

export default function ExpiredProductsPage() {
  const products = useProducts() || [];
  const { t } = useLanguage();
  const now = new Date();

  const expired = useMemo(
    () => products.filter((p) => p.expirationDate && new Date(p.expirationDate) < now),
    [products, now]
  );

  return (
    <ScreenShell title={t.expiredProducts || 'بەسەرچووەکان'}>
      <FlatList
        data={expired}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.name}
            subtitle={item.expirationDate ? new Date(item.expirationDate).toLocaleDateString('ar-IQ') : ''}
            right={String(item.quantity ?? 0)}
          />
        )}
      />
    </ScreenShell>
  );
}
