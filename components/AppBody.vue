<template>
  <div
    ref="scrollContainer"
    :class="
      mobiBottomNav
        ? 'w-full h-[calc(100vh-var(--nav-height-mobi)-var(--nav-height-sm))] lg:h-[calc(100vh-var(--nav-height-lg))] relative overflow-y-scroll'
        : 'w-full h-[calc(100vh-var(--nav-height-sm))] lg:h-[calc(100vh-var(--nav-height-lg))] relative overflow-y-scroll'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const scrollContainer = ref(null)

defineProps({
  mobiBottomNav: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

onMounted(() => {
  watch(route, () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  })
})
</script>

<style scoped></style>
