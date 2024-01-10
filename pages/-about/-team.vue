<template>
  <div class="container mx-auto px-4">
    <section class="text-center py-8">
      <h1 class="text-4xl font-bold mb-6">Meet Our Team</h1>
      <p class="text-lg"
        >We are a group of passionate individuals committed to creating the best solutions for our
        clients.</p
      >
    </section>

    <section class="py-8">
      <h2 class="text-3xl font-bold mb-6">Leadership</h2>
      <AboutTeamLeaders :members="leadershipMembers" />
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <AboutTeamCard
        v-for="member in teamMembers"
        :key="member.id"
        :member="member"
      />
    </section>

    <section class="text-center py-8">
      <h2 class="text-3xl font-bold mb-6">Join Our Team</h2>
      <p class="text-lg"
        >Interested in joining our team? Check out our current job openings and apply today!</p
      >
      <NuxtLink
        to="/careers"
        class="btn btn-primary mt-4"
        >View Job Openings</NuxtLink
      >
    </section>
  </div>
</template>

<script setup lang="ts">
const teamMembers = ref([
  // Your team members data here. This can be replaced with a fetch() call to get data from your backend.
  { id: 1, name: 'John Doe', role: 'CEO', image: 'john-doe.jpg', bio: 'Short bio here' },
  { id: 2, name: 'Jane Doe', role: 'CTO', image: 'images/jane-doe.jpg', bio: 'Short bio here' }
  // ...
])

const leadershipMembers = ref([
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    bio: 'John is an experienced CEO with over 20 years in the tech industry...',
    image: 'drew-macgibbon.png'
  },
  {
    id: 2,
    name: 'Jane Doe',
    position: 'CTO',
    bio: 'Jane has a background in software development and leads our technical team...',
    image: 'drew-macgibbon.png'
  }
  // ...additional leaders here
])
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
