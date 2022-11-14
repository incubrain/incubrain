<template>
  <div> 
    <GridCol3>
      <template v-slot:1>
        <MobilePostStatusImage />
        <MobileImage />
        <MobileSupportChat />
      </template>
      <template v-slot:2>
        <MobileOrders />
        <MobilePostImage />
      </template>
      <template v-slot:3>
        <MobilePostWithComments />
        <MobileFullScreenVideo />
      </template>
    </GridCol3>
  </div>
</template>

<script setup lang="ts">

</script>
