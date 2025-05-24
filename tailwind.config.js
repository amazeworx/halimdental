const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // safelist: [
    //   'relative',
    //   'justify-between',
    //   'h-16'
    // ]
  },
  //purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: "#555555",
          500: "#555555",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
