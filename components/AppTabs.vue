<template>
  <div class="w-full flex min-h-[100vh] bg-white px-4 mx-auto">
    <div class="relative w-full">
      <div
        class="w-full container mx-auto bg-gray-200 shadow rounded-b h-full relative z-100"
      >
        <div class="w-full h-full p-2 lg:p-6 xl:p-8">
          <ul
            class="container overflow-x-scroll scrollbar-hide mx-auto px-4 sm:px-0 flex items-center transition-all duration-300 ease-in-out"
            :class="
              !noTabs.includes(routeName)
                ? 'block'
                : 'hidden'
            "
          >
            <NuxtLink
              v-for="tab in tabs"
              :key="tab.id"
              class="py-5 px-12 h-full text-sm rounded-t-md whitespace-nowrap transition-all duration-1000 ease-in-out relative bg-transparent cursor-pointer"
              :class="
                path === tab.slug
                  ? 'text-black font-bold bg-white'
                  : 'text-gray-500 font-medium bg-transparent'
              "
              :to="tab.slug"
            >
              {{ tab.title }}
            </NuxtLink>
          </ul>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const noTabs = ['Home']

const route = useRoute()
const routeName = computed(() => route.name || 'Home')
const { tabs } = usePages()

const path = computed(() => {
  if (route.params.id) {
    // still display tabs when viewing a single post
    return route.fullPath.replace(`/${route.params.id}`, '')
  }
  return route.fullPath
})

</script>

<style></style>
