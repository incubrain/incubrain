
<template>
  <div class="w-full">
    <BlogToTop />
    <div class="w-full flex flex-col px-4 lg:px-12">
      <ContentRenderer :value="post">
        <div class="flex flex-row w-full justify-around">
          <div class="flex flex-col justify-start items-start lg:my-20 prose prose-4xl">
            <h1 class="text-4xl lg:text-6xl leading-10 prose prose-xl">
              {{ post?.title || 'Something on the way' }}
            </h1>
            <p class="text-xl"> {{ post?.excerpt || 'I will leave most of the written content to the last 6 hours, because it is easy to predict how long each article will take'}}</p>
            <p> Completed: {{ post?.completed || 'sometime in the future'}}</p>
          </div>
          <AppLottie :src="'/projects/pages/happy-hacker.json'"
            class="w-[40%] h-full ml-[-30px] hidden lg:block" />
        </div>
        <div class="my-10 w-full flex items-center justify-center">
          <img
            :src="post.post_image"
            class="rounded-xl shadow-xl"
          >
        </div>
        <ContentRendererMarkdown
          v-if="post"
          :value="post"
        >
          <p class="showcase w-full mt-10 flex flex-col gap-10">
            {{ post }}
          </p>
        </ContentRendererMarkdown>
        <p v-else />
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">

import { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

interface Props {
  id: number
}

const props = withDefaults(defineProps<Props>(), {
  id: 0
})

const route = useRoute()
const path = route.path.charAt(route.path.length - 1) === '/' ? route.path.slice(0, -1) : route.path
const options: QueryBuilderWhere = props.id !== 0 ? { id: 1 } : { visible_on: path }

const post = ref()
post.value = await queryContent('projects').where(options).findOne()

</script>

<style scoped>

.showcase img {
  margin: 40px 0px !important;
  padding: 50rem;
  border-radius: 1rem;
}

</style>
