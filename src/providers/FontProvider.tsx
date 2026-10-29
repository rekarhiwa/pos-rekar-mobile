import { useFonts } from 'expo-font';
import React, { type ReactNode, useEffect } from 'react';
import { ActivityIndicator, Text, TextInput, View } from 'react-native';

import { useDarkMode } from '../contexts/dark-mode-context';
import { darkColors, lightColors } from '../theme/colors';
import { FONT_REGULAR } from '../theme/fonts';

type FontProviderProps = {
  children: ReactNode;
};

export function FontProvider({ children }: FontProviderProps) {
  const { darkMode } = useDarkMode();
  const colors = darkMode ? darkColors : lightColors;

  const [loaded, error] = useFonts({
    Rabar21: require('../../assets/fonts/Rabar_021.ttf'),
    Rabar22: require('../../assets/fonts/Rabar_022.ttf'),
  });

  useEffect(() => {
    if (!loaded) return;

    const textDefaults =
      (Text as typeof Text & { defaultProps?: { style?: unknown } }).defaultProps ?? {};
    (Text as typeof Text & { defaultProps?: { style?: unknown } }).defaultProps = {
      ...textDefaults,
      style: [{ fontFamily: FONT_REGULAR }, textDefaults.style],
    };

    const inputDefaults =
      (TextInput as typeof TextInput & { defaultProps?: { style?: unknown } }).defaultProps ?? {};
    (TextInput as typeof TextInput & { defaultProps?: { style?: unknown } }).defaultProps = {
      ...inputDefaults,
      style: [{ fontFamily: FONT_REGULAR }, inputDefaults.style],
    };
  }, [loaded]);

  if (!loaded && !error) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return <>{children}</>;
}
