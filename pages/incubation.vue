<template>
  <div>
    <CommonHero
      :img="{
        title: 'Propel Your Startup to Success with Incubrain',
        src: 'images/incubation-icon.png',
        alt: 'Nurturing your vision with world-class development & business expertise from India to the globe.',
        width: 140,
        height: 140
      }"
      :title="heroTitle"
      invert
    />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonSingleFeat
        :title="singleFeat.title"
        image="images/hero.jpg"
      >
        <UButton
          to="/contact-incubation"
          variant="outline"
          @click="$posthog()?.capture('intent_shown_incubation')"
        >
          {{ singleFeat.cta }}
        </UButton>
      </CommonSingleFeat>
      <CommonManyFeatures
        :title="manyFeat.title"
        :items="manyFeat.items"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View all
        </UButton>
      </CommonManyFeatures>
      <CommonTimeline
        :title="how.title"
        :items="how.items"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View all
        </UButton>
      </CommonTimeline>
    </div>
    <CommonCTA :title="cta.title" />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonCeoMessage :title="ceo" />
      <PricingCards single-card>
        <UButton
          to="/contact-incubation"
          variant="outline"
          block
          @click="$posthog()?.capture('intent_shown_incubation')"
        >
          Enquire Now
        </UButton>
      </PricingCards>
      <CommonFAQ
        :faqs="faqs.items"
        :title="faqs.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const heroTitle = {
  label: 'Incubrain',
  main: 'Propel Your Startup to Success with Incubrain',
  subtitle: `growing your business together
  with us is a great idea`
}

const singleFeat = {
  title: {
    label: 'Exclusively Nuxt',
    main: 'Combining Tech Prowess with Business Acumen',
    subtitle: `
    With over a decade of experience in business and half of that dedicated to the intricacies of internet businesses,
    Incubrain stands uniquely poised to help your early-stage startup or business idea flourish. By incorporating in Pune, we've harnessed cost-effective,
    top-tier talent that's passionate about your success. Benefit from our unwavering focus on Nuxt 3 and Supabase,
    and let us simplify and strengthen the foundations of your digital venture.`
  },
  image: 'images/hero.jpg',
  cta: 'Enquire Now'
}

const cta = {
  title: {
    main: 'A Customer Is An Investor',
    subtitle: `
    Merging decades of startup experience with cutting-edge Nuxt 3 technology,
    we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source,
    we're committed to fostering growth within the community and beyond.`
  },
  image: 'images/hero.jpg'
}

const how = {
  title: {
    label: 'our methodology',
    main: 'Building Value Driven Businesses That Last',
    subtitle:
      "First we understand your buisness vision, the product, where you stand today, your goals for the future, and then we tailor a solution that's right for you."
  },
  items: [
    {
      icon: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Harness the power of a part-time developer for your project. With a team ready to jump in, you always get the best talent for your needs.'
    },
    {
      icon: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Harness the power of a part-time developer for your project. With a team ready to jump in, you always get the best talent for your needs.'
    },
    {
      icon: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    },
    {
      icon: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    }
  ]
}

const manyFeat = {
  title: {
    label: 'Your Launchpad to Success',
    main: 'All-Inclusive Support for Budding Entrepreneurs',
    subtitle:
      "We don't just offer development; we provide an environment designed to elevate your business from conception to a cash-flow positive reality."
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

const ceo = {
  label: 'CEO',
  main: 'Message from CEO',
  subtitle: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`
}

const faqs = {
  title: {
    label: 'some label',
    main: 'some title',
    subtitle: 'if you have further questions reach out'
  },
  items: [
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'Is Incubrain looking for investors?',
      description:
        "Not directly, the only way to become an investor is to become an Incubrain customer. After 3 years of consistent payment to Incubrain, all your montly payments will be vested as shares. If you want to invest but don't need our services, we suggest finding a company to sponser"
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    }
  ]
}
</script>

<style scoped></style>
