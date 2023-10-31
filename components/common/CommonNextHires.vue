<template>
  <section id="how_it_works">
    <div class="wrapper space-y-12">
      <CommonTitle :title="manyFeat.title" />

      <div
        class="flex flex-wrap gap-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:gap-6"
      >
        <div
          v-for="item in manyFeat.hires"
          :key="item.title"
          class="relative bounce-on-hover z-0 flex-none w-full overflow-hidden rounded-lg border border-color background bg-highlight p-8"
        >
          <div class="bg-pattern" />
          <div class="relative z-20 flex justify-start items-start flex-col">
            <div
              class="flex items-center justify-center"
            >
              <UIcon
                :name="item.icon"
                class="w-7 h-7"
              />
            </div>
            <h3 class="pt-4 text-lg font-medium">{{ item.number }} {{ item.title }}</h3>
            <p class="text-base pt-2 font-normal text-balance">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const manyFeat = {
  title: {
    label: 'TEAM EXPANSION INSIGHT',
    main: 'Incremental Expert Additions For Peak Performance',
    subtitle:
      'The support from our initial clients facilitates these hires. Roles might adjust to client-specific needs.'
  },
  hires: [
    {
      icon: 'i-mdi-code-braces',
      title: 'Nuxt Experts',
      number: 3,
      description:
        'Skilled specialists to optimize your Nuxt.js applications, ensuring peak performance and a seamless user experience.'
    },
    {
      icon: 'i-mdi-palette-outline',
      title: 'UI/UX Designer',
      number: 1,
      description:
        'Crafting intuitive and visually appealing designs to enhance user interaction, ensuring your platform is both functional and aesthetic.'
    },
    {
      icon: 'i-mdi-cursor-pointer',
      title: 'UI/UX Developer',
      number: 1,
      description:
        'Bringing designs to life with responsive layouts and interactive elements, ensuring a consistent and immersive user experience across all devices.'
    },
    {
      icon: 'i-mdi-search-web',
      title: 'SEO Expert',
      number: 1,
      description:
        'Optimizing your platform for search engines, boosting visibility, driving organic traffic, and ensuring you stand out in the digital space.'
    },
    {
      icon: 'i-mdi-database',
      title: 'Supabase / PostgreSQL Expert',
      number: 1,
      description:
        'Managing and optimizing your databases, ensuring swift data retrieval, secure storage, and efficient scalability for your platform.'
    },
    {
      icon: 'i-mdi-film-outline',
      title: 'Personal Assistants',
      number: 2,
      description:
        'Armed with productivity tools such as ChatGPT, our personal assistants can help with a range of tasks, keeping you focused on growing your business.'
    }
  ]
}
</script>

<style scoped></style>
