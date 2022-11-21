<template>
  <AppTabs>
    <div>
      <GridCol1>
      <template v-slot:default>
        <UiCard />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <UiTaskCharts />
      </template>
      <template v-slot:2>
        <UiTicket />
      </template>
      <template v-slot:3>
        <UiCardAlt2 />
      </template>
    </GridCol3>
    <GridCol1>
      <template v-slot:default>
        <UiCalendar />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <UiCardFancy />
      </template>
      <template v-slot:2>
        <UiCardAlt3 />
      </template>
      <template v-slot:3>
      </template>
    </GridCol3>
      <GridCol3>
      <template v-slot:1>
        <UiCardBasic />
      </template>
      <template v-slot:2>
        <UiCard />
      </template>
      <template v-slot:3>
        <UiCardAlt />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <UiCardTall />
      </template>
      <template v-slot:2>
        <UiCardSolid />
      </template>
      <template v-slot:3>
        <UiCardSimple />
      </template>
    </GridCol3>
    <GridCol2FiveSeven>
      <template v-slot:1>
        <UiCardAlt2 />
      </template>
      <template v-slot:2>
        <UiAuthor />
      </template>
    </GridCol2FiveSeven>
    <GridCol1>
      <template v-slot:default>
        <UiFullSummary />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <UiEmployeePerformance />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <UiFullCard />
      </template>
    </GridCol1>
    <GridCol2SevenFive>
      <template v-slot:1>
        <UiCreateTask />
      </template>
    </GridCol2SevenFive>
    </div>
  </AppTabs>
</template>

<script setup lang="ts">

</script>
