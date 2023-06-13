<template>
  <div v-if="post.title">
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <ContentRenderer :value="post">
        <div class="my-10 lg:my-10 flex flex-col justify-center">
          <img
            :src="useAsset(post.featured_image)"
            class="rounded-xl shadow-xl"
          />
          <h1 class="text-4xl lg:text-6xl leading-10 text-center">
            {{ post.title }}
          </h1>
          <div class="flex flex-row gap-2items-center justify-center">
            <p class="font-semibold"> Published: {{ post.published }} </p>
          </div>
        </div>
        <div class="max-w-[920px] mx-auto">
          <ContentRendererMarkdown :value="post.body">
            <p class="m-0">
              {{ post.body }}
            </p>
          </ContentRendererMarkdown>
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

function useAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/' + path]
}

</script>
