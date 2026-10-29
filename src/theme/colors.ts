/** Design tokens for Kurdish POS mobile — light & dark. */

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceElevated: string;
  primary: string;
  primaryMuted: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderStrong: string;
  success: string;
  successMuted: string;
  warning: string;
  warningMuted: string;
  danger: string;
  dangerMuted: string;
  info: string;
  overlay: string;
  drawerActive: string;
  drawerInactive: string;
  inputBg: string;
  inputBorder: string;
  statusBar: 'light' | 'dark';
}

export const lightColors: ThemeColors = {
  background: '#F4F6F9',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  primary: '#1D4ED8',
  primaryMuted: '#3B82F6',
  text: '#0F172A',
  textSecondary: '#334155',
  textMuted: '#64748B',
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',
  success: '#15803D',
  successMuted: '#DCFCE7',
  warning: '#B45309',
  warningMuted: '#FEF3C7',
  danger: '#DC2626',
  dangerMuted: '#FEE2E2',
  info: '#0369A1',
  overlay: 'rgba(15, 23, 42, 0.45)',
  drawerActive: '#1D4ED8',
  drawerInactive: '#475569',
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  statusBar: 'dark',
};

export const darkColors: ThemeColors = {
  background: '#0B1220',
  surface: '#111827',
  surfaceElevated: '#1F2937',
  primary: '#3B82F6',
  primaryMuted: '#60A5FA',
  text: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#94A3B8',
  border: '#1F2937',
  borderStrong: '#374151',
  success: '#4ADE80',
  successMuted: '#14532D',
  warning: '#FBBF24',
  warningMuted: '#78350F',
  danger: '#F87171',
  dangerMuted: '#7F1D1D',
  info: '#38BDF8',
  overlay: 'rgba(0, 0, 0, 0.55)',
  drawerActive: '#60A5FA',
  drawerInactive: '#94A3B8',
  inputBg: '#1F2937',
  inputBorder: '#374151',
  statusBar: 'light',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
} as const;

/** Minimum touch target for mobile (44pt). */
export const touchTarget = 44;
