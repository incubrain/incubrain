<template>
  <div class="relative h-10">
    <div
      class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-[1px] bg-zinc-200 dark:bg-zinc-800"
    />
    <div
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 background border border-color py-2 px-4 rounded-md flex flex-col items-center space-y-1 text-center"
    >
      <h4 class="font-bold text-lg text-primary-500 uppercase">{{ title.main }}</h4>
      <span class="text-sm max-w-xs">{{ title.subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  }
})
</script>

<style scoped></style>
