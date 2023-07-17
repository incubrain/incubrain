<template>
  <section>
    <h2 class="text-2xl font-bold mb-5">Leadership</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="leader in leaders"
        :key="leader.id"
        class="leader-card"
      >
        <NuxtImg
          :src="leader.image"
          :alt="leader.name"
          class="w-full h-64 object-cover"
        />
        <h3 class="text-xl font-bold mt-3">{{ leader.name }}</h3>
        <p class="text-gray-500">{{ leader.position }}</p>
        <p class="mt-2">{{ leader.bio }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

interface Leader {
  id: number
  name: string
  position: string
  bio: string
  image: string
}

defineProps({
  leaders: {
    type: Array as PropType<Leader[]>,
    required: true
  }
})
</script>

<style scoped>

</style>
