/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rabar: ['Rabar21'],
        'rabar-bold': ['Rabar22'],
      },
      colors: {
        pos: {
          bg: '#F4F6F9',
          surface: '#FFFFFF',
          primary: '#1D4ED8',
          'primary-muted': '#3B82F6',
          success: '#15803D',
          warning: '#B45309',
          danger: '#DC2626',
        },
      },
      borderRadius: {
        pos: '12px',
      },
    },
  },
  plugins: [],
};
