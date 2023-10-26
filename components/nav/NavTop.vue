<template>
  <nav
    class="w-full flex sticky top-0 shadow-sm border-b border-color justify-between backdrop-blur-md background z-40 h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)]"
  >
    <NavMobiSlideover class="lg:hidden flex items-start justify-start px-2" />
    <div class="hidden lg:flex lg:flex-shrink-0 justify-center px-4">
      <NuxtLink
        to="/"
        class="h-full flex justify-center items-center gap-1"
      >
        <NuxtImg
          src="images/incubrain-logo.svg"
          alt="Incubrain Logo"
          width="32"
          height="42"
          class="dark:invert"
        />
        <h3 class="text-sm font-bold leading-normal">INCUBRAIN</h3>
      </NuxtLink>
    </div>
    <ul class="flex h-full w-full items-center">
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
    <div class="flex gap-3 justify-end items-center px-4">
      <DarkToggle v-slot="{ toggle, isDark }">
        <UIcon
          :name="isDark.value ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          class="w-6 h-6 cursor-pointer"
          @click="toggle"
        />
      </DarkToggle>
      <NuxtLink
        href="https://github.com/incubrain"
        target="_blank"
        class="flex justify-center items-center"
        @click="$posthog()?.capture('view_github')"
      >
        <UIcon
          name="i-mdi-github"
          class="w-6 h-6 text-black dark:text-white"
        />
      </NuxtLink>
      <UButton
        :to="discord.url"
        target="_blank"
        color="primary"
        class="lg:before:content-['Join']"
        @click="$posthog()?.capture('join_community')"
      >
        Community
        <UIcon
          name="i-mdi-chevron-right"
          class="h-4 w-4 hidden lg:inline-block"
        />
      </UButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { pages, setPage } = usePages()

const { discord } = useSocial()
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
