/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graduate: ['Graduate', 'sanserif'], // Use the correct font name
      },

      colors: {
        primary: '#29103A',
        dark: '#1C1C1C',
        darkGray: '#3C3C3B',
        gray: '#DADADA',
        lightGray: '#F6F6F6',
      },
      fontFamily: {},
      fontSize: {
        12: '0.75rem', // 12px en rem
        14: '0.875rem', // 14px en rem
        16: '1rem', // 16px en rem
        18: '1.125rem', // 18px en rem
        20: '1.25rem', // 20px en rem
        24: '1.5rem', // 24px en rem
        36: '2.25rem', // 36px en rem
      },
      fontWeight: {},
    },
  },
  variants: {},
  plugins: [],
}
