<template>
  <div class="flex flex-col lg:flex-row gap-2 lg:gap-6 xl:gap-8">
    <div class="w-full h-full flex flex-col lg:w-2/3 gap-2 lg:gap-6 xl:gap-8">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <slot name="1" />
    </div>
    <div class="w-full h-full flex flex-col gap-2 lg:w-1/3 lg:gap-6 xl:gap-8">
      <slot name="2" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
