<template>
  <div
    v-if="post"
    class="w-full"
  >
    <BlogToTop />
    <ContentRenderer :value="post">
      <div class="w-full flex flex-col px-4 xl:p-12">
        <div
          class="flex flex-col-reverse xl:flex-row w-full justify-around items-center xl:justify-around"
        >
          <div
            class="flex flex-col justify-center items-center xl:justify-start xl:items-start prose prose-4xl"
          >
            <h1 class="text-4xl xl:text-6xl leading-10 prose prose-xl xl:whitespace-nowrap">
              {{ post?.title || 'Something on the way' }}
            </h1>
            <p class="text-xl xl:min-w-[360px]">
              {{
                post?.excerpt ||
                'I will leave most of the written content to the last 6 hours, because it is easy to predict how long each article will take'
              }}
            </p>
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <p> Completed: {{ post?.updated || 'sometime in the future' }}</p>
              <a
                v-if="post.link"
                :href="post.link"
                class="text-[#5a4ec9] no-underline cursor-pointer"
                target="_blank"
              >
                Reference
              </a>
            </div>
          </div>
          <!-- <AppLottie
            :src="'/projects/pages/happy-hacker.json'"
            class="h-[420px] xl:h-[600px] xl:ml-[-30px]"
          /> -->
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
const fullPath = computed(() => route.fullPath)
const post = ref()

async function getShowcase() {
  const folder = fullPath.value.split('/')[1]
  if (route.params.id) return
  post.value = await queryContent('pages', folder).where({ slug: { $eq: fullPath.value } }).findOne()
}

getShowcase()

watch(
  () => route.name,
  () => getShowcase(),
  { deep: true }
)
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
