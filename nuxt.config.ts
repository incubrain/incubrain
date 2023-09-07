// https://v3.nuxtjs.org/api/configuration/nuxt.config

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
    '@nuxtjs/supabase',
    '@nuxt/content',
    '@unlighthouse/nuxt',
    '@nuxt/image',
    '@nuxthq/ui',
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
    format: ['webp', 'jpg', 'png']
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    SLACK_SUPPORT_URL: process.env.SLACK_SUPPORT_URL,
    SLACK_ENQUIRE_URL: process.env.SLACK_ENQUIRE_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ORG: process.env.OPENAI_ORG,
    GH_USER_API: process.env.GH_USER_API,
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
  nitro: {
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
    // highlight: {
    //   // Theme used in all color schemes.
    //   theme: {
    //     // Default theme (same as single string)
    //     default: 'github-dark',
    //     // Theme used if `html.dark`
    //     dark: 'github-light',
    //     // Theme used if `html.sepia`
    //     sepia: 'monokai'
    //   }
    // }
  }
})
