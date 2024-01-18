<template>
  <div
    v-if="adVisible"
    class="fixed bottom-0 right-0 z-20 lg:sticky lg:top-24 w-full p-4 border border-color lg:rounded-md bg-primary-500 dark:bg-primary-800 flex flex-col gap-4 justify-between"
  >
    <div
      class="absolute lg:hidden -top-3 right-2 cursor-pointer rounded-full p-3 background border border-color flex justify-center items-center"
    >
      <UIcon
        name="i-material-symbols-close-rounded"
        class="absolute"
        @click="adStore.hideAd('blog')"
      />
    </div>
    <div class="flex justify-start items-center gap-2 flex-shrink-0">
      <div class="p-1 background rounded-full">
        <NuxtImg
          src="images/team/drew-macgibbon.jpg"
          alt="Incubrain Logo"
          width="60"
          height="60"
          class="rounded-full"
        />
      </div>
      <h3 class="text-2xl font-semibold">
        {{ title }}
      </h3>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <p class="text-base"> {{ description }} </p>
      <UButton
        :to="personalLinkedin.url"
        color="white"
        variant="solid"
        block
        class="font-semibold"
        target="_blank"
        @click="$posthog()?.capture('ad_hire_me')"
      >
        Hire Me For $30 USD PH
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { personalLinkedin } = useSocial()
const adStore = useAdStore()
const { adsVisibility } = storeToRefs(adStore)
adStore.initializeAds(['blog'])

const { width } = useWindowSize()
const adVisible = computed(() => adsVisibility.value.blog || width.value > 1024)

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
