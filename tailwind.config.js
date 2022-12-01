/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-main': '#e88506',
        'card-active': '#e5a134',
      },
    },
  },
  plugins: [],
};
