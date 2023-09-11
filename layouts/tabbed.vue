<template>
  <div>
    <NavTop />
    <AppBody :mobi-bottom-nav="false">
      <BlogShowcasePage v-if="parentRoute[1]" />
      <div class="container-lg p-4 xl:p-8 lg:py-20">
        <slot />
      </div>
      <UNotifications />
      <NavFooterWebsite />
    </AppBody>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const parentRoute = computed(() => route.path?.split('/'))
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
