<template>
  <div
    class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:grid-cols-2"
  >
    <BlogCard2 :category="category.toLocaleLowerCase()" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const category = computed(() => String(route.params.category))
console.log('params', category)

definePageMeta({
  layout: 'tabbed'
})
</script>

<style scoped></style>
