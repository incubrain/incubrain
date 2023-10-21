<template>
  <div
    v-if="adVisible || width > 1024"
    class="fixed bottom-0 right-0 z-20 lg:sticky lg:top-24 w-full p-4 border border-color lg:rounded-md bg-primary-500 dark:bg-primary-800 flex gap-4 justify-between items-center"
  >
    <div
      class="absolute lg:hidden -top-3 right-2 cursor-pointer rounded-full p-3 background border border-color flex justify-center items-center"
    >
      <UIcon
        name="i-material-symbols-close-rounded"
        class="absolute"
        @click="adVisible = !adVisible"
      />
    </div>
    <div class="flex flex-col justify-center items-center gap-2 flex-shrink-0">
      <div class="px-2 py-4 background rounded-md">
        <NuxtImg
          src="images/logos/nuxt.svg"
          alt="Incubrain Logo"
          width="56"
          height="70"
        />
      </div>
      <p class="text-sm font-semibold uppercase">Nuxt 💯</p>
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-2xl font-semibold">
        {{ title }}
      </h3>
      <p class="text-base">
        {{ description }}.
        <NuxtLink
          :to="discord.url"
          class="underline font-semibold"
          @click="$posthog()?.capture('join_community')"
        >
          It's FREE, join now!
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { discord } = useSocial()
const postStore = usePostsStore()
const { adVisible } = storeToRefs(postStore)
const { width } = useWindowSize()

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
