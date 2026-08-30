import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDarkMode } from '../../contexts/dark-mode-context';
import { cn } from '../../lib/cn';

interface PaymentModalProps {
  visible: boolean;
  total: string;
  onCash: () => void;
  onDebt: () => void;
  onClose: () => void;
  processing?: boolean;
}

export default function PaymentModal({ visible, total, onCash, onDebt, onClose, processing }: PaymentModalProps) {
  const { darkMode } = useDarkMode();
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 bg-black/50 justify-end">
        <View className={cn('rounded-t-2xl p-6', darkMode ? 'bg-gray-800' : 'bg-white')}>
          <Text className={cn('text-xl font-bold text-center mb-4', darkMode ? 'text-white' : 'text-gray-900')}>{total}</Text>
          <TouchableOpacity onPress={onCash} disabled={processing} className="bg-green-600 rounded-lg py-3 mb-3 items-center">
            <Text className="text-white font-bold">نەقد</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDebt} className="bg-amber-600 rounded-lg py-3 mb-3 items-center">
            <Text className="text-white font-bold">قەرز</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text className="text-center text-gray-500">داخستن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
