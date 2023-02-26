// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxt/devtools', 'nuxt-svgo'],
  app: {
    head: {
      title: 'Алиса Быкова - Ваш личный нумеролог'
    }
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/lib/styles/main.css',
    '@vuepic/vue-datepicker/dist/main.css',
    '~/assets/css/tailwind.css',
  ],
  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
