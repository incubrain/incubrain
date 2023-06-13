<template>
  <div>
    <GridCol1>
      <template #default>
        <UiPatternsControl />
      </template>
    </GridCol1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabbed',
  name: 'ExamplesPattern'
})
</script>
