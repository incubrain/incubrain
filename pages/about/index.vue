<template>
  <div>
    <CommonHero
      :img="{
        title: 'Incubrain Logo on contact page',
        src: 'images/incubrain-logo.svg',
        alt: 'Incubrain Logo on contact page'
      }"
      :title="heroTitle"
      invert
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonSingleFeat
        :title="singleFeat.title"
        image="images/hero.jpg"
      >
        <UButton to="/about"> Learn More </UButton>
      </CommonSingleFeat>
      <!-- <CommonTabCards
        :title="values.title"
        :items="values.items"
      /> -->
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
const postStore = usePostsStore()
const posts = await postStore.getShowcasePosts('business')

const heroTitle = {
  label: 'About',
  main: 'The Incubrain Vision',
  subtitle: 'Follow our journey from idea to flourishing company'
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
    label: 'Our Core Values',
    main: 'What Drives Incubrain',
    subtitle: 'Discover the principles that guide our actions and decisions.'
  },
  items: [
    {
      label: 'Innovation',
      content: `We foster a culture where new ideas and unconventional thinking are not just welcomed, but actively
      encouraged. We're not afraid to step into the unknown, embracing the creative process and all the
      unique solutions it brings.`
    },
    {
      label: 'Ownership',
      content: `We believe that every employee is a stakeholder. We don't just do tasks; we take full responsibility
      for the outcomes. From profits to mistakes, we share everything. Our commitment is to go beyond
      'business as usual' and truly own our roles within the company.`
    },
    {
      label: 'Resourcefulness',
      content: `When faced with challenges, we don't back down. We exhaust all avenues, tap into our creativity, and
      persevere until we find a solution. The phrase "it can't be done" isn't in our vocabulary. Instead,
      we say, "We'll find a way."`
    },
    {
      label: 'Resilience',
      content: `We're made of grit. We understand that success isn't linear, and we're not discouraged by obstacles
      or setbacks. We push forward, meet deadlines, and maintain our 'never give up' attitude, no matter
      the circumstance.`
    },
    {
      label: 'Fundamental Improvement',
      content: `We approach problems by breaking them down to their most basic elements. Using a first-principles
      perspective, we build solutions from the ground up, always looking for ways to enhance and improve.
      We firmly believe that there's always room to get better, and that every situation, good or bad,
      presents a learning opportunity.`
    },
    {
      label: 'Insatiable Curiosity',
      content: `We're lifelong learners who thrive on questions. If we don't know something, we ask. Our constant
      thirst for knowledge fuels our innovations and drives us to dig deeper, understanding the 'why'
      behind every 'what'.`
    },
    {
      label: 'Transparency',
      content: `We keep an open house. From discussions and decisions to roadmaps and codebases, we ensure that
      transparency is maintained. We believe that everyone's opinion matters, fostering an inclusive
      environment where employees are part of our key business decisions.`
    },
    {
      label: 'Collaboration',
      content: `We work together, combining our skills and knowledge to deliver end-to-end products and features. We
      believe that the best solutions come from group discussions and collective inputs. We share ideas
      and learn from each other, focusing on achieving common goals.`
    },
    {
      label: 'Passionate Engagement',
      content: `We do more than just work - we pour our hearts into what we do. We believe that passion is the spark
      that drives excellence, innovation, and satisfaction. When we love what we do, we do it better.`
    },
    {
      label: 'Pursuit of Excellence',
      content: `We are obsessed with quality. Every product we create, every service we deliver, is a testament to
      our commitment to excellence. We continuously set and surpass high standards, delivering nothing`
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

definePageMeta({
  name: 'About'
})
</script>
