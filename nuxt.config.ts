// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      // link: [
      // { rel: 'stylesheet', href: 'https://unpkg.com/flowbite@latest/dist/flowbite.min.css' }
      // ]
      // script: [{ src: 'https://unpkg.com/flowbite@latest/dist/flowbite.js' }]
    }
  },

  site: {
    url: 'https://www.incubrain.org',
    name: 'Incubrain - Nuxt Product Development Agency',
    description: 'Incubrain helps you build nuxt amazing products that sell themselves.',
    defaultLocale: 'en',
    trailingSlash: false,
    titleSeparator: ' | ',
    debug: true,
    identity: {
      type: 'Organization'
    },
    twitter: '@incubrain'
  },

  siteMap: {
    strictNuxtContentPaths: true // required for nuxt content if you don't use document driven
  },

  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './data/'
      }
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxt/image-edge',
    '@nuxt/ui',
    '@nuxtseo/module',
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
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogHost: process.env.POSTHOG_HOST
    }
  },

  routeRules: {
    // pre-rendered at build time
    '/**': { prerender: true }
    // '/contact-incubation': { prerender: true },
    // '/contact-collaborate': { prerender: true },
    // '/contact-hire-us': { prerender: true },
    // '/about/**': { prerender: true },
    // '/transparency/**': { prerender: true },
    // '/services/**': { prerender: true },
    // // Blog post generated on-demand once until next deploy
    // '/blog/**': { prerender: true },
    // '/blog': { prerender: true },
    // '/incubation': { prerender: true },
    // '/sitemap.xml': { prerender: true }
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
