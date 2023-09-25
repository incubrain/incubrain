<template>
  <div class="w-full background">
    <NavTop />
    <AppBody :mobi-bottom-nav="false">
      <slot />
      <UNotifications />
      <NavFooterWebsite />
    </AppBody>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
