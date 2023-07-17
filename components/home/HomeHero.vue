<template>
  <div class="flex h-screen bg-gradient-to-br from-emerald-200 via-emerald-700 to-zinc-800">
    <div class="flex flex-col justify-center w-1/2 p-8 text-white space-y-6 relative">
      <UBadge
        size="sm"
        color="white"
        variant="solid"
        class="absolute top-4 right-4"
      >
        We ❤️ Nuxt
      </UBadge>
      <h1 class="text-4xl font-bold">Ignite Your Ideas with Incubrain</h1>
      <p class="text-lg leading-relaxed">
        Merging decades of startup experience with cutting-edge Nuxt 3 technology, we turn ideas
        into powerful SaaS solutions. As active contributors to Nuxt open source, we're committed to
        fostering growth within the community and beyond.
      </p>
      <UButton
        to="/services"
      >
        Explore Our Services
      </UButton>
    </div>
    <div class="w-1/2">
      <NuxtImg
        class="h-full"
        src="/hero.jpg"
        alt="Incubrain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('Ignite Your Ideas with Incubrain')
const description = ref(
  "Merging decades of startup experience with cutting-edge Nuxt 3 technology, we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source, we're committed to fostering growth within the community and beyond."
)

useHead({ title: title.value, meta: [{ name: description.value }] })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
