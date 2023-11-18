<template>
  <div class="flex flex-col gap-6 lg:gap-12">
    <CommonTitle
      v-if="title.main"
      :title="title"
    />
    <div class="grid lg:grid-cols-2 gap-2 lg:gap-4">
      <UAccordion
        v-for="(faq, i) in faqSplit"
        :key="`faq-col-${i}`"
        :items="faq"
        :ui="{ wrapper: 'gap-4 text-left' }"
        size="lg"
        multiple
      >
        <template #default="{ item, open }">
          <UButton
            variant="link"
            class="link flex justify-between group text-left"
          >
            {{ item.label }}
            <UIcon
              name="i-mdi-chevron-down"
              class="transition-all flex-shrink-0 h-4 w-4"
              :class="open ? 'rotate-180' : 'rotate-0'"
            />
          </UButton>
        </template>
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
import type { TitleT, FaqT } from '~/types/content'

const p = defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: false,
    default: () => ({})
  },
  faqs: {
    type: Array as PropType<FaqT[]>,
    required: true
  }
})

const faqSplit = computed(() => {
  const faqLength = p.faqs.length
  const half = Math.ceil(faqLength / 2)
  const firstHalf = p.faqs.slice(0, half)
  const secondHalf = p.faqs.slice(half, faqLength)
  return [firstHalf, secondHalf]
})
</script>

<style scoped></style>
