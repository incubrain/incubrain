<template>
  <div class="wrapper padded-x padded-y spaced-y">
    <CommonCTA2 :title="posthogTitle">
      <div class="flex gap-4">
        <UButton
          to="discord.url"
          variant="outline"
          color="primary"
        >
          Add PostHog To Nuxt
        </UButton>
        <UButton
          to="discord.url"
          variant="outline"
          color="primary"
        >
          Why We Track Metrics
        </UButton>
      </div>
    </CommonCTA2>
    <div class="background padded-x py-4 rounded-md border border-color">
      <iframe
        ref="poshogDashboard"
        class="dark:invert dark:grayscale-[40%]"
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

const posthogTitle = {
  label: 'website metrics',
  main: 'You Cannot Measure What You Do Not Track'
}

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data.event === 'posthog:dimensions' && event.data.height && poshogDashboard.value) {
      poshogDashboard.value.height = event.data.height
    }
  })
})
</script>

<style scoped></style>
