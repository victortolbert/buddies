module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    // colors: {
    //   black: '#002138',
    //   gray: '#364141',
    //   'light-blue': '#e9f8ff',
    //   yellow: '#ffbc00',
    //   green: '#006b40',
    //   red: '#c63434',
    //   white: '#fff'
    // },
    extend: {
      colors: {
        'light-blue': '#e9f8ff',
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
