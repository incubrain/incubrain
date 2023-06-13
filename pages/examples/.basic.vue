<template>
  <div>
    <GridCol1>
      <template #default>
        <UiBasicCard />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UiBasicTaskCharts />
      </template>
      <template #2>
        <UiBasicTicket />
      </template>
      <template #3>
        <UiBasicCardAlt2 />
      </template>
    </GridCol3>
    <GridCol1>
      <template #default>
        <UiBasicCalendar />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UiBasicCardFancy />
      </template>
      <template #2>
        <UiBasicCardAlt3 />
      </template>
      <template #3 />
    </GridCol3>
    <GridCol3>
      <template #1>
        <UiBasicCardBasic />
      </template>
      <template #2>
        <UiBasicCard />
      </template>
      <template #3>
        <UiBasicCardAlt />
      </template>
    </GridCol3>
    <GridCol3>
      <template #1>
        <UiBasicCardTall />
      </template>
      <template #2>
        <UiBasicCardSolid />
      </template>
      <template #3>
        <UiBasicCardSimple />
      </template>
    </GridCol3>
    <GridCol2FiveSeven>
      <template #1>
        <UiBasicCardAlt2 />
      </template>
      <template #2>
        <UiBasicAuthor />
      </template>
    </GridCol2FiveSeven>
    <GridCol1>
      <template #default>
        <UiBasicFullSummary />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <UiBasicEmployeePerformance />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <UiBasicFullCard />
      </template>
    </GridCol1>
    <GridCol2SevenFive>
      <template #1>
        <UiBasicCreateTask />
      </template>
    </GridCol2SevenFive>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabbed',
  name: 'ExamplesBasic'
})
</script>
