<template>
  <button
    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium h-[60px] w-[60px] rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 fixed bottom-3 right-3"
    type="button"
    @click="toTop"
  >
    <font-awesome-icon icon="fa-solid fa-hand-point-up" />
  </button>
</template>

<script setup lang="ts">

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
