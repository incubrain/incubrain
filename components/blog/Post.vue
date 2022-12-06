
<template>
  <div v-if="post">
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <ContentRenderer :value="post">
        <div class="my-10 lg:my-20">
          <h1 class=" text-4xl lg:text-6xl leading-10">
            {{ post.title }}
          </h1>
          <div class="flex flex-row gap-2 my-10 lg:my-20 items-center justify-center">
            <div class="h-full w-2 bg-black" />
            <p> {{ post.completed }}</p>
            <div class="h-1 w-1 rounded-full bg-black" />
          </div>
          <img :src="post.post_image"
            class="rounded-xl shadow-xl">
        </div>
        <div class="max-w-[920px] mx-auto">
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

// interface Props {
//   id: number
// }

// const props = withDefaults(defineProps<Props>(), {
//   id: 0
// })

const route = useRoute()
const path = computed(() => route.path)
const post = ref()

async function getProject() {
  const options: QueryBuilderWhere = { id: Number(route.path.charAt(path.value.length - 1)) }
  console.log('ops', options )
  post.value = await queryContent('projects').where(options).findOne()
}

getProject()

watch(() => route.path, () => getProject(), { deep: true })

</script>
