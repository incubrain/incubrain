<template>
  <div class="lg:sticky top-24 space-y-4 h-auto border border-color md:rounded-md p-4 xl:p-8">
    <div class="space-y-2">
      <p class="text-sm">Categories</p>
      <div class="flex gap-4 flex-wrap">
        <UButton
          v-for="cat in categories"
          :key="cat"
          color="primary"
          :variant="selectedCategory === cat ? 'solid' : 'outline'"
          :label="cat"
          size="sm"
          class="cursor-pointer"
          @click="
            postStore.toggleCategory(cat);
            toTop()
          "
        />
      </div>
    </div>
    <!-- <div class="space-y-2">
      <p class="text-xs">Tags:</p>
      <div class="flex gap-2 flex-wrap">
        <UButton
          v-for="tag in tags"
          :key="tag"
          color="primary"
          :variant="selectedTags.includes(tag) ? 'solid' : 'outline'"
          :label="tag"
          size="sm"
          class="cursor-pointer"
          :ui="{
            font: 'font-semibold',
            padding: {
              sm: 'py-1 px-2',
            }
          }"
          @click="postStore.toggleTag(tag)"
        />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const postStore = usePostsStore()
const { selectedCategory, categories } = storeToRefs(postStore)

function toTop() {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
