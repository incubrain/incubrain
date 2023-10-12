export const usePostsStore = defineStore('posts', () => {
  type PostCategories = 'all' | 'frontend' | 'backend' | 'business' | 'projects'
  type PostTags =
    | 'nuxt'
    | 'vue'
    | 'typescript'
    | 'nitro'
    | 'supabase'
    | 'postgresql'
    | 'auth'
    | 'ci/cd'
    | 'tailwindcss'
    | 'learning'
    | 'code quality'
    | 'testing'
    | 'productivity'

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

  function toggleTag(tag: PostTags) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  function toggleCategory(category: PostCategories) {
    if (selectedCategory.value !== category) {
      selectedCategory.value = category
    }
  }

  const postsToLoad = 10
  const fetchingPosts = ref(false)

  const getPosts = (limit: number, skip: number) => {
    if (selectedCategory.value === 'all') {
      return queryContent('blog')
        .where({ tags: { $in: selectedTags.value } })
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .find()
    } else {
      return queryContent('blog')
        .where({ category: selectedCategory.value, tags: { $in: selectedTags.value } })
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .find()
    }
  }

  const getPostsOnScroll = async () => {
    console.log('post load', !posts[selectedCategory.value])
    if (!posts[selectedCategory.value]) return
    console.log('post load', posts[selectedCategory.value].length % postsToLoad !== 0)
    if (posts[selectedCategory.value].length % postsToLoad !== 0) return
    if (fetchingPosts.value) return
    fetchingPosts.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newPosts = await getPosts(postsToLoad, posts[selectedCategory.value].length)
    posts[selectedCategory.value].push(...newPosts)
    fetchingPosts.value = false
  }

  watch(
    categories,
    async () => {
      posts[selectedCategory.value] = await getPosts(postsToLoad, 0)
    },
    { immediate: true }
  )

  return {
    tags,
    categories,
    posts: computed(() => posts[selectedCategory.value]),
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
