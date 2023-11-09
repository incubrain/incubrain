<template>
  <div class="wrapper padded-x padded-y spaced-y">
    <CommonCTA2 :title="lighthouseTitle">
      <div class="flex gap-4">
        <!-- <UButton
          to="discord.url"
          variant="outline"
          color="primary"
        >
          Why We Track Performance
        </UButton> -->
      </div>
    </CommonCTA2>
    <UButton @click="getMetrics"> Get Reports</UButton>
    <div
      v-if="metrics.length"
      class="grid gap-8"
    >
      <div
        v-for="metric in metrics"
        :key="`lighthouse-summary-${metric.month}`"
        class="background padded-x py-4 rounded-md border border-color"
      >
        <div class="space-y-2">
          <h3 class="text-xl font-semibold">{{ metric.month }} {{ metric.year }} Summary</h3>
          <UMeterGroup
            size="md"
            indicator
            :min="0"
            :max="400"
          >
            <UMeter
              :value="metric.summary.categories.performance.averageScore * 100"
              color="gray"
              label="Performance"
              icon="i-heroicons-cog-6-tooth"
            />
            <UMeter
              :value="metric.summary.categories.accessibility.averageScore * 100"
              color="red"
              label="Accessibility"
              icon="i-heroicons-cog-6-tooth"
            />
            <UMeter
              :value="metric.summary.categories['best-practices'].averageScore * 100"
              color="blue"
              label="Best Practices"
              icon="i-heroicons-cog-6-tooth"
            />
            <UMeter
              :value="metric.summary.categories.seo.averageScore * 100"
              color="green"
              label="Seo"
              icon="i-heroicons-cog-6-tooth"
            />
          </UMeterGroup>
          <LighthouseModal :routes="metric.routes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const lighthouseTitle = {
  label: 'website performance',
  main: 'Tracking Your Website Performance'
}

const metrics = ref([] as any[])

const getMetrics = async () => {
  const { data, error } = await useFetch('/api/lighthouse/reports', {
    method: 'POST',
    body: {
      website: 'incubrain',
      year: '2023'
    }
  })

  if (error.value) {
    console.error(error.value)
  } else if (data.value) {
    console.log('data', data)
    metrics.value.push(...data.value.metrics)
  }
}
</script>

<style scoped></style>
