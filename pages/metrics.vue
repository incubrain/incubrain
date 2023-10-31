<template>
  <div class="wrapper padded-x padded-y">
    <div class="background padded-x py-4 rounded-md border border-color">
      <iframe
        ref="poshogDashboard"
        width="100%"
        height="400"
        frameborder="0"
        src="https://app.posthog.com/embedded/FN4dj01sHpFp98fbAZeSEytWx0qqGw"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const poshogDashboard = ref(null as HTMLIFrameElement | null)

onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('message', event)
    if (event.data.event === 'posthog:dimensions' && event.data.height && poshogDashboard.value) {
      console.log('posthog:dimensions', event.data)
      poshogDashboard.value.height = event.data.height
    }
  })
})
</script>

<style scoped></style>
