<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductsCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
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
import products from '@/data/products.json'

</script>
