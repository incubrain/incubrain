<template>
  <div> 
    <GridCol1>
      <template v-slot:default>
        <StatFullCard />
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
  </div>
</template>

<script>

</script>
