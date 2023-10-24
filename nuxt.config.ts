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
    '@nuxtjs/supabase',
    '@nuxt/image-edge',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-swiper',
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
      api_url: process.env.API_URL_BASE,
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogHost: process.env.POSTHOG_HOST
    }
  },

  routeRules: {
    // pre-rendered at build time
    '/': { prerender: true },
    '/contact-incubation': { prerender: true },
    '/contact-collaborate': { prerender: true },
    '/contact-hire-us': { prerender: true },
    '/about/**': { prerender: true },
    '/services/**': { prerender: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { prerender: true },
    '/blog': { prerender: true },
    '/incubation': { prerender: true },
    // Add cors headers on API routes
    '/api/**': { cors: true }
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

  content: {},
  //   highlight: {
  //     // Theme used in all color schemes.
  //     theme: {
  //       default: 'github-dark',
  //       dark: 'github-dark'
  //     }
  //   }
  // },

  devtools: {
    enabled: true,
    vscode: {}
  }
})
