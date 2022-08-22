/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,tsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: colors.indigo[600],
        accent: colors.green[500],
        spark: colors.amber[200],
        danger: colors.rose[600],
        'text-light': colors.gray[300],
        'text-lighter': colors.gray[50],
        'gray-light': colors.gray[100],
        'gray-darken': colors.gray[500],
      },
      backgroundImage: {
        'about-background': 'url("./components/images/dentist.jpg")',
        'bookings-background': 'url("./components/images/calendar.jpg")',
      },
    },
  },
  plugins: [],
};
