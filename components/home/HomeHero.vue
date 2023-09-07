<template>
  <div
    class="flex min-h-screen bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 dark:from-emerald-800 dark:via-emerald-950 dark:to-slate-950 p-4 lg:p-8"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto max-w-[var(--max-width-lg)]"
    >
      <div class="justify-center space-y-6 lg:space-y-8 lg:pr-20">
        <UBadge
          size="md"
          color="emerald"
          variant="solid"
        >
          <a
            href="https://nuxt.com/"
            target="_blank"
          >
            Incubrain ❤️'s Nuxt
          </a>
        </UBadge>
        <h1 class="text-5xl font-bold leading-normal">Bringing your SaaS ideas to life</h1>
        <p class="text-xl leading-relaxed">
          Merging decades of startup experience with cutting-edge Nuxt 3 technology, we turn ideas
          into powerful SaaS solutions. As active contributors to Nuxt open source, we're committed
          to fostering growth within the community and beyond.
        </p>
        <UButton to="/services"> Explore Our Services </UButton>
      </div>
      <div class="flex justify-end items-end mr-0 w-full">
        <NuxtImg
          src="images/incubrain-hero.png"
          alt="Incubrain"
          width="600"
          height="600"
        />
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-8 w-full justify-between lg:col-span-2"
      >
        <TransitionBounce
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="rounded-md foreground shadow-md p-4 gap-4 flex-grow">
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </TransitionBounce>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('Ignite Your Ideas with Incubrain')
const description = ref(
  "Merging decades of startup experience with cutting-edge Nuxt 3 technology, we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source, we're committed to fostering growth within the community and beyond."
)

const features = [
  {
    id: 1,
    title: 'Nuxt 3',
    description:
      'We are the first Nuxt 3 adopters and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-nuxt'
  },
  {
    id: 2,
    title: 'SaaS',
    description:
      'We have decades of experience building SaaS products and can help you build yours.',
    icon: 'i-mdi-cloud'
  },
  {
    id: 3,
    title: 'Open Source',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  },
  {
    id: 4,
    title: 'Community',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-account-group'
  },
  {
    id: 5,
    title: 'Consulting',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-account-tie'
  },
  {
    id: 6,
    title: 'Training',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-school'
  }
]

useHead({ title: title.value, meta: [{ name: description.value }] })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
