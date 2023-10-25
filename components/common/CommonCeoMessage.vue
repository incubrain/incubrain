<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
    <CommonTitle :title="title" />
    <div class="gap-3 flex flex-col w-full items-start">
      <div class="relative w-full flex justify-center items-center">
        <div
          class="flex w-[600px] gap-4 pt-12 px-6 lg:w-full h-full relative rounded-md border-4 border-primary-600 dark:border-primary-900 overflow-hidden justify-around items-start shadow-md"
        >
          <div class="bg-pattern z-0" />
          <div class="flex flex-col gap-4 text-base relative font-semibold bg-white/80">
            <h4 class="text-xl font-bold">Reach out!</h4>
            <NuxtLink
              class="flex gap-1 items-center"
              :to="discord.url"
              @click="
                $posthog()?.capture('join_community', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon name="i-mdi-discord" />
              Nuxt Founder Group
            </NuxtLink>
            <NuxtLink
              class="flex gap-1 items-center"
              :to="personalLinkedin.url"
              @click="
                $posthog()?.capture('view_linkedin', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon name="i-mdi-linkedin" />
              Personal Linkedin
            </NuxtLink>
            <NuxtLink
              class="flex gap-1 items-center"
              :to="personalGithub.url"
              @click="
                $posthog()?.capture('view_github', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon name="i-mdi-github" />
              Personal Github
            </NuxtLink>
            <NuxtLink
              class="flex gap-1 items-center"
              to="mailto:mac@incubrain.org"
              @click="
                $posthog()?.capture('send_email', {
                  source: 'ceo_message'
                })
              "
            >
              <UIcon name="i-mdi-email" />
              Email
            </NuxtLink>
          </div>
          <NuxtImg
            src="images/team/drew-macgibbon.png"
            alt="Drew MacGibbon Ceo/Founder of Incubrain"
            height="439"
            width="228"
            class="relative grayscale-[60%]"
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
