<template>
  <div class="flex flex-col lg:flex-row gap-2 lg:gap-8">
    <div class="w-full lg:w-2/3">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded">
        <slot name="1" />
      </div>
    </div>
    <div class="w-full lg:w-1/3">
      <div class="rounded h-full">
        <slot name="2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
