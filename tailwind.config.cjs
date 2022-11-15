/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          'light-gray': '#D8D8D8',
          gray: '#838383',
          'mid-gray': '#6A6A6D',
          'dark-gray': '#222222',
          brown: '#E3B065',
          'dark-brown': '#B48237',
          sky: '#3C8DEB',
          sea: '#2A5081',
        },
      },
    },
  },
  plugins: [],
};
