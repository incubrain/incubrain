<template>
  <div class="py-4">
    <table class="w-full overflow-hidden border-collapse">
      <thead>
        <tr class="foreground">
          <th class="border border-color p-2 text-left font-semibold">Question</th>
          <th class="border border-color p-2 text-left font-semibold">Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(faq, index) in faqs"
          :key="index"
          class="text-sm odd:background even:foreground hover:bg-primary-50 dark:hover:bg-primary-950"
        >
          <td class="border border-color p-2">{{ faq.question }}</td>
          <td class="border border-color p-2">{{ faq.answer }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type Faq = {
  question: string
  answer: string
}

defineProps<{
  faqs: Faq[]
}>()
</script>
