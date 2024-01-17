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
import type { PostCategoriesT, PostCardT, PostsInitializerT } from '~/types/posts'

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

const { categories } = useCatTag()
const postsShowcase: PostsType = reactive(categories.initialize(() => <PostCardT[]>[]))

const getShowcasePosts = async (category: PostCategoriesT) => {
  if (postsShowcase[category].length) return postsShowcase[category].slice(0, 3)
  const newPosts = await fetchPosts({
    category,
    skip: 0,
    limit: 3
  })
  postsShowcase[category].push(...(newPosts as PostCardT[]))
  return postsShowcase[category].slice(0, 3)
}

const { data: posts } = await useAsyncData('posts', () => getShowcasePosts(p.postType))
</script>

<style scoped></style>
