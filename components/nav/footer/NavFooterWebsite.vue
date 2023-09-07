<template>
  <footer class="foreground">
    <div
      v-if="routes"
      class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 xl:p-8 mx-auto max-w-[var(--max-width-lg)]"
    >
      <div
        v-for="item in routes"
        :key="item.label"
        class="col-span-1 mx-auto"
      >
        <NuxtLink :to="item.slug">
          <h4 class="font-semibold mb-4">{{ item.label }}</h4>
        </NuxtLink>
        <ul class="space-y-2">
          <li
            v-for="link in item.children"
            :key="link.slug"
          >
            <NuxtLink :to="link.slug">
              <UIcon
                v-if="link.slug.includes('http')"
                :name="link.icon"
                aria-hidden="true"
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
