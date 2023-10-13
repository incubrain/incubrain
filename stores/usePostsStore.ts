import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import {
  PostTags,
  PostCategories,
  PostFull,
  PostCard,
  postCardSchema,
  postFullSchema
} from '../types/posts'

const POST_CARD_PROPERTIES = [
  'title',
  'description',
  'category',
  'tags',
  'authors',
  'status',
  'featured_image',
  'date',
  '_path'
]

const CATEGORIES: PostCategories[] = ['all', 'frontend', 'backend', 'business', 'projects']

const TAGS: PostTags[] = [
  'nuxt',
  'vue',
  'typescript',
  'nitro',
  'supabase',
  'postgresql',
  'auth',
  'ci/cd',
  'tailwindcss',
  'learning',
  'code quality',
  'testing',
  'productivity'
]

const POST_FULL_PROPERTIES = [...POST_CARD_PROPERTIES, 'body', 'id', '_draft', '_id']

export const usePostsStore = defineStore('posts', () => {
  type PostsType = Record<PostCategories, PostCard[]>

  function initializeCategories<T>(
    initializer: (category: PostCategories) => T
  ): Record<PostCategories, T> {
    return Object.fromEntries(
      CATEGORIES.map((category) => [category, initializer(category)])
    ) as Record<PostCategories, T>
  }

  const posts: PostsType = reactive(initializeCategories(() => <PostCard[]>[]))
  const allPostsFetched: Record<PostCategories, boolean> = reactive(
    initializeCategories(() => false)
  )

  const selectedCategory = ref<PostCategories>('all')
  const selectedTags = ref<PostTags[]>([...TAGS])

  const postsToLoad = 10
  const postsLoading = ref(false)

  /**
   * Toggle the selected tag in the filter.
   * @param tag - The tag to toggle.
   */

  function toggleTag(tag: PostTags) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  /**
   * Change the selected category and fetch relevant posts.
   * @param category - The new category to set.
   */

  async function toggleCategory(category: PostCategories) {
    if (selectedCategory.value !== category) {
      selectedCategory.value = category
      await getPosts()
    }
  }

  /**
   * Fetches and validates posts based on current filters.
   * @param limit - Max number of posts to fetch.
   * @param skip - Number of posts to skip.
   */

  const getPosts = async ({ limit = postsToLoad, skip = 0 } = {}) => {
    if (postsLoading.value) return
    if (!selectedCategory.value) return
    postsLoading.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const whereOptions: QueryBuilderParams = {
        tags: { $in: selectedTags.value },
        status: { $eq: 'published' }
      }

      if (selectedCategory.value !== 'all') {
        whereOptions.category = selectedCategory.value
      }

      const newPosts = await queryContent('blog')
        .where(whereOptions)
        .only(POST_CARD_PROPERTIES)
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .find()

      if (newPosts.length < postsToLoad) {
        allPostsFetched[selectedCategory.value] = true
      }

      const validPosts = newPosts.filter((post) => isValidPost(post as PostCard, postCardSchema))
      posts[selectedCategory.value].push(...(validPosts as PostCard[]))
    } catch (error) {
      console.error('Failed to get posts:', error)
    } finally {
      postsLoading.value = false
    }
  }

  const getSinglePost = async ({ path, category }: { path: string; category: string }) => {
    console.log('getSinglePost', category, path)
    const { data } = await useAsyncData('post', () =>
      queryContent('blog', category).only(POST_FULL_PROPERTIES).where({ _path: path }).findOne()
    )
    console.log('getSinglePost2', data)
    const validPost = isValidPost(data.value as PostFull, postFullSchema)
    if (!validPost) return console.error('Post failed to load')
    return data.value as PostFull
  }

  /**
   * Validates the structure of the given post, filtering out invalid posts.
   * @param post - The post to validate.
   * @param schema - The validation schema to use.
   * @returns `true` if the post has a valid structure; otherwise, `false`.
   */

  function isValidPost(
    post: PostCard | PostFull,
    schema: typeof postCardSchema | typeof postFullSchema
  ): boolean {
    const { success } = schema.safeParse(post)
    if (!success) {
      console.error('Invalid post structure for', post.title)
    }
    return success
  }

  const getPostsOnScroll = async () => {
    if (!posts[selectedCategory.value]?.length) return
    await getPosts({ skip: posts[selectedCategory.value].length })
  }

  return {
    tags: TAGS,
    categories: CATEGORIES,
    posts: computed(() => posts[selectedCategory.value]),
    postsEnd: computed(() => allPostsFetched[selectedCategory.value]),
    postsLoading,
    selectedCategory,
    selectedTags,
    toggleTag,
    toggleCategory,
    getPosts,
    getSinglePost,
    getPostsOnScroll
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
