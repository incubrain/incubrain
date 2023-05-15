<template>
  <div class="flex flex-col w-full">
    <div class="w-full rounded bg-white dark:bg-gray-800 shadow">
      <div class="w-full border-b border-gray-400 dark:border-gray-600 p-4 lg:p-8 rounded-t">
        <slot name="spec" />
      </div>
      <div class="w-full p-4 lg:p-8">
        <slot name="solution" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
