import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDarkMode } from '../../contexts/dark-mode-context';
import { cn } from '../../lib/cn';

export default function ConfirmModal({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'بەڵێ',
  cancelText = 'نەخێر',
}: {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}) {
  const { darkMode } = useDarkMode();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center p-6">
        <View className={cn('rounded-xl p-6', darkMode ? 'bg-gray-800' : 'bg-white')}>
          <Text className={cn('text-lg font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>{title}</Text>
          <Text className={cn('mb-4', darkMode ? 'text-gray-300' : 'text-gray-600')}>{message}</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity onPress={onCancel} className="flex-1 py-3 border rounded-lg border-gray-300">
              <Text className="text-center">{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} className="flex-1 py-3 bg-blue-600 rounded-lg">
              <Text className="text-white text-center font-bold">{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
