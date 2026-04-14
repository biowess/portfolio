/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        hematology: {
    50:  '#fff7f8',
    100: '#ffecef',
    200: '#ffd6dc',
    300: '#ffb3bd',
    400: '#ff8a9a',
    500: '#ff5c73',
    600: '#f43f5e',
    700: '#e11d48',
    800: '#be123c',
    900: '#9f1239',
    950: '#5c0b1a',
    DEFAULT: '#f43f5e',
  },
        apple: {
          light: '#f5f5f7',
          dark: '#000000',
          textLight: '#1d1d1f',
          textDark: '#ffffff',
          surfaceDark1: '#272729',
          surfaceDark2: '#262628',
          surfaceDark3: '#28282a',
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
      },
      lineHeight: {
        tighter: '1.07',
        tight: '1.14',
        relaxed: '1.47',
      },
      boxShadow: {
        'apple': '3px 5px 30px 0px rgba(0, 0, 0, 0.22)',
      }
    },
  },
  plugins: [],
}
