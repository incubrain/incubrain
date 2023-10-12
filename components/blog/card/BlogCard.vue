<template>
  <TransitionBounce>
    <div
      class="relative w-full h-full md:rounded-md border border-color cursor-pointer p-4 gap-4 flex flex-col overflow-hidden"
    >
      <BlogCatTag
        :tags="post.tags"
        :category="post.category"
        :post-slug="post._path.split('/')[2]"
      />
      <NuxtLink :to="post._path">
        <NuxtImg
          class="rounded-md w-full object-cover aspect-video"
          :src="`images/blog/${post.featured_image}`"
          width="400"
          height="300"
          quality="80"
        />
      </NuxtLink>
      <div class="flex flex-col gap-2 items-start w-full p-2 lg:p-4 justify-center">
        <h3 class="text-xl lg:text-2xl font-bold">
          {{ post.title }}
        </h3>

        <div class="flex flex-row gap-2 lg:gap-3 justify-center items-center">
          <BlogAuthor :author-ids="post.authors" />
          <p class="text-primary text-sm font-semibold">
            {{ setDate(post.date) }}
          </p>
        </div>
        <NuxtLink :to="post._path">
          <p class="text-sm">
            {{ post.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </TransitionBounce>
</template>

<script setup lang="ts">
const setDate = (d: string) => {
  console.log('date', d)
  const [year, month, day] = d.split('/')
  const timestamp = new Date(Number(year), Number(month) - 1, Number(day))
  return useDateFormat(timestamp, 'DD MMM YYYY').value
}

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
