import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
} from 'react-native';
import { ShoppingCart, Key, Eye, EyeOff, Zap, Globe } from 'lucide-react-native';
import { activateLicenseDetailed } from '../db/db';
import { QUICK_TRIAL_KEY } from '../lib/license-keys';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import type { Language } from '../lib/translations';
import { cn } from '../lib/cn';

interface Props {
  onActivated: () => void;
}

const LANGUAGES: { id: Language; label: string }[] = [
  { id: 'ku-sorani', label: 'سۆرانی' },
  { id: 'ku-badini', label: 'بادینی' },
  { id: 'ar-iq', label: 'عەرەبی' },
  { id: 'en-gb', label: 'English' },
];

export default function LicenseScreen({ onActivated }: Props) {
  const { t, language, setLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [quickTrialUsed, setQuickTrialUsed] = useState(false);
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    setQuickTrialUsed(localStorage.getItem('quickTrialUsed') === 'true');
  }, []);

  const formatKey = (value: string) => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const parts = [];
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 3));
    if (cleaned.length > 3) parts.push(cleaned.slice(3, 7));
    if (cleaned.length > 7) parts.push(cleaned.slice(7, 11));
    if (cleaned.length > 11) parts.push(cleaned.slice(11, 15));
    return parts.join('-');
  };

  const activate = async (key: string) => {
    if (loading || success) return;
    setLoading(true);
    setError('');
    try {
      const result = await activateLicenseDetailed(key);
      if (result.ok) {
        setSuccess(true);
        setTimeout(onActivated, 1200);
      } else if (result.reason === 'used') {
        setError(t.licenseAlreadyUsed || 'کلیل پێشتر بەکارهاتووە');
      } else if (result.reason === 'invalid') {
        setError(t.licenseInvalid || 'کلیل هەڵەیە');
      } else {
        setError(t.activationError || 'هەڵە لە چالاککردن');
      }
    } catch {
      setError(t.activationError || 'هەڵە لە چالاککردن');
    } finally {
      setLoading(false);
    }
  };

  const onQuickTrial = async () => {
    if (quickTrialUsed) return;
    await activate(QUICK_TRIAL_KEY);
    localStorage.setItem('quickTrialUsed', 'true');
    setQuickTrialUsed(true);
  };

  return (
    <ScrollView
      className={cn('flex-1', darkMode ? 'bg-gray-900' : 'bg-blue-50')}
      contentContainerClassName="flex-grow justify-center p-6"
    >
      <View className="items-center mb-8">
        <View className="w-16 h-16 rounded-2xl bg-blue-600 items-center justify-center mb-4">
          <ShoppingCart color="#fff" size={32} />
        </View>
        <Text className={cn('text-2xl font-bold', darkMode ? 'text-white' : 'text-gray-900')}>
          Kurdish POS
        </Text>
        <Text className={cn('text-sm mt-1', darkMode ? 'text-gray-400' : 'text-gray-600')}>
          {t.licenseActivation || 'چالاککردنی لایسێنس'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setShowLang(true)}
        className={cn(
          'flex-row items-center justify-center gap-2 mb-4 py-2 rounded-lg border',
          darkMode ? 'border-gray-600' : 'border-gray-300'
        )}
      >
        <Globe size={18} color={darkMode ? '#9ca3af' : '#374151'} />
        <Text className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{t.language || 'زمان'}</Text>
      </TouchableOpacity>

      <View className={cn('rounded-xl p-4', darkMode ? 'bg-gray-800' : 'bg-white shadow-sm')}>
        <View className="flex-row items-center gap-2 mb-3">
          <Key size={18} color="#2563eb" />
          <Text className={cn('font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>
            {t.enterLicenseKey || 'کلیلی لایسێنس'}
          </Text>
        </View>

        <View className="flex-row items-center border rounded-lg px-3 mb-3 border-gray-300 dark:border-gray-600">
          <TextInput
            className={cn('flex-1 py-3 text-base', darkMode ? 'text-white' : 'text-gray-900')}
            value={licenseKey}
            onChangeText={(v) => setLicenseKey(formatKey(v))}
            placeholder="KPO-XXXX-XXXX-XXXX"
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showKey}
            autoCapitalize="characters"
          />
          <TouchableOpacity onPress={() => setShowKey(!showKey)}>
            {showKey ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
          </TouchableOpacity>
        </View>

        {error ? (
          <Text className="text-red-500 text-sm mb-3 text-center">{error}</Text>
        ) : null}
        {success ? (
          <Text className="text-green-500 text-sm mb-3 text-center">{t.licenseActivated || 'سەرکەوتوو!'}</Text>
        ) : null}

        <TouchableOpacity
          onPress={() => activate(licenseKey)}
          disabled={loading || !licenseKey.trim()}
          className={cn(
            'bg-blue-600 rounded-lg py-3 items-center mb-3',
            (loading || !licenseKey.trim()) && 'opacity-50'
          )}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-bold">{t.activate || 'چالاککردن'}</Text>
          )}
        </TouchableOpacity>

        {!quickTrialUsed ? (
          <TouchableOpacity
            onPress={onQuickTrial}
            className="flex-row items-center justify-center gap-2 py-3 border border-amber-400 rounded-lg"
          >
            <Zap size={18} color="#f59e0b" />
            <Text className="text-amber-600 font-semibold">{t.quickTrial || 'تاقیکردنەوەی خێرا'}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Modal visible={showLang} transparent animationType="fade">
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center p-6"
          activeOpacity={1}
          onPress={() => setShowLang(false)}
        >
          <View className={cn('rounded-xl p-4', darkMode ? 'bg-gray-800' : 'bg-white')}>
            {LANGUAGES.map((lang) => (
              <TouchableOpacity
                key={lang.id}
                onPress={() => {
                  setLanguage(lang.id);
                  setShowLang(false);
                }}
                className={cn(
                  'py-3 px-4 rounded-lg mb-2',
                  language === lang.id ? 'bg-blue-100' : ''
                )}
              >
                <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{lang.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
}
