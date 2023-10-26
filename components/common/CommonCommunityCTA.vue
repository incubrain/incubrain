<template>
  <div
    class="p-8 text-center padded-y gap-8 flex flex-col justify-center items-center relative overflow-hidden dark:bg-black"
  >
    <div
      class="h-full w-full absolute bg-gradient-radial z-10 top-0 left-0 from-transparent via-60% via-white/50 dark:via-black/60 dark:to-black to-white"
    />
    <div class="bg-pattern" />
    <div class="relative z-20 flex flex-col gap-8 justify-center py-12 lg:py-20 items-center">
      <div
        class="rounded-full p-4 border-2 border-color background shadow-lg w-[100px] lg:w-[160px]"
      >
        <NuxtImg
          src="images/incubrain-logo.svg"
          alt="Incubrain Logo on contact page"
          class="dark:invert"
          width="140"
          height="140"
        />
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          v-for="i in 12"
          :key="i"
          :class="`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-color overflow-hidden absolute`"
          :style="getPosition(i, 7)"
        >
          <NuxtImg
            :src="`https://xsgames.co/randomusers/avatar.php?g=${i % 2 === 0 ? 'male' : 'female'}`"
            class="object-cover grayscale"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col relative z-20 justify-center items-center gap-4 lg:gap-8">
      <h1
        class="text-3xl lg:text-4xl relative z-10 px-3 underline decoration-primary-500 dark:decoration-primary-700 font-bold max-w-sm lg:max-w-md"
      >
        International Community of Nuxt Developers
      </h1>
      <h4 class="text-lg font-semibold max-w-sm">
        We review community members websites/code every week!
      </h4>
      <UButton
        :to="discord.url"
        target="_blank"
        variant="outline"
        @click="
          $posthog()?.capture('join_community', {
            source: 'community_cta'
          })
        "
      >
        Join now, it's FREE
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { discord } = useSocial()
const { width } = useWindowSize()

const getPosition = (index: number, total: number) => {
  // Adjust starting and ending angles for semi-circle distribution
  let radius = 150
  if (width.value < 1024) {
    radius = 100
  }
  const startAngle = 0 // Starting at 0 degrees
  const endAngle = Math.PI // Ending at 180 degrees

  const angleStep = (endAngle - startAngle) / (total - 2)
  const angle = startAngle + angleStep * index

  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  return {
    top: `calc(50% - ${y}px)`,
    left: `calc(50% + ${x}px)`,
    transform: 'translate(-50%, -50%)'
  }
}
</script>

<style scoped></style>
