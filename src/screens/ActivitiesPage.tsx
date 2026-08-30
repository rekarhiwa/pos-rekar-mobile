import React from 'react';
import { FlatList } from 'react-native';
import ScreenShell from '../components/ScreenShell';
import { ListRow } from '../components/ListRow';
import { useActivityLogs } from '../hooks';
import { useLanguage } from '../contexts/language-context';

export default function ActivitiesPage() {
  const logs = useActivityLogs() || [];
  const { t } = useLanguage();

  return (
    <ScreenShell title={t.activities}>
      <FlatList
        data={[...logs].reverse()}
        keyExtractor={(l) => String(l.id)}
        renderItem={({ item }) => (
          <ListRow
            title={item.description || item.action}
            subtitle={`${item.section} • ${item.username || ''}`}
            right={item.timestamp ? new Date(item.timestamp).toLocaleTimeString('ar-IQ') : ''}
          />
        )}
      />
    </ScreenShell>
  );
}
