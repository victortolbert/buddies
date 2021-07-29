const defaultTheme = require("tailwindcss/defaultTheme");
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
  dark: 'class',
  darkMode: 'class',
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
      'light-blue': colors.lightBlue,
      'sky-blue': '#e9f8ff',
      // yellow: '#ffbc00',
      yellow: colors.yellow,
      orange: colors.amber,
      teal: colors.teal,
      rose: colors.rose,
      lime: colors.lime,

      // primary: colors.blueGem,
      // secondary: colors.deepTeal,
      primary: colors.sanJuan,
      secondary: colors.tango,
      tertiary: colors.bone,

      danger: colors.monza,
      warning: colors['sea-buckthorn'],
      success: colors.malachite,
      info: colors.scooter,
      neutral: colors.blueGray,

      // danger: colors.mineShaft,
      // warning: colors.mineShaft,
      // success: colors.mineShaft,
      // info: colors.mineShaft,

      brand: '#1B2A60',
      bootstrap: '#7952B3',
      buefy: '#7957D5',
      bulma: '#00D1B2',
      codeigniter: '#EE4323',
      codepen: '#000000',
      facebook: '#3b5998',
      github: '#181717',
      instagram: '#E4405F',
      laravel: '#FF2D20',
      linkedin: '#0077b5',
      php: '#777BB4',
      ruby: '#CC342D',
      twitter: '#1da1f2',
      vue: '#4FC08D',
      'temperture-01': '#3eff00',
      'temperture-02': '#b0ff00',
      'temperture-03': '#FFfa00',
      'temperture-04': '#FFdc00',
      'temperture-05': '#FFbe00',
      'temperture-06': '#FFa000',
      'temperture-07': '#FF8200',
      'temperture-08': '#FF6400',
      'temperture-09': '#FF4600',
      'temperture-10': '#FF2800',
      nuxt: {
        gray: '#243746',
        lightgreen: '#41B38A',
        green: '#158876',
      },
      main: {
        DEFAULT: colors.gray[700],
        dark: '#ffffff',
      },
      // primary: {
      //   DEFAULT: '#1fb6ff',
      //   dark: '#ffffff',
      // },
      highlight: {
        DEFAULT: colors.red[700],
        dark: colors.violet[800],
      },
      'highlight-background': {
        DEFAULT: colors.yellow[400],
        dark: '#1fb6ff',
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
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
