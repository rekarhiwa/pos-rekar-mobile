import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDarkMode } from '../../contexts/dark-mode-context';
import { cn } from '../../lib/cn';

interface CalculatorModalProps {
  visible: boolean;
  onClose: () => void;
  onResult?: (value: number) => void;
}

export default function CalculatorModal({ visible, onClose, onResult }: CalculatorModalProps) {
  const { darkMode } = useDarkMode();
  const [display, setDisplay] = useState('0');

  const press = (k: string) => {
    if (k === 'C') setDisplay('0');
    else if (k === '=') {
      try {
        const v = Function(`"use strict"; return (${display})`)();
        setDisplay(String(v));
        onResult?.(Number(v));
      } catch {
        setDisplay('Err');
      }
    } else setDisplay(display === '0' ? k : display + k);
  };

  const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center p-6">
        <View className={cn('rounded-xl p-4', darkMode ? 'bg-gray-800' : 'bg-white')}>
          <Text className={cn('text-2xl text-right mb-4', darkMode ? 'text-white' : 'text-gray-900')}>{display}</Text>
          <View className="flex-row flex-wrap">
            {keys.map((k) => (
              <TouchableOpacity key={k} onPress={() => press(k)} className="w-1/4 p-3 items-center">
                <Text className={cn('text-xl', darkMode ? 'text-white' : 'text-gray-900')}>{k}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={onClose} className="mt-2 py-2">
            <Text className="text-blue-600 text-center">داخستن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
