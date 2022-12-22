<template>
  <div>
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <ContentRenderer :value="post">
        <div class="my-10 lg:my-20">
          <h1 class="text-4xl lg:text-6xl leading-10">
            {{ post.title }}
          </h1>
          <div
            class="
              flex flex-row
              gap-2
              my-10
              lg:my-20
              items-center
              justify-center
            "
          >
            <p>Twitter handle</p>
            <div class="h-full w-2 bg-black" />
            <p>{{ post.updated }}</p>
            <div class="h-1 w-1 rounded-full bg-black" />
          </div>
          <img :src="post.post_image" class="rounded-xl shadow-xl" />
        </div>
        <div class="max-w-[920px] mx-auto">
          <ContentRendererMarkdown :value="post">
            <p class="m-0">
              {{ post }}
            </p>
          </ContentRendererMarkdown>
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
const post = ref();
post.value = await queryContent("projects").where({ id: 1 }).skip(0).findOne();
</script>
