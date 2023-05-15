<template>
  <div v-if="post">
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <ContentRenderer :value="post">
        <div class="my-10 lg:my-10 flex flex-col justify-center">
          <img :src="post.post_image" class="rounded-xl shadow-xl">
          <h1 class="text-4xl lg:text-6xl leading-10 text-center">
            {{ post.title }}
          </h1>
          <div class="flex flex-row gap-2items-center justify-center">
            <p class="font-semibold">
              Published: {{ post.published }}
            </p>
          </div>
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

const { type } = defineProps({
  type: {
    type: String,
    required: true
  }
})

const route = useRoute()
const path = computed(() => route.path)
const post = ref()

async function getProject () {
  const options: QueryBuilderWhere = {
    id: Number(route.path.split('/').at(-1))
  }
  post.value = await queryContent(type).where(options).findOne()
}

getProject()

watch(
  () => route.path,
  () => getProject(),
  { deep: true }
)

</script>
