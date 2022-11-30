<template>
  <div>
    <GridCol2NineThree>
      <template #1>
        <DataFullCard />
      </template>
      <template #2>
        <DataSingleCongrats />
      </template>
    </GridCol2NineThree>
    <GridCol1>
      <template #default>
        <DataFourCardAlt2 />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <DataFourCardAlt3 />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <DataFourCardBasic />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <DataFourCardAlt />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <DataTall />
      </template>
      <template #2>
        <DataTallSolid />
      </template>
      <template #3>
        <DataTall />
      </template>
    </GridCol3>
    <GridCol3>
      <template #1>
        <DataCardData />
      </template>
      <template #2>
        <DataCardPieData />
      </template>
      <template #3>
        <DataLocationList />
      </template>
    </GridCol3>
    <GridCol2Even>
      <template #1>
        <DataLocationData />
      </template>
      <template #2 />
    </GridCol2Even>
    <GridCol1>
      <template #default>
        <DataGraphWithControls />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template #1>
        <DataBarRevenue />
      </template>
      <template #2>
        <DataBarCard />
      </template>
    </GridCol2EightFour>
    <GridCol3>
      <template #1>
        <DataLineMany />
      </template>
      <template #2>
        <DataBarComparrison />
      </template>
      <template #3>
        <DataPie />
      </template>
    </GridCol3>
    <GridCol2EightFour>
      <template #1>
        <DataLineUsers />
      </template>
      <template #2>
        <DataLineWave />
      </template>
    </GridCol2EightFour>
    <GridCol2SevenFive>
      <template #1>
        <DataLineSimple />
      </template>
      <template #2>
        <DataTacho />
        <DataSingleEarnings />
      </template>
    </GridCol2SevenFive>
  </div>>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed'
})

</script>
