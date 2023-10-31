<template>
  <div>
    <HomeHero />
    <CommonCardScroll />

    <div class="spaced-y wrapper padded-x pb-16 lg:pb-32">
      <CommonCTA2 :title="mainCTA.title">
        <UButton
          to="/blog"
          variant="outline"
        >
          {{ mainCTA.cta }}
        </UButton>
      </CommonCTA2>
      <CommonManyFeatures :title="manyFeat" />
      <CommonCeoMessage :title="content.ceoMessage.title" />
      <PricingCards :title="pricingTitle" />
      <CommonDivider :title="dividerTitle" />
      <CommonCommunity :title="content.joinCommunity.title">
        <div>
          <UButton
            :to="discord.url"
            target="_blank"
            variant="outline"
            @click="
              $posthog()?.capture(discord.event.name, {
                source: 'community_cta'
              })
            "
          >
            Join for free
          </UButton>
        </div>
      </CommonCommunity>
      <CommonDivider :title="dividerTitle2" />
      <BlogDisplay
        :title="postTitle"
        post-type="business"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View All
        </UButton>
      </BlogDisplay>
    </div>
  </div>
</template>

<script setup lang="ts">
const { discord } = useSocial()

definePageMeta({
  name: 'Home'
})

const pricingTitle = {
  label: 'Our Services',
  main: 'Essential Services For Growing Online Businesses',
  subtitle: 'We challenge you to find better value for money than our Incubation program!'
}

const mainCTA = {
  title: {
    label: "WE'RE IN THIS TOGETHER",
    main: 'Incubrain Customers Are Incubrain Investors',
    subtitle:
      'Three years with Incubrain, and your expenditure converts into shares in our company.'
  },
  cta: 'More Information'
}

const manyFeat = {
  label: 'What you get',
  main: '50 Hours Per Week From Our Team Of Experts',
  subtitle:
    'Our experts a specifically selected based on how much value they can add to early-stage companies.'
}

const dividerTitle = {
  main: 'Unsure?',
  subtitle: 'Join our community!'
}

const dividerTitle2 = {
  main: 'Incubrain Content',
  subtitle: 'Learn something new'
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
  joinCommunity: {
    title: {
      label: 'Engage & Evolve',
      main: 'Become a Part of Our Growing Community',
      subtitle:
        'Dive into a dynamic community of entrepreneurs and tech enthusiasts; share, learn, and evolve as you leverage our pool of resources and knowledge.'
    }
  },
  ceoMessage: {
    title: {
      label: 'Our Guarantee',
      main: 'We Treat Your Business As Our Own',
      subtitle:
        "Without your support Incubrain ceases to exist, within your success lies ours; so we'll do everything in our power to get you there!"
    }
  }
}

const postTitle = {
  label: 'Documenting Our Success',
  main: 'Systems Build Successful Businesses!',
  subtitle:
    'Ours are open-source on our blog, we encourage you to read them and suggest improvements.'
}
</script>
