import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ScreenShell from '../components/ScreenShell';
import { useProduct, addProduct, updateProduct } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function AddProductPage() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const productId = route.params?.productId as number | undefined;
  const existing = useProduct(productId || 0);
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  const [name, setName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [category, setCategory] = useState('');
  const [retail, setRetail] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (existing && productId) {
      setName(existing.name || '');
      setBarcode(existing.barcode || existing.barcodes?.[0] || '');
      setCategory(existing.category || '');
      setRetail(String(existing.baseRetailPrice || existing.price || ''));
      setCost(String(existing.cost || ''));
      setQuantity(String(existing.quantity || ''));
    }
  }, [existing, productId]);

  const inputCls = cn(
    'border rounded-lg px-3 py-2 mb-3',
    darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white text-gray-900'
  );

  const save = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      const payload = {
        name: name.trim(),
        barcode: barcode.trim(),
        barcodes: barcode.trim() ? [barcode.trim()] : [],
        category: category.trim() || 'گشتی',
        baseUnit: 'دانە',
        units: [],
        quantity: parseFloat(quantity) || 0,
        baseRetailPrice: parseFloat(retail) || 0,
        baseWholesalePrice: parseFloat(retail) || 0,
        baseSpecialPrice: parseFloat(retail) || 0,
        cost: parseFloat(cost) || 0,
        price: parseFloat(retail) || 0,
      };
      if (productId) {
        await updateProduct(productId, payload);
      } else {
        await addProduct(payload as any);
      }
      navigation.goBack();
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScreenShell title={productId ? t.editProduct || 'دەستکاری' : t.addProduct} onBack={() => navigation.goBack()}>
      <ScrollView>
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.productName || 'ناو'}</Text>
        <TextInput className={inputCls} value={name} onChangeText={setName} />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.barcode || 'بارکۆد'}</Text>
        <TextInput className={inputCls} value={barcode} onChangeText={setBarcode} />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.category || 'جۆر'}</Text>
        <TextInput className={inputCls} value={category} onChangeText={setCategory} />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.retailPrice || 'نرخ'}</Text>
        <TextInput className={inputCls} value={retail} onChangeText={setRetail} keyboardType="numeric" />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.cost || 'تێچوو'}</Text>
        <TextInput className={inputCls} value={cost} onChangeText={setCost} keyboardType="numeric" />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>{t.quantity || 'بڕ'}</Text>
        <TextInput className={inputCls} value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
        <TouchableOpacity onPress={save} disabled={saving} className="bg-blue-600 rounded-lg py-3 items-center mt-2">
          {saving ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-bold">{t.save || 'پاشەکەوت'}</Text>}
        </TouchableOpacity>
      </ScrollView>
    </ScreenShell>
  );
}
