<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <BaseCard>
    <template #header>
      <div>
        <h2 class="text-2xl font-bold">{{ project.title }}</h2>
        <p class="text-gray-500">{{ project.description }}</p>
      </div>
    </template>

    <div class="flex items-center justify-between">
      <div>
        <p class="text-gray-500">Challenges: {{ project.challenges }}</p>
        <p class="text-gray-500">Stack: {{ project.stack.join(', ') }}</p>
        <p class="text-gray-500">Modules: {{ project.modules.join(', ') }}</p>
      </div>
      <div>
        <NuxtImg
          :src="`/images/${project.image}`"
          alt="Project Image"
          class="w-32 h-32"
        />
      </div>
    </div>
    <template #footer>
      <div>
        <p class="text-gray-500">Date: {{ project.date }}</p>
        <UButton :to="project.link"> Website </UButton>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped></style>
