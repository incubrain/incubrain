<template>
  <div class="w-full background">
    <NavTop />
    <AppBody :mobi-bottom-nav="false">
      <HomeHero />
      <div class="py-8 lg:py-20">
        <slot />
      </div>
      <UNotifications />
      <NavFooterWebsite />
    </AppBody>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
