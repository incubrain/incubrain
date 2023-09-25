<template>
  <nav
    class="w-full grid grid-cols-[160px_1fr_0.5fr] sticky top-0 shadow-sm px-4 border-b border-color justify-between backdrop-blur-md bg-white/70 dark:bg-black/60 z-[10] h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)]"
  >
    <NavMobiSlideover class="lg:hidden flex items-start justify-start" />
    <div class="hidden lg:flex justify-center border-r border-color pr-4">
      <NuxtLink
        to="/"
        class="h-full flex justify-center items-center gap-2"
      >
        <NuxtImg
          src="images/incubrain-logo.png"
          alt="Drew MacGibbon Development (DM Development)"
          height="26"
          width="26"
        />
        <h3 class="text-xl font-bold">INCUBRAIN</h3>
      </NuxtLink>
    </div>
    <ul class="flex h-full items-center w-full">
      <li
        v-for="page in pages"
        :key="page.id"
        class="link-alt cursor-pointer justify-center hidden h-full lg:flex text-sm pr-4 w-[80px] tracking-normal relative"
        :class="route.fullPath.includes(page.slug) ? ' link-active' : ''"
      >
        <NuxtLink
          v-if="!page.children?.length"
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
            :to="page.slug"
            class="h-full"
          >
            {{ page.label }}
            <UIcon
              name="i-mdi-chevron-down"
              class="h-4 w-4"
            />
          </UButton>
          <template #item="{ item }">
            <NuxtLink
              :to="item.slug"
              class="w-full flex justify-between items-center"
            >
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
    <div class="flex gap-3 justify-end items-center">
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
      <UButton
        to="/services/business-starter"
        color="primary"
      >
        Get Started
        <UIcon
          name="i-mdi-chevron-right"
          class="h-4 w-4"
        />
      </UButton>
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
