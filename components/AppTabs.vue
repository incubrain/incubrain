<template>
  <AppTitle  />
  <div class="w-full min-h-[100vh] bg-white px-4 mx-auto">
    <div class="relative w-full">
      <div class="w-full sm:mb-2 lg:mb-4 bg-gray-200 shadow rounded-b h-full relative z-100"
        id="tabBG">
        <div class="w-full h-full p-2 lg:p-6 xl:p-8">
          <!-- Place your content here -->
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
