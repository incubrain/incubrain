<template>
  <div>
    <div class="space-y-6 lg:space-y-12">
      <CommonTitle :title="title" />
      <div
        v-if="posts && posts.length > 1"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
      >
        <BlogCard
          v-for="post in posts"
          :key="post.title"
          :post="post"
        />
      </div>
      <div class="flex justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'
import type { PostCategoriesT } from '~/types/posts'

const p = defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  },
  postType: {
    type: String as PropType<PostCategoriesT>,
    required: true
  }
})

const postStore = usePostsStore()
const { data: posts } = await useAsyncData('posts', () => postStore.getShowcasePosts(p.postType))
</script>

<style scoped></style>
