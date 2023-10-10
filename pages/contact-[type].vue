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
      <CommonTitle :title="contactTitle" />
      <ContactTabs :active-tab="String(contactType)" />
      <CommonFAQ
        :faqs="contactFAQs.items"
        :title="contactFAQs.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const contactType = useRoute().params.type

const heroTitle = {
  label: 'Contact us',
  main: 'Contact us',
  subtitle: "send us a message, we don't bite"
}

const contactTitle = {
  label: 'Contact us',
  main: 'We want to hear from you',
  subtitle: "Choose your area of enquiry and we'll get back to you as soon as possible."
}

const contactFAQs = {
  title: {
    label: 'FAQs',
    main: "We'd love to hear from you",
    subtitle: 'reach out if you have further questions'
  },
  items: [
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    },
    {
      label: 'How many developers are assigned?',
      description: 'One developer is assigned to each project.'
    }
  ]
}
</script>
