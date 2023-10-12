<template>
  <div
    id="stack"
    class="group min-h-[258px] overflow-hidden rounded-lg border flex flex-col justify-around border-color px-8 pb-6 pt-10 "
    role="presentation"
    aria-label="Our Technology Stack"
  >
    <h3 class="text-3xl font-semibold underline decoration-primary-500 dark:decoration-primary-900">Incubrain Stack</h3>
    <div
      v-for="i in 2"
      :key="`stacks-group-${i}`"
      class="-ml-8 mb-2 flex gap-2"
    >
      <div
        v-for="index in 2"
        :key="index"
        :class="[
          'flex min-w-full gap-2',
          i === 1 ? 'animation-stacks-left' : 'animation-stacks-right'
        ]"
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
            :class="stack.invert ? 'dark:invert' : ''"
          />
          <span class="text-sm font-semibold">{{ stack.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stacks: { logo: string; name: string; link: string; invert?: boolean }[] = [
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
    link: 'https://vercel.com/',
    invert: true
  },
  {
    logo: 'images/logos/github.svg',
    name: 'GitHub',
    link: 'https://github.com/',
    invert: true
  },
  {
    logo: 'images/logos/nuxt.svg',
    name: 'Nuxt',
    link: 'https://nuxt.com/'
  },
  {
    logo: 'images/logos/vitejs.svg',
    name: 'Vite',
    link: 'https://vitejs.dev/'
  },
  {
    logo: 'images/logos/typescript.svg',
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    logo: 'images/logos/vueuse.svg',
    name: 'VueUse',
    link: 'https://vueuse.org/'
  },
  {
    logo: 'images/logos/postgresql.svg',
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/'
  }
]

const getStacksForGroup = (groupNumber: number) => {
  const start = (groupNumber - 1) * 4
  const end = start + 4
  return stacks.slice(start, end)
}
</script>

<style scoped>
#stack {
  --gap: 0.5rem;
  --duration: 30s;
  --scroll-start: 0;
  --scroll-end: calc(-100%);
}
.animation-text-left {
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-left var(--duration) linear infinite;
}

.animation-stacks-left {
  --duration: 20s;
  --scroll-end: calc(-100% - var(--gap));
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-left var(--duration) linear infinite;
}

.animation-text-right {
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-right var(--duration) linear infinite;
}

.animation-stacks-right {
  --duration: 20s;
  --scroll-end: calc(-100% - var(--gap));
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-right var(--duration) linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(var(--scroll-end));
  }
  to {
    transform: translateX(var(--scroll-start));
  }
}

@media (prefers-reduced-motion: reduce) {
  .animation-text-left {
    animation-play-state: paused;
  }
  .animation-stacks-left {
    animation-play-state: paused;
  }
  .animation-text-right {
    animation-play-state: paused;
  }
  .animation-stacks-right {
    animation-play-state: paused;
  }
}
</style>
