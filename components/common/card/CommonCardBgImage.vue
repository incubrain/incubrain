<template>
  <div
    class="relative h-full overflow-hidden background rounded-lg border border-solid border-color px-8 pt-10"
    :class="parent"
  >
    <div class="relative z-10 space-y-2 pb-6 w-full">
      <h3
        class="underline decoration-primary-500 dark:decoration-primary-900 text-3xl font-semibold"
      >
        {{ content.title }}
      </h3>
      <p>{{ content.description }}</p>
    </div>
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

interface Content {
  title: string
  description: string
}

defineProps({
  img: {
    type: Object as PropType<ImgProps>,
    required: true
  },
  content: {
    type: Object as PropType<Content>,
    required: true
  },
  parent: {
    type: String,
    required: true
  }
})
</script>
