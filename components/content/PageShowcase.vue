<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
    <div class="w-full lg:w-auto flex-col gap-2 lg:gap-8">
      <div
        v-for="img in images"
        :key="img.id"
      >
        <img
          :src="img.src"
          :alt="img.alt"
        >
      </div>
    </div>
    <div class="w-full lg:w-auto flex-col gap-2 lg:gap-8">
      <p class="page-showcase prose prose-lg">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

interface obj {
  id: number
  src: string
  alt: string
}

defineProps({
  images: {
    type: Array<obj>,
    default: () => Array<obj>
  }
})
</script>
