/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      spblack: '#191414',
      spwhite: '#ffffff',
      spgreen: '#1db954',
      spgray: '#535353',
      ...colors
    },
    extend: {}
  },
  plugins: []
}
