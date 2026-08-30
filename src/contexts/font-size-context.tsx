import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../db/db';

type FontSize = 'small' | 'medium' | 'large';

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  scale: number;
}

const scales: Record<FontSize, number> = { small: 0.9, medium: 1, large: 1.15 };

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');

  useEffect(() => {
    const load = async () => {
      try {
        const stored = localStorage.getItem('app_fontSize');
        if (stored && ['small', 'medium', 'large'].includes(stored)) {
          setFontSizeState(stored as FontSize);
          return;
        }
        const settings = await db.settings.get(1);
        if (settings?.fontSize) setFontSizeState(settings.fontSize as FontSize);
      } catch (_) {}
    };
    load();
  }, []);

  const setFontSize = async (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('app_fontSize', size);
    try {
      const settings = await db.settings.get(1);
      if (settings) await db.settings.update(1, { fontSize: size });
    } catch (_) {}
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, scale: scales[fontSize] }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error('useFontSize must be used within FontSizeProvider');
  return ctx;
}
