const pkg = require('./package')

module.exports = {
  mode: 'spa',

  router: {
    base: '/slackemojigen/'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Discord Emoji Generator - Discord絵文字ジェネレーター',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/slackemojigen/favicon.ico' }]
  },

  webfontloader: {
    timeout: 30000,
    google: {
      families: [
        'M+PLUS+1p:100,300,400,500,700,800,900',
        'M+PLUS+Rounded+1c:100,300,400,500,700,800,900',
        'Noto+Sans+JP:100,300,400,500,700,900',
        'Noto+Sans+SC:100,300,400,500,700,900',
        'Noto+Sans+TC:100,300,400,500,700,900',
        'Noto+Serif+JP:200,300,400,500,600,700,900',
        'Noto+Serif+SC:200,300,400,500,600,700,900',
        'Noto+Serif+TC:200,300,400,500,600,700,900',
        'Kosugi',
        'Kosugi+Maru',
        'Sawarabi+Gothic',
        'Sawarabi+Mincho',
      ]
    },
    custom: {
      families: [
        'Nico Moji',
        'Nikukyu',
        'Hannnari',
        'Kokoro'
      ],
      urls: [
        'https://fonts.googleapis.com/earlyaccess/nicomoji.css',
        'https://fonts.googleapis.com/earlyaccess/nikukyu.css',
        'https://fonts.googleapis.com/earlyaccess/hannari.css',
        'https://fonts.googleapis.com/earlyaccess/kokoro.css'
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_UA || 'NO_UA'
    }],
    'nuxt-webfontloader',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'tailwindcss': './tailwind.js',
        'autoprefixer': {},
        'postcss-each': {}
      }
    }
  }
}
