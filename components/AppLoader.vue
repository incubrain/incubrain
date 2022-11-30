<template>
  <div
    class="rounded-md mb-8 px-4 py-8 bg-white nuxt-loading-indicator h-100 w-full z-50 flex flex-col justify-center items-center"
    >
    <!-- <div
      :style="{
      pointerEvents: 'none',
      top: 0,
      left: 0,
      position: 'absolute',
      width: `${indicator.progress.value}%`,
      height: `40px`,
      'margin-bottom': '40px',
      opacity: indicator.isLoading.value ? 1 : 0,
      background: props.color,
      backgroundSize: `${(100 / indicator.progress.value) * 100}% auto`,
      transition: 'width 0.5s, height 0.4s, opacity 0.4s',
      zIndex: 999999
    }"
    /> -->

    <div
        :class="indicator.isLoading.value === true
          ? 'block mt-8'
          : 'hidden'
          "
        >
        <div class="mx-auto flex justify-center">
          <div class="relative">
            <div
              class="w-[160px] h-[160px] border border-indigo-400 rounded-full"
            ></div>
            <div
              class="w-[140px] h-[140px] border border-indigo-400 rounded-full absolute top-2.5 right-2.5"
            ></div>
            <div>
              <svg
                class="absolute top-[22px] right-[26px] animate-spin"
                width="113"
                height="113"
                viewBox="0 0 113 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.7631 110.374C46.061 110.374 35.5993 107.2 26.7008 101.255C17.8023 95.3088 10.8668 86.8579 6.77128 76.9704C2.67576 67.083 1.60419 56.2031 3.69207 45.7066C5.77994 35.2102 10.9335 25.5686 18.501 18.001C26.0686 10.4335 35.7102 5.27994 46.2066 3.19207C56.7031 1.10419 67.583 2.17576 77.4704 6.27128C87.3579 10.3668 95.8088 17.3023 101.755 26.2008C107.7 35.0993 110.874 45.561 110.874 56.2631"
                  stroke="#4338CA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="16 16"
                />
              </svg>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-600 text-base mt-4">
          Your Request Is Being Loaded, Please Wait
        </p>
      </div>
      <p v-if="indicator.isLoading.value === false"> Visible as a loader example</p>
    </div>
</template>

<script setup lang="ts">

import { computed, defineComponent, h, onBeforeUnmount, ref } from 'vue'
import { useNuxtApp } from '#app'

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
    default: 'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)'
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

// return () => h('div', {
//   class: 'nuxt-loading-indicator',
//   style: {
//     position: 'fixed',
//     top: 0,
//     right: 0,
//     left: 0,
//     pointerEvents: 'none',
//     width: `${indicator.progress.value}%`,
//     height: `${props.height}px`,
//     opacity: indicator.isLoading.value ? 1 : 0,
//     background: props.color,
//     backgroundSize: `${(100 / indicator.progress.value) * 100}% auto`,
//     transition: 'width 0.1s, height 0.4s, opacity 0.4s',
//     zIndex: 999999
//   }
// }, slots)

function useLoadingIndicator(opts: { duration: number, throttle: number })
{
  const progress = ref(0)
  const isLoading = ref(false)
  const step = computed(() => 10000 / opts.duration)

  let _timer: any = null
  let _throttle: any = null

  function start()
  {
    clear()
    progress.value = 0
    isLoading.value = true
    if (opts.throttle)
    {
      if (process.client)
      {
        _throttle = setTimeout(_startTimer, opts.throttle)
      }
    }
    else
    {
      _startTimer()
    }
  }

  function finish()
  {
    progress.value = 100
    _hide()
  }

  function clear()
  {
    clearInterval(_timer)
    clearTimeout(_throttle)
    _timer = null
    _throttle = null
  }

  function _increase(num: number)
  {
    progress.value = Math.min(100, progress.value + num)
  }

  function _hide()
  {
    clear()
    if (process.client)
    {
      setTimeout(() =>
      {
        isLoading.value = false
        setTimeout(() => { progress.value = 0 }, 400)
      }, 1500)
    }
  }

  function _startTimer()
  {
    if (process.client)
    {
      _timer = setInterval(() => { _increase(step.value) }, 100)
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
