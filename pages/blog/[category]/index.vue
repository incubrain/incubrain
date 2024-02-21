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
          v-for="post in allPosts"
          :key="`incubrain-${categoryParam}-post-${post.id}`"
          :post="post"
        />
        <ClientOnly>
          <BlogCardSkeleton v-show="pending" />
          <BlogCardSkeleton v-show="pending" />
          <BlogCardSkeleton v-show="pending" />
          <div
            v-if="postsFinished"
            class="flex justify-center items-center w-full border border-primary-500 md:rounded-md background p-8"
          >
            <p class="foreground px-2">No more posts...</p>
          </div>
        </ClientOnly>
      </div>
    </div>
    <BlogPostInfinateScroll
      v-show="!postsFinished && !pending"
      @infinate-trigger="refresh"
    />
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import type { PostCategoriesT, PostCardT } from '~/types/posts'
import { POST_CARD_PROPERTIES, postCardSchema } from '~/types/posts'

const route = useRoute()
const categoryParam = ref(String(route.params.category) as PostCategoriesT)

const allPosts = ref<PostCardT[]>([])
const pagination = reactive({ skip: 0, limit: 10 })

const postsFinished = ref(false)

const { error, refresh, pending } = useAsyncData(
  `post-cards-${categoryParam.value}`,
  async (): Promise<void> => {
    console.log('fetching posts')
    const whereOptions: QueryBuilderParams = {
      // tags: { $in: selectedTags.value },
      status: { $eq: 'published' }
    }

    const posts = (await queryContent('/blog', categoryParam.value)
      .where(whereOptions)
      .only(POST_CARD_PROPERTIES)
      .sort({ publishedAt: -1 })
      .skip(pagination.skip)
      .limit(pagination.limit)
      .find()) as PostCardT[]
    console.log('posts', posts)
    // validate posts
    if (!posts.length || posts.length < pagination.limit) {
      postsFinished.value = true
    }
    posts.filter((post) => isValidPostCard(post))

    pagination.skip += pagination.limit
    await new Promise((resolve) => setTimeout(resolve, 1200))
    allPosts.value.push(...posts)
  }
)

console.log('allPosts', allPosts.value)
// Validation & Error Handling
if (error.value) {
  console.error('Error fetching posts:', error)
}

function isValidPostCard(post: PostCardT): boolean {
  try {
    postCardSchema.parse(post)
    return true
  } catch (error) {
    console.error(`Error parsing post: ${post.title}`, error)
    return false
  }
}

// SEO
if (categoryParam.value) {
  useSeoMeta({
    title: `Incubrain ${categoryParam.value} Blog`,
    ogTitle: `Incubrain ${categoryParam.value} Blog`,
    description: `Incubrain ${categoryParam.value} Blog`,
    ogDescription: `Incubrain ${categoryParam.value} Blog`,
    twitterCard: 'summary_large_image',
    twitterTitle: `Incubrain ${categoryParam.value} Blog`,
    twitterDescription: `Incubrain ${categoryParam.value} Blog`
  })

  defineOgImageComponent('OgImageDefault', {
    title: `Incubrain ${categoryParam.value} posts`,
    description: `A collection of ${categoryParam.value} blog posts from Incubrain`
  })
}

definePageMeta({
  name: 'Blog'
})
</script>

<style></style>
