<template>
  <div
    class="flex py-8 flex-col overflow-hidden space-y-12 bg-gradient-to-br justify-between from-emerald-400 via-emerald-600 to-emerald-800 dark:from-emerald-800 dark:via-emerald-950 dark:to-slate-950"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center h-full items-center mx-auto padded-x p-8 wrapper-hero overflow-hidden"
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
        <h1 class="text-4xl lg:text-5xl font-bold leading-tight"
          >Bringing your SaaS ideas to life</h1
        >
        <p class="text-lg lg:text-xl leading-relaxed">
          Merging decades of startup experience with cutting-edge Nuxt 3 technology, we turn ideas
          into powerful SaaS solutions.
        </p>
        <UButton
          to="/contact"
          variant="outline"
          color="white"
        >
          Find Out more
        </UButton>
      </div>
      <div class="hidden lg:flex justify-end items-end mr-0 w-full">
        <div
          class="flex w-full h-full background rounded-[90%_40%] overflow-hidden justify-center relative items-center shadow-lg"
        >
          <div class="bg-pattern absolute z-0 top-0 left-0 w-full h-full" />
          <NuxtImg
            src="images/incubrain-hero.png"
            alt="Incubrain"
            width="500"
            height="500"
            class="relative"
          />
        </div>
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
            class="relative h-full overflow-hidden pt-12 rounded-md shadow-lg background px-4 pb-4 gap-4 flex-grow"
          >
            <div
              class="bg-pattern pointer-events-none absolute -right-[836px] -top-[448px] h-[651px] w-[1314px]"
            />
            <div class="relative">
              <h3 class="text-xl font-semibold pb-2">{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
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
    title: 'Third',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  },
  {
    id: 4,
    title: 'Fourth',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  },
  {
    id: 5,
    title: 'Fifth',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  },
  {
    id: 6,
    title: 'Sixth',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  },
  {
    id: 7,
    title: 'Seventh',
    description:
      'We are committed to open source and are actively contributing to the Nuxt 3 ecosystem.',
    icon: 'i-mdi-github'
  }
]

const allFeatures = [...features, ...features]

useHead({ title: title.value, meta: [{ name: description.value }] })
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
    transform: translateX(-2072px);
  }
}

.infinite-scroll {
  width: 4144px;
  animation: scrollRightToLeft 80s linear infinite;
}

.infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
