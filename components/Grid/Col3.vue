<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 lg:gap-8">
    <div class="rounded">
      <slot name="1" class="flex flex-col gap-2 lg:gap-8" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
    <div class="rounded ">
      <slot name="2" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
    <div class="rounded ">
      <slot name="3" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
