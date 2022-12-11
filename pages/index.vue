<template>
  <div
    class="container mx-auto"
  >
    <MulticolorHeading />
    <!-- <Testimonial /> -->
    <!-- <AppCardCarosel /> -->
    <FormContact />
    <!-- <HomeHero />
    <HomeProjectSteps />
    <HomeProjectMain />
    <HomeProjects />
    <HomeCTA /> -->
    <!-- <HomeFeatures />
    <HomeComponents />
    <HomeCode />
    <HomeSkills />
    <HomeTech /> -->
  </div>
</template>

<script setup lang="ts">


definePageMeta({
  layout: 'tabbed',
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
