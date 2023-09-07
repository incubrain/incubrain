<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">FAQ</h2>
    <UAccordion :items="faqs" color="primary" variant="outline" size="md" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" multiple />
  </div>
</template>

<script setup lang="ts">

interface FAQ {
  title: string
  content: string
}

defineProps({
  faqs: {
    type: Array as PropType<FAQ[]>,
    default: () => []
  }
})

</script>
