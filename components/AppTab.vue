<template>
  <div
    v-if="visible"
    class="tab-content"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const { activeTab } = useTabs()

</script>
