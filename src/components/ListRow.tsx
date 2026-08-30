/** Generic list row for simple screens */
import React from 'react';
import { View, Text } from 'react-native';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export function ListRow({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: string;
}) {
  const { darkMode } = useDarkMode();
  return (
    <View className={cn('p-3 mb-2 rounded-lg border', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
      <View className="flex-row justify-between">
        <Text className={cn('font-semibold flex-1', darkMode ? 'text-white' : 'text-gray-900')}>{title}</Text>
        {right ? <Text className="text-blue-600">{right}</Text> : null}
      </View>
      {subtitle ? <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text> : null}
    </View>
  );
}
