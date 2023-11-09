<template>
  <div>
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
          :rows="routes"
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

defineProps({
  routes: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>
