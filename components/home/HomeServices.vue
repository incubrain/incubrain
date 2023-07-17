<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
      <div class="text-center mt-10">
        <UButton
          to="/contact"
          color="primary"
          variant="solid"
        >
          Enquire Now
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Service } from '@/types/service'

const services: Service[] = ref([
  {
    title: 'Business Consulting',
    price: '$100 per hour',
    description: 'Expert advice to help you run your business more effectively.',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
  }
  //... add other services here
])
</script>