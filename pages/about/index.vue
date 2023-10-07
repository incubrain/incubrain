<template>
  <div>
    <CommonHero
      :img="{
        title: 'Featured image for the Dark Sky Conservation India Conference',
        src: 'images/hero.jpg',
        alt: 'Featured image for the Dark Sky Conservation India Conference'
      }"
      title="About Incubrain"
      subtitle="some info about the company"
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonSingleFeat
        :description="singleFeat.description"
        :title="singleFeat.title"
        image="images/hero.jpg"
      >
        <UButton to="/about"> Learn More </UButton>
      </CommonSingleFeat>
      <CommonTabCards
        :label="values.label"
        :title="values.title"
        :description="values.description"
        :items="values.items"
      />
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
    <div class="wrapper padded-x padded-y spaced-y">
      <!-- Add blog section -->
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
      <!-- Add team section -->
    </div>
  </div>
</template>

<script setup lang="ts">
const cta = {
  title: 'Ignite Your Ideas with Incubrain',
  description: `
  Merging decades of startup experience with cutting-edge Nuxt 3 technology,
  we turn ideas into powerful SaaS solutions. As active contributors to Nuxt open source,
  we're committed to fostering growth within the community and beyond.`,
  image: 'images/hero.jpg'
}

const singleFeat = {
  title: 'Building a Culture of Innovation and Collaboration',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`,
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

const values = {
  label: 'Values',
  title: 'Why Incubrain',
  description: `growing your business together
  with us is a great idea`,
  items: [
    {
      label: 'Passtion',
      content: 'This is the content shown for Tab1'
    },
    {
      label: 'Ambition',
      content: 'blah blah blah'
    },
    {
      label: 'Drive',
      content: 'Finally, this is the content for Tab3'
    },
    {
      label: 'Drive',
      content: 'Finally, this is the content for Tab3'
    },
    {
      label: 'Drive',
      content: 'Finally, this is the content for Tab3'
    },
    {
      label: 'Drive',
      content: 'Finally, this is the content for Tab3'
    }
  ]
}

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
      'date'
    ])
    .sort({ date: -1 })
    .limit(3)
    .find()
)

definePageMeta({
  name: 'About'
})
</script>
