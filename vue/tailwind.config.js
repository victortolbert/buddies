const tailwindColors = require('tailwindcss/colors')
const customColors = require('./config/colors')

const colors = {
  ...tailwindColors,
  ...customColors,
}

module.exports = {
  mode: 'jit',
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
      transparent: 'transparent',
      black: '#002138',
      white: colors.white,
      current: 'currentColor',
      gray: colors.capeCod,
      // red: '#c63434',
      red: colors.red,
      green: colors.jewel,
      blue: colors.blue,
      indigo: colors.indigo,
      'sky-blue': '#e9f8ff',
      // yellow: '#ffbc00',
      yellow: colors.yellow,
      primary: colors.sanJuan,
      secondary: colors.bone,
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
