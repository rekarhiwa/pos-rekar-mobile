import React, { ReactNode } from 'react';
import { View, Text, ScrollView, TouchableOpacity, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

interface ScreenShellProps {
  title: string;
  children: ReactNode;
  headerRight?: ReactNode;
  onBack?: () => void;
}

export default function ScreenShell({ title, children, headerRight, onBack }: ScreenShellProps) {
  const { darkMode } = useDarkMode();
  const isRtl = I18nManager.isRTL;

  return (
    <SafeAreaView
      className={cn('flex-1', darkMode ? 'bg-gray-900' : 'bg-gray-50')}
      edges={['top', 'left', 'right']}
    >
      <View
        className={cn(
          'flex-row items-center px-4 py-3 border-b',
          darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white',
          isRtl ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        {onBack ? (
          <TouchableOpacity onPress={onBack} className="px-2 py-1">
            <Text className={cn('text-blue-600 text-base', darkMode && 'text-blue-400')}>←</Text>
          </TouchableOpacity>
        ) : null}
        <Text
          className={cn(
            'flex-1 text-lg font-bold text-center',
            darkMode ? 'text-white' : 'text-gray-900',
            isRtl ? 'text-right' : 'text-left'
          )}
        >
          {title}
        </Text>
        {headerRight ?? <View className="w-8" />}
      </View>
      <ScrollView className="flex-1" contentContainerClassName="p-4 pb-8">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
