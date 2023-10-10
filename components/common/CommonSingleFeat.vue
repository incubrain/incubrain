<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
    <div class="space-y-4 lg:space-y-6">
      <CommonTitle :title="title">
        <slot />
      </CommonTitle>
    </div>
    <div class="w-full h-full">
      <NuxtImg
        :src="image"
        alt="Hero Image"
        class="rounded-sm"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  image: {
    type: String,
    default: '/images/hero.jpg'
  }
})
</script>

<style scoped></style>
