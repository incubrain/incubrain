<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-start justify-start overflow-hidden"
  >
    <CommonTitle :title="title" />
    <div class="gap-3 flex flex-col w-full items-start">
      <div class="relative w-full flex justify-center items-center">
        <div
          class="flex w-[600px] gap-4 lg:pt-12 px-6 lg:w-full h-full background bg-highlight relative rounded-md border border-color overflow-hidden justify-around items-end lg:items-start shadow-sm"
        >
          <div class="bg-pattern z-0" />
          <div class="flex py-8 flex-col gap-2 relative z-10">
            <h4 class="text-2xl font-bold pb-4">Let's Connect!</h4>
            <NuxtLink
              v-for="link in ceoLinks"
              :key="link.label"
              class="flex gap-4 items-center"
              :to="link.url"
              @click="
                $posthog()?.capture(link.event.name, {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon
                :name="link.icon"
                class="w-7 h-7"
              />
              {{ link.label }}
            </NuxtLink>
          </div>
          <NuxtImg
            src="images/drew-macgibbon-full.png"
            alt="Drew MacGibbon Ceo/Founder of Incubrain"
            height="439"
            width="228"
            class="relative grayscale-[60%] w-1/3 lg:w-auto"
          />
        </div>
      </div>
      <div>
        <h4 class="font-semibold">Drew MacGibbon</h4>
        <p>Incubrain CEO/Founder</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'

const { ceoLinks } = useSocial()

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  }
})
</script>

<style scoped></style>
