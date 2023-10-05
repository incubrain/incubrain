<template>
  <div
    class="grid grid-cols-2 gap-4 my-4"
    v-if="navigation"
  >
    <NuxtLink
      :to="navigation[0]._path"
      class="flex border border-color items-center justify-start gap-2 lg:rounded-md cursor-pointer p-4"
    >
      <h3 class="text-sm lg:text-xl font-semibold flex justify-center items-center gap-2">
        <div class="p-5 foreground rounded-full relative items-center justify-center flex">
          <UIcon
            name="i-mdi-chevron-left"
            class="h-5 w-5 lg:h-7 lg:w-7 inline-block shrink-0 absolute"
          />
        </div>
        {{ navigation[0] }}
      </h3>
    </NuxtLink>
    <NuxtLink
      :to="navigation[1]._path"
      class="flex border border-color justify-end items-center gap-2 lg:rounded-md cursor-pointer p-4"
    >
      <h3 class="text-sm lg:text-xl font-semibold flex justify-between items-center gap-2">
        {{ navigation[1] }}
        <div class="p-5 foreground rounded-full relative items-center justify-center flex">
          <UIcon
            name="i-mdi-chevron-right"
            class="h-5 w-5 lg:h-7 lg:w-7 inline-block shrink-0 absolute"
          />
        </div>
      </h3>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent()
    .where({ _partial: { $ne: true } })
    .only(['_path', 'title'])
    .sort({ date: 1 })
    .findSurround(route.path)
)

console.log('Nav', navigation.value)
</script>

<style scoped></style>
