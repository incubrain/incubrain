<template>
    <div>
      <GridCol1>
      <template #default>
        <UiCard />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UiTaskCharts />
      </template>
      <template #2>
        <UiTicket />
      </template>
      <template #3>
        <UiCardAlt2 />
      </template>
    </GridCol3>
    <GridCol1>
      <template #default>
        <UiCalendar />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UiCardFancy />
      </template>
      <template #2>
        <UiCardAlt3 />
      </template>
      <template #3>
      </template>
    </GridCol3>
      <GridCol3>
      <template #1>
        <UiCardBasic />
      </template>
      <template #2>
        <UiCard />
      </template>
      <template #3>
        <UiCardAlt />
      </template>
    </GridCol3>
    <GridCol3>
      <template #1>
        <UiCardTall />
      </template>
      <template #2>
        <UiCardSolid />
      </template>
      <template #3>
        <UiCardSimple />
      </template>
    </GridCol3>
    <GridCol2FiveSeven>
      <template #1>
        <UiCardAlt2 />
      </template>
      <template #2>
        <UiAuthor />
      </template>
    </GridCol2FiveSeven>
    <GridCol1>
      <template #default>
        <UiFullSummary />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <UiEmployeePerformance />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <UiFullCard />
      </template>
    </GridCol1>
    <GridCol2SevenFive>
      <template #1>
        <UiCreateTask />
      </template>
    </GridCol2SevenFive>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
})

</script>
