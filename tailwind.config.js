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
      spcell: '#121212',
      sptext: '#B3B3B3',
      lighthightlight:'#1A1A1A',
      hardhightlight:'#121112',
      ...colors,
      sky: colors.lightBlue,
    },
    extend: {}
  },
  plugins: []
}
