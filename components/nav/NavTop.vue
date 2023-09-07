<template>
  <nav
    class="w-full grid grid-cols-[160px_1fr_160px] fixed top-0 shadow-sm px-4 justify-between backdrop-blur-md bg-white/70 dark:bg-black/60 z-[10] h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)]"
  >
    <NavMobiSlideover class="lg:hidden flex items-start justify-start" />
    <div class="hidden lg:flex justify-start">
      <NuxtLink
        to="/"
        class="h-full flex justify-center items-center gap-2"
      >
        <NuxtImg
          src="incubrain-logo.png"
          alt="Drew MacGibbon Development (DM Development)"
          height="26"
          width="26"
        />
        <h3 class="text-xl font-bold">INCUBRAIN</h3>
      </NuxtLink>
    </div>
    <ul class="flex h-full w-full pl-10 items-center justify-center">
      <li
        v-for="page in pages"
        :key="page.id"
        class="link-alt cursor-pointer hidden h-full lg:flex items-center text-sm px-6 tracking-normal relative"
        :class="
          route.fullPath.includes(page.slug)
            ? ' link-active'
            : 'items-center text-sm tracking-normal relative min-w-[50px]'
        "
      >
        <NuxtLink
          v-if="!page.children"
          :to="page.slug"
          class="h-full flex justify-center items-center"
        >
          {{ page.label }}
        </NuxtLink>
        <UDropdown
          v-else
          :items="Array(page.children!) || [[{}]]"
          mode="hover"
          :popper="{ placement: 'bottom-start' }"
          class="z-50 h-full text-sm"
        >
          <UButton
            color="white"
            variant="link"
            :label="page.label"
            :to="page.slug"
            class="h-full"
          />
          <template #item="{ item }">
            <NuxtLink :to="item.slug" class="w-full flex justify-between">
              {{ item.label }}
              <UIcon
                :name="item.icon"
                class="flex-shrink-0 h-4 w-4 ms-auto"
              />
            </NuxtLink>
          </template>
        </UDropdown>
      </li>
    </ul>
    <div class="flex gap-2 justify-end items-center">
      <AppThemeToggle />
      <NuxtLink
        href="https://github.com/Drew-Macgibbon"
        target="_blank"
        class="flex justify-center items-center"
      >
        <UIcon
          name="i-mdi-github"
          class="w-6 h-6 text-black dark:text-white"
        />
      </NuxtLink>
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
    setPage(path.value)
  }
})
</script>
