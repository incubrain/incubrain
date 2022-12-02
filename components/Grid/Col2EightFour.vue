<template>
  <div class="flex flex-wrap gap-2 lg:gap-8">
    <div class="md:w-2/3 w-full">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded">
        <slot name="1" />
      </div>
    </div>
    <div class="md:w-1/3 w-full">
      <div class="rounded h-full">
        <slot name="2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
