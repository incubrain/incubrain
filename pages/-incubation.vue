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
    <div class="spaced-y wrapper padded-x padded-b pt-8">
      <div class="space-y-8">
        <CommonCTA2 :title="mainCTA.title" />
        <CommonManyFeatures />
      </div>
      <CommonTimeline
        :title="how.title"
        :items="how.items"
      />
      <CommonCTA2 :title="singleFeat.title">
        <UButton
          to="/blog/all"
          variant="outline"
        >
          {{ singleFeat.cta }}
        </UButton>
      </CommonCTA2>
      <CommonCeoMessage :title="ceo" />
      <CommonNextHires />
      <PricingCards
        single-card
        :title="pricingTitle"
      >
        <UButton
          variant="outline"
          to="#"
          block
          @click="openCalendlyPopup"
        >
          Enquire Now
        </UButton>
      </PricingCards>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroTitle = {
  label: 'Incubrain',
  main: 'Accelerate Your Startup Vision With Incubrain',
  subtitle: 'Your aspiration, our polish, a shared success!'
}

const { openCalendlyPopup } = useCalendly()

const mainCTA = {
  title: {
    label: '50 Hours Per Week',
    main: 'Gain Direct Access to Our Team Of Experts',
    subtitle: 'Together, we WILL accelerate your journey to success.'
  }
}

const singleFeat = {
  title: {
    label: "WE'RE IN THIS TOGETHER",
    main: 'Incubrain Customers Are Incubrain Investors',
    subtitle:
      'Three years with Incubrain, and your expenditure converts into shares in our company.'
  },
  cta: 'More Information'
}

const pricingTitle = {
  label: 'Incubrain Your Business',
  main: 'Incubrain Is Transparent, Flexible, And Affordable',
  subtitle:
    'For less than half the monthly cost of a full-time developer, you get so much more! Have concerns? Send us a message so we can address them.'
}

const how = {
  title: {
    label: 'Our Methodology',
    main: 'Building Value Driven Businesses That Last',
    subtitle:
      'We delve deep into your vision, gauge the current landscape of your business, and chart the path forward, crafting a tailored strategy for success.'
  },
  items: [
    {
      icon: 'i-mdi-lightbulb-outline',
      title: 'Align With Your Vision',
      description:
        'Diving deep, we uncover the core of your entrepreneurial dream, ensuring our strategies align with your long-term ambitions and values.'
    },
    {
      icon: 'i-mdi-strategy',
      title: 'Business Planning & Coaching',
      description:
        "Armed with clarity on your vision, we'll co-create a robust business blueprint, and through regular coaching, turn your plans into actionable milestones."
    },
    {
      icon: 'i-mdi-rocket-launch-outline',
      title: 'MVP Planning',
      description:
        "In today's fast-paced world, speed is key. We'll strategize to craft an MVP that encapsulates your idea's essence, ready to be tested and validated swiftly."
    },
    {
      icon: 'i-mdi-code-braces-box',
      title: 'MVP Development',
      description:
        "Our adept development team steps in, turning your MVP plan into a tangible product, ensuring it's primed for early users and feedback."
    },
    {
      icon: 'i-mdi-magnet-on',
      title: 'User Acquisition',
      description:
        "A great product needs visibility. We'll architect and assist in deploying a user acquisition blueprint, driving the right audience to your offering."
    },
    {
      icon: 'i-mdi-target',
      title: 'Product Market Fit',
      description:
        "Gathering user insights, we'll refine and iterate, ensuring your product resonates with market demands, setting the stage for growth."
    },
    {
      icon: 'i-mdi-chart-line',
      title: 'Scaling',
      description:
        "When you're set to soar, we bolster your wings. Tapping into our vast network, we'll help you enlist the right talent, amplifying your growth trajectory."
    }
  ]
}

const ceo = {
  label: "Incubrain's future",
  main: 'Pushing The Nuxt Ecosystem Forward, One Open-Source Project at a Time',
  subtitle:
    "Envision a global founder hub, similar to YCombinator, fiercely propelling the Nuxt ecosystem forward. That's our direction, and as an early partner in our journey you're also an investor in our shared dream!"
}
</script>

<style scoped></style>
