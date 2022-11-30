<template>
  <div>
    <GridCol1>
      <BlogCard />
    </GridCol1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Tech Thoughts'
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');

.blog-heading {
  font-family: 'Rubik Distressed', cursive;
}

</style>
