<template>
  <footer class="foreground flex flex-col justify-center items-center relative overflow-hidden">
    <div
      class="relative wrapper padded-x py-4 lg:py-8 flex justify-between rounded-md w-full items-center"
    >
      <div
        class="grid grid-cols-3 grid-rows-1 rounded-md w-full h-auto gap-4 lg:gap-8 p-4 xl:p-8 mx-auto border border-color background"
      >
        <div
          class="flex flex-shrink-0 row-start-1 col-start-2 lg:col-start-1 justify-center lg:justify-start items-center md:pr-4 h-full"
        >
          <NuxtLink
            to="/"
            class="flex justify-center flex-col lg:flex-row items-center gap-2 font-semibold h-[100px]"
          >
            <NuxtImg
              src="incubrain-logo.svg"
              alt="Drew MacGibbon Development (DM Development)"
              width="48"
              height="54"
              class="dark:invert"
            />
            INCUBRAIN
          </NuxtLink>
        </div>
        <ul
          class="flex flex-col row-start-1 col-start-1 lg:col-start-2 lg:flex-row gap-2 items-start lg:items-center"
        >
          <li
            v-for="link in footerPages"
            :key="link.label"
            class="lg:border-r border-color last:border-none last:pr-0 pb-2 md:pr-2 md:pb-0"
          >
            <NuxtLink
              :to="link.slug"
              class="flex items-center"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div
          class="flex flex-col items-end lg:justify-end lg:items-center row-start-1 col-start-3 lg:flex-row gap-3"
        >
          <NuxtLink
            v-for="social in socials.children"
            :key="social.label"
            :to="social.slug"
            target="_blank"
            class="flex items-center"
          >
            <UIcon
              :name="social.icon"
              class="flex-shrink-0 h-7 w-7 dark:text-white"
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
