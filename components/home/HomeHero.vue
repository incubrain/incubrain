<template>
  <div class="flex flex-col overflow-hidden relative background">
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
        <h1
          class="text-5xl lg:text-6xl font-bold leading-tight underline decoration-primary-500 dark:decoration-primary-800"
        >
          {{ title.main }}
        </h1>
        <h3 class="text-lg lg:text-xl font-semibold">
          {{ title.description }}
        </h3>
        <UButton
          color="primary"
          variant="outline"
          size="xl"
          to="#"
          @click="
            handleBtnClick('contact_hire_developers', $posthog)
          "
        >
          Enquire Today
        </UButton>
      </div>
      <div
        class="overflow-hidden relative flex justify-center items-center mx-auto object-center object-cover"
      >
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = {
  main: 'On-Demand Nuxt 3 Developers',
  description:
    'Highly skilled, affordable, and vetted Nuxt 3 contractors available on an as-needed basis.'
}

const { openCalendlyPopup } = useCalendly()

const handleBtnClick = (event: string, posthog: any) => {
  posthog()?.capture(event, {
    source: 'hero_cta'
  })
  openCalendlyPopup()
}

useHead({ title: title.main, meta: [{ name: title.description }] })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
