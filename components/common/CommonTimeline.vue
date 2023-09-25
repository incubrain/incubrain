<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
    <div class="h-full">
      <div class="lg:sticky lg:top-12 space-y-4 lg:space-y-6">
        <CommonTitle
          :label="label"
          :title="title"
          :description="description"
        />
        <div class="flex gap-2">
          <slot />
        </div>
      </div>
    </div>
    <div class="w-full h-full space-y-6 lg:space-y-12">
      <UCard
        v-for="item in items"
        :key="item.id"
      >
        <template #header>
          <div class="flex gap-4 items-center">
            <NuxtImg
              :src="item.image"
              alt="Hero Image"
              width="100%"
              height="100%"
            />
            <h3 class="text-lg lg:text-xl font-semibold"> {{ item.title }}</h3>
          </div>
        </template>
        <p> {{ item.description }}</p>
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
