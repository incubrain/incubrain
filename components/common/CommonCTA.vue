<template>
  <div class="relative overflow-hidden padded-y flex justify-center items-center background">
    <div
      class="h-1/5 w-full absolute z-10 top-0 left-0 bg-gradient-to-b from-white via-white dark:via-neutral-950 dark:from-neutral-950 to-transparent"
    />
    <div class="bg-pattern absolute z-0 top-0 left-0 w-full h-full" />
    <div class="relative wrapper space-y-12 flex justify-center items-center flex-col">
      <CommonTitle
        label="CTA"
        title="Something Amazing"
        description="Some information about that amazing thing"
        alignment="center"
      />
      <UButton
        to="/contact"
      >
        Contact us
      </UButton>
    </div>
    <div
      class="h-1/5 absolute z-10 bottom-0 w-full bg-gradient-to-b from-transparent via-white dark:via-neutral-950 to-white dark:to-neutral-950"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'CTA Title'
  },
  description: {
    type: String,
    default: 'CTA Description'
  },
  image: {
    type: String,
    default: '/images/hero.jpg'
  }
})
</script>

<style scoped></style>
