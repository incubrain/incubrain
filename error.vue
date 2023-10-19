<template>
  <div class="h-screen w-full">
    <div class="w-full h-full flex flex-col gap-4 items-center justify-center leading-none">
      <h2 class="text-3xl font-semibold">{{ error.statusCode }}</h2>
      <p class="text-xl">{{ error.message }}</p>
      <UButton
        size="lg"
        @click="handleError"
      >
        GO HOME
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

defineProps({
  error: {
    type: Object as PropType<Error>,
    required: true
  }
})

// clear error and redirect to home page
const handleError = () => clearError({ redirect: '/' })
</script>

<style></style>
