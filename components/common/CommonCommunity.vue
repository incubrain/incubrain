<template>
  <section>
    <div>
      <CommonTitle :title="title">
        <slot />
      </CommonTitle>
      <div
        class="space-y-6 pt-10 sm:grid sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4 lg:gap-8 sm:space-y-0"
      >
        <div class="group relative h-full lg:row-span-2 flex flex-col gap-4 lg:gap-8">
          <div class="rounded-lg background border border-color p-8 hidden md:block">
            <h3
              class="text-3xl font-semibold underline decoration-primary-500 dark:decoration-primary-900"
            >
              Exclusive Access
            </h3>
            <p class="text-base pt-2">
              Join our
              <NuxtLink
                :to="discord.url"
                class="font-semibold text-primary-500 dark:text-primary-700"
                @click="$posthog()?.capture('join_community')"
              >
                Discord
              </NuxtLink>
              and start networking and learning together with other Nuxt developers.
            </p>
          </div>
          <CommonStack class="flex-grow" />
        </div>
        <CommonCardBgImage
          v-for="(card, index) in commonCards"
          :key="index"
          :img="card.img"
          :content="card.content"
          :parent="card.parent"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TitleT } from '~/types/content'
const { discord } = useSocial()

defineProps({
  title: {
    type: Object as PropType<TitleT>,
    required: true
  }
})

const commonCards = [
  {
    content: {
      title: 'Code Review',
      description: 'Weekly code-review sessions'
    },
    parent: 'relative lg:row-span-2',
    img: {
      src: 'images/vectors/terminal.svg',
      height: 380,
      alt: 'Menthor terminal',
      width: 334,
      class: 'block h-full w-full dark:invert rounded-l-lg object-cover object-left-top',
      parentClass: 'h-full min-w-[calc(100%_+_32px)] flex-1 border border-color shadow-lg'
    }
  },
  {
    content: {
      title: 'Global Nuxt Network',
      description: 'Grow with other passionate Nuxters'
    },
    parent: 'hidden relative h-full md:flex flex-col',
    img: {
      src: 'images/vectors/world_map.svg',
      height: 264,
      alt: 'Dotted map of the world',
      width: 810,
      class: 'absolute -top-[8px] left-[62px] h-[264px] w-[810px] dark:invert'
    }
  },
  {
    content: {
      title: 'Website Audits',
      description: 'Weekly expert website/app reviews'
    },
    parent: 'relative h-full flex flex-col justify-center items-center',
    img: {
      src: 'images/home/website-audit.png',
      alt: 'Website Audit image',
      width: 240,
      height: 240,
      class: 'object-cover object-center -mb-28'
    }
  }
]
</script>

<style></style>
