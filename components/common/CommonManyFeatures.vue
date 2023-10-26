<template>
  <section id="how_it_works">
    <div class="wrapper space-y-12">
      <CommonTitle :title="manyFeat.title" />

      <div
        class="flex flex-wrap gap-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:gap-6"
      >
        <div
          v-for="item in manyFeat.items"
          :key="item.title"
          class="relative bounce-on-hover flex-none w-full overflow-hidden rounded-lg border border-color px-8 pb-8 pt-12"
        >
          <div
            class="bg-pattern pointer-events-none absolute -right-[836px] top-0 h-[651px] w-[1314px]"
          />
          <div class="relative">
            <div
              class="flex h-[32px] w-[32px] background shadow-lg items-center justify-center rounded-full border border-color"
            >
              <UIcon
                :name="item.icon"
                width="30px"
                height="30px"
              />
            </div>
            <h3 class="pt-2 text-lg font-medium">{{ item.title }}</h3>
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
    label: "We're in this together",
    main: 'Incubrain Customers = Incubrain Investors',
    subtitle:
      'We value our early customers! After 3 years of being an Incubrain customer, your spending is vested as shares in Incubrain.'
  },
  items: [
    {
      icon: 'i-mdi-eye-outline',
      title: 'Business Planning',
      description:
        "We'll help create a comprehensive business plan, validating your idea to potential investors / employees."
    },
    {
      icon: 'i-mdi-lightbulb-outline',
      title: 'Business Coaching',
      description:
        'Monthly coaching / strategizing sessions to keep your business inline with your long-term vision.'
    },
    {
      icon: 'i-mdi-chat-outline',
      title: 'Founder Group Chat',
      description:
        'Join an exclusive Incubrain Investor group chat. Share ideas, get feedback, and level up your businesses together.'
    },
    {
      icon: 'i-mdi-hammer-screwdriver',
      title: 'Product Development',
      description:
        'No product is perfect, our fresh perspective will help uncover valuable areas for improvement.'
    },
    {
      icon: 'i-mdi-code-tags-check',
      title: 'Monthly Code Review',
      description:
        'A clean and maintainable codebase will save your thousands of devhours as your projects scales.'
    },
    {
      icon: 'i-mdi-account-cog-outline',
      title: 'Dedicated Developer Support',
      description:
        'Access 40 hours a week of our diversely skilled developer talent pool. The right developer for the problem.'
    }
  ]
}
</script>

<style scoped></style>
