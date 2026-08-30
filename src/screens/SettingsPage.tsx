import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useSettings } from '../hooks';
import { db } from '../db/db';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { useFontSize } from '../contexts/font-size-context';
import type { Language } from '../lib/translations';
import { cn } from '../lib/cn';

export default function SettingsPage() {
  const settings = useSettings();
  const { t, language, setLanguage } = useLanguage();
  const { darkMode, setDarkMode } = useDarkMode();
  const { fontSize, setFontSize } = useFontSize();
  const [shopName, setShopName] = useState('');
  const [shopPhone, setShopPhone] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [dollarRate, setDollarRate] = useState('');

  useEffect(() => {
    if (settings) {
      setShopName(settings.shopName || '');
      setShopPhone(settings.shopPhone || '');
      setShopAddress(settings.shopAddress || '');
      setDollarRate(String(settings.dollarRate || 1500));
    }
  }, [settings]);

  const inputCls = cn(
    'border rounded-lg px-3 py-2 mb-3',
    darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white'
  );

  const save = async () => {
    const payload = {
      shopName,
      shopPhone,
      shopAddress,
      dollarRate: parseFloat(dollarRate) || 1500,
      language,
      darkMode,
      fontSize,
    };
    if (settings?.id) await db.settings.update(settings.id, payload);
    else await db.settings.add({ ...payload, currency: 'IQD', lowStockThreshold: 10 } as any);
  };

  const langs: Language[] = ['ku-sorani', 'ku-badini', 'ar-iq', 'en-gb'];

  return (
    <ScreenShell title={t.settings}>
      <ScrollView>
        <TextInput className={inputCls} value={shopName} onChangeText={setShopName} placeholder={t.shopName || 'ناوی دوکان'} placeholderTextColor="#9ca3af" />
        <TextInput className={inputCls} value={shopPhone} onChangeText={setShopPhone} placeholder={t.shopPhone || 'تەلەفۆن'} placeholderTextColor="#9ca3af" />
        <TextInput className={inputCls} value={shopAddress} onChangeText={setShopAddress} placeholder={t.shopAddress || 'ناونیشان'} placeholderTextColor="#9ca3af" />
        <TextInput className={inputCls} value={dollarRate} onChangeText={setDollarRate} placeholder={t.dollarRate || 'نرخی دۆلار'} keyboardType="numeric" placeholderTextColor="#9ca3af" />

        <Text className={cn('mb-2 font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>{t.language}</Text>
        <View className="flex-row flex-wrap gap-2 mb-4">
          {langs.map((l) => (
            <TouchableOpacity key={l} onPress={() => setLanguage(l)} className={cn('px-3 py-2 rounded-lg border', language === l ? 'bg-blue-600 border-blue-600' : darkMode ? 'border-gray-600' : 'border-gray-300')}>
              <Text className={language === l ? 'text-white' : darkMode ? 'text-gray-300' : 'text-gray-700'}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={() => setDarkMode(!darkMode)} className={cn('py-3 px-4 rounded-lg mb-3 border', darkMode ? 'border-gray-600' : 'border-gray-300')}>
          <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{darkMode ? t.lightMode || 'ڕووناک' : t.darkMode || 'تاریک'}</Text>
        </TouchableOpacity>

        <View className="flex-row gap-2 mb-4">
          {(['small', 'medium', 'large'] as const).map((s) => (
            <TouchableOpacity key={s} onPress={() => setFontSize(s)} className={cn('flex-1 py-2 rounded-lg border items-center', fontSize === s ? 'bg-blue-600 border-blue-600' : darkMode ? 'border-gray-600' : 'border-gray-300')}>
              <Text className={fontSize === s ? 'text-white' : darkMode ? 'text-gray-300' : 'text-gray-700'}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center">
          <Text className="text-white font-bold">{t.save}</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenShell>
  );
}
