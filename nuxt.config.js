module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '4文字予定',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: "robots", content: "noindex" },
      { name: "robots", content: "nofollow" },
      { name: "robots", content: "noachieve" },
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
  mode: 'spa',
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
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

