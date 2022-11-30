<template>
  <div>
    <GridCol2EightFour>
      <template #1>
        <TechList />
      </template>
      <template #2>
        <TechStack />
      </template>
    </GridCol2EightFour>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'I Use'
})

</script>
