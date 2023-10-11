<template>
  <footer class="foreground flex flex-col justify-center items-center">
    <div class="wrapper padded-x py-4 lg:py-8 flex justify-between rounded-md w-full items-center">
      <div
        class="flex justify-between rounded-md w-full items-start md:items-center gap-8 p-4 xl:p-8 mx-auto background"
      >
        <div class="flex flex-shrink-0 justify-center md:pr-4">
          <NuxtLink
            to="/"
            class="h-full flex justify-center flex-col lg:flex-row items-center gap-2 font-semibold text-sm"
          >
            <NuxtImg
              src="images/incubrain-logo.svg"
              alt="Drew MacGibbon Development (DM Development)"
              width="36"
              height="42"
              class="dark:invert"
            />
            INCUBRAIN
          </NuxtLink>
        </div>
        <ul class="flex flex-col md:flex-row gap-2 items-center text-sm">
          <li
            v-for="link in footerPages"
            :key="link.label"
            class="md:border-r border-color last:border-none last:pr-0 pb-2 md:pr-2 md:pb-0"
          >
            <NuxtLink
              :to="link.slug"
              class="flex items-center"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex flex-col md:flex-row gap-2">
          <NuxtLink
            v-for="social in socials.children"
            :key="social.label"
            :to="social.slug"
            target="_blank"
            class="flex items-center"
          >
            <UIcon
              :name="social.icon"
              class="flex-shrink-0 h-5 w-5 dark:text-white"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <NavFooterBottomBar class="w-full" />
  </footer>
</template>

<script setup>
const p = usePages()
const { socials, footerPages } = storeToRefs(p)
</script>
