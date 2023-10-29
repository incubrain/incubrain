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
          class="relative bounce-on-hover z-0 flex-none w-full overflow-hidden rounded-lg border border-color background bg-highlight px-8 pb-8 pt-12"
        >
          <div class="bg-pattern" />
          <div class="relative z-20">
            <div
              class="flex h-[32px] w-[32px] background shadow-lg items-center justify-center rounded-full border border-color"
            >
              <UIcon
                :name="item.icon"
                width="30px"
                height="30px"
              />
            </div>
            <h3 class="pt-2 text-lg font-medium">{{ item.number }} {{ item.title }}</h3>
            <p class="text-base pt-2 font-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const manyFeat = {
  title: {
    label: 'OUR Next 10 hires',
    main: 'Improved Services At No Additional Cost',
    subtitle: 'sdf'
  },
  hires: [
    {
      icon: 'i-mdi-eye-outline',
      title: 'Nuxt Experts',
      number: 3,
      description: ''
    },
    {
      icon: 'i-mdi-lightbulb-outline',
      title: 'UI/UX Designer',
      number: 1,
      description:
        ''
    },
    {
      icon: 'i-mdi-chat-outline',
      title: 'UI/UX Developer',
      number: 1,
      description:
        ''
    },
    {
      icon: 'i-mdi-hammer-screwdriver',
      title: 'SEO Expert',
      number: 1,
      description:
        ''
    },
    {
      icon: 'i-mdi-code-tags-check',
      title: 'Supabase / PostgreSQL Expert',
      number: 1,
      description:
        ''
    },
    {
      icon: 'i-mdi-account-cog-outline',
      title: 'Video Editor',
      number: 1,
      description:
        ''
    },
    {
      icon: 'i-mdi-account-cog-outline',
      title: 'Personal Assistants',
      number: 2,
      description:
        'For completing research, creating content, or any other tasks that are taking up your valuable time.'
    }
  ]
}
</script>

<style scoped></style>
