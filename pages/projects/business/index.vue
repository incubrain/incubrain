<template>
  <div class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:gap-6 xl:gap-8 xl:grid-cols-2">
    <!-- <BlogCard2 type="projects" filter="business" /> -->
    <AppPDF src="/projects/astrotribe/Astron-DB-v.5.pdf" />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Business'
})

</script>
