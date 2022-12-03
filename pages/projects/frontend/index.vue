<template>
  <div class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:grid-cols-2">
    <BlogCard2 type="projects" filter="frontend" />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Frontend'
})

//   < template #spec >
//     <div class="prose prose-md" >
//       <h2 class="mt-0 mb-4" >
//         {{ challenge.title }}
// </h2>
//   < p class="challenge-description" />
//     <img : src = "challenge.image"
// class="w-[150px]" >
//   </div>
//   < /template>
//   < template #solution >
//     <ContentRendererMarkdown : value = "challenge"
// class="code-challenge" >
//   <p class="m-0" >
//     {{ challenge }}
// </p>
//   < /ContentRendererMarkdown>
//   < /template>

</script>
