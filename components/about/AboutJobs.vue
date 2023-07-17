<template>
  <div>
    <h2 class="text-2xl mb-3">Open Positions</h2>
    <div v-for="(job, index) in jobs" :key="index">
      <slot name="job" :job="job">
        <h3 class="text-xl mb-2">{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <a :href="job.applicationLink">Apply Now</a>
      </slot>
    </div>
  </div>
</template>


<script setup lang="ts">

const jobs = ref([
  {
    title: 'Job Title 1',
    description: 'Job Description 1',
    applicationLink: '#'
  },
  {
    title: 'Job Title 2',
    description: 'Job Description 2',
    applicationLink: '#'
  }
])
</script>
