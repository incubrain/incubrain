<template>
  <div class="flex py-8 flex-col overflow-hidden relative dark:bg-black">
    <div class="wrapper px-4">
      <div
        class="flex flex-col gap-10 justify-center items-center text-center max-w-2xl mx-auto py-12"
      >
        <!-- <UBadge
          color="primary"
          variant="outline"
          size="lg"
        >
          <NuxtLink
            to="https://nuxt.com/"
            target="_blank"
          >
            Incubrain ❤️'s Nuxt
          </NuxtLink>
        </UBadge> -->
        <h1 class="text-4xl lg:text-5xl font-bold leading-tight underline decoration-primary-500 dark:decoration-primary-800">
          {{ title.main }}
        </h1>
        <h3 class="text-lg lg:text-xl font-semibold">
          {{ title.description }}
        </h3>
        <UButton
          color="primary"
          variant="outline"
          size="xl"
          to="/incubation"
          @click="
            $posthog()?.capture('interest_shown_incubation', {
              source: 'home_hero'
            })
          "
        >
          Find Out More
        </UButton>
      </div>
      <div class="overflow-hidden relative flex justify-center items-center mx-auto object-center object-cover">
        <div
          class="h-full w-full absolute bg-gradient-radial z-10 top-0 left-0 from-transparent via-white/50 dark:via-black/50 via-70% dark:to-black to-90% to-white"
        />
        <NuxtImg
          src="images/hero-image.png"
          alt="Incubrain"
          width="900"
          height="512"
          class="relative min-w-[200%] md:min-w-full grayscale invert dark:invert-0"
        />
        <!-- <UButton
          color="primary"
          size="xl"
          to="/incubation"
          class="absolute top-6 z-10"
          @click="
            $posthog()?.capture('interest_shown_incubation', {
              source: 'home_hero'
            })
          "
        >
          Find Out More
        </UButton> -->
      </div>
    </div>
    <div class="flex gap-8 w-full infinite-scroll z-20 mx-auto -mt-8">
      <div
        v-for="(feature, i) in allFeatures"
        :key="`feature-${i}`"
        class="bounce-on-hover"
      >
        <div
          class="relative h-full overflow-hidden border border-color rounded-md shadow-lg background px-4 py-6 gap-4 flex-grow w-[280px]"
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
</template>

<script setup lang="ts">
const title = {
  main: 'Your Business From Idea To Profitable',
  description: 'Essential growth services for early-stage businesses'
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
    icon: 'i-material-symbols-code'
  },
  {
    id: 3,
    title: 'Passion for Business',
    description: '10+ years obsessing about businesses, we create companies/teams that last.',
    icon: 'i-mdi-chart-line'
  },
  {
    id: 4,
    title: 'Customers = Investors',
    description:
      'Remain an Incubation customer for 3 years to vest your spending as shares in Incubrain.',
    icon: 'i-mdi-bank'
  },
  {
    id: 5,
    title: 'Employees Share Profits',
    description:
      'We believe in a collaborative success model, where profits are shared with all employees.',
    icon: 'i-mdi-handshake'
  },
  {
    id: 6,
    title: 'Founder Community',
    description: 'We have a vibrant community of Nuxt innovators and creators growing together.',
    icon: 'i-mdi-account-group'
  },
  {
    id: 7,
    title: 'Lifelong Learners',
    description:
      'We are always levelling up our skills and knowledge, and documenting it on our blog.',
    icon: 'i-mdi-book-open-outline'
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
