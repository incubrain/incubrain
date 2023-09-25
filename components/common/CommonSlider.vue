<template>
  <div
    class="group mb-6 overflow-hidden rounded-lg border border-solid border-color px-8 pb-4 pt-10 font-semibold block"
  >
    <h3 class="text-3xl">Behind The Scenes</h3>

    <div
      v-for="item in textItems"
      :key="item.text"
      class="flex items-center"
      aria-hidden
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`${item.animation} pause group-hover:!start flex min-w-full`"
      >
        <p class="-translate-x-[300px] text-lg">
          {{ item.text }}
          <strong class="font-semibold text-primary-500">{{ item.strongText }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const textItems = [
  {
    text: 'Some info about our',
    strongText: 'Business',
    animation: 'animation-text-left'
  },
  {
    text: 'What might people want',
    strongText: 'to know',
    animation: 'animation-text-right'
  },
  {
    text: 'Finally convince',
    strongText: 'Them to',
    animation: 'animation-text-left'
  }
]
</script>

<style scoped></style>
