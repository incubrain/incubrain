<template>
  <div :class="`flex flex-col gap-4 lg:gap-6 text-${alignment} lg:max-w-xl`">
    <p
      v-if="title.label"
      class="text-sm font-bold uppercase text-primary"
    >
      {{ title.label }}
    </p>
    <h2 class="text-2xl lg:text-4xl font-bold">
      {{ title.main }}
    </h2>
    <p
      v-if="title.subtitle"
      class="text-base"
    >
      {{ title.subtitle }}
    </p>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  alignment: {
    type: String,
    default: 'left'
  }
})
</script>

<style scoped></style>
