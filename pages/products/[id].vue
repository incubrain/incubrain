<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="text-lg text-gray-600 my-4">{{ product.overview }}</p>
      <p class="text-gray-500">{{ product.description }}</p>
      <div class="mt-8">
        <h3 class="text-xl font-bold">Benefits</h3>
        <ul class="list-disc list-inside mt-2">
          <li v-for="benefit in product.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
      </div>
    </div>
    <div>
      <nuxt-img :src="product.image" alt="" class="w-full h-full object-cover rounded" />
      <div class="my-8">
        <h2 class="text-2xl font-bold">Pricing</h2>
        <p class="text-lg text-gray-600">{{ product.price }}</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded mt-4">Request a Quote</button>
      </div>
    </div>
    <AppTestimonials :testimonials="testimonials" />
  </div>
</template>

<script setup lang="ts">
import products from '@/data/products.json'

let product = ref(null)
let testimonials = ref([])

onMounted(async () => {
  const route = useRoute()
  const productId = route.params.id
  product.value = products.find(s => s.id === productId)
})
</script>
