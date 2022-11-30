// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["/assets/main.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  typescript: {
    shim: false
  },
  build: {
    transpile: ['@headlessui/vue']
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-light',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})
