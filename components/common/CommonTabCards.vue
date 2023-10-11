<template>
  <div class="space-y-12">
    <CommonTitle :title="title" />
    <UTabs
      :items="items"
      orientation="vertical"
      class="w-full"
      :ui="{
        wrapper: 'flex flex-row items-start justify-start gap-2 lg:gap-4 space-y-0',
        list: {
          background: '',
          width: 'w-24 lg:w-48',
          height: 'h-auto lg:h-10',
          base: 'relative',
          rounded: 'rounded-md border border-color'
        }
      }"
    >
      <template #default="{ item, index, selected }">
        <div class="flex items-start lg:items-center whitespace-nowrap w-full justify-start gap-2 relative min-w-64">
          <span class="text-xs uppercase font-bold">{{ item.label }}</span>
          <span
            v-if="selected"
            class="hidden lg:flex absolute right-1 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 transition-all"
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
import { baseURL } from 'nuxt/dist/core/runtime/nitro/paths'
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
