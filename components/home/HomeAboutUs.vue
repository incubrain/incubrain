<template>
  <section class="background">
    <div class="py-20 px-6">
      <!-- Video Section -->
      <div class="video-section mb-12">
        <AppVideo
          :src="videoSrc"
          :title="videoTitle"
          class="w-full h-64 md:h-auto"
        />
      </div>

      <!-- Vision Section -->
      <div class="vision-section mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
        <p class="text-lg text-gray-700">{{ vision }}</p>
      </div>

      <!-- Message from CEO -->
      <div class="ceo-message flex flex-col md:flex-row items-center md:items-start">
        <NuxtImg
          :src="ceoAvatar"
          alt="CEO"
          class="rounded-full w-32 h-32"
          loading="lazy"
        />
        <div class="ml-0 md:ml-6 mt-6 md:mt-0">
          <h2 class="text-2xl md:text-3xl font-semibold mb-2">Message from our CEO</h2>
          <h3 class="text-xl font-bold text-primary mb-4">Drew MacGibbon</h3>
          <p class="text-lg text-gray-700 mb-6">{{ ceoMessage }}</p>
          <UButton
            to="/contact"
            color="primary"
            variant="solid"
            >Get in Touch</UButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoSrc = 'https://www.youtube.com/watch?v=TjA8Xh8QkN8&ab_channel=Bitfumes'
const videoTitle = ref('Company Overview')
const vision = ref(`
  At OpenAI, we believe in the power of technology to reshape our world. Our vision is to lead the way in artificial intelligence, creating systems that not only replicate human intelligence, but surpass it. We seek to drive the adoption of AI across all sectors, creating new opportunities and solutions for the most pressing global challenges. We aim to contribute to open source projects and share our success with our employees, creating a vibrant and forward-thinking community. Together, we are building the future.
`)
const ceoAvatar = ref('testimonials/drew-macgibbon.jpg')
const ceoMessage = ref(`
  As CEO, my vision for this company is to create an open company that shares its success with its employees, strives to deliver value to our customers, contributes to open source to move the industry forwards, and builds cool things. I firmly believe in these principles and work every day to ensure they are integrated into every aspect of our operations. I am thrilled you have taken the time to learn more about us.
`)
</script>

<style></style>
