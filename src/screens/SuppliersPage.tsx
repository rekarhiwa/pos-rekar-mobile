import React, { useState } from 'react';
import { FlatList, Modal, TextInput, TouchableOpacity, Text } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useSuppliers, addSupplier } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

export default function SuppliersPage() {
  const suppliers = useSuppliers() || [];
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const save = async () => {
    if (!name.trim()) return;
    await addSupplier({ name: name.trim(), phone: phone.trim(), debt: 0 } as any);
    setShow(false);
    setName('');
    setPhone('');
  };

  return (
    <ScreenShell title={t.suppliers} headerRight={<TouchableOpacity onPress={() => setShow(true)}><Text className="text-blue-600 text-lg font-bold">+</Text></TouchableOpacity>}>
      <FlatList data={suppliers} keyExtractor={(s) => String(s.id)} renderItem={({ item }) => <ListRow title={item.name} subtitle={item.phone} />} />
      <Modal visible={show} transparent animationType="slide">
        <TouchableOpacity className="flex-1 bg-black/50 justify-end" activeOpacity={1} onPress={() => setShow(false)}>
          <TouchableOpacity activeOpacity={1} className={cn('p-6 rounded-t-2xl', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <TextInput className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')} placeholder={t.name} value={name} onChangeText={setName} placeholderTextColor="#9ca3af" />
            <TextInput className={cn('border rounded-lg px-3 py-2 mb-3', darkMode ? 'border-gray-600 text-white' : 'border-gray-300')} placeholder={t.phone} value={phone} onChangeText={setPhone} placeholderTextColor="#9ca3af" />
            <TouchableOpacity onPress={save} className="bg-blue-600 rounded-lg py-3 items-center"><Text className="text-white font-bold">{t.save}</Text></TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </ScreenShell>
  );
}
