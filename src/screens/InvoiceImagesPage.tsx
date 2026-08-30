import React from 'react';
import { FlatList, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { usePurchases } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function InvoiceImagesPage() {
  const purchases = usePurchases() || [];
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const withImages = purchases.filter((p) => p.invoiceImage || (p.invoiceImages && p.invoiceImages.length));

  return (
    <ScreenShell title="وێنەی وەسڵەکان">
      <FlatList
        data={withImages}
        keyExtractor={(p) => String(p.id)}
        ListEmptyComponent={
          <Text className={cn('text-center py-8', darkMode ? 'text-gray-400' : 'text-gray-500')}>
            {t.noResults || 'هیچ وێنەیەک نییە'}
          </Text>
        }
        renderItem={({ item }) => (
          <ListRow title={item.invoiceNumber || `#${item.id}`} subtitle={item.supplierName} right={item.invoiceImage ? '📷' : ''} />
        )}
      />
    </ScreenShell>
  );
}
