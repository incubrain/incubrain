<template>
  <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
    <NuxtImg
      :class="`w-full h-full absolute object-${fit} ${objectPosition}`"
      :src="img.src"
      :alt="img.alt"
    />
    <div class="w-full h-full absolute top-0 left-0 bg-black/50" />
    <div
      class="relative flex flex-col w-full padded-x justify-center items-center lg:flex-row text-white gap-8 lg:gap-16 wrapper h-64 lg:h-[580px]"
    >
      <div class="space-y-4 w-full">
        <h2 class="text-3xl font-bold lg:text-5xl">
          {{ title.main }}
        </h2>
        <h4
          v-if="title.subtitle"
          class="text-xl w-auto inline-block font-semibold lg:text-3xl"
        >
          {{ title.subtitle }}
        </h4>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

interface ImageProps {
  src: string
  alt: string
}

defineProps({
  img: {
    type: Object as PropType<ImageProps>,
    required: true
  },
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  fit: {
    type: String,
    default: 'cover'
  },
  objectPosition: {
    type: String,
    default: 'object-bottom'
  }
})
</script>

<style scoped></style>
