interface AdsVisibility {
  [adName: string]: boolean
}

export const useAdStore = defineStore('ads', () => {
  // A reactive object to manage the visibility of multiple ads
  const adsVisibility: AdsVisibility = reactive({
    blog: !useCookie('ad-blog-hidden').value || true
  })

  // Function to initialize ad visibility based on cookies
  const initializeAds = (adNames: string[]) => {
    adNames.forEach((adName) => {
      const adCookie = useCookie(`ad-${adName}-hidden`)
      adsVisibility[adName] = !adCookie.value
    })
  }

  // Function to show an ad with a delay
  const showAdWithDelay = (adName: string, delay: number) => {
    setTimeout(() => {
      adsVisibility[adName] = true
    }, delay)
  }

  // Function to hide an ad and store the preference in a cookie
  const hideAd = (adName: string) => {
    adsVisibility[adName] = false
    const adCookie = useCookie(`ad-${adName}-hidden`)
    adCookie.value = 'true' // Store the preference in the cookie
  }

  return {
    adsVisibility,
    showAdWithDelay,
    hideAd,
    initializeAds
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAdStore, import.meta.hot))
}
