<template>
  <div>
    <CommonCoverImage
      :img="img"
      :title="title"
      object-position="object-center"
      fit="cover"
    >
      <div class="flex flex-row gap-4 rounded-md pb-6">
        <slot />
      </div>
    </CommonCoverImage>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

interface Image {
  title: string
  src: string
  alt: string
}

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  },
  img: {
    type: Object as PropType<Image>,
    required: true
  }
})
</script>
