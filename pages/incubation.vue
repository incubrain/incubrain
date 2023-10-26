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
          @click="$posthog()?.capture('intent_shown_incubation', {
            source: 'incubation_page'
          })"
        >
          {{ singleFeat.cta }}
        </UButton>
      </CommonSingleFeat>
      <CommonManyFeatures>
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

const ceo = {
  label: 'CEO',
  main: 'Message from CEO',
  subtitle: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`
}
</script>

<style scoped></style>
