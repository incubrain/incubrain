
<template>
  <div class="w-full">
    <BlogToTop />
    <div class="w-full flex flex-col px-4 lg:px-12">
      <ContentRenderer :value="post">
        <div class="flex flex-col-reverse lg:flex-row w-full justify-around items-center lg:justify-around overflow-hidden">
          <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start prose prose-4xl">
            <h1 class="text-4xl lg:text-6xl leading-10 prose prose-xl whitespace-nowrap">
              {{ post?.title || 'Something on the way' }}
            </h1>
            <p class="text-xl min-w-[360px]"> {{ post?.excerpt || 'I will leave most of the written content to the last 6 hours, because it is easy to predict how long each article will take'}}</p>
            <p> Completed: {{ post?.completed || 'sometime in the future'}}</p>
          </div>
          <AppLottie
            :src="'/projects/pages/happy-hacker.json'"
            class="h-[420px] lg:h-[600px] lg:ml-[-30px]"
          />
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
const path = computed(() => route.path)
const post = ref()

async function getShowcase() {
  const trimPath = route.path.charAt(path.value.length - 1) === '/' ? path.value.slice(0, -1) : path.value
  const options: QueryBuilderWhere = props.id !== 0 ? { id: 1 } : { visible_on: trimPath }
  post.value = await queryContent('tasks').where(options).findOne()
}

getShowcase()

watch(() => route.name, () => getShowcase(), { deep: true })

</script>

<style scoped>

.showcase img {
  margin: 40px 0px !important;
  padding: 50rem;
  border-radius: 1rem;
}

</style>
