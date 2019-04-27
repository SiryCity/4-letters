module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '四文字予定',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '「予定は・四文字・要を得て」四文字しか書けない超シンプル予定表。' },
      { hid: 'og:title', property: 'og:title', content: '四文字予定' },
      { hid: 'og:description', property: 'og:description', content: '「予定は・四文字・要を得て」四文字しか書けない超シンプル予定表。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '四文字予定' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://only-four.com' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  mode: 'universal',
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false }
  ],
  modules: (process.env.NODE_ENV !== 'development')
  ? [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-analytics',
      {
        id: (process.env.NODE_ENV === 'development')
        ? process.env.GA_ID
        : process.env.GA_ID,
      }
    ]
  ]
  : [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
  ],
  sitemap: {
    path: 'sitemap.xml',
    hostname: 'https://only-four.com',
    cacheTime: 1000 * 60 * 15,
    generate: false,
  },
  env: {
    FORMS_API: (process.env.NODE_ENV === 'development')
    ? process.env.FORMS_API
    : process.env.FORMS_API,
    GA_ID: (process.env.NODE_ENV === 'development')
    ? process.env.GA_ID
    : process.env.GA_ID,
  },
  markdownit: {
    injected: true,
  },
  manifest: {
    name: '四文字予定',
    lang: 'ja',
    short_name: '四文字予定',
    title: '四文字予定',
    'og:title': '四文字予定',
    description: '予定は・四文字・要を得て',
    'og:description': '予定は・四文字・要を得て',
    theme_color: '#cccccc',
    background_color: '#333333'
  },
}

