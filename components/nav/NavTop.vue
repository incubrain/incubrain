<template>
  <nav
    class="w-full flex sticky top-0 left-0 px-4 justify-between mx-auto bg-gray-800 shadow z-[10] h-[var(--nav-height-sm)] md:h-[var(--nav-height-md)] lg:h-[var(--nav-height-lg)]"
  >
    <NavMobiSlideover class="lg:hidden pl-3 md:pl-4 flex items-center" />
    <div class="hidden lg:block w-6" />
    <ul class="flex h-full items-center">
      <li
        v-for="page in pages.slice(1, 3)"
        :key="page.id"
        class="link cursor-pointer hidden h-full lg:flex items-center text-sm text-white mr-10 tracking-normal relative"
        :class="
          route.fullPath.includes(page.slug)
            ? ' link-active'
            : 'items-center text-sm text-white mr-10 tracking-normal relative min-w-[50px]'
        "
        @click="navigateTo(page.slug)"
      >
        {{ page.title }}
      </li>
      <li class="mx-0 lg:mr-12 cursor-pointer h-12">
        <NuxtLink
          to="/"
          class="h-full flex justify-center items-center"
        >
          <NuxtImg
            src="incubrain-logo.png"
            alt="Drew MacGibbon Development (DM Development)"
            height="46"
            width="46"
          />
        </NuxtLink>
      </li>
      <li
        v-for="page in pages.slice(3, 6)"
        :key="page.id"
        :class="
          route.fullPath.includes(page.slug)
            ? 'cursor-pointer h-full lg:flex items-center text-sm link-active tracking-normal mr-10 hidden'
            : 'link cursor-pointer h-full lg:flex hidden items-center text-sm text-white mr-10 tracking-normal relative'
        "
        @click="navigateTo(page.slug)"
      >
        {{ page.title }}
      </li>
    </ul>
    <NuxtLink
      href="https://github.com/Drew-Macgibbon"
      target="_blank"
      class="flex justify-center items-center"
    >
      <UIcon
        name="i-mdi-github"
        class="w-6 h-6 text-white"
      />
    </NuxtLink>
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
    setPage(path.value)
  }
})
</script>
