<template>
  <div class="flex flex-wrap">
    <div class="md:w-1/4 w-full pb-2 lg:pb-6">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded ">
        <slot name="1" />
      </div>
    </div>
    <div class="md:w-3/4 w-full">
      <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
      <div class="rounded ">
        <slot name="2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
