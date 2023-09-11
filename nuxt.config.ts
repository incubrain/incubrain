// https://v3.nuxtjs.org/api/configuration/nuxt.config
import path from 'path'

export default defineNuxtConfig({
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: 'desktop'
    }
  },

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // link: [
      // { rel: 'stylesheet', href: 'https://unpkg.com/flowbite@latest/dist/flowbite.min.css' }
      // ]
      // script: [{ src: 'https://unpkg.com/flowbite@latest/dist/flowbite.js' }]
    }
  },

  modules: [
    '@nuxt/content',
    '@unlighthouse/nuxt',
    '@nuxt/image-edge',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@vee-validate/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
      }
    ]
  ],

  typescript: {
    shim: false,
    tsConfig: {
      exclude: ['node_modules', 'dist'],
      compilerOptions: {
        // types: ['@nuxt/types', 'vite/client', './types/types.d.ts'],
        strict: true
      }
    }
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },

  colorMode: {
    classSuffix: ''
  },

  ui: {
    icons: ['mdi', 'heroicons', 'material-symbols']
  },

  image: {
    ipx: {
      dir: path.resolve('./public/images/')
    },
    dir: path.resolve('./public/images/'),
    format: ['webp', 'jpg', 'png']
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    SLACK_SUPPORT_URL: process.env.SLACK_SUPPORT_URL,
    SLACK_ENQUIRE_URL: process.env.SLACK_ENQUIRE_URL,
    // Keys within public, will be also exposed to the client-side
    public: {
      api_url: process.env.API_URL_BASE
    }
  },

  nitro: {
    preset: 'vercel_edge',
    // Production
    storage: {
      data: {
        driver: 'vercelKV',
        base: 'incubrain:'
      }
    },
    // Development
    devStorage: {
      data: {
        driver: 'fs',
        base: './data/kv'
      }
    }
  },

  imports: {
    dirs: ['stores', 'data']
  },

  ssr: true,

  swiper: {
    // prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'autoplay', 'grid'] // import modules as needed https://nuxt.com/modules/swiper#module-options
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    }
  },

  devtools: {
    enabled: true
  }
})
