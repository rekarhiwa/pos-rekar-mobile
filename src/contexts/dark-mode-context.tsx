import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../db/db';

interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (enabled: boolean) => void;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkModeState] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = localStorage.getItem('app_darkMode');
        if (stored !== null) {
          setDarkModeState(stored === 'true');
          return;
        }
        const settings = await db.settings.get(1);
        if (settings?.darkMode !== undefined) {
          setDarkModeState(!!settings.darkMode);
        }
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  const setDarkMode = async (enabled: boolean) => {
    setDarkModeState(enabled);
    localStorage.setItem('app_darkMode', enabled.toString());
    try {
      const settings = await db.settings.get(1);
      if (settings) await db.settings.update(1, { darkMode: enabled });
    } catch (_) {}
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error('useDarkMode must be used within DarkModeProvider');
  return ctx;
}
