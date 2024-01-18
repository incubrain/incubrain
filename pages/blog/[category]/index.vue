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
        title="Hi 👋, I'm Drew"
        description="I built this website and lots of other cool things using Nuxt, currently I'm looking for contracting work urgently. If you know of any opportunities or need some work done, please get in touch."
      />
      <div
        v-if="havePosts"
        class="grid md:gap-4 grid-cols-1 lg:gap-8 md:grid-cols-2 h-full"
      >
        <BlogCard
          v-for="post in posts[categories.selected.value]"
          :key="`incubrain-${categories.selected.value}-post-${post.id}`"
          :post="post"
        />
        <BlogCardSkeleton v-show="loadingPosts" />
        <div
          v-show="noMorePosts"
          variant="outline"
          color="primary"
          class="flex justify-center items-center w-full border border-primary-500 md:rounded-md background p-8"
        >
          <p class="foreground px-2">You've reached the end of the line</p>
        </div>
      </div>
    </div>
    <div
      v-if="!noMorePosts"
      ref="sentinel"
    />
  </div>
</template>

<script setup lang="ts">
import type { PostCategoriesT, PostCardT, PostsInitializerT } from '~/types/posts'

const route = useRoute()
const categoryParam = ref(String(route.params.category))
const { categories } = useCatTag()
categories.toggle(categoryParam.value as PostCategoriesT)

const { getPosts, noMorePosts } = usePosts()

const postsLoading = ref(false)
const posts: PostsInitializerT = reactive(categories.initialize(() => <PostCardT[]>[]))

const havePosts = computed(() => posts[categories.selected.value].length > 0)
const loadingPosts = computed(() => postsLoading.value)

// Fetch posts on server and client
const { data: fetchedPosts, error } = await useAsyncData(
  `posts-${categories.selected.value}`,
  (): Promise<PostCardT[] | void> => getPosts()
)

if (error.value) {
  console.error('Fetch Posts Error:', error.value)
}

// Use the fetchedPosts for rendering, which will be consistent across server and client
watchEffect(() => {
  if (fetchedPosts.value) {
    posts[categories.selected.value] = fetchedPosts.value
  }
})

const getPostsOnScroll = async () => {
  console.log('Getting Posts on Scroll')
  if (!loadingPosts) return
  console.log('Getting Posts on Scroll 2')
  if (!noMorePosts) return
  console.log('Getting Posts on Scroll 3')
  postsLoading.value = true
  const { error } = await useAsyncData(
    `posts-${categories.selected.value}`,
    async (): Promise<void> => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const p = await getPosts({ skip: posts[categories.selected.value].length + 1 })
      posts[categories.selected.value].push(...(p as PostCardT[]))
    }
  )
  postsLoading.value = false
  if (error.value) {
    console.error('Client Posts Error:', error.value)
  }
}

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
        getPostsOnScroll()
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
  name: 'Blog'
})
</script>

<style></style>
