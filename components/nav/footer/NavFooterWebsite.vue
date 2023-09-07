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
            <NuxtLink :to="link.slug">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8 flex justify-center space-x-4 container-lg">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon
          :name="social.icon"
          aria-hidden="true"
        />
      </a>
    </div>
    <NavFooterBottomBar />
  </footer>
</template>

<script setup>
import socials from '@/data/socials.json'

const p = usePages()
const { footerLinks: routes } = storeToRefs(p)
</script>
