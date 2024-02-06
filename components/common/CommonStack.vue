<template>
  <div
    id="stack"
    class="group min-h-[258px] background overflow-hidden rounded-lg border flex flex-col justify-between border-color px-8 pb-6 pt-10"
    role="presentation"
    aria-label="Our Technology Stack"
  >
    <div class="space-y-2 pb-6">
      <h3
        class="text-3xl font-semibold underline decoration-primary-500 dark:decoration-primary-900"
      >
        Incubrain Stack
      </h3>
      <p>Our stack reduces friction; helping us move quickly, with confidence!</p>
    </div>
    <div>
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
            :alt="stack.name"
            :to="stack.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-[40px] items-center foreground gap-2 rounded-full border border-color px-4 py-2 hover:border-primary-500"
          >
            <UIcon
              :name="stack.logo"
              class="h-4 w-4"
              :class="stack.invert ? 'dark:invert' : ''"
            />
            <span class="text-sm font-semibold">{{ stack.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stacks: { logo: string; name: string; link: string; invert?: boolean }[] = [
  {
    logo: 'i-logos-vue',
    name: 'Vue',
    link: 'https://vuejs.org/'
  },
  {
    logo: 'i-logos-tailwindcss-icon',
    name: 'Tailwind',
    link: 'https://tailwindcss.com/'
  },
  {
    logo: 'i-logos-supabase-icon',
    name: 'Supabase',
    link: 'https://supabase.com/'
  },
  {
    logo: 'i-logos-vercel-icon',
    name: 'Vercel',
    link: 'https://vercel.com/',
    invert: true
  },
  {
    logo: 'i-logos-github-icon',
    name: 'GitHub',
    link: 'https://github.com/',
    invert: true
  },
  {
    logo: 'i-logos-nuxt-icon',
    name: 'Nuxt',
    link: 'https://nuxt.com/'
  },
  {
    logo: 'i-logos-vitejs',
    name: 'Vite',
    link: 'https://vitejs.dev/'
  },
  {
    logo: 'i-logos-typescript',
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    logo: 'i-logos-vueuse',
    name: 'VueUse',
    link: 'https://vueuse.org/'
  },
  {
    logo: 'i-logos-postgresql',
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
