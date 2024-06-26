<script setup lang="ts">
import type { TitleT } from '~/types/content'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})

const { y } = useWindowScroll()

const testParallaxStyle = computed(() => {
  if (isClient.value) {
    return {
      transform: `translateY(${y.value}px)`
    }
  }
  return {
    transform: 'translateY(0px)'
  }
})

interface Image {
  title: string
  src: string
  alt: string
  width?: number
  height?: number
}

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  },
  img: {
    type: Object as PropType<Image>,
    required: false,
    default: () => ({
      title: null,
      src: null,
      alt: null,
      height: null,
      width: null
    })
  },
  invert: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative dark:bg-black w-full h-screen overflow-hidden border-b border-color">
    <div
      ref="testParallax"
      class="bg-pattern h-screen"
      :style="testParallaxStyle"
    />
    <div class="flex background bg-highlight flex-row items-center justify-center gap-4 rounded-md h-full">
      <div
        class="relative flex w-full padded-x justify-center lg:justify-start items-center flex-row gap-4 lg:gap-16 wrapper h-full"
      >
        <div class="space-y-4 text-center lg:text-left flex-shrink">
          <h2
            class="text-4xl font-bold lg:text-5xl leading-normal bg-gradient-to-r from-primary-500 via-primary-500 to-primary-900 bg-clip-text text-transparent drop-shadow-lg"
          >
            {{ title.main }}
          </h2>

          <h4
            v-if="title.subtitle"
            class="text-xl w-auto inline-block font-semibold lg:text-2xl decoration-primary-500 dark:decoration-primary-900 underline max-w-xs lg:max-w-none"
          >
            {{ title.subtitle }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
