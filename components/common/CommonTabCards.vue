<template>
  <div class="space-y-12">
    <CommonTitle :title="title" />
    <UTabs
      :items="items"
      :orientation="width > 1000 ? 'vertical' : 'horizontal'"
      class="w-full"
      :ui="{
        wrapper: 'flex flex-col lg:flex-row items-start justify-start gap-4 space-y-0',
        list: {
          width: 'w-full lg:w-48',
          height: 'h-auto lg:h-10',
          base: 'relative grid grid-flow-row',
          rounded: 'rounded-md',
          background: 'foreground'
        },
        tab: { background: '' }
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
        <div class="w-full h-full p-4 lg:p-8 rounded-md border border-color">
          <h3 class="text-xl font-bold">{{ item.label }}</h3>
          <p class="text-base">{{ item.content }}</p>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

const { width } = useWindowSize()

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
