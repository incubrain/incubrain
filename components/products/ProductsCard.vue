<template>
  <TransitionBounce>
    <div
      class="background shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
    >
      <NuxtImg
        :src="product.image"
        alt=""
        class="w-full h-48 object-cover"
      />
      <div class="p-6 space-y-4">
        <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
        <p class="text-primary font-bold text-lg mb-4">{{ product.price }}</p>
        <p class="text-gray-700 mb-4">{{ product.description }}</p>
        <ul class="list-disc pl-5">
          <li
            v-for="(benefit, index) in product.benefits"
            :key="index"
          >
            {{ benefit }}
          </li>
        </ul>
        <UButton
          color="primary"
          variant="solid"
          :to="`/products/${product.title}`"
        >
          Learn More
        </UButton>
      </div>
    </div>
  </TransitionBounce>
</template>

<script setup lang="ts">

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
