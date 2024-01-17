<template>
  <div>
    <CommonHero
      :img="{
        title: 'Incubrain Logo on about page',
        src: 'images/incubrain-logo.svg',
        alt: 'Incubrain Logo on about page',
        width: 140,
        height: 140
      }"
      :title="heroTitle"
      invert
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonCTA2 :title="singleFeat.title" />
      <CommonTimeline
        :title="benefits.title"
        :items="benefits.items"
      />
      <CommonCTA2 :title="cta.title" />
      <BlogDisplay
        post-type="business"
        :title="postTitle"
      >
        <UButton
          to="/blog/all"
          variant="outline"
        >
          View all
        </UButton>
      </BlogDisplay>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroTitle = {
  label: 'About',
  main: 'The Incubrain Vision',
  subtitle: 'Follow our journey from idea to flourishing company'
}

const cta = {
  title: {
    label: 'Profit Sharing',
    main: "We Share Incubrain's Profits With Our Team"
  },
  image: 'images/hero.jpg'
}

const singleFeat = {
  title: {
    label: 'culture is everything',
    main: 'A Culture Of Innovation And Collaboration',
    subtitle:
      ' At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity, continuous learning, and teamwork.'
  },

  image: 'images/hero.jpg'
}

const benefits = {
  title: {
    label: 'Incubrain Roadmap',
    main: "We've Got Grand Plans For The Future!",
    subtitle:
      'We ❤️ Business and Nuxt, our ultimate vision is to create something similar to Y Combinator specifically for Nuxt projects. To get there we first have to prove ourselves and create an invaluable service for our customers.'
  },
  items: [
    {
      icon: 'i-mdi-security',
      title: 'Vision Security (Current Phase)',
      description:
        'Achieving self-sufficiency with two foundational clients as our bedrock. Emphasizing on high-quality content creation that resonates, enhancing user experience on our website, laying the groundwork for a dedicated community of enthusiasts, and intensifying outreach and strategic marketing efforts to increase visibility.'
    },
    {
      icon: 'i-mdi-ear-hearing',
      title: 'Active Listening',
      description:
        "As we scale to serve ten clients, our ear is firmly to the ground. We're dedicated to understanding their unique challenges, outpacing expectations by delivering solutions tailored to their needs, diversifying our tech offerings based on feedback, and onboarding essential team players who align with our mission to drive unmatched value."
    },
    {
      icon: 'i-material-symbols-foundation',
      title: 'Building Foundations',
      description:
        "With the objective of crafting a robust, cohesive product suite and fostering a team spirit that mirrors our core values, we're investing in foundational pillars. Emphasis on process streamlining ensures efficiency, top-tier automation tools boost productivity, and comprehensive documentation ensures clarity. Soon, we'll be unveiling a tailored Nuxt Module Suite, responsive to customer demands."
    },
    {
      icon: 'i-mdi-trending-up',
      title: 'Strategic Expansion',
      description:
        "Plans are underway to energize the Nuxt community through engaging conferences and creative hackathons, promoting collaboration and innovation. We're branching into education, launching expert-curated online masterclasses for enthusiasts worldwide. Furthermore, our ambitious one-year flagship incubation initiative is poised to foster budding talent and innovation, supported by our ever-growing expert team."
    },
    {
      icon: 'i-material-symbols-gesture',
      title: 'Philanthropic Ventures',
      description:
        "Beyond business, we're diving deep into incubating and investing in visionary startups that echo our vision for a sustainable tech future. Our calendar will soon be dotted with flagship events, hackathons, and more, all aimed at empowering the community and propelling the Nuxt/Open-Source movement to unparalleled heights."
    }
  ]
}

const postTitle = {
  label: 'Documenting Our Success',
  main: 'Systems Build Successful Businesses!',
  subtitle: 'Ours are open-source on our blog, we encourage you to read them and suggest improvements.'
}

definePageMeta({
  name: 'About'
})
</script>
