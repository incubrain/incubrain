<template>
  <div>
    <CommonHero
      :img="{
        title: 'Contact Incubrain',
        src: 'images/mid/incubrain-2.png',
        alt: 'Neon green phone'
      }"
      :title="heroTitle"
    />
    <div class="wrapper padded-x py-4 lg:py-8 spaced-y">
      <ContactTabs :default-tab="String(contactType)" />
    </div>
  </div>
</template>

<script setup lang="ts">
type ContactType = 'incubation' | 'hire-us' | 'collaborate'
const contactType: ContactType = (useRoute().params.type as ContactType) || 'incubation'

const heroTitle = {
  label: 'Get in Touch',
  main: "Let's Connect",
  subtitle: "Drop a line; we're friendly!"
}
</script>
