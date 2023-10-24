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
  hero: {
    title: {
      label: "Incubrain ❤️'s Nuxt",
      main: 'Bringing your SaaS ideas to life',
      subtitle:
        'Unleashing the power of Nuxt/Supabase, we turn your startup visions into tangible, market-ready solutions, all while keeping costs optimized.'
    },
    cta: 'Explore Our Services'
  },
  mainFeat: {
    title: {
      label: 'Unmatched Value',
      main: 'Affordable Excellence for Startups',
      subtitle:
        "Blending the cost-effectiveness of India's talent landscape with our deep-rooted expertise in Nuxt/Supabase, we ensure your startup gets the tech advantage it deserves."
    },
    cta: 'Discover Our Approach',
    image: 'images/hero.jpg'
  },
  manyFeat: {
    title: {
      label: 'Our Offerings',
      main: 'What Makes Incubrain Exceptional?',
      subtitle:
        "Beyond conventional IT support, we're your strategic partners, providing a plethora of tailored services aimed at ensuring your startup's growth and sustainability."
    },
    items: [
      {
        icon: 'i-material-symbols-attach-money',
        title: 'Cost-Effective Solutions',
        description:
          'Harness the benefits of cost-effective talent in India, combined with our optimized operational strategies to give your startup the best ROI.'
      },
      {
        icon: 'i-material-symbols-table-chart-view-outline',
        title: 'Business Coaching',
        description:
          'Benefit from our experienced mentors who guide you through startup challenges, helping you make informed decisions.'
      },
      {
        icon: 'i-mdi-computer',
        title: 'Product Lifecycle Support',
        description:
          'From ideation to testing, receive hands-on support during each phase of your product development, ensuring quality and efficiency.'
      },
      {
        icon: 'i-material-symbols-code',
        title: 'Dedicated Development',
        description:
          'Leverage the expertise of a full-time developer, dedicated to turning your SaaS vision into a functioning reality.'
      },
      {
        icon: 'i-material-symbols-preview',
        title: 'Quality Assurance',
        description:
          'Ensure your product meets the highest standards with our thorough code reviews, ensuring performance and security.'
      },
      {
        icon: 'i-mdi-bulb-outline',
        title: 'Innovation with Nuxt/Supabase',
        description:
          'Stay ahead of the competition by utilizing the unmatched capabilities of Nuxt and Supabase, ensuring a cutting-edge product.'
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
