<template>
  <div v-if="post.title">
    <div class="mx-auto flex flex-col justify-center">
      <ContentRenderer
        :value="post"
        class="w-[1080px]"
      >
        <NuxtImg
          :src="`images/blog/${post.featured_image}`"
          class="rounded-t-xl shadow-xl"
          width="1080"
          height="605"
        />
        <div class="foreground rounded-b-md pb-20 shadow-sm">
          <div class="my-10 flex flex-col justify-center items-center w-full">
            <h1 class="text-4xl lg:text-5xl text-center">
              {{ post.title }}
            </h1>
            <div class="flex flex-row gap-2 items-center justify-center">
              <p class="font-semibold"> Published: {{ post.published }} </p>
            </div>
          </div>
          <div class="mx-auto max-w-[var(--max-width-sm)]">
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
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style>
pre code .line {
  white-space: normal;
}

.code-challenge {
  margin: 0;
  padding: 1.6rem;
  line-height: 1.6rem;
}

.code-challenge,
li {
  line-height: 2rem;
}

.code-challenge ol {
  margin: 30px 0;
}

.code-challenge h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1.6rem 0;
}

.code-challenge h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.4rem 0;
}

pre {
  margin-top: 1.6rem;
  background: black !important;
  border-radius: 8px;
  padding: 1rem;
}
</style>
