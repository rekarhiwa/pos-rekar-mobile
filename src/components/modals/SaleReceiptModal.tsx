import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDarkMode } from '../../contexts/dark-mode-context';
import { cn } from '../../lib/cn';

interface SaleReceiptModalProps {
  visible: boolean;
  onClose: () => void;
  lines: { label: string; value: string }[];
  onPrint?: () => void;
}

export default function SaleReceiptModal({ visible, onClose, lines, onPrint }: SaleReceiptModalProps) {
  const { darkMode } = useDarkMode();
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 bg-black/50 justify-end">
        <View className={cn('rounded-t-2xl p-6 max-h-[70%]', darkMode ? 'bg-gray-800' : 'bg-white')}>
          <ScrollView>
            {lines.map((l, i) => (
              <View key={i} className="flex-row justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <Text className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{l.label}</Text>
                <Text className={darkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>{l.value}</Text>
              </View>
            ))}
          </ScrollView>
          {onPrint ? (
            <TouchableOpacity onPress={onPrint} className="bg-blue-600 rounded-lg py-3 mt-4 items-center">
              <Text className="text-white font-bold">پرێنت</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity onPress={onClose} className="py-3">
            <Text className="text-center text-gray-500">داخستن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
