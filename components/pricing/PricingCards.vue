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
          base: 'flex flex-col h-full overflow-hidden',
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
          <div
            v-if="!singleCard"
            class="w-full"
          >
            <UButton
              v-if="item.cta.disabled"
              disabled
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
            <UButton
              v-else
              variant="outline"
              block
              @click="pricingBtnClick(item.cta.event, $posthog)"
            >
              {{ item.cta.title }}
            </UButton>
          </div>
          <slot />
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'

defineProps({
  singleCard: {
    type: Boolean,
    default: false
  },
  title: {
    type: Object as PropType<TitleT>,
    required: true
  }
})

const { openCalendlyPopup } = useCalendly()

const pricingBtnClick = (event: string, posthog: any) => {
  posthog()?.capture(event, {
    source: 'pricing_card'
  })
  openCalendlyPopup()
}

const pricing = {
  items: [
    {
      id: 1,
      title: 'Managed Developers',
      description: "Need one or more Nuxt experts? We've got you covered.",
      icon: 'i-material-symbols-code-rounded',
      price: '30 Per Hour Each',
      cta: {
        disabled: false,
        title: 'Enquire Now',
        event: 'contact_hire_developers'
      },
      benefits: [
        'Only Nuxt Experts',
        '20 or 40 Hours Per Week',
        'Code Review Before You See It',
        'Individual Developer, Team Environment'
      ]
    },
    {
      id: 2,
      title: 'Nuxt Incubation',
      description: 'Collaborate with our team to propel your business forwards!',
      icon: 'i-material-symbols-rocket-launch-rounded',
      price: '5,000 Per Month (Limited to 2)',
      cta: {
        disabled: true,
        title: 'Coming Soon',
        event: 'view_incubation'
      },
      benefits: [
        'Align With Your Vision',
        'Business Coaching/Planning',
        'MVP Planning/Development',
        'Product R&D',
        'SEO Strategy',
        'Developer Support',
        'T&C Apply'
      ]
    }
  ]
}
</script>

<style scoped></style>
