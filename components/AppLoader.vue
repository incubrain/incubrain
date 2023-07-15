<template>
  <div
    class="
      rounded-b-md
      background
      nuxt-loading-indicator
      min-h-[800px]
      lg:min-h-[640px]
      w-full
      z-50
      flex flex-col
      justify-center
      items-center
      mb-2
      lg:mb-8
    "
  >
    <div
      class="h-full transition-width ease-in-out duration-700 lg:p-12 p-4"
      :style="
        indicator.isLoading.value === false
          ? {
            width: '100%',
            opacity: 1,
          }
          : {
            width: '0px',
            opacity: 0,
          }
      "
    >
      <BlogShowcasePage v-if="parentRoute[1]" />
      <HomeHero2 v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const parentRoute = computed(() => route.path.split('/'))

const props = defineProps({
  throttle: {
    type: Number,
    default: 5000
  },
  duration: {
    type: Number,
    default: 20000
  },
  height: {
    type: Number,
    default: 3
  },
  color: {
    type: String,
    default:
      'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)'
  }
})

const indicator = useLoadingIndicator({
  duration: props.duration,
  throttle: props.throttle
})

// Hook to app lifecycle
// TODO: Use unified loading API
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', indicator.start)
nuxtApp.hook('page:finish', indicator.finish)
onBeforeUnmount(() => indicator?.clear)

function useLoadingIndicator (opts: { duration: number; throttle: number }) {
  const progress = ref(0)
  const isLoading = ref(false)
  const step = computed(() => 10000 / opts.duration)

  let _timer: any = null
  let _throttle: any = null

  function start () {
    clear()
    progress.value = 0
    isLoading.value = true
    if (opts.throttle) {
      if (process.client) {
        _throttle = setTimeout(_startTimer, opts.throttle)
      }
    } else {
      _startTimer()
    }
  }

  function finish () {
    progress.value = 100
    _hide()
  }

  function clear () {
    clearInterval(_timer)
    clearTimeout(_throttle)
    _timer = null
    _throttle = null
  }

  function _increase (num: number) {
    progress.value = Math.min(100, progress.value + num)
  }

  function _hide () {
    clear()
    if (process.client) {
      setTimeout(() => {
        isLoading.value = false
        setTimeout(() => {
          progress.value = 0
        }, 400)
      }, 1000)
    }
  }

  function _startTimer () {
    if (process.client) {
      _timer = setInterval(() => {
        _increase(step.value)
      }, 100)
    }
  }

  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  }
}
</script>
