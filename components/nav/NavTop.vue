<template>
  <nav
    :class="{
      'translate-y-[-100%]': navbarHidden,
      'translate-y-0': !navbarHidden,
      'transition-transform duration-300 ease-in-out': true
    }"
    class="w-full flex sticky top-0 px-4 shadow-sm border-b border-color justify-between backdrop-blur-md bg-white dark:bg-black z-40 h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)]"
  >
    <NavMobiSlideover class="lg:hidden flex items-start justify-start" />
    <div class="hidden lg:flex lg:flex-shrink-0 justify-center pr-4">
      <NuxtLink
        to="/"
        class="h-full flex justify-center items-center gap-2"
      >
        <NuxtImg
          src="images/incubrain-logo.svg"
          alt="Incubrain Logo"
          width="32"
          height="42"
          class="dark:invert"
        />
        <h3 class="font-bold leading-normal">INCUBRAIN</h3>
      </NuxtLink>
    </div>
    <ul class="flex h-full w-full items-center">
      <li
        v-for="page in pages"
        :key="page.id"
        class="link-alt cursor-pointer justify-center hidden h-full lg:flex items-center px-4 tracking-normal relative"
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
          class="z-50 h-full"
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
    <div class="flex gap-4 justify-end items-center">
      <DarkToggle v-slot="{ toggle, isDark }">
        <UIcon
          :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          class="w-7 h-7 cursor-pointer"
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
          class="w-7 h-7 text-black dark:text-white"
        />
      </NuxtLink>
      <!-- <UButton
        :to="discord.url"
        target="_blank"
        color="primary"
        @click="$posthog()?.capture('join_community')"
      >
        Community
        <UIcon
          name="i-mdi-chevron-right"
          class="h-4 w-4 hidden lg:inline-block"
        />
      </UButton> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
const { pages, setPage } = usePages()

const { discord } = useSocial()
const route = useRoute()

const navbarHidden = ref(false)

let lastScrollTop = 0
onMounted(() => {
  window.addEventListener(
    'scroll',
    () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbarHidden.value = true
      } else {
        // Scrolling up
        navbarHidden.value = false
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll // For Mobile or negative scrolling
    },
    false
  )
})

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
