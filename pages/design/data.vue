<template>
  <div>
    <GridCol2NineThree>
      <template #1>
        <DataFullCard />
        <DataLocationList />
        <DataGraphWithControls />
        <DataBarRevenue />
        <DataLineSimple />
        <DataLineUsers />
        <!-- <DataTacho />
        <DataCardPieData />
        <DataCardData />
        <DataLocationData /> -->
      </template>
      <template #2>
        <DataLineMany />
        <DataSingleCongrats />
        <!-- <DataSingleEarnings /> -->
        <DataLineWave />
        <!-- <DataFourCardAlt2 />
        <DataFourCardAlt3 /> -->
        <!-- <DataTall /> -->
        <DataTallSolid />
        <DataBarCard />
        <DataBarComparrison />
        <DataPie />
        <!-- <DataFourCardBasic />
        <DataFourCardAlt /> -->
      </template>
    </GridCol2NineThree>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Data'
})

</script>
