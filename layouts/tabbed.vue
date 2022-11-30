<template>
  <div>
    <NavMain />
    <AppTabs>
      <AppLoader v-if="route.name !== 'home'" :duration="3000" :throttle="1000" />
      <slot />
    </AppTabs>
  </div>
</template>

<script setup>

const route = useRoute()

</script>

<style>

html {
  margin: 0;
  padding: 0;
}

#__nuxt {
  width: 100%;
  padding: 0;
  margin: 0;
}

</style>
