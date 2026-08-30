import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useSales, useSettings } from '../hooks';
import { useCurrency } from '../contexts/currency-context';
import { useLanguage } from '../contexts/language-context';
import { buildReceiptHtml, printHtml } from '../services/print';

export default function PrintInvoicesPage() {
  const sales = useSales() || [];
  const settings = useSettings();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();

  const print = async (sale: (typeof sales)[0]) => {
    const html = buildReceiptHtml({
      shopName: settings?.shopName || 'POS',
      shopPhone: settings?.shopPhone,
      items: (sale.items || []).map((i) => ({
        name: i.name,
        qty: i.cartQuantity,
        price: i.price,
        total: i.price * i.cartQuantity,
      })),
      total: sale.total,
      paid: sale.paid,
      invoiceNumber: sale.invoiceNumber,
    });
    await printHtml(html);
  };

  return (
    <ScreenShell title="پرێنتکردنی وەسڵ">
      <FlatList
        data={[...sales].reverse().slice(0, 50)}
        keyExtractor={(s) => String(s.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => print(item)}>
            <ListRow
              title={item.invoiceNumber || item.customId || `#${item.id}`}
              subtitle={item.customerName}
              right={formatPrice(item.total)}
            />
          </TouchableOpacity>
        )}
      />
    </ScreenShell>
  );
}
