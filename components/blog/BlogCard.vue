<template>
  <TransitionBounce>
    <NuxtLink :to="post._path">
      <div
        class="relative w-full h-full rounded-md foreground cursor-pointer p-4 lg:gap-2 flex flex-col overflow-hidden"
      >
        <NuxtImg
          class="rounded-md w-full object-cover aspect-video"
          :src="`images/blog/${post.featured_image}`"
          width="400"
          height="300"
          quality="80"
        />
        <div class="flex flex-col gap-2 items-start w-full p-2 lg:p-4 justify-center">
          <h3 class="text-xl lg:text-2xl font-bold">
            {{ post.title }}
          </h3>
          <div
            class="flex flex-row gap-2 lg:gap-3 justify-center items-center font-semibold text-[#333c7d]"
          >
            <p>{{ post.updated }}</p>
            <!-- <div class="w-1 h-1 rounded-full bg-black" /> -->
          </div>
          <p class="text-sm">
            {{ post.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </TransitionBounce>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
