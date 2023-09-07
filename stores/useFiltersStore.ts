export const useFiltersStore = defineStore('filters', () => {
  const categories = ref([] as string[])
  const tags = ref([] as string[])
  const selectedCategory = ref('all')
  const selectedTags = ref([] as string[])

  function toggleTag(tag: string) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  function toggleCategory(category: string) {
    if (selectedCategory.value !== category) {
      selectedCategory.value = category
    }
  }

  function addTags(newTags: string[]) {
    tags.value = newTags
    selectedTags.value = []
    selectedTags.value.push(...newTags)
  }

  function addCategories(newCategories: string[]) {
    categories.value = newCategories
  }

  return {
    tags,
    categories,
    selectedCategory,
    selectedTags,
    toggleTag,
    toggleCategory,
    addTags,
    addCategories
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFiltersStore, import.meta.hot))
}
