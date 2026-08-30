import './global.css';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, I18nManager, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { installStoragePolyfill } from './src/lib/storage';
import { initializeDatabase, checkLicense } from './src/db/db';
import { LanguageProvider } from './src/contexts/language-context';
import { CurrencyProvider } from './src/contexts/currency-context';
import { DarkModeProvider, useDarkMode } from './src/contexts/dark-mode-context';
import { FontSizeProvider } from './src/contexts/font-size-context';
import { UserProvider } from './src/contexts/user-context';
import LicenseScreen from './src/screens/LicenseScreen';
import LoginScreen from './src/screens/LoginScreen';
import RootNavigator from './src/navigation/RootNavigator';
import { getCurrentUser } from './src/hooks';

installStoragePolyfill();

// Kurdish RTL
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

function AppInner() {
  const { darkMode } = useDarkMode();
  const [booting, setBooting] = useState(true);
  const [licensed, setLicensed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!getCurrentUser());

  useEffect(() => {
    (async () => {
      try {
        await initializeDatabase();
        const ok = await checkLicense();
        setLicensed(ok);
      } catch (e) {
        console.error(e);
      } finally {
        setBooting(false);
      }
    })();
  }, []);

  if (booting) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (!licensed) {
    return <LicenseScreen onActivated={() => setLicensed(true)} />;
  }

  if (!loggedIn) {
    return <LoginScreen onLoginSuccess={() => setLoggedIn(true)} />;
  }

  return (
    <>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <RootNavigator />
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <DarkModeProvider>
            <FontSizeProvider>
              <UserProvider>
                <CurrencyProvider>
                  <AppInner />
                </CurrencyProvider>
              </UserProvider>
            </FontSizeProvider>
          </DarkModeProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
