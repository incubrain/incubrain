<template>
  <div class="relative overflow-hidden padded-y text-white flex justify-center items-center">
    <NuxtImg
      :src="image"
      alt="Hero Image"
      class="absolute top-0 left-0 w-full h-full object-left object-cover"
    />
    <div class="w-full h-full absolute top-0 left-0 bg-black/40 dark:bg-black/70" />
    <div class="padded w-full wrapper">
      <UAlert
        class="w-full"
        color="primary"
        variant="subtle"
        :title="title"
      >
        <template #title>
          <h2 class="text-xl lg:text-2xl font-bold">
            {{ title }}
          </h2>
        </template>
        <template #description>
          <p class="text-base leading-5"> {{ description }}</p>
        </template>
      </UAlert>
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
