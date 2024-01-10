<template>
  <section id="how_it_works">
    <div class="wrapper space-y-12">
      <div class="w-full flex justify-between items-start">
        <CommonTitle
          v-if="title.main"
          :title="title"
        />

        <NuxtImg
          src="images/home/painting-of-man-programming.jpg"
          alt="Incubrain"
          width="260"
          height="260"
          class="rounded-lg saturate-50"
        />
      </div>

      <div class="flex flex-wrap md:grid md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
        <div
          v-for="item in manyFeat"
          :key="item.title"
          class="relative bounce-on-hover z-0 flex-none w-full overflow-hidden rounded-lg border border-color background bg-highlight p-8"
        >
          <div class="bg-pattern" />
          <div class="relative flex justify-start items-start flex-col z-20">
            <div class="flex justify-center items-center">
              <UIcon
                :name="item.icon"
                class="w-7 h-7"
              />
            </div>
            <h3 class="pt-4 text-lg font-medium">{{ item.title }}</h3>
            <p class="text-base pt-2 font-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: false,
    default: () => ({
      label: null,
      main: null
    })
  }
})

const manyFeat = [
  {
    icon: 'i-mdi-clock-outline',
    title: 'Guaranteed Availability',
    description:
      'Our contracted developers ensure dedicated focus and availability for the duration of your project, aligning with your timelines.'
  },
  {
    icon: 'i-mdi-lightning-bolt-outline',
    title: 'Swift Onboarding & Deployment',
    description:
      'Our developers are ready to hit the ground running, ensuring a quicker start to your project.'
  },
  {
    icon: 'i-mdi-brain',
    title: 'Specialized Skills on Demand',
    description:
      'Access the specific expertise your project requires on demand, thanks to our diverse pool of specialized contractors.'
  },
  {
    icon: 'i-mdi-scale-balance',
    title: 'Flexibility in Scaling',
    description:
      'Adjust your development team size as needed with our flexible contractor model, avoiding long-term employment commitments.'
  },
  {
    icon: 'i-mdi-folder-account-outline',
    title: 'Reduced Administrative Burden',
    description:
      'Hiring contractors reduces administrative tasks related to benefits and taxes, freeing you to focus on strategic goals.'
  },
  {
    icon: 'i-mdi-cash-multiple',
    title: 'Cost-Effectiveness',
    description:
      'Enjoy top-tier development at reduced costs, as our contractors cut down the financial burdens of full-time employees.'
  },
  {
    icon: 'i-mdi-code-tags',
    title: 'Scalable Coding Practices',
    description:
      'Adhering to top industry practices, our code is not just robust but also scalable to meet your evolving business needs.'
  },
  {
    icon: 'i-mdi-speedometer',
    title: 'Optimized for Google',
    description:
      'We commit to a 3-second or faster page load time, surpassing Google PageSpeed standards for a swift digital experience.'
  },
  {
    icon: 'i-mdi-magnify',
    title: 'SEO Enhancement',
    description:
      "Elevate your site's visibility with our SEO-centric development approach, designed to boost your online presence."
  }
]

const oldManyFeat = {
  items: [
    {
      icon: 'i-mdi-eye-outline',
      title: 'Business Planning',
      description:
        'Partner with us to draft a business narrative that highlights your vision to investors and team members.'
    },
    {
      icon: 'i-mdi-lightbulb-outline',
      title: 'Business Coaching',
      description:
        'Monthly mentoring and strategy sessions to ensure your business aligns with your long-term goals.'
    },
    {
      icon: 'i-mdi-chat-outline',
      title: 'Investor Group Chat',
      description:
        'Step into the exclusive circle of Incubrain Investors. Discuss, critique, and enhance your businesses as one.'
    },
    {
      icon: 'i-mdi-hammer-screwdriver',
      title: 'Product Development',
      description:
        'All products have their evolution; our fresh approach will pinpoint the next steps in yours'
    },
    {
      icon: 'i-mdi-code-tags-check',
      title: 'Task Delegation',
      description:
        'Your time is valuable, delegate to our Personal Assistants, freeing up your time to focus on what matters most.'
    },
    {
      icon: 'i-mdi-account-cog-outline',
      title: 'Developer Support',
      description:
        'Nuxt specialists on standby, ready to accelerate your MVP launch and swiftly connect with your users.'
    }
  ]
}
</script>

<style scoped></style>
