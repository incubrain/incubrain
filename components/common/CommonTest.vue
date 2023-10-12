<template>
  <section class="my-20 md:my-32">
    <div>
      <CommonTitle :title="title" />
      <div
        class="space-y-6 pt-10 sm:grid sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4 lg:gap-8 sm:space-y-0"
      >
        <div class="group relative h-full lg:row-span-2 flex flex-col gap-4 lg:gap-8">
          <div class="rounded-lg border border-color p-8">
            <h3 class="text-3xl font-semibold underline decoration-primary-500 dark:decoration-primary-900">Behind The Scenes</h3>
            <p class="text-base">
              some information about our company
              <strong class="font-semibold text-primary-500">Incubrain</strong>
            </p>
          </div>
          <CommonStack class="flex-grow" />
        </div>
        <CommonCardBgImage
          v-for="(card, index) in commonCards"
          :key="index"
          :img="card.img"
          :title="card.title"
          :parent="card.parent"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Title } from '~/types/content'

defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true
  }
})

const commonCards = [
  {
    title: 'Code Review',
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
    title: 'Global Founder Network',
    parent: 'relative h-full flex flex-col',
    img: {
      src: 'images/vectors/world_map.svg',
      height: 264,
      alt: 'Menthor mapa mundial',
      width: 810,
      class: 'absolute -top-[8px] left-[62px] h-[264px] w-[810px] dark:invert'
    }
  },
  {
    title: 'Website Audits',
    parent:
      'relative h-full flex flex-col justify-center items-center',
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
