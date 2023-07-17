<template>
  <div class="w-full">
    <NavTop />
    <AppBody :mobi-bottom-nav="false">
      <slot />
      <UNotifications />
    </AppBody>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
