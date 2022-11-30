// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import dotenv from 'dotenv'
// require('dotenv').config()

export default defineNuxtConfig({
  css: ['/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxt/content'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      supabase: {
      // Options
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY
      },
      otherUrl: 'default_other_url'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  build: {
    transpile: ['@headlessui/vue']
  },
  ssr: false,
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
