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
      '@nuxtjs/pwa',
      {
        manifest: {
          name: "Victory's site",
          short_name: 'victory',
          start_url: '/',
          lang: 'en-US',
          display: 'standalone',
          background_color: '#fff',
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
            }
          ]
        }
      }
    ],
    'nuxt-webfontloader',
    'nuxt-purgecss'
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
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}