<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
    <div class="h-full">
      <div class="lg:sticky lg:top-24 space-y-4 lg:space-y-6">
        <CommonTitle :title="title">
          <slot />
        </CommonTitle>
      </div>
    </div>
    <div class="w-full h-full space-y-4 lg:space-y-8">
      <UCard
        v-for="item in items"
        :key="item.title"
        :ui="{ background: 'background', body: { padding: '' }, header: { background: 'bg-highlight', base: 'relative overflow-hidden' } }"
      >
        <template #header>
          <div class="bg-pattern z-0" />
          <div class="relative flex gap-4 items-center">
            <UIcon :name="item.icon" />
            <h3 class="text-lg lg:text-xl font-semibold"> {{ item.title }}</h3>
          </div>
        </template>
        <div class="w-full h-full relative p-4 xl:p-8">
          <p class="relative"> {{ item.description }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

interface Item {
  icon: string
  title: string
  description: string
}

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  items: {
    type: Array as PropType<Item[]>,
    required: true
  }
})
</script>

<style scoped></style>
