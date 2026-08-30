import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useCrashedItems } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function CrashedItemsPage() {
  const items = useCrashedItems() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.crashedItems || 'هەڵەکان'}>
      <FlatList
        data={items}
        keyExtractor={(c) => String(c.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.type}
            subtitle={item.errorMessage}
            right={`${item.status} • ${formatPrice(item.total)}`}
          />
        )}
      />
    </ScreenShell>
  );
}
