<template>
  <div
    v-if="post"
    class="w-full foreground"
  >
    <ContentRenderer :value="post">
      <div class="w-full container-lg flex flex-col p-4 xl:p-8">
        <div class="flex flex-col-reverse xl:flex-row w-full justify-between items-center gap-16">
          <div class="flex flex-col justify-center items-center xl:justify-start xl:items-start gap-4">
            <h1 class="text-4xl xl:text-5xl font-bold">
              {{ post?.title }}
            </h1>
            <p class="text-xl xl:max-w-[80%]">
              {{ post?.excerpt }}
            </p>
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <p> Completed: {{ post?.updated || 'sometime in the future' }}</p>
              <a
                v-if="post.link"
                :href="post.link"
                class="no-underline cursor-pointer"
                target="_blank"
              >
                Reference
              </a>
            </div>
          </div>
          <NuxtImg src="/happy-hacker.gif" />
        </div>
      </div>
      <div
        v-if="post.type === 'thoughts'"
        class="my-16 border-t-2 border-grey-200 flex justify-center items-center"
      >
        <ContentRendererMarkdown
          :value="post"
          class="w-full max-w-[680px] post-default prose prose-md mt-16"
        >
          <p class="m-0">
            {{ post }}
          </p>
        </ContentRendererMarkdown>
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
