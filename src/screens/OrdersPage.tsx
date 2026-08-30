import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useOrders } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function OrdersPage() {
  const orders = useOrders() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={(t as any).orders || 'ئۆردەرەکان'}>
      <FlatList
        data={orders}
        keyExtractor={(o) => String(o.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.orderNumber || item.customerName}
            subtitle={item.orderStatus}
            right={formatPrice(item.totalAmount)}
          />
        )}
      />
    </ScreenShell>
  );
}
