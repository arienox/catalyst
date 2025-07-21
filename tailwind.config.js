const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Lexend Zetta"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'brand-background': '#000000',
        'brand-surface': '#181818',
        'brand-text': '#F5F5F5',
        'brand-text-secondary': '#A3A3A3',
        'brand-primary': '#941616',
        'brand-border': '#262626',
      }
    },
  },
  plugins: [],
}
