<template>
  <div class="flex flex-col gap-6 lg:gap-12">
    <CommonTitle :title="title" />
    <div class="grid lg:grid-cols-2 gap-2 lg:gap-4">
      <UAccordion
        :items="faqs.slice(0, Math.ceil(faqs.length / 2))"
        variant="soft"
        :ui="{ wrapper: 'space-y-2 lg:space-y-4' }"
        size="lg"
        multiple
      >
        <template #item="{ item }">
          <p class="italic padded-x">
            {{ item.description }}
          </p>
        </template>
      </UAccordion>
      <UAccordion
        :items="faqs.slice(Math.ceil(faqs.length / 2))"
        :ui="{ wrapper: 'space-y-2 lg:space-y-4' }"
        variant="soft"
        size="lg"
        multiple
      >
        <template #item="{ item }">
          <p class="italic padded-x">
            {{ item.description }}
          </p>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, Faq } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  faqs: {
    type: Array as PropType<Faq[]>,
    required: true
  }
})
</script>

<style scoped></style>
