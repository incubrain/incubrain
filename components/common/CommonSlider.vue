<template>
  <div
    class="group mb-6 overflow-hidden rounded-lg border border-solid border-color p-8 font-semibold block"
  >
    <h3 class="text-3xl">Behind The Scenes</h3>

    <p
      class="text-base"
      v-for="item in textItems"
      :key="item.text"
      aria-hidden
    >
      {{ item.text }}
      <strong class="font-semibold text-primary-500">{{ item.strongText }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
const textItems = [
  {
    text: 'Some info about our',
    strongText: 'Business'
  },
  {
    text: 'What might people want',
    strongText: 'to know'
  },
  {
    text: 'Finally convince',
    strongText: 'Them to'
  }
]
</script>

<style scoped></style>
