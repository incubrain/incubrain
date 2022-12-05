<template>
  <div class="flex flex-col xl:flex-row gap-2 lg:gap-6 xl:gap-8 w-full">
    <div class="w-full xl:max-w-3/5 flex flex-col gap-2 lg:gap-6 xl:gap-8">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <slot name="1" />
    </div>
    <div class="xl:max-w-2/5 flex flex-col w-full gap-2 lg:gap-6 xl:gap-8">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <slot name="2" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
