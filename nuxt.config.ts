// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || '',
    }
  }
})
