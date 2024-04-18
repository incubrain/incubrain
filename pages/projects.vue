<template>
  <div>
    <BaseHero
      :title="{
        main: 'Projects',
        subtitle: 'Some of my recent projects'
      }"
      :img="{ src: '/images/projects.jpg', alt: 'Projects' }"
    />
    <div class="wrapper">
      <BaseGrid>
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </BaseGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'AstronEra',
    description: 'Astronomy Hub for India',
    challenges: 'Industrial Scraping, AI Summaries, SEO',
    stack: ['Vue', 'Nuxt', 'Tailwind', 'Vercel'],
    modules: ['@nuxt/content', '@nuxt/studio'],
    image: 'astronera.png',
    link: 'https://astronera.org',
    date: '2021-08-01'
  },
  {
    title: 'Blog Starter',
    description: 'Git Based Nuxt 3 Blog Template',
    challenges: 'SSR Optimization, SEO, @nuxt/ui',
    modules: ['@nuxt/content', '@nuxt/ui'],
    stack: ['Vue', 'Nuxt', 'Tailwind', 'Vercel', 'SSR', 'SEO'],
    image: 'astronera.png',
    link: 'https://astronera.org',
    date: '2021-08-01'
  }
]
</script>

<style scoped></style>
