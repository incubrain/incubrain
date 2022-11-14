<template>
  <div> 
    <GridCol1>
      <template v-slot:default>
        <ProjectFullSummary />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <ProjectEmployeePerformance />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <ProjectFullCard />
      </template>
    </GridCol1>
    <GridCol2SevenFive>
      <template v-slot:1>
        <ProjectCreateTask />
      </template>
    </GridCol2SevenFive>
  </div>
</template>

<script setup lang="ts">

</script>
