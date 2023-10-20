<template>
  <div ref="infinateBlogs">
    <CommonHero
      :img="{
        title: 'Incubrain Blog Happy Hacker',
        src: 'images/blog-icon.svg',
        alt: 'Incubrain Blog Happy Hacker',
        width: 140,
        height: 140
      }"
      :title="{
        main: 'INCUBRAIN BLOG',
        subtitle: `If you're not learning, you're not growing.`
      }"
      invert
    />
    <div
      class="wrapper md:p-4 xl:p-8 grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] items-start w-full md:gap-4 xl:gap-8 relative"
    >
      <BlogFilter />
      <div class="grid md:gap-4 grid-cols-1 xl:gap-8 md:grid-cols-2 h-full">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
        <BlogCardSkeleton v-if="postsLoading" />
        <BlogCardSkeleton v-if="postsLoading" />
        <div
          v-if="!postsEnd"
          ref="sentinel"
        />
        <div
          v-if="postsEnd"
          variant="outline"
          color="primary"
          class="flex justify-center items-center w-full border border-primary-500 md:rounded-md p-8"
        >
          <p class="foreground px-2">No more posts to load</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const postStore = usePostsStore()
const { posts, postsLoading, postsEnd } = storeToRefs(postStore)
const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  postStore.getPosts()
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
