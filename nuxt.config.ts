// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  sourcemap: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  devtools: {
    enabled: true
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://assets.calendly.com/assets/external/widget.js',
          async: true
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://assets.calendly.com/assets/external/widget.css',
          async: true
        }
      ]
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxthq/studio',
    'nuxt-swiper',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
      }
    ]
  ],

  site: {
    url: 'https://www.incubrain.org',
    name: 'Incubrain - Nuxt Developer Agency',
    description:
      'Incubrain is a group of expert Nuxt contrators, ready to get started on your project today.',
    defaultLocale: 'en',
    trailingSlash: false,
    titleSeparator: ' | ',
    debug: process.env.NODE_ENV !== 'production',
    identity: {
      type: 'Organization'
    },
    twitter: '@incubrain'
  },

  ogImage: {
    componentOptions: {
      global: true
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    devStorage: {
      data: {
        driver: 'fs',
        base: './public/data/'
      }
    },
    storage: {
      data: {
        driver: 'fs',
        base: './data/'
      }
    }
  },

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
    DISCORD_NOTIFICATION_URL: process.env.DISCORD_NOTIFICATION_URL,
    // Keys within public, will be also exposed to the client-side
    public: {
      baseURL: process.env.BASE_URL || 'https://www.incubrain.org/',
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogHost: process.env.POSTHOG_HOST
    }
  },

  routeRules: {
    // pre-rendered at build time
    '/**': { prerender: true }
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

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*']
    }
  },

  content: {}
  //   highlight: {
  //     // Theme used in all color schemes.
  //     theme: {
  //       default: 'github-dark',
  //       dark: 'github-dark'
  //     }
  //   }
  // },
})
