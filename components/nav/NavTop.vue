<template>
  <nav
    class="w-full grid grid-cols-[160px_1fr_0.5fr] sticky top-0 shadow-sm px-4 border-b border-color justify-between backdrop-blur-md background z-40 h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)]"
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
    <ul class="flex h-full items-center w-full pl-4">
      <li
        v-for="page in pages"
        :key="page.id"
        class="link-alt cursor-pointer justify-center hidden h-full lg:flex items-center text-sm px-4 tracking-normal relative"
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
          class="z-50 h-full text-sm"
          mode="hover"
          :popper="{
            placement: 'bottom-start'
          }"
          :ui="{
            padding: 'p-2'
          }"
        >
          <NuxtLink
            :to="page.slug"
            class="h-full flex justify-center items-center relative"
          >
            {{ page.label }}
            <UIcon
              name="i-mdi-chevron-down"
              class="h-4 w-4"
            />
          </NuxtLink>
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
      <DarkToggle v-slot="{ toggle, isDark }">
        <UIcon
          :name="isDark.value ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          class="w-6 h-6 cursor-pointer"
          @click="toggle"
        />
      </DarkToggle>
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
