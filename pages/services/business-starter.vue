<template>
  <div>
    <CommonHero
      :img="{
        title: 'Propel Your Startup to Success with Incubrain',
        src: 'images/hero.jpg',
        alt: 'Nurturing your vision with world-class development & business expertise from India to the globe.'
      }"
      title="Propel Your Startup to Success with Incubrain"
      subtitle="Nurturing your vision with world-class development & business expertise from India to the globe."
    />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonSingleFeat
        :label="singleFeat.label"
        :title="singleFeat.title"
        :description="singleFeat.description"
        image="images/hero.jpg"
      >
        <UButton
          to="/about"
          variant="outline"
        >
          {{ singleFeat.cta }}
        </UButton>
      </CommonSingleFeat>
      <CommonManyFeatures
        :label="manyFeat.label"
        :title="manyFeat.title"
        :description="manyFeat.description"
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
        :label="benefits.label"
        :title="benefits.title"
        :description="benefits.description"
        :items="benefits.items"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View all
        </UButton>
      </CommonTimeline>
    </div>
    <CommonCTA
      :title="cta.title"
      :description="cta.description"
      :image="cta.image"
    />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonCeoMessage
        :label="ceo.title"
        :title="ceo.title"
        :message="ceo.description"
      />
      <PricingCards single-card>
        <UButton
          to="/contact"
          variant="outline"
          block
        >
          Enquire Now
        </UButton>
      </PricingCards>
      <CommonContactForm />
      <CommonFAQ :faqs="faqs" />
    </div>
  </div>
</template>

<script setup lang="ts">
const singleFeat = {
  label: 'Exclusive Nuxt 3 Development with a Business Edge',
  title: 'Combining Tech Prowess with Business Acumen',
  description: `
  With over a decade of experience in business and half of that dedicated to the intricacies of internet businesses,
  Incubrain stands uniquely poised to help your early-stage startup or business idea flourish. By incorporating in Pune, we've harnessed cost-effective,
  top-tier talent that's passionate about your success. Benefit from our unwavering focus on Nuxt 3 and Supabase,
  and let us simplify and strengthen the foundations of your digital venture.`,
  image: 'images/hero.jpg',
  cta: 'Incubrain Your Business'
}

const cta = {
  title: 'A Customer Is An Investor',
  description: `
  Merging decades of startup experience with cutting-edge Nuxt 3 technology,
  we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source,
  we're committed to fostering growth within the community and beyond.`,
  image: 'images/hero.jpg'
}

const benefits = {
  label: 'Benefits',
  title: 'Why Incubrain',
  description: `growing your business together
  with us is a great idea`,
  items: [
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    }
  ]
}

const manyFeat = {
  label: 'Your Launchpad to Success',
  title: 'All-Inclusive Support for Budding Entrepreneurs',
  description: `
  We don’t just offer development; we provide a holistic environment designed to elevate your startup from conception to a cash-flow positive reality.
  See why solo tech-preneurs, part-timers, and early-stage startups are trusting us with their dream ventures.`,
  items: [
    {
      image: 'images/icon.png',
      title: 'Business Coaching',
      description:
        "Two dedicated sessions per month to strategize, plan, and envision your business's future. We're not just developers; we're your partners in success."
    },
    {
      image: 'images/icon.png',
      title: 'Code Review',
      description:
        'Ensure your code meets the highest standards with our monthly pull-request reviews. Build scalable and robust applications with our expert feedback.'
    },
    {
      image: 'images/icon.png',
      title: 'Behind-The-Scenes Access',
      description:
        'Get real-time insights into our operations. Learn our growth tactics, employee management strategies, and more on our Slack.'
    },
    {
      image: 'images/icon.png',
      title: 'Founder Group Chat',
      description:
        "Collaborate, ask questions, and get peer support. Each month, the collective focuses on supercharging one founder's business, rotating to ensure everyone benefits."
    },
    {
      image: 'images/icon.png',
      title: 'Dedicated Developer Support',
      description:
        'Harness the power of a part-time developer for your project. With a team ready to jump in, you always get the best talent for your needs.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description: ''
    }
  ]
}

const ceo = {
  label: 'CEO',
  title: 'Message from CEO',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`
}

const faqs = [
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  }
]
</script>

<style scoped></style>
