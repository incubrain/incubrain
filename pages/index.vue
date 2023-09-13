<template>
  <div>
    <HomeHero />

    <div class="spaced-y wrapper padded-x padded-y">
      <CommonSingleFeat
        :description="singleFeat.description"
        :title="singleFeat.title"
        image="images/hero.jpg"
      >
        <UButton to="/about"> Learn More </UButton>
        <UButton
          to="/about"
          variant="outline"
        >
          Join The Team
        </UButton>
      </CommonSingleFeat>
      <CommonTestimonial />
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
      <BlogDisplay
        :posts="posts"
        label="our latest blog posts"
        title="Our Posts"
        subtitle="some more information"
      >
        <UButton
          to="/blog"
          variant="outline"
        >
          View all
        </UButton>
      </BlogDisplay>
      <PricingCards />
      <CommonFAQ :faqs="faqs" />
    </div>
  </div>
</template>

<script setup lang="ts">
const singleFeat = {
  title: 'Building a Culture of Innovation and Collaboration',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`,
  image: 'images/hero.jpg'
}

const cta = {
  title: 'Ignite Your Ideas with Incubrain',
  description: `
  Merging decades of startup experience with cutting-edge Nuxt 3 technology,
  we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source,
  we're committed to fostering growth within the community and beyond.`,
  image: 'images/hero.jpg'
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

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('blog')
    .only([
      'id',
      'title',
      '_path',
      'description',
      'featured_image',
      'authors',
      'category',
      'tags',
      'published'
    ])
    .sort({ published: -1 })
    .limit(3)
    .find()
)

definePageMeta({
  layout: 'home',
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
</script>
