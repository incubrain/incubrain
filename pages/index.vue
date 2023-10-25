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
      <CommonManyFeatures
        :title="content.manyFeat.title"
        :items="content.manyFeat.items"
      />
      <CommonCommunity :title="content.joinCommunity.title" />
    </div>
    <CommonCommunityCTA />
    <!-- <CommonCTA :title="content.mainCTA.title">
      <UButton to="/contact"> {{ content.mainCTA.cta }} </UButton>
    </CommonCTA> -->
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonCeoMessage :title="content.ceoMessage.title" />
      <!-- <CommonTestimonial /> -->
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
      <PricingCards />
      <CommonFAQ
        :faqs="content.faqs.items"
        :title="content.faqs.title"
      />
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
  manyFeat: {
    title: {
      label: 'Comitted to Your Success',
      main: 'Incubrain Customers = Incubrain Investors',
      subtitle:
        "We value our early customers! After 3 years of being an Incubrain customer, ALL your spending with us is vested as shares in Incubrain. We're in this together."
    },
    items: [
      {
        icon: 'i-material-symbols-attach-money',
        title: 'Cost-Effective Solutions',
        description:
          'With each new customer, we hire experts to expand our services and value provided to you.'
      },
      {
        icon: 'i-material-symbols-table-chart-view-outline',
        title: 'Business Planning/Coaching',
        description:
          'We will guide you through startup challenges, helping you make informed decisions.'
      },
      {
        icon: 'i-mdi-computer',
        title: 'Product Lifecycle Support',
        description:
          'From ideation to testing, receive hands-on support during each phase of your product development.'
      },
      {
        icon: 'i-material-symbols-code',
        title: 'Dedicated Developer Pool',
        description:
          'The equivalent of full-time, selected and rotated from our talent pool to match your evolving project needs.'
      },
      {
        icon: 'i-material-symbols-preview',
        title: 'Quality Assurance',
        description:
          'Thorough code reviews and website audits by experts ensure your product continues to improve.'
      },
      {
        icon: 'i-mdi-bulb-outline',
        title: 'Innovative Thinking',
        description:
          'We love exploring new ideas and technologies that will help propel your business forward.'
      }
    ]
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
  },
  faqs: {
    title: {
      label: 'Got Questions?',
      main: "We've Got Answers",
      subtitle:
        'Navigating the world of startups can be full of questions. Here, we address common queries to make your journey with us transparent and informed.'
    },
    items: [
      {
        label: 'How many developers are assigned?',
        description: 'One developer is assigned to each project.'
      },
      {
        label: 'What technologies do you specialize in?',
        description:
          'We exclusively develop with Nuxt and Supabase, ensuring a streamlined and optimized solution for your startup.'
      },
      {
        label: 'How do you ensure code quality?',
        description:
          'Every piece of code undergoes a rigorous review by our expert team to ensure it meets industry standards and best practices.'
      },
      {
        label: 'What if I need more than one developer?',
        description:
          'We can certainly accommodate additional developer requirements. Do get in touch to discuss specific needs.'
      },
      {
        label: 'How do business coaching sessions work?',
        description:
          'Our experienced mentors provide guidance on key aspects of startup management, from strategy formulation to operational challenges.'
      },
      {
        label: 'Are there any hidden costs?',
        description:
          'Transparency is a core value for us. All costs are clearly outlined upfront, with no hidden fees or unexpected charges.'
      },
      {
        label: 'How do I join your Discord/Slack community?',
        description:
          'Click on the "Join Now" CTA on our landing page, and you\'ll be guided through the simple process.'
      },
      {
        label: 'How do you handle data security?',
        description:
          'Data security is paramount to us. We adhere to best practices and implement stringent measures to protect all data assets.'
      },
      {
        label: 'Can I opt out of the incubation process?',
        description:
          "Absolutely. Our incubation process is designed to be flexible. If you decide it's not for you, you can opt-out at any stage."
      },
      {
        label: 'What if I need more than one developer?',
        description:
          'We can certainly accommodate additional developer requirements. Do get in touch to discuss specific needs.'
      }
    ]
  }
}
</script>
