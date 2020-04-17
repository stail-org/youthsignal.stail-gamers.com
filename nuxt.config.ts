import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  head: {
    title: 'YouthSignal - 「本当になりたい自分」を取り戻す青春ADV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '青春倒錯ADV『YouthSignal』～青春、シリアス、純愛をテーマにしたノベルゲーム。「本当になりたい自分」を取り戻す追憶の青春が、今、始まる――――',
      },
      { name: 'author', content: 'Stail' },
      {
        name: 'format-detection',
        content: 'telephone=no,address=no,email=no',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@h4LduJFlqUapkXt' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'YouthSignal - 「本当になりたい自分」を取り戻す青春ADV',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://youthsignal.stail-gamers.com/',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '「青春」「シリアス」「純愛」をテーマにしたノベルゲーム。',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://youthsignal.stail-gamers.com/youthsignal-og-image.jpg',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'YouthSignal',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://youthsignal.stail-gamers.com/' },
    ],
  },
  loading: { color: '#fff' },
  loadingIndicator: 'loading.html',
  css: ['~/assets/scss/styles/main.scss'],
  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    '~/plugins/vue-scrollto.js',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    // Google Analytics
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-145151351-1',
      },
    ],
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables/main.scss',
      '~/assets/scss/mixins/main.scss',
    ],
  },
  fontawesome: {
    component: 'fa',
  },
  build: {},
}

export default config
