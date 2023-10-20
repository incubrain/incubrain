<template>
  <div>
    <div class="space-y-6 lg:space-y-12">
      <CommonTitle :title="title" />
      <div v-if="posts.length > 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
import { Title } from '~/types/content'
import { PostCard } from '~/types/posts'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  posts: {
    type: Array as PropType<PostCard[]>,
    required: true
  }
})
</script>

<style scoped></style>
