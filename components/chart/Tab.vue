<template>
  <div> 
    <GridCol1>
      <template v-slot:default>
        <ChartGraphWithControls />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template v-slot:1>
        <ChartBarRevenue />
      </template>
      <template v-slot:2>
        <ChartBarCard />
      </template>
    </GridCol2EightFour>
    <GridCol3>
      <template v-slot:1>
        <ChartLineMany />
      </template>
      <template v-slot:2>
        <ChartBarComparrison />
      </template>
      <template v-slot:3>
        <ChartPie />
      </template>
    </GridCol3>
    <GridCol2EightFour>
      <template v-slot:1>
        <ChartLineUsers />
      </template>
      <template v-slot:2>
        <ChartLineWave />
      </template>
    </GridCol2EightFour>
    <GridCol2SevenFive>
      <template v-slot:1>
        <ChartLineSimple />
      </template>
      <template v-slot:2>
        <ChartTacho />
        <ChartSingleEarnings />
      </template>
    </GridCol2SevenFive>
  </div>
</template>

<script setup lang="ts">

</script>
