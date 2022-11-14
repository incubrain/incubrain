<template>
  <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
    <div class="rounded">
      <slot name="1" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
    <div class="rounded">
      <slot name="2" />
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
