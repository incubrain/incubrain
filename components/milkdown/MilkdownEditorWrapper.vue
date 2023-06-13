<template>
  <div class="mx-auto max-w-[900px]">
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  </div>
</template>

<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
</script>

<style scoped></style>
