<template>
  <div>
    <h1 class="text-center text-3xl mt-10 mb-5">Join Our Team</h1>

    <section>
      <h2 class="text-2xl mb-3">Working at Our Company</h2>
      <p>Add some description about working at your company</p>
    </section>

    <section>
      <h2 class="text-2xl mb-3">Benefits & Perks</h2>
      <ul>
        <li
          v-for="(benefit, index) in benefits"
          :key="index"
          >{{ benefit }}</li
        >
      </ul>
    </section>

    <AboutJobs>
      <template #job="{ job }">
        <!-- Customize how the job is displayed here -->
      </template>
    </AboutJobs>
  </div>
</template>

<script setup lang="ts">
const benefits = ref(['Benefit 1', 'Benefit 2', 'Benefit 3'])
</script>
