import React, { createContext, useContext, ReactNode } from 'react';
import { useSettings } from '../hooks';

interface CurrencyContextType {
  currency: 'IQD' | 'USD';
  formatPrice: (price: number) => string;
  getCurrencySymbol: () => string;
  dollarRate: number;
  convertPrice: (price: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const settings = useSettings();
  const currency = (settings?.currency as 'IQD' | 'USD') || 'IQD';
  const dollarRate = settings?.dollarRate || 1500;

  const getCurrencySymbol = () => (currency === 'USD' ? '$' : 'د.ع');

  const convertPrice = (priceInDinar: number | undefined | null): number => {
    if (priceInDinar === undefined || priceInDinar === null || isNaN(priceInDinar)) return 0;
    if (currency === 'USD') {
      if (!dollarRate) return priceInDinar;
      return priceInDinar / dollarRate;
    }
    return priceInDinar;
  };

  const formatPrice = (price: number | undefined | null): string => {
    const p = price === undefined || price === null || isNaN(price) ? 0 : price;
    const converted = convertPrice(p);
    const isUSD = currency === 'USD';
    const formatted = converted.toLocaleString('en-US', {
      minimumFractionDigits: isUSD ? 3 : 0,
      maximumFractionDigits: 3,
    });
    return isUSD ? `$${formatted}` : `${formatted} د.ع`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, formatPrice, getCurrencySymbol, dollarRate, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}
