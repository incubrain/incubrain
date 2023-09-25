<template>
  <div class="relative aspect-video overflow-hidden">
    <video controls :src="src" :title="title" class="absolute w-full h-full top-0 left-0" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style>
</style>
