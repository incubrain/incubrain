<template>
  <div>
    <CommonHero
      :img="{
        title: 'Featured image for the Dark Sky Conservation India Conference',
        src: 'images/contact-us-3.png',
        alt: 'Featured image for the Dark Sky Conservation India Conference'
      }"
      :title="heroTitle"
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonSingleFeat
        :title="singleFeat.title"
        image="images/hero.jpg"
      >
        <UButton to="/about"> Learn More </UButton>
      </CommonSingleFeat>
      <CommonTabCards
        :title="values.title"
        :items="values.items"
      />
      <CommonTimeline
        :title="benefits.title"
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
    <CommonCTA :title="cta.title">
      <UButton
        to="/incubation"
        variant="outline"
      >
        Find Out More
      </UButton>
    </CommonCTA>
    <div class="wrapper padded-x padded-y spaced-y">
      <!-- Add blog section -->
      <BlogDisplay
        :posts="posts"
        :title="postTitle"
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
const heroTitle = {
  label: 'About',
  main: 'About Incubrain',
  subtitle: `growing your business together
  with us is a great idea`
}

const cta = {
  title: {
    label: 'Incubrain Your Business',
    main: 'Ignite Your Ideas with Incubrain'
  },
  image: 'images/hero.jpg'
}

const singleFeat = {
  title: {
    main: 'Building a Culture of Innovation and Collaboration',
    subtitle: `
    At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
    continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
    is the foundation for achieving our vision.`
  },

  image: 'images/hero.jpg'
}

const benefits = {
  title: {
    label: 'Benefits',
    main: 'Why Incubrain',
    subtitle: `growing your business together
    with us is a great idea`
  },
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
  title: {
    label: 'Values',
    main: 'Why Incubrain',
    subtitle: `growing your business together
    with us is a great idea`
  },
  items: [
    {
      label: 'Passion',
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

const postTitle = {
  label: 'Blog',
  main: 'Our Blog',
  subtitle: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`
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
