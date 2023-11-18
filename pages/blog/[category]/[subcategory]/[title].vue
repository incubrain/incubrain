<template>
  <div class="relative background">
    <div class="flex flex-col justify-center relative">
      <BlogPost
        v-if="post"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { POST_FULL_PROPERTIES, PostFullT, postFullSchema } from '~/types/posts'

const route = useRoute()
const category = ref(String(route.params.category))
const p = usePostsStore()

const { data: post } = await useAsyncData('post', async (): Promise<PostFullT | void> => {
  const post = await queryContent('/blog', category.value)
    .only(POST_FULL_PROPERTIES)
    .where({ _path: route.path })
    .findOne()
  const validPost = p.isValidPost(post as PostFullT, postFullSchema)
  if (!validPost) return console.error('Post failed to load')
  return post as PostFullT
})

const env = useRuntimeConfig().public

useSeoMeta({
  title: post.value?.title || 'My Amazing Site',
  ogTitle: post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
  ogImage: `${env.baseURL}images/blog/${post.value?.featured_image}`,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value?.title,
  twitterDescription: post.value?.description,
  twitterImage: `${env.baseURL}images/blog/${post.value?.featured_image}`
})

defineOgImage({
  component: 'OgImageDefault',
  image: `images/blog/${post.value?.featured_image}`,
  baseURL: env.baseURL
})
</script>

<style></style>
