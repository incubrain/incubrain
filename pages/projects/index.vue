<template>
  <div class="lg:flex items-start w-full gap-4 xl:gap-8 relative">
    <BlogFilter />
    <div
      class="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:grid-cols-2"
    >
      <BlogCard2
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ref(['all', 'frontend', 'backend', 'business', 'design'])
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
  'stripe',
  'node',
  'zod',
  'ci/cd',
  // business
  'hiring',
  'project management',
  'business planning',
  // design
  'tailwindcss',
  // general
  'code quality',
  'testing'
])

const filter = useFiltersStore()
const { addCategories, addTags } = filter
const { selectedCategory, selectedTags } = storeToRefs(filter)

addTags(tags.value)
addCategories(categories.value)

const posts = ref()

watchEffect(async () => {
  console.log('selectedCategory', selectedCategory.value)
  if (selectedCategory.value === 'all') {
    posts.value = await queryContent('projects')
      .where({ tags: { $in: selectedTags.value } })
      .skip(0)
      .limit(10)
      .find()
  } else {
    posts.value = await queryContent('projects')
      .where({ category: selectedCategory.value, tags: { $in: selectedTags.value } })
      .skip(0)
      .limit(10)
      .find()
  }
})

definePageMeta({
  layout: 'tabbed',
  name: 'ProjectsAll'
})
</script>

<style></style>
