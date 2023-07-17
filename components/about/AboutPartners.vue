<template>
  <section>
    <h2 class="text-2xl font-bold mb-5">Partners</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="partner in partners"
        :key="partner.id"
      >
        <NuxtImg
          :src="partner.logo"
          :alt="partner.name"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const partners = ref([
  {
    id: 1,
    name: 'Partner 1',
    logo: '/path/to/logo1.jpg'
  }
  // Add more partners here
])
</script>
