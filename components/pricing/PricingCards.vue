<template>
  <div
    class="flex"
    :class="singleCard ? 'flex-row gap-24 justify-between' : 'flex-col gap-8'"
  >
    <CommonTitle
      :title="title"
      class="max-w-xl"
    />
    <div
      :class="
        !singleCard
          ? `md:grid-cols-2 lg:grid-cols-${pricing.items.length + 1 || 1}`
          : 'lg:grid-cols-[minmax(320px,_340px)]]'
      "
      class="grid gap-4 lg:gap-8"
    >
      <UCard
        v-for="item in pricing.items.slice(0, singleCard ? 1 : pricing.items.length)"
        :key="item.title"
        :ui="{
          base: 'flex flex-col h-full',
          background: 'background',
          ring:
            item.id === 1 ? 'ring-1 ring-primary-500 dark:ring-primary-800' : 'ring-1 ring-color',
          body: { base: 'flex flex-grow h-full', padding: 'sm:px-4' },
          footer: { base: 'flex flex-shrink', padding: 'sm:px-4' }
        }"
        class="w-full max-w-lg mx-auto"
      >
        <template #header>
          <div class="flex flex-col gap-3">
            <div class="flex w-full justify-end">
              <UIcon
                :name="item.icon"
                class="w-7 h-7"
              />
            </div>
            <h4 class="font-semibold text-primary-500 uppercase text-sm"> ${{ item.price }}</h4>
            <h2 class="text-xl lg:text-2xl font-semibold"> {{ item.title }}</h2>
            <p class="max-w-xs"> {{ item.description }}</p>
          </div>
        </template>
        <ul class="space-y-2 text-sm font-normal">
          <li
            v-for="benefit in item.benefits"
            :key="benefit"
            class="flex gap-3 items-center"
          >
            <UIcon
              name="i-mdi-check"
              class="flex-shrink-0 text-primary-500"
            />
            {{ benefit }}
          </li>
        </ul>
        <template #footer>
          <UButton
            v-if="!singleCard"
            :to="item.cta.link"
            variant="outline"
            block
            @click="
              $posthog()?.capture(item.cta.event, {
                source: 'pricing_card'
              })
            "
          >
            {{ item.cta.title }}
          </UButton>
          <slot />
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

const pricing = {
  items: [
    {
      id: 1,
      title: 'Business Incubation',
      description:
        'Get 50 hours per week from our team of experts to propel your business forwards!',
      icon: 'i-material-symbols-rocket-launch-rounded',
      price: '2,500 Per Month (Limited to 5)',
      cta: {
        title: 'More Information',
        link: '/incubation',
        event: 'view_incubation'
      },
      benefits: [
        'Align With Your Vision',
        'Business Coaching/Planning',
        'MVP Planning/Development',
        'Product R&D',
        'SEO Strategy',
        'Exclusive Founder Group',
        'Become an Incubrain Investor (T&Cs)'
      ]
    },
    {
      id: 2,
      title: 'Hire Us',
      description: 'Have a project that needs a team of experts? We can help!',
      icon: 'i-material-symbols-settings-outline',
      price: '80 Per Hour',
      cta: {
        title: 'Enquire Now',
        link: '/contact-hire-us',
        event: 'view_contact_hire_us'
      },
      benefits: [
        'Nuxt Best Practices',
        'Nuxt Module Creation',
        'PWA & Ionic Apps',
        'SEO Audit & Implementation',
        'Business Consulting',
        'Talent Acquisition',
        'Content Creation'
      ]
    }
  ]
}

defineProps({
  singleCard: {
    type: Boolean,
    default: false
  },
  title: {
    type: Object as PropType<Title>,
    required: true
  }
})
</script>

<style scoped></style>
