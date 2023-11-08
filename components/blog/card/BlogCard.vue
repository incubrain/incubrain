<template>
  <TransitionBounce>
    <div
      class="relative w-full h-full md:rounded-md border border-color p-4 gap-2 flex flex-col overflow-hidden background"
    >
      <BlogCatTag
        :tags="post.tags"
        :category="post.category"
        :post-slug="post._path.split('/')[2]"
        class="pb-2 pl-2"
      />
      <NuxtLink :to="post._path">
        <NuxtImg
          class="rounded-md w-full object-cover aspect-video border border-color"
          :src="`images/blog/${post.featured_image}`"
          width="400"
          height="300"
          quality="80"
        />
      </NuxtLink>
      <div class="flex flex-col gap-2 items-start w-full px-2 pt-2 justify-center">
        <NuxtLink :to="post._path">
          <h3 class="text-xl lg:text-xl font-bold">
            {{ post.title }}
          </h3>
        </NuxtLink>

        <div class="flex flex-row gap-2 justify-center items-center text-sm">
          <p class="text-primary">
            {{ setDate(post.publishedAt) }}
          </p>
          <span class="flex gap-2">
            by
            <BlogAuthor :author-ids="post.authors" />
          </span>
        </div>
        <p class="text-sm">
          {{ post.description }}
        </p>
      </div>
    </div>
  </TransitionBounce>
</template>

<script setup lang="ts">
const setDate = (d: string) => {
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
