<template>
  <div class="py-20">
    <Swiper
      class="w-full"
      :modules="[SwiperAutoplay, SwiperGrid]"
      :loop="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        1024: {
          slidesPerView: 4,
          grid: {
            rows: 1,
            fill: 'row'
          }
        }
      }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="p-4">
          <div class="border border-color rounded-lg p-4 foreground">
            <NuxtImg :src="testimonial.avatar" alt="avatar" class="h-16 w-16 rounded-full mx-auto mb-4" />
            <h3 class="text-lg font-bold mb-2">{{ testimonial.name }}</h3>
            <h4 class="mb-4">{{ testimonial.position }}</h4>
            <UIcon name="i-mid-quote-right" class="mb-4"/>
            <p class="mb-4">{{ testimonial.testimonial }}</p>
            <!-- <UButton color="primary" variant="solid" :to="testimonial.projectLink" target="_blank">View Project</UButton> -->
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">

interface Testimonial {
  id: number,
  avatar: string,
  name: string,
  position: string,
  testimonial: string,
  projectLink: string
}

const testimonials: Testimonial[] = ref([
  {
    id: 1,
    avatar: 'images/testimonials/drew-macgibbon.jpg',
    name: 'John Doe',
    position: 'CEO at Company1',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem.',
    projectLink: '/blog/projects/project1'
  },
  {
    id: 2,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 3,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 4,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 5,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 6,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 7,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  },
  {
    id: 8,
    avatar: 'images/testimonials/shweta-kulkarni.jpg',
    name: 'Jane Doe',
    position: 'CTO at Company2',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquam.',
    projectLink: '/blog/projects/project2'
  }
])
</script>

<style>

</style>
