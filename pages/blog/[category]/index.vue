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
      <div class="grid md:gap-4 grid-cols-1 lg:gap-8 md:grid-cols-2 h-full">
        <BlogCard
          v-for="post in posts[categories.selected.value]"
          :key="`incubrain-${categories.selected.value}-post-${post.id}`"
          :post="post"
        />
        <BlogCardSkeleton v-show="postsLoading" />
        <BlogCardSkeleton v-show="postsLoading" />
        <BlogCardSkeleton v-show="postsLoading" />
        <div
          v-if="allPostsFetched[categories.selected.value]"
          variant="outline"
          color="primary"
          class="flex justify-center items-center w-full border border-primary-500 md:rounded-md background p-8"
        >
          <p class="foreground px-2">You've reached the end of the line</p>
        </div>
      </div>
    </div>
    <div
      v-if="!allPostsFetched[categories.selected.value]"
      ref="sentinel"
    />
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import type { PostCategoriesT, PostCardT, PostsInitializerT } from '~/types/posts'
import { postCardSchema, POST_CARD_PROPERTIES } from '~/types/posts'

const route = useRoute()
const categoryParam = ref(String(route.params.category))
const { categories } = useCatTag()
categories.toggle(categoryParam.value as PostCategoriesT)

const { validate } = useValidation()

const postsToLoad = 10
const postsLoading = ref(false)

const posts: PostsInitializerT = reactive(categories.initialize(() => <PostCardT[]>[]))
const allPostsFetched: Record<PostCategoriesT, boolean> = reactive(
  categories.initialize(() => false)
)

const fetchPosts = async ({
  skip,
  limit,
  category
}: {
  skip: number
  limit: number
  category: PostCategoriesT
}): Promise<PostCardT[]> => {
  //
  const whereOptions: QueryBuilderParams = {
    // tags: { $in: selectedTags.value },
    status: { $eq: 'published' }
  }

  if (category !== 'all') {
    whereOptions.category = category
  }

  try {
    const posts = await queryContent('/blog')
      .where(whereOptions)
      .only(POST_CARD_PROPERTIES)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .find()

    return posts as PostCardT[]
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

/**
 * Fetches and validates posts based on current filters.
 * @param limit - Max number of posts to fetch.
 * @param skip - Number of posts to skip.
 */

const getPosts = async ({ limit = postsToLoad, skip = 0 } = {}): Promise<void> => {
  if (postsLoading.value) return
  if (!categories.selected.value) return
  if (allPostsFetched[categories.selected.value]) return

  postsLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newPosts = await fetchPosts({
      category: categories.selected.value,
      skip,
      limit
    })

    if (newPosts.length < limit) {
      allPostsFetched[categories.selected.value] = true
    }
    const validPosts = newPosts.filter((post) => validate.posts(post as PostCardT, postCardSchema))
    if (!validPosts.length) return
    posts[categories.selected.value].push(...(validPosts as PostCardT[]))
  } catch (error) {
    console.error('Failed to get posts:', error)
  } finally {
    postsLoading.value = false
  }
}

const isSSR = () => process.server

if (!isSSR()) {
  getPosts()
}
/**
 * Validates the structure of the given post, filtering out invalid posts.
 * @param post - The post to validate.
 * @param schema - The validation schema to use.
 * @returns `true` if the post has a valid structure; otherwise, `false`.
 */

const getPostsOnScroll = async () => {
  if (!posts[categories.selected.value]?.length) return
  await getPosts({ skip: posts[categories.selected.value].length + 1 })
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
  name: 'BlogAll'
})
</script>

<style></style>
