export default {
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
    title: 'vue-bootstrap',
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
    '~/assets/css/bootstrap.scss',
    // '~/assets/css/content.css',
    // '~/assets/css/components/sidebar-menu.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/composition-api/module',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    'nuxt-i18n',

    '@nuxtjs/tailwindcss',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://api.themoviedb.org/3',
    // https://dev.to/api
    baseURL: process.env.apiURL || 'https://api.victortolbert.com',
    credentials: true,
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icons: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  colorMode: {
    classSuffix: '',
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: /@fullcalendar.*/, // always needed
  },
  serverMiddleware: ['~/server'],
}
