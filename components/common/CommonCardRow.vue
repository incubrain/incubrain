<template>
  <div class="flex flex-col space-y-6 lg:space-y-12">
    <CommonTitle
      :label="label"
      :title="title"
      :description="description"
    />
    <div class="grid grid-cols-2 gap-4 lg:gap-8">
      <UCard
        v-for="item in items"
        :key="item.id"
      >
        <template #header>
          <div class="flex flex-col gap-4">
            <h5 class="text-xs lg:text-sm font-semibold"> {{ item.label }}</h5>
            <h3 class="text-lg lg:text-2xl font-semibold"> {{ item.title }}</h3>
          </div>
        </template>
        <div class="space-y-4">
          <p> {{ item.description }}</p>
          <UButton :to="items.link"> Find out more </UButton>
        </div>
      </UCard>
    </div>
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
