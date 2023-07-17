<template>
  <TransitionBounce>
    <div
      v-for="project in projects"
      :key="project.id"
      class="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
    >
      <nuxt-img
        :src="project.image"
        alt=""
        class="w-full h-48 object-cover"
      />
      <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <UButton
          color="primary"
          variant="solid"
          :to="`/portfolio/${project.title}`"
          >View Case Study</UButton
        >
      </div>
    </div>
  </TransitionBounce>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    image: '/placeholder.jpg'
  }
  // Add more projects as needed
]
</script>
