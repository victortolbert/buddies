import { resolve } from 'path'
const compositionApiFullPath = resolve("./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

export default {
  alias: {
    // keep default settings
    '~~': resolve(__dirname, './'),
    '@@': resolve(__dirname, './'),
    '~': resolve(__dirname, './'),
    '@': resolve(__dirname, './'),
    'assets': resolve(__dirname, './assets'), // (unless you have set a custom `dir.assets`)
    'static': resolve(__dirname, './static'), // (unless you have set a custom `dir.static`)
    // workaround
    '@vue/composition-api/dist/vue-composition-api.esm.js': compositionApiFullPath,
  },
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    apiURL: process.env.API_URL || 'https://api.victortolbert.com',
    assetsURL: process.env.ASSETS_URL || 'http://localhost:3000',
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  publicRuntimeConfig: {
    googleMapsApiKey:
      process.env.GOOGLE_MAPS_API_KEY ||
      'AIzaSyAC93FnPRqmvipFZZUenONKIbKHqPlbu6s',
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hancock UI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/normalize.css',
    '~/assets/css/global.css',
    // '~/assets/css/components/sidebar-menu.css',
  ],

  // css: [
  //   '~/assets/styles/reset.scss',
  //   '~/assets/styles/base.scss',
  //   '~/assets/styles/highlight.scss',
  //   '~/assets/styles/app.scss'
  // ],

  // styleResources: {
  //   scss: ['@/assets/styles/tokens.scss']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/markdown',
    '~/plugins/oruga',
    '~/plugins/portal-vue',
    '~/plugins/v-click-outside',
    '~/plugins/vue-chartkick.client',
    '~/plugins/vue-content-placeholders',
    '~/plugins/vue-observe-visibility.client',
    '~/plugins/vue-shortkey',
    '~/plugins/vuejs-smart-table',
    // '@/plugins/init',
    // '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/blocks'
    ]
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/composition-api/module',

    '@nuxtjs/tailwindcss',

    '@nuxtjs/svg'
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

    '@nuxtjs/sentry',

    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://api.themoviedb.org/3',
    // https://dev.to/api
    baseURL: process.env.apiURL || 'https://api.victortolbert.com',
    credentials: true,
  },


  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es-ES.js',
        iso: 'en-ES',
        name: 'Español',
      },
      {
        code: 'en',
        file: 'en-US.js',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    parsePages: false,
    strategy: 'prefix_except_default',
    lazy: true,
    seo: false,
    langDir: 'i18n/',
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },

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

    extend() { },
  },

  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
  },
  serverMiddleware: ['~/server'],

  // generate: {
  //   interval: 2000,
  //   fallback: true,
  // },

  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },

  // sentry: {
  //   dsn: 'https://c30dc69c78434050aed6f64b97cbd645@o244691.ingest.sentry.io/1422222',
  //   config: {
  //     maxBreadcrumbs: 50,
  //     debug: false,
  //   },
  // },
}
