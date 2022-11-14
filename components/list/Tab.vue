<template>
  <div> 
    <GridCol1>
      <template v-slot:default>
        <ListJobs />
      </template>
    </GridCol1>
    <GridCol2Even>
      <template v-slot:1>
        <ListSmall5Col />
      </template>
      <template v-slot:2>
        <ListSearchUsers />
      </template>
    </GridCol2Even>
    <GridCol3>
      <template v-slot:1>
        <ListSingleSquare />
      </template>
      <template v-slot:2>
        <ListSingleAlt />
      </template>
      <template v-slot:3>
        <ListSingleAlt2 />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <ListCard />
      </template>
      <template v-slot:2>
      </template>
      <template v-slot:3>
      </template>
    </GridCol3>
  </div>
</template>

<script setup lang="ts">

</script>
