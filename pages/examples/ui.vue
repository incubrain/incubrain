<template>
  <div class="flex flex-col gap-2 lg:gap-6 xl:gap-8">
    <GridCol1>
      <template #default>
        <UserInterfaceHero />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UserInterfaceCardAlt />
      </template>
      <template #2>
        <UserInterfaceVisits />
      </template>
      <template #3>
        <UserInterfaceCardFollow />
      </template>
    </GridCol3>
    <GridCol1>
      <template #default>
        <UserInterfaceFullSection />
      </template>
    </GridCol1>
    <GridCol2FiveSeven>
      <template #1>
        <UserInterfaceCard />
      </template>
      <template #2>
        <UserInterfaceSummary />
      </template>
    </GridCol2FiveSeven>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabbed',
  name: 'ExamplesUI'
})
</script>
