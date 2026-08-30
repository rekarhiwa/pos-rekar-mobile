import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useWarrantyRecords } from '../hooks';
import { useLanguage } from '../contexts/language-context';

export default function WarrantyPage() {
  const records = useWarrantyRecords() || [];
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.warranties || 'زەمانەکان'}>
      <FlatList
        data={records}
        keyExtractor={(w) => String(w.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.productName}
            subtitle={`${item.customerName} • ${item.status}`}
            right={item.endDate ? new Date(item.endDate).toLocaleDateString('ar-IQ') : ''}
          />
        )}
      />
    </ScreenShell>
  );
}
