<template>
  <div class="flex gap-4 my-12 p-4 lg:p-8 rounded-md justify-between items-center border border-color bg-primary-50 dark:bg-primary-950">
    <div class="w-2/3">
      <h2 class="font-bold mt-0" :style="{ marginTop: '0px'}"> {{ title }}</h2>
      <p class="mt-0"> {{ body }}</p>
      <UButton variant="outline">
        {{ cta }}
      </UButton>
    </div>
    <div class="w-1/3 flex justify-center items-center">
      <NuxtImg
        :src="`images/${imageUrl}`"
        alt="Incubrain inline blog CTA"
        class="dark:invert"
        width="120"
        height="120"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  cta: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: 'incubrain-logo.svg'
  }
})
</script>

<style scoped></style>
