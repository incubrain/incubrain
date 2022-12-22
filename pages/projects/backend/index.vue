<template>
  <div class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:grid-cols-2">
    <BlogCard2
      type="projects"
      filter="backend"
    />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Backend'
})

</script>
