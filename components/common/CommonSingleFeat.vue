<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
    <div class="space-y-4 lg:space-y-6">
      <CommonTitle :title="title">
        <slot />
      </CommonTitle>
    </div>
    <div class="background rounded-md">
      <NuxtImg
        :src="image"
        alt="Hero Image"
        class="rounded-md"
        width="500"
        height="500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  },
  image: {
    type: String,
    default: '/images/hero.jpg'
  }
})
</script>

<style scoped></style>
