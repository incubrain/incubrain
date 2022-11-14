<template>
  <div>
    <GridCol1>
      <template v-slot:default>
        <ProfileHero />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <ProfileCardAlt />
      </template>
      <template v-slot:2>
        <ProfileVisits />
      </template>
      <template v-slot:3>
        <ProfileCardFollow />
      </template>
    </GridCol3> 
    <GridCol1>
      <template v-slot:default>
        <ProfileFullSection />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template v-slot:1>
        <ProfileCard />
      </template>
      <template v-slot:2>
        <ProfileSummary />
      </template>
    </GridCol2EightFour>
    <GridCol1>
      <template v-slot:default>
        <ProfileSummaryMed />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <ProfileTransactions />
      </template>
    </GridCol1>
  </div>
</template>

<script setup lang="ts">

</script>
