<template>
  <div
    class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:grid-cols-2"
  >
    <BlogCard2 />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabbed',
  name: 'BlogAll'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');

.blog-heading {
  font-family: 'Rubik Distressed', cursive;
}
</style>
