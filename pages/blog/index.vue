<template>
  <div ref="infinateBlogs">
    <CommonHero
      :img="{
        title: 'Incubrain blog icon',
        src: 'images/blog-icon.svg',
        alt: 'Incubrain blog icon',
        width: 140,
        height: 140
      }"
      :title="{
        main: 'INCUBRAIN BLOG',
        subtitle: `If you're not learning, you're not growing.`
      }"
      invert
    />
    <div class="wrapper p-4 lg:p-8">
      <BlogFilter />
    </div>
    <div
      class="wrapper md:px-4 lg:px-8 lg:pb-8 grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] items-start w-full md:gap-4 lg:gap-8 relative"
    >
      <BlogAdFloat
        title="Developer Group"
        description="Learn and grow with us"
      />
      <div class="grid md:gap-4 grid-cols-1 lg:gap-8 md:grid-cols-2 h-full">
        <BlogCard
          v-for="post in posts[selectedCategory]"
          :key="`incubrain-post-${post.id}`"
          :post="post"
        />
        <BlogCardSkeleton v-show="postsLoading" />
        <BlogCardSkeleton v-show="postsLoading" />
        <div
          v-if="allPostsFetched[selectedCategory]"
          variant="outline"
          color="primary"
          class="flex justify-center items-center w-full border border-primary-500 md:rounded-md background p-8"
        >
          <p class="foreground px-2">You've reached the end of the line</p>
        </div>
      </div>
    </div>
    <div
      v-if="!allPostsFetched[selectedCategory]"
      ref="sentinel"
    />
  </div>
</template>

<script setup lang="ts">
const postStore = usePostsStore()
await postStore.getPosts()
const { postsLoading, posts, allPostsFetched, selectedCategory } = storeToRefs(postStore)

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
