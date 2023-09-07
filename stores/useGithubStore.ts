export const useGithubStore = defineStore('github', () => {
  const repos = ref([])

  function toggleTag(tag: string) {
    const index = selectedTags.value.indexOf(tag)
    if (index < 0) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  return {
    repos,
    toggleTag
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGithubStore, import.meta.hot))
}
