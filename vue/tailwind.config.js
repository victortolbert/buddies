const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindColors = require('tailwindcss/colors')
const customColors = require('./config/colors')

const colors = {
  ...tailwindColors,
  ...customColors,
}

module.exports = {
  // mode: 'jit',
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  darkMode: false,
  theme: {
    colors: {
      // black: colors.black,
      black: '#002138',
      current: 'currentColor',
      // gray: colors.trueGray,
      gray: colors.capeCod,
      // green: '#006b40',
      green: colors.jewel,
      blue: colors.blue,
      indigo: colors.indigo,
      // red: colors.rose,
      red: '#c63434',
      'sky-blue': '#e9f8ff',
      transparent: 'transparent',
      // white: colors.white,
      white: '#fff',
      // yellow: colors.amber,
      yellow: '#ffbc00',
      // primary: '#5c6ac4',
      // secondary: '#ecc94b',
    },
    extend: {

      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
