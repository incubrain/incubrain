<template>
  <div
    class="fixed flex justify-center items-center gap-2 bottom-2 right-2 lg:bottom-3 lg:right-6 z-20"
  >
    <div class="p-1 foreground rounded-full border border-color">
      <UIcon
        name="i-mdi-chevron-up"
        class="h-5 w-5 flex justify-center items-center cursor-pointer"
        @click="toTop"
      />
    </div>
    <UButton
      :to="`https://github.com/incubrain/incubrain/edit/main/${slug}`"
      target="_blank"
      class="flex items-center justify-center"
    >
      <UIcon
        name="i-mdi-github"
        class="h-4 w-4 inline-block shrink-0"
      />
      Edit Post
    </UButton>
  </div>
</template>

<script setup lang="ts">

defineProps({
  slug: {
    type: String as PropType<string>,
    required: true
  }
})

function toTop() {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped></style>
