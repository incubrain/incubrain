<template>
  <div class="flex flex-col space-y-6 lg:space-y-12">
    <CommonTitle
      :label="label"
      :title="title"
      :description="description"
    />
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
