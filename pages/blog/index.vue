<template>
  <div ref="infinateBlogs">
    <CommonHero
      :img="{
        title: 'Incubrain Blog Happy Hacker',
        src: 'images/happy-hacker.gif',
        alt: 'Incubrain Blog Happy Hacker'
      }"
      :title="{
        main: 'INCUBRAIN BLOG',
        subtitle: `If you're not learning, you're not growing.`
      }"
    />
    <div
      class="wrapper p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] items-start w-full gap-4 xl:gap-8 relative"
    >
      <BlogFilter />
      <div class="grid gap-4 grid-cols-1 xl:gap-8 md:grid-cols-2 h-full">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
        <div ref="sentinel" />
      </div>
      <!-- <template #fallback>
          <div class="grid gap-4 grid-cols-1 xl:gap-8 md:grid-cols-2">
            <h1 class="text-3xl"> loading posts... </h1>
            <BlogCardSkeleton
              v-for="i in 2"
              :key="i"
            />
          </div>
        </template> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const postStore = usePostsStore()
const { posts } = storeToRefs(postStore)
const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        postStore.getPostsOnScroll()
      }
    })
  }, options)

  if (sentinel.value) observer.observe(sentinel.value)
})

onUnmounted(() => {
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value)
  }
})

definePageMeta({
  name: 'BlogAll'
})
</script>

<style></style>
