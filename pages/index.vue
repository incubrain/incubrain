<template>
  <div class="mx-auto">
    <HomeHero />
    <HomeServices />
    <HomeAbout />
    <HomeAboutUs />
    <HomeTestimonial />
    <HomeFaq />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
  name: 'Home'
})

// useHead({
//   title: 'My App',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', children: 'console.log("test3");' } ]
// })
</script>
