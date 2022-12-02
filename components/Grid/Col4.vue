<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
    <div class="rounded ">
      <slot name="1" />
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
    <div class="rounded ">
      <slot name="4" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
