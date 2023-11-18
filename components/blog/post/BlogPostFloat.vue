<template>
  <div
    v-show="showButton"
    class="fixed flex justify-center items-center gap-2 top-24 right-1/2 z-20 animate-bounce"
  >
    <div class="p-1 background rounded-full border border-color">
      <UIcon
        name="i-mdi-chevron-up"
        class="h-6 w-6 flex justify-center items-center cursor-pointer"
        @click="toTop"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
let lastScrollTop = 0
const showButton = ref(false)

onMounted(() => {
  window.addEventListener(
    'scroll',
    () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop
      const scrolledPercentage = (currentScroll / document.documentElement.scrollHeight) * 100

      if (scrolledPercentage < 30 || currentScroll > lastScrollTop) {
        // Scrolling down and past 30% of the page
        showButton.value = false
      } else if (scrolledPercentage > 30 && currentScroll < lastScrollTop) {
        // Scrolling up and past 30% of the page
        showButton.value = true
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll // For Mobile or negative scrolling
    },
    false
  )
})

function toTop() {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped></style>
