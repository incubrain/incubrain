<template>
  <div :class="`bg-[${props.bgColor}] rounded-full shadow-md overflow-hidden min-w-full border-[10px] border-opacity-20 border-white ${props.bgPattern}`" />
</template>

<script setup>

const props = defineProps({
  bgColor: String,
  bgPattern: String
})

</script>

<style>

</style>
