<template>
  <div>
    <CommonHero
      :img="{
        title: 'Featured image for the Dark Sky Conservation India Conference',
        src: 'images/hero.jpg',
        alt: 'Featured image for the Dark Sky Conservation India Conference'
      }"
      subtitle="24th-26th November 2023"
      title="Dark Sky Conservation India Conference"
    >
      <UButton to="/about"> Join The Team </UButton>
      <UButton to="/about"> Join The Team </UButton>
    </CommonHero>
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
      <CommonCeoMessage
        :label="ceo.title"
        :title="ceo.title"
        :message="ceo.description"
      />
      <PricingCards>
        <UButton
          to="/contact"
          variant="outline"
          block
        >
          Enquire Now
        </UButton>
      </PricingCards>
    </div>
    <CommonCTA
      :title="cta.title"
      :description="cta.description"
      :image="cta.image"
    />
    <div class="spaced-y wrapper padded-x padded-y">
      <CommonContactForm />
      <CommonFAQ :faqs="faqs" />
      <BlogDisplay :posts="posts">
        <UButton
          to="/blog"
          variant="outline"
        >
          View all
        </UButton>
      </BlogDisplay>
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

const benefits = {
  label: 'Benefits',
  title: 'Why Incubrain',
  description: `growing your business together
  with us is a great idea`,
  items: [
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    }
  ]
}

const manyFeat = {
  label: 'Features',
  title: 'Why Incubrain',
  description: `growing your business together
  with us is a great idea`,
  items: [
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
    },
    {
      image: 'images/icon.png',
      title: 'Resource Library',
      description:
        'Get support in talent acquisition and management. Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
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

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('blog', 'business')
    .where({ category: 'business' })
    .only(['id', 'title', '_path', 'description', 'featured_image', 'authors', 'category', 'tags'])
    .limit(3)
    .find()
)
</script>

<style scoped></style>
