// * https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // * Meta information
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MAgPIE Bookmarks',
      meta: [
        { name: 'description', content: '' },
        { name: 'og:image', content: '/images/logo/logo-with-bg.png' },
        { name: 'twitter:title', content: 'MAgPIE Bookmarks' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: '/images/logo/logo-with-bg.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'google-site-verification', content: '' }
      
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
      ],
      htmlAttrs: {
        lang: 'en'
      },
    }
  },
  devtools: { enabled: true },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'europe-west3',
        maxInstances: 3,
      },
      nodeVersion: '18',
    }
  },
  tailwindcss: {
    cssPath: 'assets/scss/tailwind.scss',
    configPath: 'tailwind.config.js',
  },
  modules: ['@nuxtjs/tailwindcss']
})