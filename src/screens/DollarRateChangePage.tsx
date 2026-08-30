import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useSettings } from '../hooks';
import { db } from '../db/db';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function DollarRateChangePage() {
  const settings = useSettings();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [rate, setRate] = useState('');

  useEffect(() => {
    if (settings?.dollarRate) setRate(String(settings.dollarRate));
  }, [settings]);

  const save = async () => {
    const v = parseFloat(rate);
    if (!v) return;
    if (settings?.id) await db.settings.update(settings.id, { dollarRate: v });
  };

  return (
    <ScreenShell title={t.dollarRateChange || 'گۆڕانی نرخی دۆلار'}>
      <TextInput
        className={cn('border rounded-lg px-3 py-3 mb-4 text-lg', darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white')}
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
        placeholder={t.dollarRate}
        placeholderTextColor="#9ca3af"
      />
      <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center">
        <Text className="text-white font-bold">{t.save}</Text>
      </TouchableOpacity>
    </ScreenShell>
  );
}
