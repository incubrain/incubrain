<template>
  <div class="border-t border-gray-700 py-4 mt-8 text-center text-sm">
    <p class="mb-2"> COPYRIGHT INCUBRAIN PVT LTD {{ currentYear }}</p>
    <div class="space-x-4">
      <NuxtLink
        to="/terms-of-use"
        class="text-gray-400 hover:text-white"
      >
        Terms of Use
      </NuxtLink>
      <NuxtLink
        to="/privacy-policy"
        class="text-gray-400 hover:text-white"
      >
        Privacy Policy
      </NuxtLink>
      <NuxtLink
        to="/cookies-policy"
        class="text-gray-400 hover:text-white"
      >
        Cookies Policy
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = ref(new Date().getFullYear())
</script>
