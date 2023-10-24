<template>
  <div class="space-y-4 h-auto border border-color md:rounded-md p-4 lg:p-8">
    <div class="flex gap-4 flex-wrap">
      <UButton
        v-for="cat in postStore.categories"
        :key="cat"
        color="primary"
        :variant="selectedCategory === cat ? 'solid' : 'outline'"
        :label="cat"
        size="sm"
        class="cursor-pointer"
        @click="postStore.toggleCategory(cat)"
      />
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
const { selectedCategory } = storeToRefs(postStore)

</script>
