<template>
  <div class="relative overflow-hidden">
    <div
      class="triangle hidden lg:block absolute top-0 left-0 before:border-t-emerald-400 dark:before:border-t-emerald-700 before:border-x-transparent before:border-b-transparent"
    />
    <div
      class="triangle hidden lg:block absolute top-0 right-0 before:border-t-emerald-400 dark:before:border-t-emerald-700 before:border-x-transparent before:border-b-transparent"
    />
    <div class="max-w-[1080px] mx-auto flex flex-col justify-center relative lg:py-20">
      <BlogPost v-if="post" :post="post" />
      <BlogNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { POST_FULL_PROPERTIES, PostFull, postFullSchema } from '~/types/posts'

const route = useRoute()
const category = ref(String(route.params.category))
const p = usePostsStore()

const { data: post } = await useAsyncData('post', async (): Promise<PostFull | void> => {
  const post = await queryContent('/blog', category.value)
    .only(POST_FULL_PROPERTIES)
    .where({ _path: route.path })
    .findOne()
  const validPost = p.isValidPost(post as PostFull, postFullSchema)
  if (!validPost) return console.error('Post failed to load')
  return post as PostFull
})

</script>

<style>
.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 50vh;
  border-style: solid;
  border-width: 50vw 50vw 0 50vw;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}
</style>
