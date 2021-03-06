export default {
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    apiURL: process.env.API_URL || 'http://localhost.3000/api',
    assetsURL: process.env.ASSETS_URL || 'http://localhost:3000',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Catopia!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/content-placeholders',
    '@/plugins/portal-vue',
    '@/plugins/vue-api-query',
    '@/plugins/v-click-outside',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/composition-api/module',

    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/axios',

    '@nuxtjs/sentry'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://api.themoviedb.org/3',
    baseURL: process.env.apiURL || 'https://api.victortolbert.com',
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */

    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        features: {
          'nesting-rules': true,
          'custom-media-queries': true
        }
      }
    },
    extractCSS: true,

    extend() { }
  },

  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
  },
  serverMiddleware: ['~/server'],

  generate: {
    interval: 2000,
    fallback: true,
  },

  // sentry: {
  //   dsn: 'https://c30dc69c78434050aed6f64b97cbd645@o244691.ingest.sentry.io/1422222',
  //   config: {
  //     maxBreadcrumbs: 50,
  //     debug: false,
  //   },
  // },
}
