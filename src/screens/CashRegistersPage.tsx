import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useCashRegisters } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';

export default function CashRegistersPage() {
  const registers = useCashRegisters() || [];
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.cashRegisters || 'قاسەکان'}>
      <FlatList
        data={registers}
        keyExtractor={(r) => String(r.id)}
        renderItem={({ item }) => (
          <ListRow title={item.name} subtitle={item.isActive ? t.active || 'چالاک' : t.inactive || 'ناچالاک'} right={formatPrice(item.currentBalance ?? 0)} />
        )}
      />
    </ScreenShell>
  );
}
