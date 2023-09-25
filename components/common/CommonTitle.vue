<template>
  <div :class="`flex flex-col gapped text-${alignment} lg:max-w-xl`">
    <p
      v-if="label"
      class="text-sm font-bold uppercase text-primary"
    >
      {{ label }}</p
    >
    <h2 class="text-2xl lg:text-4xl font-bold">
      {{ title }}
    </h2>
    <p class="text-base"> {{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  },
  alignment: {
    type: String,
    default: 'left'
  }
})
</script>

<style scoped></style>
