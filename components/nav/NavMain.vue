<template>
  <nav class="w-full h-[60px] flex justify-centermx-auto bg-gray-800 shadow relative z-[1000] m-0">
    <div class="container px-6 flex items-center justify-between mx-auto">
      <div class="flex items-center w-[68.72px] lg:w-[40px] h-full bg-red">
        <NuxtLink to="/get-lost" class="text-white font-semibold">
          404
        </NuxtLink>
      </div>
      <ul class="flex h-full items-center">
        <li
          v-for="page in pages.slice(1,3)"
          :key="page.id"
          :class="route.fullPath.includes(page.slug)
            ? 'cursor-pointer h-full lg:flex  text-sm text-yellow-300 tracking-normal items-center hidden mr-10 min-w-[50px]'
            : 'hover:text-yellow-300 cursor-pointer h-full lg:flex hidden items-center text-sm text-white mr-10 tracking-normal relative min-w-[50px]'
          "
          @click="navigateTo(page.slug)"
        >
          {{ page.title }}
        </li>
        <li class="mx-0 lg:mr-12 cursor-pointer h-12">
          <NuxtLink to="/">
            <img src="/logo.png" alt="Drew MacGibbon Development (DM Development)" class="h-full">
          </NuxtLink>
        </li>
        <li
          v-for="page in pages.slice(3,6)"
          :key="page.id"
          :class="route.fullPath.includes(page.slug)
            ? 'cursor-pointer h-full lg:flex items-center text-sm text-yellow-300 tracking-normal mr-10 hidden'
            : 'hover:text-yellow-300 cursor-pointer h-full lg:flex hidden items-center text-sm text-white mr-10 tracking-normal relative'"
          @click="navigateTo(page.slug)"
        >
          {{ page.title }}
        </li>
      </ul>
      <div aria-haspopup="true" class="cursor-pointer h-full lg:flex items-center justify-end hidden relative">
        <div class="rounded">
          <img class="rounded h-10 w-10 object-cover" src="/avatar.png" alt="logo">
        </div>
      </div>
      <div
        class="lg:hidden flex items-center flex-end"
      >
        <NavMobi />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

const { pages, setPage } = usePages()
const route = useRoute()

const path = computed(() => {
  if (route.params.id) {
    // still display tabs when viewing a single post
    return route.fullPath.replace(`/${route.params.id}`, '')
  }
  return route.fullPath
})

const pageChange = computed(() => route.path.split('/')[1])

watchEffect(() => {
  if (pageChange.value) {
    console.log('pageSet', pageChange, route)
    setPage(path.value)
  }
})

</script>
