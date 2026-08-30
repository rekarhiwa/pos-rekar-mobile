import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react-native';
import { loginUser, useUsers } from '../hooks';
import { useLanguage } from '../contexts/language-context';
import { useUser } from '../contexts/user-context';
import { useDarkMode } from '../contexts/dark-mode-context';
import { cn } from '../lib/cn';

interface Props {
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onLoginSuccess }: Props) {
  const { t } = useLanguage();
  const { setCurrentUser } = useUser();
  const { darkMode } = useDarkMode();
  const users = (useUsers() || []).filter((u) => u.isActive);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const user = await loginUser(username.trim(), password);
      if (user) {
        const { password: _pw, ...safe } = user;
        setCurrentUser(safe as typeof user);
        onLoginSuccess();
      } else {
        setError(t.loginError || 'ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە');
      }
    } catch {
      setError(t.systemError || 'هەڵەی سیستەم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      className={cn('flex-1', darkMode ? 'bg-gray-900' : 'bg-gray-50')}
      contentContainerClassName="flex-grow justify-center p-6"
    >
      <View className="items-center mb-8">
        <View className="w-14 h-14 rounded-full bg-blue-600 items-center justify-center mb-3">
          <LogIn color="#fff" size={28} />
        </View>
        <Text className={cn('text-xl font-bold', darkMode ? 'text-white' : 'text-gray-900')}>
          {t.login || 'چوونەژوورەوە'}
        </Text>
      </View>

      <View className={cn('rounded-xl p-4 gap-3', darkMode ? 'bg-gray-800' : 'bg-white')}>
        <TouchableOpacity
          onPress={() => setShowUsers(true)}
          className="flex-row items-center border rounded-lg px-3 border-gray-300 dark:border-gray-600"
        >
          <User size={18} color="#6b7280" />
          <TextInput
            className={cn('flex-1 py-3 px-2', darkMode ? 'text-white' : 'text-gray-900')}
            value={username}
            onChangeText={setUsername}
            placeholder={t.username || 'ناوی بەکارهێنەر'}
            placeholderTextColor="#9ca3af"
            autoCapitalize="none"
          />
        </TouchableOpacity>

        <View className="flex-row items-center border rounded-lg px-3 border-gray-300 dark:border-gray-600">
          <Lock size={18} color="#6b7280" />
          <TextInput
            className={cn('flex-1 py-3 px-2', darkMode ? 'text-white' : 'text-gray-900')}
            value={password}
            onChangeText={setPassword}
            placeholder={t.password || 'وشەی نهێنی'}
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} color="#6b7280" /> : <Eye size={20} color="#6b7280" />}
          </TouchableOpacity>
        </View>

        {error ? <Text className="text-red-500 text-center text-sm">{error}</Text> : null}

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className={cn('bg-blue-600 rounded-lg py-3 items-center', loading && 'opacity-60')}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-bold">{t.login || 'چوونەژوورەوە'}</Text>
          )}
        </TouchableOpacity>
      </View>

      <Modal visible={showUsers} transparent animationType="slide">
        <View className="flex-1 bg-black/40 justify-end">
          <View className={cn('rounded-t-2xl p-4 max-h-80', darkMode ? 'bg-gray-800' : 'bg-white')}>
            <Text className={cn('font-bold mb-3 text-center', darkMode ? 'text-white' : 'text-gray-900')}>
              {t.selectUser || 'هەڵبژاردنی بەکارهێنەر'}
            </Text>
            <FlatList
              data={users}
              keyExtractor={(u) => String(u.id)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-3 border-b border-gray-200 dark:border-gray-700"
                  onPress={() => {
                    setUsername(item.username);
                    setShowUsers(false);
                  }}
                >
                  <Text className={darkMode ? 'text-white' : 'text-gray-900'}>{item.fullName}</Text>
                  <Text className="text-gray-500 text-sm">{item.username}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowUsers(false)} className="py-3 mt-2">
              <Text className="text-blue-600 text-center">{t.cancel || 'داخستن'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
