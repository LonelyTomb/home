import dotenv from 'dotenv'
dotenv.config()
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: process.env.GTM_TAG,
        layer: 'dataLayer',
        pageTracking: false,
        dev: true // set to false to disable in dev mode
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        manifest: {
          name: "Victory's site",
          short_name: 'Victory Garuba',
          start_url: '/',
          lang: 'en-US',
          display: 'standalone',
          background_color: '#542ea4',
          theme_color: '#542ea4',
          description: 'Welcome to Victory Online',
          icons: [
            {
              src: '/favicon-16x16.png',
              sizes: '16x16',
              type: 'image/png'
            },
            {
              src: '/favicon-32x32.png',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              src: '/favicon-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }
    ],
    'nuxt-webfontloader',
    'nuxt-purgecss',
    '@nuxtjs/sitemap'
  ],
  webfontloader: {
    google: {
      families: ['Playfair Display:400,700', 'Nunito:700']
    }
  },
  purgeCSS: {},
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '/'
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    path: '/sitemap.xml',
    gzip: true,
    cacheTime: 1000 * 60 * 15,
    exclude: ['/secret', '/admin/**'],
    routes: ['/', '/resume', '/about', '/portfolio', '/contact']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    watch: ['api'],
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
