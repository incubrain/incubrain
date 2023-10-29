<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-start justify-start">
    <CommonTitle :title="title" />
    <div class="gap-3 flex flex-col w-full items-start">
      <div class="relative w-full flex justify-center items-center">
        <div
          class="flex w-[600px] gap-4 pt-12 px-6 lg:w-full h-full background bg-highlight relative rounded-md border border-color overflow-hidden justify-around items-start shadow-sm"
        >
          <div class="bg-pattern z-0" />
          <div
            class="flex flex-col gap-2 text-sm font-semibold relative"
          >
            <h4 class="text-xl font-bold pb-2">Let's Connect!</h4>
            <NuxtLink
              class="flex gap-2 items-center"
              :to="discord.url"
              @click="
                $posthog()?.capture('join_community', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon
                name="i-mdi-discord"
                class="w-4 h-4"
              />
              Nuxt Founder Group
            </NuxtLink>
            <NuxtLink
              class="flex gap-2 items-center"
              :to="personalLinkedin.url"
              @click="
                $posthog()?.capture('view_linkedin', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon
                name="i-mdi-linkedin"
                class="w-4 h-4"
              />
              Personal Linkedin
            </NuxtLink>
            <NuxtLink
              class="flex gap-2 items-center"
              :to="personalGithub.url"
              @click="
                $posthog()?.capture('view_github', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon
                name="i-mdi-github"
                class="w-4 h-4"
              />
              Personal Github
            </NuxtLink>
            <NuxtLink
              class="flex gap-2 items-center"
              to="mailto:mac@incubrain.org"
              @click="
                $posthog()?.capture('send_email', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon
                name="i-mdi-email"
                class="w-4 h-4"
              />
              Email
            </NuxtLink>
          </div>
          <NuxtImg
            src="images/team/drew-macgibbon.png"
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
import { Title } from '~/types/content'

const { discord, personalGithub, personalLinkedin } = useSocial()

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  }
})
</script>

<style scoped></style>
