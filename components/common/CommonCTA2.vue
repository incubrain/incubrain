<template>
  <div class="relative w-full flex justify-center items-center overflow-hidden padded-y">
    <CommonBg />
    <CommonTitle :title="title" alignment="center" class="mx-auto">
      <slot />
    </CommonTitle>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  }
})
</script>

<style scoped></style>
