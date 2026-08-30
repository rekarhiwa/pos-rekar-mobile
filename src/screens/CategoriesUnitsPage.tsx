import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function CategoriesUnitsPage() {
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [categories, setCategories] = useState('');
  const [units, setUnits] = useState('');

  useEffect(() => {
    setCategories(localStorage.getItem('pos_categories') || '[]');
    setUnits(localStorage.getItem('pos_units') || '[]');
  }, []);

  const save = () => {
    localStorage.setItem('pos_categories', categories);
    localStorage.setItem('pos_units', units);
  };

  const inputCls = cn('border rounded-lg px-3 py-2 mb-3 min-h-[100px]', darkMode ? 'border-gray-600 text-white bg-gray-800' : 'border-gray-300 bg-white');

  return (
    <ScreenShell title={t.categoriesAndUnits}>
      <ScrollView>
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>JSON {t.categories}</Text>
        <TextInput className={inputCls} value={categories} onChangeText={setCategories} multiline />
        <Text className={cn('mb-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>JSON {t.units || 'یەکەکان'}</Text>
        <TextInput className={inputCls} value={units} onChangeText={setUnits} multiline />
        <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center">
          <Text className="text-white font-bold">{t.save}</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenShell>
  );
}
