/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-main': '#ee9700',
        'primary-ligth': '#fcd86c',
        'card-active': '#ebae41',
        'dark-gray': '#5c5e5e',
        'dark-blue': '#305a8e',
        cover: 'rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
