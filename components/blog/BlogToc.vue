<template>
  <div>
    <h2 class="text-2xl font-semibold py-4"> TOC </h2>
    <ul>
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  toc: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>
