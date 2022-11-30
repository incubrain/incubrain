<template>
  <div>
    <GridCol2EightFour>
      <template v-slot:1 >
        <TechList />
      </template>
      <template v-slot:2 >
        <TechStack />
      </template>
    </GridCol2EightFour>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
  name: 'I Use',
})

</script>
