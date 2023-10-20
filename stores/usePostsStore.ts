import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import {
  PostTags,
  PostCategories,
  PostFull,
  PostCard,
  postCardSchema,
  postFullSchema,
  POST_FULL_PROPERTIES,
  POST_CARD_PROPERTIES,
  CATEGORIES,
  TAGS
} from '../types/posts'

const postsToLoad = 10
const postsLoading = ref(false)

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
  const getPosts = async ({
    limit = postsToLoad,
    skip = 0
  }: {
    limit?: number
    skip?: number
  } = {}) => {
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

      if (newPosts.length < limit) {
        allPostsFetched[selectedCategory.value] = true
      }

      const validPosts = newPosts.filter((post) => isValidPost(post as PostCard, postCardSchema))
      posts[selectedCategory.value].push(...(validPosts as PostCard[]))
      console.log('posts fetched')
    } catch (error) {
      console.error('Failed to get posts:', error)
    } finally {
      postsLoading.value = false
    }
  }

  const getShowcasePosts = async (category: PostCategories) => {
    if (posts[category].length > 2) return posts[category].slice(0, 3)
    console.log('no posts in store')
    selectedCategory.value = category
    await getPosts({ limit: 3, skip: 0 })
    console.log('returning posts')
    return posts[category].slice(0, 3)
  }

  const getSinglePost = async ({ path, category }: { path: string; category: string }) => {
    const { data } = await useAsyncData('post', () =>
      queryContent('blog', category).only(POST_FULL_PROPERTIES).where({ _path: path }).findOne()
    )
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
    try {
      schema.parse(post)
      return true
    } catch (error) {
      console.error(post.title, 'failed to validate:', error)
      return false
    }
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
    getPostsOnScroll,
    getShowcasePosts
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
