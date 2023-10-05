<template>
  <div class="lg:sticky top-24 space-y-4 h-auto border border-color rounded-md p-4 xl:p-8">
    <h3 class="text-lg font-semibold">Filters</h3>
    <div class="space-y-2">
      <p class="text-xs">Categories:</p>
      <div class="flex gap-2 flex-wrap">
        <UButton
          v-for="cat in categories"
          :key="cat"
          color="primary"
          :variant="selectedCategory === cat ? 'solid' : 'outline'"
          :label="cat"
          size="sm"
          class="cursor-pointer"
          @click="filter.toggleCategory(cat)"
        />
      </div>
    </div>
    <div class="space-y-2">
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
          @click="filter.toggleTag(tag)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const filter = useFiltersStore()
const { selectedCategory, selectedTags, tags, categories } = storeToRefs(filter)

</script>
