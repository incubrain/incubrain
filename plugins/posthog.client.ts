import { posthog } from 'posthog-js'
export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig().public
  const posthogClient = posthog.init(cfg.posthogPublicKey, {
    api_host: cfg.posthogHost || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug()
    }
  })

  // Make sure that pageviews are captured with each route change
  const router = useRouter()
  router.afterEach((to) => {
    posthog.capture('$pageview', {
      current_url: to.fullPath
    })
  })

  return {
    provide: {
      posthog: () => posthogClient
    }
  }
})
