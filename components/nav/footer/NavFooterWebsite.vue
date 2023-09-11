<template>
  <footer class="foreground">
    <div
      v-if="routes"
      class="grid grid-cols-3 gap-8 p-4 xl:p-8 mx-auto max-w-[var(--max-width-lg)]"
    >
      <div
        v-for="link in routes"
        :key="link.label"
        class="col-span-1 mx-auto w-full p-4 xl:p-4 rounded-md lg:background"
      >
        <h4 class="font-semibold mb-2 text-sm lg:text-base">{{ link.label }}</h4>
        <ul class="space-y-1 text-sm">
          <li
            v-for="link in link.children"
            :key="link.slug"
          >
            <NuxtLink
              :to="link.slug"
              class="flex items-center"
            >
              <UIcon
                v-if="link.slug.includes('http')"
                :name="link.icon"
                class="flex-shrink-0 h-5 w-5 mr-2 hidden lg:block"
              />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NavFooterBottomBar />
  </footer>
</template>

<script setup>
const p = usePages()
const { footerLinks: routes } = storeToRefs(p)
</script>
