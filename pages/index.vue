<template>
  <div>
    <HomeHero />

    <div class="spaced-y wrapper padded-x padded-y">
      <CommonSingleFeat
        :title="content.mainFeat.title"
        image="images/mid/incubrain-2.png"
      >
        <UButton
          to="/incubation"
          variant="outline"
        >
          {{ content.mainFeat.cta }}
        </UButton>
      </CommonSingleFeat>
      <CommonManyFeatures />
      <CommonCommunity :title="content.joinCommunity.title" />
    </div>
    <CommonCommunityCTA />
    <!-- <CommonCTA :title="content.mainCTA.title">
      <UButton to="/contact"> {{ content.mainCTA.cta }} </UButton>
    </CommonCTA> -->
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonCeoMessage :title="content.ceoMessage.title" />
      <!-- <CommonTestimonial /> -->
      <PricingCards />
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
      subtitle:
        'We provide essential growth services for online businesses, levelling them up. Our online business knowledge, Nuxt expertise, and India base, makes our offer unique.'
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
      label: 'A Word from Our CEO',
      main: 'Driven by Passion, Guided by Experience',
      subtitle:
        "We at Incubrain aren't just about business; we're about dreams, visions, and a commitment to seeing our partners reach their pinnacle of success."
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
