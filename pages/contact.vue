<template>
  <div>
    <CommonHero
      :img="{
        title: 'Featured image for the Dark Sky Conservation India Conference',
        src: 'images/hero.jpg',
        alt: 'Featured image for the Dark Sky Conservation India Conference'
      }"
      subtitle="send us a message, we don't bite"
      title="Reach out"
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonTitle
        label="Contact us"
        title="We want to hear from you"
        description="Choose your area of enquiry and we'll get back to you as soon as possible."
      />
      <ContactTabs />
      <CommonFAQ :faqs="contactFAQs" />
    </div>
  </div>
</template>

<script setup lang="ts">
const contactFAQs = [
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

const cardRow = {
  label: 'Incubrain Services',
  title: 'Helping your grow your business',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`,
  items: [
    {
      label: 'Business Starter',
      title: 'helping your get to the next level',
      description: 'Get support in talent acquisition and management.',
      image: 'images/icon.png',
      link: '/services/business-starter',
      price: '1,250'
    },
    {
      label: 'Hire us',
      title: 'Hire us',
      description: 'Prefer to directly hire us? We can help you with that too.',
      image: 'images/icon.png',
      link: '/services/hire-us',
      price: '$80 PH'
    }
  ]
}
</script>
