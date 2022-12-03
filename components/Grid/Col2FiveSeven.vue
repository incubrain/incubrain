<template>
  <div class="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-8">
    <div class="w-full md:w-2/5flex flex-col gap-2 lg:gap-8">
      <slot name="1" />
    </div>
    <div class="w-full md:w-3/5 flex flex-col gap-2 lg:gap-8">
      <slot name="2" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
