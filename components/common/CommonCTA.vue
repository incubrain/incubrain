<template>
  <div class="relative overflow-hidden padded-y flex justify-center items-center bg-highlight background">
    <div
      class="h-1/5 w-full absolute z-10 top-0 left-0 bg-gradient-to-b from-gray-50 via-gray-50 dark:via-neutral-950 dark:from-neutral-950 to-transparent"
    />
    <div class="bg-pattern" />
    <div class="relative wrapper padded-x space-y-4 lg:space-y-6 flex justify-center items-center flex-col">
      <CommonTitle
        :title="title"
        alignment="center"
        is-cta
      >
        <slot />
      </CommonTitle>
    </div>
    <div
      class="h-1/5 absolute z-10 bottom-0 w-full bg-gradient-to-b from-transparent via-gray-50 dark:via-neutral-950 to-gray-50 dark:to-neutral-950"
    />
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
