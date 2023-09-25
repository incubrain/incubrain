<template>
  <div
    class="group min-h-[258px] overflow-hidden rounded-lg border border-color px-8 pb-6 pt-10 text-3xl font-semibold"
    role="presentation"
    aria-label="Our Technology Stack"
  >
    <h3 class="mb-6">Simple Stack</h3>

    <div
      v-for="i in 2"
      :key="`stacks-group-${i}`"
      class="-ml-8 mb-2 flex gap-2"
    >
      <div
        :class="[
          'flex min-w-full gap-2',
          i === 1 ? 'animation-stacks-left' : 'animation-stacks-right'
        ]"
        v-for="index in 2"
        :key="index"
      >
        <NuxtLink
          v-for="stack in getStacksForGroup(i)"
          :key="stack.link"
          :to="stack.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-[40px] items-center foreground gap-2 rounded-full border border-color px-4 py-2 hover:border-primary-500"
        >
          <NuxtImg
            :src="stack.logo"
            class="h-[16px] w-auto"
            width="26"
            height="16"
            :alt="stack.name"
          />
          <span class="text-sm font-semibold">{{ stack.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stacks: { logo: string; name: string; link: string }[] = [
  {
    logo: 'images/logos/vue.svg',
    name: 'Vue',
    link: 'https://vuejs.org/'
  },
  {
    logo: 'images/logos/tailwind.svg',
    name: 'Tailwind',
    link: 'https://tailwindcss.com/'
  },
  {
    logo: 'images/logos/supabase.svg',
    name: 'Supabase',
    link: 'https://supabase.com/'
  },
  {
    logo: 'images/logos/vercel.svg',
    name: 'Vercel',
    link: 'https://vercel.com/'
  },
  {
    logo: 'images/logos/github.svg',
    name: 'GitHub',
    link: 'https://github.com/'
  },
  {
    logo: 'images/logos/playwright.svg',
    name: 'Playwright',
    link: 'https://playwright.dev/'
  },
  {
    logo: 'images/logos/nuxt.svg',
    name: 'Nuxt',
    link: 'https://nuxt.com/'
  },
  {
    logo: 'images/logos/turborepo.svg',
    name: 'Turborepo',
    link: 'https://turbo.build/repo'
  }
]

const getStacksForGroup = (groupNumber: number) => {
  const start = (groupNumber - 1) * 4
  const end = start + 4
  return stacks.slice(start, end)
}
</script>

<style scoped></style>
