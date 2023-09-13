<template>
  <div class="relative overflow-hidden padded-y text-white flex justify-center items-center">
    <NuxtImg
      :src="image"
      alt="Hero Image"
      class="absolute top-0 left-0 w-full object-left"
      width="100%"
      height="100%"
    />
    <div class="w-full h-full absolute top-0 left-0 bg-black/40" />
    <div class="space-y-4 lg:space-y-6 relative z-10 wrapper padded">
      <h2 class="text-xl lg:text-2xl font-bold">
        {{ title }}
      </h2>
      <p class="text-base"> {{ description }}</p>
      <div class="flex gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'CTA Title'
  },
  description: {
    type: String,
    default: 'CTA Description'
  },
  image: {
    type: String,
    default: '/images/hero.jpg'
  }
})
</script>

<style scoped></style>
