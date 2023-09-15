<template>
  <div
    v-if="post"
    class="w-full foreground"
  >
    <ContentRenderer :value="post">
      <div class="w-full wrapper flex flex-col p-4 lg:p-8">
        <div class="flex flex-col-reverse lg:flex-row w-full justify-between items-center lg:gap-16">
          <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-4">
            <h1 class="text-4xl lg:text-5xl font-bold">
              {{ post?.title }}
            </h1>
            <p class="text-lg lg:max-w-[80%]">
              {{ post.description }}
            </p>
          </div>
          <NuxtImg src="images/happy-hacker.gif" />
        </div>
      </div>
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const post = ref({})

async function getShowcase() {
  if (route.params.id) return
  console.log('path', route.fullPath, route)
  const path = route.fullPath.endsWith('/') ? route.fullPath.slice(0, -1) : route.fullPath
  post.value = await queryContent('pages')
    .where({ _path: `/pages${path}` })
    .findOne()
}

watchEffect(() => {
  if (route.fullPath) {
    getShowcase()
  }
})
</script>

<style>
/* Default Post Layout */

.post-default h1 {
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-decoration: none !important;
}

/* .post-default {
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-decoration: none !important;
} */
</style>
