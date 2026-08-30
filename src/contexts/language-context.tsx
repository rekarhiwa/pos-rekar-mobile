'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translation, getTranslation } from '../lib/translations';
import { db } from '../db/db';

type TKeys = Translation & Record<string, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ku-sorani');
  const [t, setT] = useState<TKeys>(getTranslation('ku-sorani') as TKeys);

  // Load language from localStorage on mount
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        // Try to load from localStorage first
        const stored = localStorage.getItem('app_language');
        if (stored && ['ku-sorani', 'ku-badini', 'ar-iq', 'en-gb'].includes(stored)) {
          setLanguageState(stored as Language);
          setT(getTranslation(stored as Language) as TKeys);
          return;
        }

        // Try to load from database settings
        const settings = await db.settings.get(1);
        if (settings?.language) {
          setLanguageState(settings.language as Language);
          setT(getTranslation(settings.language as Language) as TKeys);
        }
      } catch (error) {
        console.error('Error loading language:', error);
      }
    };

    loadLanguage();
  }, []);

  const setLanguage = async (lang: Language) => {
    try {
      // Update state
      setLanguageState(lang);
      setT(getTranslation(lang) as TKeys);
      
      // Save to localStorage
      localStorage.setItem('app_language', lang);
      
      // Save to database
      const settings = await db.settings.get(1);
      if (settings) {
        await db.settings.update(1, { language: lang });
      } else {
        await db.settings.add({
          id: 1,
          shopName: 'سیستەمی جیهان',
          shopPhone: '07501234567',
          shopAddress: 'سلێمانی - شەقامی مامۆستایان',
          printerType: 'thermal-80mm',
          currency: 'IQD',
          lowStockThreshold: 10,
          dollarRate: 1500,
          enableDollar: false,
          language: lang,
        });
      }
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

