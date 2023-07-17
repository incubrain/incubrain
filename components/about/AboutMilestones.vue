<template>
  <section>
    <h2 class="text-2xl font-bold mb-5">Milestones</h2>
    <div
      v-for="milestone in milestones"
      :key="milestone.id"
    >
      <h3>{{ milestone.year }}</h3>
      <p>{{ milestone.description }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>

const milestones = ref([
  {
    id: 1,
    year: 2020,
    description: 'Company was founded.'
  }
  // Add more milestones here
])
</script>
