import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import {
  postCardSchema,
  postFullSchema,
  POST_CARD_PROPERTIES,
  CATEGORIES,
  AUTHORS,
  TAGS
} from '../types/posts'

import type { PostTagsT, PostCategoriesT, PostFullT, PostCardT } from '../types/posts'

const postsToLoad = 10

export const usePostsStore = defineStore('posts', () => {
  type PostsType = Record<PostCategoriesT, PostCardT[]>

  function initializeCategories<T>(
    initializer: (category: PostCategoriesT) => T
  ): Record<PostCategoriesT, T> {
    return Object.fromEntries(
      CATEGORIES.map((category) => [category, initializer(category)])
    ) as Record<PostCategoriesT, T>
  }

  const postsLoading = ref(false)
  const posts: PostsType = reactive(initializeCategories(() => <PostCardT[]>[]))
  const postsShowcase: PostsType = reactive(initializeCategories(() => <PostCardT[]>[]))
  const allPostsFetched: Record<PostCategoriesT, boolean> = reactive(
    initializeCategories(() => false)
  )

  const selectedCategory = ref<PostCategoriesT>('all')
  const selectedTags = ref<PostTagsT[]>([...TAGS])

  /**
   * Toggle the selected tag in the filter.
   * @param tag - The tag to toggle.
   */

  function toggleTag(tag: PostTagsT) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  const fetchPosts = async ({
    skip,
    limit,
    category
  }: {
    skip: number
    limit: number
    category: PostCategoriesT
  }): Promise<PostCardT[]> => {
    const whereOptions: QueryBuilderParams = {
      tags: { $in: selectedTags.value },
      status: { $eq: 'published' }
    }

    if (category !== 'all') {
      whereOptions.category = category
    }

    const newPosts = await queryContent('/blog')
      .where(whereOptions)
      .only(POST_CARD_PROPERTIES)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .find()

    return newPosts as PostCardT[]
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
    if (allPostsFetched[selectedCategory.value]) return

    postsLoading.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newPosts = await fetchPosts({
        category: selectedCategory.value,
        skip,
        limit
      })
      if (newPosts.length < limit) {
        allPostsFetched[selectedCategory.value] = true
      }

      const validPosts = newPosts.filter((post) => isValidPost(post as PostCardT, postCardSchema))
      if (!validPosts.length) return
      posts[selectedCategory.value].push(...(validPosts as PostCardT[]))
    } catch (error) {
      console.error('Failed to get posts:', error)
    } finally {
      postsLoading.value = false
    }
  }

  /**
   * Change the selected category and fetch relevant posts.
   * @param category - The new category to set.
   */

  async function toggleCategory(category: PostCategoriesT) {
    if (selectedCategory.value !== category) {
      selectedCategory.value = category
      await getPosts()
    }
  }

  const getShowcasePosts = async (category: PostCategoriesT) => {
    if (postsShowcase[category].length > 2) return postsShowcase[category].slice(0, 3)
    const newPosts = await fetchPosts({
      category,
      skip: 0,
      limit: 3
    })
    postsShowcase[category].push(...(newPosts as PostCardT[]))
    return postsShowcase[category].slice(0, 3)
  }

  /**
   * Validates the structure of the given post, filtering out invalid posts.
   * @param post - The post to validate.
   * @param schema - The validation schema to use.
   * @returns `true` if the post has a valid structure; otherwise, `false`.
   */

  function isValidPost(
    post: PostCardT | PostFullT,
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
    await getPosts({ skip: posts[selectedCategory.value].length + 1 })
  }

  return {
    tags: TAGS,
    categories: CATEGORIES,
    authors: AUTHORS,
    selectedAuthor: (authorId: number) => {
      return AUTHORS.find((a) => authorId === a.id)
    },
    posts,
    allPostsFetched,
    postsLoading,
    selectedCategory,
    selectedTags,
    toggleTag,
    toggleCategory,
    getPosts,
    isValidPost,
    getPostsOnScroll,
    getShowcasePosts,
    adVisible: ref(true)
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
