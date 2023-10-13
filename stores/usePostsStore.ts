import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { PostTags, PostCategories } from '../types/posts'

export const usePostsStore = defineStore('posts', () => {
  type PostsType = {
    // eslint-disable-next-line no-unused-vars
    [key in PostCategories]: any[]
  }

  const posts: PostsType = reactive({
    all: [],
    frontend: [],
    backend: [],
    business: [],
    projects: []
  })

  const categories = ref<PostCategories[]>(['all', 'frontend', 'backend', 'business', 'projects'])
  const tags = ref<PostTags[]>([
    // frontend
    'nuxt',
    'vue',
    'typescript',
    // backend
    'nitro',
    'supabase',
    'postgresql',
    'auth',
    'ci/cd',
    // design
    'tailwindcss',
    // general
    'learning',
    'code quality',
    'testing',
    'productivity'
  ])

  const selectedCategory = ref<PostCategories>('all')
  const selectedTags = ref<PostTags[]>([...tags.value])

  const postsToLoad = 10
  const postsLoading = ref(false)
  const allPostsFetched: Record<PostCategories, boolean> = reactive({
    all: false,
    frontend: false,
    backend: false,
    business: false,
    projects: false
  })

  function toggleTag(tag: PostTags) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  async function toggleCategory(category: PostCategories) {
    if (selectedCategory.value !== category) {
      selectedCategory.value = category
      await getPosts(postsToLoad, 0)
    }
  }

  const getPosts = async (limit: number, skip: number) => {
    if (postsLoading.value) return
    if (!selectedCategory.value) return
    postsLoading.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const whereOptions: QueryBuilderParams = { tags: { $in: selectedTags.value } }

    if (selectedCategory.value !== 'all') {
      whereOptions.category = selectedCategory.value
    }

    const newPosts = await queryContent('blog')
      .where(whereOptions)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .find()

    if (newPosts.length < postsToLoad) {
      allPostsFetched[selectedCategory.value] = true
    }

    posts[selectedCategory.value].push(...newPosts)
    postsLoading.value = false
  }

  const getPostsOnScroll = async () => {
    if (!posts[selectedCategory.value]) return
    await getPosts(postsToLoad, posts[selectedCategory.value].length)
  }

  return {
    tags,
    categories,
    posts: computed(() => posts[selectedCategory.value]),
    postsEnd: computed(() => allPostsFetched[selectedCategory.value]),
    postsLoading,
    selectedCategory,
    selectedTags,
    toggleTag,
    toggleCategory,
    getPostsOnScroll
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
