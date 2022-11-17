<template>
  <AppTabs>
    <div>
      <GridCol1>
      <template v-slot:default>
        <ContentCard />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <ContentTaskCharts />
      </template>
      <template v-slot:2>
        <ContentTicket />
      </template>
      <template v-slot:3>
        <ContentCardAlt2 />
      </template>
    </GridCol3>
    <GridCol1>
      <template v-slot:default>
        <ContentCalendar />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <ContentCardFancy />
      </template>
      <template v-slot:2>
        <ContentCardAlt3 />
      </template>
      <template v-slot:3>
      </template>
    </GridCol3>
      <GridCol3>
      <template v-slot:1>
        <ContentCardBasic />
      </template>
      <template v-slot:2>
        <ContentCard />
      </template>
      <template v-slot:3>
        <ContentCardAlt />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <ContentCardTall />
      </template>
      <template v-slot:2>
        <ContentCardSolid />
      </template>
      <template v-slot:3>
        <ContentCardSimple />
      </template>
    </GridCol3>
    <GridCol2FiveSeven>
      <template v-slot:1>
        <ContentCardAlt2 />
      </template>
      <template v-slot:2>
        <ContentAuthor />
      </template>
    </GridCol2FiveSeven>
    <GridCol1>
      <template v-slot:default>
        <ContentFullSummary />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <ContentEmployeePerformance />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <ContentFullCard />
      </template>
    </GridCol1>
    <GridCol2SevenFive>
      <template v-slot:1>
        <ContentCreateTask />
      </template>
    </GridCol2SevenFive>
    </div>
  </AppTabs>
</template>

<script setup lang="ts">

</script>
