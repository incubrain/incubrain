<template>
  <section id="how_it_works">
    <div class="wrapper space-y-12">
      <CommonTitle
        v-if="title.main"
        :title="title"
      />

      <div
        class="flex flex-wrap md:grid md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8"
      >
        <div
          v-for="item in manyFeat.items"
          :key="item.title"
          class="relative bounce-on-hover z-0 flex-none w-full overflow-hidden rounded-lg border border-color background bg-highlight p-8"
        >
          <div class="bg-pattern" />
          <div class="relative flex justify-start items-start flex-col z-20">
            <div
              class="flex justify-center items-center"
            >
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
const manyFeat = {
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
