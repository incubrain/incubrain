<template>
  <AppTabs>
    <div>
      <GridCol2NineThree>
      <template v-slot:1>
        <DataFullCard />
      </template>
      <template v-slot:2>
        <DataSingleCongrats />
      </template>
    </GridCol2NineThree>
    <GridCol1>
      <template v-slot:default>
        <DataFourCardAlt2 />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <DataFourCardAlt3 />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <DataFourCardBasic />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <DataFourCardAlt />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <DataTall />
      </template>
      <template v-slot:2>
        <DataTallSolid />
      </template>
      <template v-slot:3>
        <DataTall />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <DataCardData />
      </template>
      <template v-slot:2>
        <DataCardPieData />
      </template>
      <template v-slot:3>
        <DataLocationList />
      </template>
    </GridCol3>
    <GridCol2Even>
      <template v-slot:1>
        <DataLocationData />
      </template>
      <template v-slot:2>
      </template>
    </GridCol2Even>
      <GridCol1>
      <template v-slot:default>
        <DataGraphWithControls />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template v-slot:1>
        <DataBarRevenue />
      </template>
      <template v-slot:2>
        <DataBarCard />
      </template>
    </GridCol2EightFour>
    <GridCol3>
      <template v-slot:1>
        <DataLineMany />
      </template>
      <template v-slot:2>
        <DataBarComparrison />
      </template>
      <template v-slot:3>
        <DataPie />
      </template>
    </GridCol3>
    <GridCol2EightFour>
      <template v-slot:1>
        <DataLineUsers />
      </template>
      <template v-slot:2>
        <DataLineWave />
      </template>
    </GridCol2EightFour>
    <GridCol2SevenFive>
      <template v-slot:1>
        <DataLineSimple />
      </template>
      <template v-slot:2>
        <DataTacho />
        <DataSingleEarnings />
      </template>
    </GridCol2SevenFive>
    </div>
  </AppTabs>
</template>

<script setup lang="ts">

</script>
