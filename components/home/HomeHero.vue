<template>
  <div
    class="flex py-8 flex-col min-h-screen overflow-hidden relative bg-gradient-to-br justify-between from-emerald-400 via-emerald-600 to-emerald-800 dark:from-emerald-800 dark:via-emerald-950 dark:to-slate-950"
  >
    <div
      class="grid relative z-20 grid-cols-1 lg:grid-cols-2 justify-center h-full items-center mx-auto padded-x py-8 wrapper-hero overflow-hidden"
    >
      <div
        class="flex flex-col justify-center text-center items-center lg:text-left lg:items-start lg:justify-start max-w-md lg:max-w-none space-y-6 lg:space-y-8 lg:pr-20"
      >
        <NuxtLink
          to="https://nuxt.com/"
          target="_blank"
          class="px-2 flex justify-center items-center py-1 text-sm font-semibold rounded-md border border-black/20 bg-black/5 dark:bg-white/10 dark:border-white/30"
        >
          Incubrain ❤️'s Nuxt
        </NuxtLink>
        <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
          {{ title.main }}
        </h1>
        <h4 class="text-lg lg:text-xl leading-relaxed font-semibold">
          {{ title.description }}
        </h4>
      </div>
      <div
        class="hidden lg:flex w-full h-full background rounded-md overflow-hidden justify-center relative items-center shadow-lg"
      >
        <div class="bg-pattern absolute z-0 top-0 left-0 w-full h-full" />
        <NuxtImg
          src="images/incubrain-hero.png"
          alt="Incubrain"
          width="450"
          height="450"
          class="relative"
        />
      </div>
    </div>
    <div class="infinite-scroll lg:col-span-2 pt-12">
      <div class="flex gap-8 w-full">
        <div
          v-for="(feature, i) in allFeatures"
          :key="`feature-${i}`"
          class="bounce-on-hover"
        >
          <div
            class="relative h-full overflow-hidden rounded-md shadow-lg background px-4 py-6 gap-4 flex-grow w-[280px]"
          >
            <div class="bg-pattern" />
            <div class="relative">
              <div
                class="flex h-[32px] w-[32px] background shadow-lg items-center justify-center rounded-full border border-color"
              >
                <UIcon
                  :name="feature.icon"
                  width="30"
                  height="30"
                />
              </div>
              <h3 class="text-xl font-semibold py-2">{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = {
  main: 'Ignite Your Ideas with Incubrain',
  description: 'We turn your ideas into sustainable online-businesses.'
}

const features = [
  {
    id: 1,
    title: 'Exclusively Nuxt',
    description:
      'We love Nuxt and want to give back to the community by pushing the ecosystem forward.',
    icon: 'i-mdi-nuxt'
  },
  {
    id: 2,
    title: 'Open-source Company',
    description: 'Incubrain is an open-source company, we aspire to be more tansparent every day.',
    icon: 'i-mdi-cloud'
  },
  {
    id: 3,
    title: 'Passion for Business',
    description: '10+ years obsessing about businesses, we create companies/teams that last.',
    icon: 'i-mdi-github'
  },
  {
    id: 4,
    title: 'Customers = Investors',
    description:
      'Remain an Incubation customer for 3 years to vest your spending as shares in Incubrain.',
    icon: 'i-mdi-github'
  },
  {
    id: 5,
    title: 'Employees Share Profits',
    description:
      'We believe in a collaborative success model, where profits are shared with all employees.',
    icon: 'i-mdi-github'
  },
  {
    id: 6,
    title: 'Founder Community',
    description: 'We have a vibrant community of Nuxt innovators and creators growing together.',
    icon: 'i-mdi-github'
  },
  {
    id: 7,
    title: 'Lifelong Learners',
    description:
      'We are always levelling up our skills and knowledge, documenting our findings on our blog.',
    icon: 'i-mdi-github'
  }
]

const allFeatures = [...features, ...features]

useHead({ title: title.main, meta: [{ name: title.description }] })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

@keyframes scrollRightToLeft {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-2184px);
  }
}

.infinite-scroll {
  width: 4368px;
  animation: scrollRightToLeft 60s linear infinite;
}

.infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
