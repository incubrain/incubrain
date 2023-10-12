<template>
  <div
    class="relative h-full overflow-hidden rounded-lg border border-solid border-color px-8 pb-6 pt-10"
    :class="parent"
  >
    <h3 class="pb-8 relative z-10 underline decoration-primary-500 dark:decoration-primary-900 text-3xl font-semibold">{{ title }}</h3>
    <div :class="img.parentClass ? img.parentClass : ''">
      <NuxtImg
        loading="lazy"
        :src="img.src"
        :height="img.height"
        :alt="img.alt"
        :width="img.width"
        :class="img.class"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ImgProps {
  src: string
  height: number
  alt: string
  width: number
  class: string
  parentClass?: string
}

defineProps({
  img: {
    type: Object as PropType<ImgProps>,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  parent: {
    type: String,
    required: true
  }
})
</script>
