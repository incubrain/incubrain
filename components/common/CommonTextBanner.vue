<template>
  <div
    class="w-full py-12 foreground overflow-hidden relative flex justify-center items-center rounded-lg border border-color"
  >
    <div
      class="absolute left-0 top-0 h-full w-36 z-10 bg-gradient-to-r dark:from-black/80 from-white"
    />
    <div class="w-full">
      <div class="flex flex-nowrap w-full">
        <h3 class="text-5xl font-bold whitespace-nowrap animate-marquee pr-6">
          {{ bannerText }}
        </h3>
        <h3 class="absolute left-0 text-5xl font-bold whitespace-nowrap animate-marquee2">
          {{ bannerText }}
        </h3>
      </div>
    </div>
    <div
      class="absolute right-0 top-0 h-full w-36 z-10 bg-gradient-to-r from-transparent dark:to-black/80 to-white"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  bannerText: {
    type: String,
    default: 'Title'
  }
})
</script>

<style scoped>
@keyframes scrollRightToLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.text-banner {
  width: auto;
  animation: scrollRightToLeft 24s linear infinite;
}

.text-banner:hover {
  animation-play-state: paused;
}
</style>
