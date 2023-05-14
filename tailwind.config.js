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
      spcell: '#181818',
      sptext: '#B3B3B3',
      ...colors
    },
    extend: {}
  },
  plugins: []
}
