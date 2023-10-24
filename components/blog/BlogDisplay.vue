<template>
  <div>
    <div class="space-y-6 lg:space-y-12">
      <CommonTitle :title="title" />
      <div
        v-if="posts.length > 1"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
      >
        <BlogCard
          v-for="post in posts"
          :key="post.title"
          :post="post"
        />
        <BlogCard
          v-for="post2 in posts2"
          :key="post2.title"
          :post="post2"
        />
      </div>
      <div class="flex justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'
import { PostCard, POST_CARD_PROPERTIES } from '~/types/posts'
const postStore = usePostsStore()
const { data: posts } = await useAsyncData('posts2', () => postStore.getShowcasePosts('business'))

const posts2 = ref([] as PostCard[])

if (!posts2.value.length) {
  const { data } = (await useAsyncData('posts2', () =>
    queryContent('blog').only(POST_CARD_PROPERTIES).sort({ date: -1 }).limit(3).find()
  )) as { data: Ref<PostCard[]> }
  posts2.value = data.value
}

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  }
})
</script>

<style scoped></style>
