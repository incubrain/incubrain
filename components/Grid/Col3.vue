<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 lg:gap-8">
    <div class="flex flex-col gap-2 lg:gap-8">
      <slot name="1" />
    </div>
    <div class="flex flex-col gap-2 lg:gap-8 ">
      <slot name="2" />
    </div>
    <div class="flex flex-col gap-2 lg:gap-8 ">
      <slot name="3" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
