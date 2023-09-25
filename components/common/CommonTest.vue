<template>
  <section
    id="why_us"
    class="my-20 md:my-32"
  >
    <div>
      <CommonTitle
        label="label test"
        subtitle="subtitle test"
        title="some title?"
        description="some description about what we do."
      />
      <div
        class="space-y-6 pt-10 sm:grid sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] sm:gap-6 sm:space-y-0"
      >
        <div class="group relative h-full overflow-hidden lg:row-span-2 text-3xl font-semibold">
          <CommonSlider />
          <CommonStack />
        </div>
        <div
          class="group mb-6 h-full lg:row-span-2 overflow-hidden rounded-lg border border-color px-8 pb-4 pt-10 text-3xl font-semibold block"
        >
          <div class="relative h-full flex flex-col">
            <h3 class="mb-9 w-full">Code Review</h3>
            <div class="h-full min-w-[calc(100%_+_32px)] flex-1 border border-color shadow-lg">
              <NuxtImg
                loading="lazy"
                src="images/vectors/terminal.svg"
                alt="Menthor terminal"
                height="380"
                width="334"
                class="block h-full w-full dark:invert rounded-l-lg object-cover object-left-top"
              />
            </div>
          </div>
        </div>
        <div class="col-span-1 h-full md:col-span-2 lg:col-span-1 lg:row-span-2 group space-y-6">
          <div
            class="relative mb-6 min-h-[258px] overflow-hidden rounded-lg border border-solid border-color px-8 pb-6 pt-10 text-3xl font-semibold"
          >
            <NuxtImg
              loading="lazy"
              src="images/vectors/world_map.svg"
              height="264"
              alt="Menthor mapa mundial"
              width="810"
              class="absolute -top-[8px] left-[62px] h-[264px] w-[810px]"
            />
            <h3 class="relative mb-6"> Global Founder Network </h3>
          </div>
          <div
            class="relative min-h-[200px] flex-grow overflow-hidden rounded-lg border border-solid border-color py-6 px-8 text-3xl font-semibold flex items-end text-right"
          >
            <div class="absolute top-0 left-0 w-full h-[99px]">
              <NuxtImg
                loading="lazy"
                src="images/vectors/courses.svg"
                alt="Lista de cursos da plataforma menthor.io"
                width="354"
                height="99"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <h3 class="block text-3xl font-semibold"> What should I have here? </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
#why_us {
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
