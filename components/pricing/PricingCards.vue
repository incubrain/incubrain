<template>
  <div class="flex flex-col space-y-6 lg:space-y-12">
    <CommonTitle
      :title="title"
      class="max-w-xl"
      :alignment="singleCard ? 'center mx-auto' : 'left'"
    />
    <div
      :class="!singleCard ? `lg:grid-cols-${pricing.items.length + 1 || 1}` : 'lg:grid-cols-1'"
      class="grid grid-cols-1 gap-4 lg:gap-8"
    >
      <UCard
        v-for="item in pricing.items.slice(0, singleCard ? 1 : pricing.items.length)"
        :key="item.id"
        :ui="{
          background: 'background',
          ring: item.id === 1 ? 'ring-1 ring-primary-500' : 'ring-1 ring-color',
          footer: {
            base: 'flex justify-center items-center'
          }
        }"
        class="w-full max-w-xl mx-auto"
      >
        <template #header>
          <div class="flex flex-col gap-3">
            <div class="flex w-full justify-end">
              <UIcon
                :name="item.icon"
                class="w-5 h-5"
              />
            </div>
            <h4 class="font-semibold text-primary-500 uppercase text-sm"> ${{ item.price }}</h4>
            <h2 class="text-xl lg:text-2xl font-semibold"> {{ item.title }}</h2>
            <p> {{ item.description }}</p>
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
        </template>
        <slot />
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
      description: "We're only taking on 5 new businesses per year, don't miss your opportunity!",
      icon: 'i-material-symbols-rocket-launch-rounded',
      price: '2,000 Per Month',
      cta: {
        title: 'More Information',
        link: '/incubation',
        event: 'view_incubation'
      },
      benefits: [
        'Business Planning',
        'Business Coaching',
        'Product R&D',
        'SEO Strategy',
        'Exclusive Founder Group',
        'Full-time Developer',
        'Incubrain Investor'
      ]
    },
    {
      id: 2,
      title: 'Hire Us',
      description: 'Have a project that needs a team of experts? We can help!',
      icon: 'i-material-symbols-task-rounded',
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
