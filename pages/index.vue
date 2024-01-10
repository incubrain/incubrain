<template>
  <div>
    <HomeHero />
    <CommonCardScroll />

    <div class="spaced-y wrapper padded-x pb-16 lg:pb-32">
      <!-- <LazyCommonCTA2 :title="mainCTA.title" /> -->
      <CommonManyFeatures
        :title="manyFeat"
        class="pt-16"
      />
      <LazyPricingCards :title="pricingTitle" />
      <LazyCommonCeoMessage :title="content.ceoMessage.title" />
      <LazyCommonDivider :title="dividerTitle" />
      <LazyCommonCommunity :title="content.joinCommunity.title">
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
      </LazyCommonCommunity>
      <LazyCommonDivider :title="dividerTitle2" />
      <LazyBlogDisplay
        :title="postTitle"
        post-type="business"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View All
        </UButton>
      </LazyBlogDisplay>
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
  main: 'Essential Services For Growing Nuxt Businesses',
  subtitle:
    "We settle for nothing less than excellence, if you're unsatasfied with our developers, we'll replace them at no extra cost. T&C's apply (enquire)."
}

const mainCTA = {
  title: {
    label: 'PARTNER WITH EXPERTISE',
    main: 'Flexible Hiring: Part-Time, Full-Time, or Project-Based Developer',
    subtitle:
      'Experience unparalleled development flexibility with Incubrain. Tailor your team to fit your vision, leveraging our expertise for dynamic, scalable solutions.'
  }
}

const manyFeat = {
  label: 'Exclusively Nuxt',
  main: 'We Hire Only The Best Nuxt Developers',
  subtitle:
    'Our agile team has a wide range of expertise, but they all share one thing in common: a passion for Nuxt.'
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
        'Dive into a dynamic community of entrepreneurs and nuxt enthusiasts; share, learn, and evolve as you leverage our pool of resources and knowledge.'
    }
  },
  ceoMessage: {
    title: {
      label: 'Our Guarantee',
      main: 'We Treat Your Business As Our Own',
      subtitle:
        "Without your support Incubrain ceases to exist, within your success lies ours; so we'll do everything in our power to reach your goals!"
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
