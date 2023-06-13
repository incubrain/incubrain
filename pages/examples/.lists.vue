<template>
  <div>
    <GridCol1>
      <template #default>
        <ListJobs />
      </template>
    </GridCol1>
    <GridCol2Even>
      <template #1>
        <ListSmall5Col />
      </template>
      <template #2>
        <ListSearchUsers />
      </template>
    </GridCol2Even>
    <GridCol3>
      <template #1>
        <ListSingleSquare />
      </template>
      <template #2>
        <ListSingleAlt />
      </template>
      <template #3>
        <ListSingleAlt2 />
      </template>
    </GridCol3>
    <GridCol3>
      <template #1>
        <ListCard />
      </template>
      <template #2 />
      <template #3 />
    </GridCol3>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'ListExamples'
})

</script>
