<template>
  <div>
    <HomeHero />
    <CommonCardScroll />

    <div class="spaced-y wrapper padded-x padded-y">
      <CommonManyFeatures />
      <CommonCommunity :title="content.joinCommunity.title" />
    </div>
    <CommonCommunityCTA />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonCeoMessage :title="content.ceoMessage.title" />
      <PricingCards :title="pricingTitle" />
      <BlogDisplay
        :title="content.recentPosts.title"
        post-type="business"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          {{ content.recentPosts.cta }}
        </UButton>
      </BlogDisplay>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'Home'
})

const pricingTitle = {
  label: 'Our Services',
  main: 'Essential Life-Support for Online Businesses',
  subtitle: 'We challenge you to find better value for money than our Incubation program!'
}

// useHead({
//   title: 'My App',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', children: 'console.log("test3");' } ]
// })

const content = {
  mainFeat: {
    title: {
      label: 'The Incubrain Promise',
      main: 'Unmatched Value for Early-Stage Businesses',
      subtitle: 'We provide essential growth services for online businesses at an unbeatable rate.'
    },
    cta: 'Find Out More'
  },
  joinCommunity: {
    title: {
      label: 'Engage & Evolve',
      main: 'Become a Part of Our Growing Community',
      subtitle:
        'Dive into a dynamic community of entrepreneurs and tech enthusiasts; share, learn, and evolve as you leverage our pool of resources and knowledge.'
    }
  },
  mainCTA: {
    title: {
      label: 'Join the Conversation',
      main: 'Experience the Incubrain Advantage'
    },
    cta: 'Join Our FREE Discord Group'
  },
  ceoMessage: {
    title: {
      label: 'Our Guarantee',
      main: 'We Treat Your Business as Our Own',
      subtitle:
        "Without your support Incubrain ceases to exist, within your success lies ours; so we'll do everything in our power to get you there!"
    }
  },
  recentPosts: {
    title: {
      label: 'Insights & Innovations',
      main: 'Stay Updated with Incubrain',
      subtitle:
        'From the latest in tech innovations to invaluable business strategies, our posts aim to keep you ahead of the curve and informed in this fast-evolving domain.'
    },
    cta: 'View All'
  },
  pricing: {
    title: {
      label: 'Transparent & Fair',
      main: 'Choose the Right Plan for You',
      subtitle:
        "Whether you're looking for direct engagement or keen on exploring a mutually beneficial incubation partnership, we've designed our pricing to meet varied needs and visions."
    }
  }
}
</script>
