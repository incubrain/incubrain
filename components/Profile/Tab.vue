<template>
  <div>
    <GridCol3>
      <template v-slot:1>
        <ProfileSummary />
      </template>
    </GridCol3> 
    <GridCol1>
      <template v-slot:default>
        <ProfileHero />
      </template>
    </GridCol1>
  </div>
</template>

<script setup lang="ts">

</script>
