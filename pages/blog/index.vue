<template>
  <div
    class="wrapper grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] items-start w-full gap-4 xl:gap-8 relative"
  >
    <BlogFilter />
    <div class="grid gap-4 grid-cols-1 xl:gap-8 md:grid-cols-2">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ref(['all', 'frontend', 'backend', 'business', 'projects'])
const tags = ref([
  // frontend
  'nuxt',
  'vue',
  'typescript',
  // backend
  'nitro',
  'supabase',
  'postgresql',
  'auth',
  'ci/cd',
  // design
  'tailwindcss',
  // general
  'learning',
  'code quality',
  'testing',
  'productivity'
])

const filter = useFiltersStore()
const { addCategories, addTags } = filter
const { selectedCategory, selectedTags } = storeToRefs(filter)

addTags(tags.value)
addCategories(categories.value)

const posts = ref()

watchEffect(async () => {
  if (selectedCategory.value === 'all') {
    posts.value = await queryContent('blog')
      .where({ tags: { $in: selectedTags.value } })
      .sort({ date: -1 })
      .skip(0)
      .limit(10)
      .find()
  } else {
    posts.value = await queryContent('blog')
      .where({ category: selectedCategory.value, tags: { $in: selectedTags.value } })
      .sort({ date: -1 })
      .skip(0)
      .limit(10)
      .find()
  }
  console.log('posts', posts.value)
})

definePageMeta({
  layout: 'tabbed',
  name: 'BlogAll'
})
</script>

<style></style>
