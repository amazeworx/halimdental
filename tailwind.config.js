const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          'DEFAULT': '#3fa535',
          500: '#3fa535'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
