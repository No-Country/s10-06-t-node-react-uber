/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graduate: ['Graduate', 'sanserif'], // Use the correct font name
      },
    },
  },
  plugins: [],
}
