<script setup lang="ts"></script>

<template>
  <UCard>
    <template #header>
      <div>
        <slot name="header" />
      </div>
    </template>

    <template #footer>
      <div>
        <slot name="footer" />
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
