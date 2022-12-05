<template>
  <div>
    <div class="flex flex-col xl:flex-row gap-2 lg:gap-6 xl:gap-8 w-full">
      <div class="w-full xl:w-3/5 flex flex-col gap-2 lg:gap-6 xl:gap-8">
        <DataFullCard />
        <DataLocationList />
        <DataGraphWithControls />
        <DataBarRevenue />
        <DataLineSimple />
        <!-- <DataLineUsers /> -->
        <!-- <DataTacho />
        <DataCardPieData />
        <DataCardData />
        <DataLocationData /> -->
      </div>
      <div class="xl:w-2/5 flex flex-col w-full gap-2 lg:gap-6 xl:gap-8">
        <DataBarCard />
        <DataLineMany />
        <DataSingleCongrats />
        <!-- <DataSingleEarnings /> -->
        <DataLineWave />
        <!-- <DataFourCardAlt2 />
        <DataFourCardAlt3 /> -->
        <!-- <DataTall /> -->
        <DataTallSolid />
        <!-- <DataBarComparrison /> -->
        <!-- <DataPie /> -->
        <!-- <DataFourCardBasic />
        <DataFourCardAlt /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'Charts'
})

</script>
