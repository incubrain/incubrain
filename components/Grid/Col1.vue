<template>
  <div class="container pt-6 mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
        <div class="rounded">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
