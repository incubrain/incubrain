<template>
  <div>
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      @click="openModal"
    />
    <dialog ref="dialog">
      <NuxtImg :src="src" :alt="alt" />
      <button @click="closeModal">Close</button>
    </dialog>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const dialog = ref(null)

function openModal() {
  if (dialog.value) dialog.value.showModal()
}

function closeModal() {
  dialog.value.close()
}
</script>
