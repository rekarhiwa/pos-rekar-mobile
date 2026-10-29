/** Rabar font keys — must match useFonts() registration names. */
export const FONT_REGULAR = 'Rabar21';
export const FONT_BOLD = 'Rabar22';

/** Use Rabar22 for titles; never combine Rabar with fontWeight on Android. */
export const typography = {
  display: { fontFamily: FONT_BOLD, fontSize: 28 },
  title: { fontFamily: FONT_BOLD, fontSize: 18 },
  subtitle: { fontFamily: FONT_BOLD, fontSize: 16 },
  body: { fontFamily: FONT_REGULAR, fontSize: 15 },
  caption: { fontFamily: FONT_REGULAR, fontSize: 13 },
  label: { fontFamily: FONT_REGULAR, fontSize: 14 },
  button: { fontFamily: FONT_BOLD, fontSize: 16 },
  stat: { fontFamily: FONT_BOLD, fontSize: 20 },
} as const;
