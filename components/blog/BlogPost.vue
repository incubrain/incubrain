<template>
  <div v-if="post.title">
    <div class="mx-auto flex flex-col justify-center">
      <ContentRenderer
        :value="post"
        class="container"
      >
        <NuxtImg
          :src="`images/blog/${post.featured_image}`"
          class="lg:rounded-t-xl shadow-xl"
          width="1080"
          height="605"
        />
        <div class="lg:rounded-b-md border border-color pb-20 px-4 shadow-sm">
          <div class="my-10 flex gap-6 flex-col justify-center items-center w-full">
            <h1 class="text-4xl lg:text-5xl text-center leading-tight">
              {{ post.title }}
            </h1>
            <div class="flex flex-row gap-2 items-center justify-center">
              <p class="font-semibold">
                Published {{ useDateFormat(post.date, 'DD MMM YYYY').value }}
              </p>
              <p class="font-semibold"> By </p>
              <BlogAuthor :author-ids="post.authors" />
            </div>
            <div class="flex gap-2">
              <UBadge
                :label="post.category"
                color="primary"
                variant="solid"
                class="text-sm"
              />
              <UBadge
                v-for="tag in post.tags"
                :key="tag"
                :label="tag"
                color="secondary"
                variant="soft"
                class="text-sm"
              />
            </div>
            <BlogFloat :slug="post._id.replaceAll(':', '/')" />
          </div>
          <div class="mx-auto px-4 prose dark:prose-invert lg:px-0">
            <UAlert
              color="primary"
              variant="outline"
              title="Overview"
              :description="String(post.description)"
            />
            <!-- <BlogToc :toc="post.body.toc.links" /> -->
            <ContentRendererMarkdown :value="post.body">
              <p class="m-0">
                {{ post.body }}
              </p>
            </ContentRendererMarkdown>
          </div>
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostFull } from '~/types/posts'

defineProps({
  post: {
    type: Object as PropType<PostFull>,
    required: true
  }
})
</script>

<style></style>
