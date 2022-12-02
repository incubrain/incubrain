// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import dotenv from 'dotenv'
// require('dotenv').config()

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/flowbite@latest/dist/flowbite.min.css' }
      ],
      script: [
        { src: 'https://unpkg.com/flowbite@latest/dist/flowbite.js' }
      ]
    }
  },
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
      api_url: process.env.API_URL_BASE
    }
  },
  build: {
    transpile: [
      '@headlessui/vue',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  },
  nitro: {
    preset: 'digital-ocean'
  },
  ssr: true,
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
