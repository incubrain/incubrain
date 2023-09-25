<template>
  <div>
    <div class="space-y-6 lg:space-y-12">
      <CommonTitle
        :label="label"
        :title="title"
        :description="subtitle"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
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
defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  title: {
    type: String,
    default: 'Title'
  },
  subtitle: {
    type: String,
    default: 'subtitle'
  },
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
