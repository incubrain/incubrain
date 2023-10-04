import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (to.hash) {
        setTimeout(
          () => {
            resolve({ el: to.hash, top: 60, behavior: 'smooth' })
          },
          !from || to.path !== from.path ? 500 : 1
        )
      } else {
        resolve({ top: 0, behavior: 'smooth' })
      }
    })
  }
}
