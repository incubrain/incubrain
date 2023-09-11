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
// import { Service } from '@/types/service'

const services = ref([
  {
    id: 1,
    name: 'Hiring Our Team',
    description:
      'We provide a comprehensive service for hiring the perfect development team for your needs. Our vast network of professionals ensures we can find the right fit for any project.',
    overview: 'Hand-picked, expert development team for your unique project needs',
    benefits: ['Access to top talent', 'Reduced hiring time', 'Lower costs'],
    image: 'incubrain-logo.png',
    price: '$80 PH'
  },
  {
    id: 2,
    name: 'Business Starter',
    description:
      'Our team of expert consultants will help you steer your business towards success. We offer strategies to help with marketing, sales, operations, and more.',
    overview: 'Expert guidance to help your business succeed',
    benefits: ['Increased efficiency', 'Strategic planning', 'Better decision making'],
    image: 'incubrain-logo.png',
    price: '$100 PH'
  }
])
</script>
