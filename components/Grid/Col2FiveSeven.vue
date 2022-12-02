<template>
  <div class="flex flex-wrap gap-2 lg:gap-6">
    <div class="md:w-2/5 w-full">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded">
        <slot name="1" />
      </div>
    </div>
    <div class="md:w-3/5 w-full">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded">
        <slot name="2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
