<template>
  <div>
    <h2 class="text-2xl mb-3">Employee Testimonials</h2>
    <div v-for="(testimonial, index) in testimonials" :key="index">
      <slot name="testimonial" :testimonial="testimonial">
        <blockquote>
          <p>{{ testimonial.quote }}</p>
          <cite>{{ testimonial.name }}, {{ testimonial.position }}</cite>
        </blockquote>
      </slot>
    </div>
  </div>
</template>


<script setup lang="ts">

const testimonials = ref([
  {
    quote: 'Testimonial 1',
    name: 'Employee 1',
    position: 'Job Title 1'
  },
  {
    quote: 'Testimonial 2',
    name: 'Employee 2',
    position: 'Job Title 2'
  }
  // Add more testimonial objects here...
])
</script>
