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
    <div
      v-for="metric in data?.metrics"
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
        <div class="pt-4">
          <UButton
            label="Routes"
            @click="isOpen = true"
          />
        </div>
        <UModal
          v-model="isOpen"
          :ui="{ base: 'min-w-[80%]' }"
        >
          <div class="p-4 min-w-full">
            <UTable
              v-model:sort="sort"
              :rows="metric.routes"
              :columns="columns"
            >
              <template #metrics-data="{ row }">
                <div class="flex flex-col gap-1">
                  <span>
                    <strong>FCP:</strong>
                    {{ row.metrics['first-contentful-paint'].displayValue }}
                  </span>
                  <span>
                    <strong>LCP:</strong>
                    {{ row.metrics['largest-contentful-paint'].displayValue }}
                  </span>
                  <span>
                    <strong>CLS:</strong>
                    {{ row.metrics['cumulative-layout-shift'].displayValue }}
                  </span>
                  <span>
                    <strong>TBT:</strong>
                    {{ row.metrics['total-blocking-time'].displayValue }}
                  </span>
                  <span> <strong>TTI:</strong> {{ row.metrics['interactive'].displayValue }} </span>
                  <span>
                    <strong>MP FID:</strong>
                    {{ row.metrics['max-potential-fid'].displayValue }}
                  </span>
                </div>
              </template>
              <template #categories-data="{ row }">
                <div class="flex flex-col gap-1">
                  <span>
                    <strong>Performance:</strong>
                    {{ row.categories.performance.score }}
                  </span>
                  <span>
                    <strong>Accessibility:</strong>
                    {{ row.categories.accessibility.score }}
                  </span>
                  <span>
                    <strong>Best Practices:</strong>
                    {{ row.categories['best-practices'].score }}
                  </span>
                  <span>
                    <strong>SEO:</strong>
                    {{ row.categories.seo.score }}
                  </span>
                </div>
              </template>
            </UTable>
          </div>
        </UModal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

type SortDirection = 'asc' | 'desc'

const sort = ref({
  column: 'score',
  direction: 'asc' as SortDirection
})

const columns = [
  {
    key: 'path',
    label: 'Path'
  },
  {
    key: 'score',
    label: 'Avg. Score',
    sortable: true,
    direction: 'desc'
  },
  {
    key: 'categories',
    label: 'Categories'
  },
  {
    key: 'metrics',
    label: 'Metrics'
  }
]

const lighthouseTitle = {
  label: 'website performance',
  main: 'Tracking Your Website Performance'
}

const { data, error } = await useFetch('/api/lighthouse', {
  params: {
    year: '2023',
    month: '10'
  }
})

if (error.value) {
  console.error(error.value)
}
</script>

<style scoped></style>
