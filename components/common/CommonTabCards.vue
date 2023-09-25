<template>
  <div class="space-y-12">
    <CommonTitle
      :label="label"
      :title="title"
      :description="description"
    />
    <UTabs
      :items="items"
      orientation="vertical"
      class="w-full"
      :ui="{
        wrapper: 'flex items-start justify-start gap-4 space-y-0',
        list: { width: 'w-48', rounded: 'rounded-md' }
      }"
    >
      <template #default="{ item, index, selected }">
        <div class="flex items-center w-full justify-centergap-2 relative truncate">
          <UIcon
            :name="item.icon"
            class="w-4 h-4 flex-shrink-0"
          />
          <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
          <span
            v-if="selected"
            class="absolute right-1 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 transition-all"
          />
        </div>
      </template>
      <template #item="{ item }">
        <div class="foreground w-full h-full p-4 lg:p-8 rounded-md shadow-sm">
          <h3 class="text-xl font-bold">{{ item.label }}</h3>
          <p class="text-base">{{ item.content }}</p>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  },
  items: {
    type: Array,
    required: true
  }
})

</script>

<style scoped></style>
