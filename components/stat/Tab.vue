<template>
  <div> 
    <GridCol2NineThree>
      <template v-slot:1>
        <StatFullCard />
      </template>
      <template v-slot:2>
        <StatSingleCongrats />
      </template>
    </GridCol2NineThree>
    <GridCol1>
      <template v-slot:default>
        <StatFourCardAlt2 />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <StatFourCardAlt3 />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <StatFourCardBasic />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <StatFourCardAlt />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <StatTall />
      </template>
      <template v-slot:2>
        <StatTallSolid />
      </template>
      <template v-slot:3>
        <StatTall />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <StatCardChart />
      </template>
      <template v-slot:2>
        <StatCardPieChart />
      </template>
      <template v-slot:3>
        <StatLocationList />
      </template>
    </GridCol3>
    <GridCol2Even>
      <template v-slot:1>
        <StatLocationChart />
      </template>
      <template v-slot:2>
      </template>
    </GridCol2Even>
  </div>
</template>

<script setup lang="ts">

</script>
