<template>
  <div class="relative w-full h-full overflow-hidden border-b border-color">
    <div class="w-full h-full absolute top-0 left-0" />
    <div
      ref="testParallax"
      class="bg-pattern"
      :style="testParallaxStyle"
    />
    <div class="relative flex flex-row items-center justify-center gap-4 rounded-md">
      <div
        class="relative flex flex-col w-full padded-x justify-start items-center lg:flex-row gap-8 lg:gap-16 wrapper h-64 lg:h-[580px]"
      >
        <div
          class="flex justify-center h-auto lg:h-full p-4 items-center background border-x border-color"
        >
          <NuxtImg
            v-if="img.src"
            :src="img.src"
            :alt="img.alt"
            width="220"
            class="dark:invert"
          />
        </div>
        <div class="space-y-4">
          <h2 class="text-3xl font-bold lg:text-5xl leading-none">
            {{ title.main }}
          </h2>
          <h4
            v-if="title.subtitle"
            class="text-xl w-auto inline-block font-semibold lg:text-3xl"
          >
            {{ title.subtitle }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

const testParallax = ref<HTMLElement | null>(null)
const { y } = useWindowScroll()

const testParallaxStyle = computed(() => {
  return {
    transform: `translateY(${y.value}px)`
  }
})

interface Image {
  title: string
  src: string
  alt: string
}

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  img: {
    type: Object as PropType<Image>,
    required: false,
    default: () => ({
      title: null,
      src: null,
      alt: null
    })
  }
})
</script>
