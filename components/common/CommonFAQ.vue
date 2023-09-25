<template>
  <div class="flex flex-col gap-6 lg:gap-12">
    <CommonTitle
      title="FAQs"
      description="Find answers to frequently asked questions about our high-ticket service."
    />
    <div>
      <UAccordion
        :ui="{ wrapper: 'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8' }"
        :items="faqs"
        variant="outline"
        size="lg"
        multiple
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  faqs: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
