<template>
  <div>
    <NavTop />
    <AppBody :mobi-bottom-nav="false">
      <AppLoader
        v-if="parentRoute[1] !== 'get-lost'"
        :duration="2000"
        :throttle="1000"
      />
      <div class="container-lg">
        <slot />
      </div>
      <UNotifications />
    </AppBody>
  </div>
</template>

<script setup lang="ts">
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
