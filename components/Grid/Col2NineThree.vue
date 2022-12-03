<template>
  <div class="flex flex-col lg:flex-row gap-2 lg:gap-8">
    <div class="w-full md:w-3/4 flex flex-col gap-2 lg:gap-8">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <slot name="1" />
    </div>
    <div class="md:w-1/4 flex flex-col w-full gap-2 lg:gap-8">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <slot name="2" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
