<template>
  <div class="w-full foreground">
    <NavTop />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NavFooterWebsite />
    <UNotifications :timeout="4000" />
  </div>
</template>

<script setup lang="ts"></script>
