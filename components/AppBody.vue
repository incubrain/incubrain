<template>
  <div
    ref="scrollContainer"
    :class="
      mobiBottomNav
        ? 'w-full h-[calc(100vh-var(--nav-height-sm)-var(--nav-height-mobi))] md:h-[calc(100vh-var(--nav-height-md)-var(--nav-height-mobi))] lg:h-[calc(100vh-var(--nav-height-lg))] relative overflow-y-scroll'
        : 'w-full h-[calc(100vh-var(--nav-height-sm))] md:h-[calc(100vh-var(--nav-height-md))] lg:h-[calc(100vh-var(--nav-height-lg))] relative overflow-y-scroll'
    "
  >
    <slot />

    <div
      class="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl border-2 border-white rounded-full shadow-lg h-[40px] w-[40px] fixed bottom-3 flex justify-center items-center right-3 z-10"
      @click="toTop"
    >
      <UIcon
        name="i-mdi-chevron-up"
        class="h-8 w-8 text-white flex justify-center items-center"
      />
    </div>
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

function toTop() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0
  }
}

onMounted(() => {
  watch(route, () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  })
})
</script>

<style scoped></style>
