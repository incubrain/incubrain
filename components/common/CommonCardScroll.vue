<template>
  <div class="overflow-hidden p-8">
    <div class="flex gap-8 w-full infinite-scroll z-20 mx-auto">
      <div
        v-for="(feature, i) in allFeatures"
        :key="`feature-${i}`"
        class="bounce-on-hover background"
      >
        <div
          class="relative h-full overflow-hidden border border-color rounded-md shadow-sm px-4 py-6 gap-4 flex-grow w-[280px] bg-highlight"
        >
          <div class="bg-pattern" />
          <div class="relative">
            <div>
              <UIcon
                :name="feature.icon"
                class="w-7 h-7"
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
    description: 'We know what a good business plan looks like, and can helf refine yours.',
    icon: 'i-mdi-chart-line'
  },
  {
    id: 4,
    title: 'Systems Build Businesses',
    description: 'To foster an open dialogue, we document our business systems on our blog.',
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
    title: 'Developer Community',
    description: 'We are building a vibrant community of Nuxt developers, come grow together.',
    icon: 'i-mdi-account-group'
  },
  {
    id: 7,
    title: 'Lifelong Learners',
    description:
      "Everyone at Incubrain is always levelling up their skills and knowledge, it's a core-value.",
    icon: 'i-mdi-book-open-outline'
  }
]

const allFeatures = [...features, ...features]
</script>

<style scoped>
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
