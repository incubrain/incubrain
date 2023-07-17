<template>
  <Swiper
    class="my-swiper"
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
      <div class="p-4">
        <div class="border rounded-lg p-4">
          <NuxtImg :src="testimonial.avatar" alt="avatar" class="h-16 w-16 rounded-full mx-auto mb-4" />
          <h3 class="text-lg font-bold mb-2">{{ testimonial.name }}</h3>
          <h4 class="text-gray-500 mb-4">{{ testimonial.position }}</h4>
          <UIcon name="i-mid-quote-right" class="text-gray-400 mb-4"/>
          <p class="text-gray-700 mb-4">{{ testimonial.testimonial }}</p>
          <UButton color="primary" variant="solid" :to="testimonial.projectLink" target="_blank">View Project</UButton>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">

interface Testimonial {
  avatar: string,
  name: string,
  position: string,
  testimonial: string,
  projectLink: string
}

const testimonials: Testimonial[] = ref([
  {
    avatar: '/avatar1.jpg',
    name: 'John Doe',
    position: 'CEO at Company1',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem.',
    projectLink: '/projects/project1'
  },
  {
    avatar: '/avatar2.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/projects/project2'
  }
])
</script>

<style>
.my-swiper {
  width: 100%;
  height: 100%;
}
</style>
