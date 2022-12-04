
<template>
  <div class="w-full">
    <BlogToTop />
    <div class="w-full flex flex-col px-4 lg:px-12">
      <ContentRenderer :value="post">
        <div class="flex flex-row w-full justify-center items-center gap-4 lg:gap-8 my-10 lg:my-20 prose prose-xl">
          <h1 class="text-4xl lg:text-6xl leading-10">
            {{ post.title }}
          </h1>
          <p> {{ post.completed }}</p>
        </div>
        <div class=" my-10 lg:my-20 items-center justify-center">
          <div class="h-full w-2 bg-black" />
          <div class="h-1 w-1 rounded-full bg-black" />
          <img
            :src="post.post_image"
            class="rounded-xl shadow-xl"
          >
        </div>
        <div class="w-full">
          <ContentRendererMarkdown :value="post">
            <p class="m-0">
              {{ post }}
            </p>
          </ContentRendererMarkdown>
        </div>
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

console.log('path', path)

const options: QueryBuilderWhere = props.id !== 0 ? { id: 1 } : { visible_on: path }

const post = ref()
post.value = await queryContent('projects').where(options).findOne()

</script>
