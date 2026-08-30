import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import ScreenShell from '../components/ScreenShell';
import { createBackup, restoreBackup } from '../lib/backup-utils';
import { useLanguage } from '../contexts/language-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { showAlert, showConfirm } from '../lib/modern-alerts';
import { cn } from '../lib/cn';

export default function BackupRestorePage() {
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const [busy, setBusy] = useState(false);

  const exportBackup = async () => {
    setBusy(true);
    try {
      const data = await createBackup();
      const json = JSON.stringify(data, null, 2);
      const cacheDir = (FileSystem as any).cacheDirectory || (FileSystem as any).Paths?.cache?.uri || '';
      const path = `${cacheDir}pos-backup-${Date.now()}.json`;
      await FileSystem.writeAsStringAsync(path, json);
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(path, { mimeType: 'application/json' });
      } else {
        await showAlert(t.success || 'سەرکەوتوو', path);
      }
    } catch (e) {
      await showAlert(t.error || 'هەڵە', String(e));
    } finally {
      setBusy(false);
    }
  };

  const importBackup = async () => {
    const ok = await showConfirm(t.confirmRestore || 'گەڕاندنەوە؟', t.backupRestoreWarning || '');
    if (!ok) return;
    setBusy(true);
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: 'application/json' });
      if (result.canceled || !result.assets?.[0]) return;
      const content = await FileSystem.readAsStringAsync(result.assets[0].uri);
      await restoreBackup(JSON.parse(content));
      await showAlert(t.success || 'سەرکەوتوو');
    } catch (e) {
      await showAlert(t.error || 'هەڵە', String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <ScreenShell title={t.backupRestoreTitle || 'هەڵگرتن و گەڕاندنەوە'}>
      <View className="gap-4">
        <TouchableOpacity onPress={exportBackup} disabled={busy} className="bg-blue-600 rounded-xl py-4 items-center">
          {busy ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-bold">{t.exportBackup || 'هەڵگرتن'}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={importBackup} disabled={busy} className={cn('rounded-xl py-4 items-center border', darkMode ? 'border-gray-600' : 'border-gray-300')}>
          <Text className={darkMode ? 'text-white font-bold' : 'text-gray-900 font-bold'}>{t.importBackup || 'گەڕاندنەوە'}</Text>
        </TouchableOpacity>
      </View>
    </ScreenShell>
  );
}
