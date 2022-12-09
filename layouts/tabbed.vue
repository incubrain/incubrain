<template>
  <div>
    <NavMain />
    <AppTabs>
      <AppLoader :duration="3000" :throttle="1000" v-if="parentRoute[1] !== 'get-lost'"/>
      <slot />
    </AppTabs>
  </div>
</template>

<script setup>

const route = useRoute()
const parentRoute = computed(() => route.path.split('/'))


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
