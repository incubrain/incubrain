<template>
  <div>
    <GridCol3>
      <template #1>
        <MobilePostStatusImage />
        <MobileImage />
        <MobileSupportChat />
      </template>
      <template #2>
        <MobileOrders />
        <MobilePostImage />
      </template>
      <template #3>
        <MobilePostWithComments />
        <MobileFullScreenVideo />
      </template>
    </GridCol3>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabbed',
  name: 'ExamplesMobile'
})
</script>
