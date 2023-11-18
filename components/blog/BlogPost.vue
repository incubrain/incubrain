<template>
  <div v-if="post.title">
    <main>
      <BlogPostHero :post="post" />
      <div class="w-full grid grid-cols-[1fr] lg:grid-cols-[1fr_740px_1fr] gap-8 pt-8 padded-x">
        <div class="flex flex-col h-full justify-start lg:items-end max-w-3xl gap-8">
          <BlogAuthor
            :author-id="post.authors[0]"
            :published-at="post.publishedAt"
            :updated-at="post.updatedAt"
          />
          <BlogToc
            class="visible lg:hidden"
            :toc="post.body.toc.links"
            expanded
          />
        </div>
        <div class="mx-auto flex flex-col justify-center w-full">
          <ContentRenderer
            :value="post"
            class="w-full"
          >
            <div class="container">
              <div class="mx-auto space-y-8 max-w-3xl">
                <ContentRendererMarkdown
                  :value="post.body"
                  class="max-w-[700px] mx-auto nuxt-content"
                >
                  <div>
                    {{ post.body }}
                  </div>
                </ContentRendererMarkdown>
                <BlogPostShare
                  :slug="post._id.replaceAll(':', '/')"
                  :summary="post.description"
                />
              </div>
            </div>
          </ContentRenderer>
        </div>
        <div class="hidden lg:block lg:sticky top-24 h-[300px]">
          <BlogToc :toc="post.body.toc.links" />
        </div>
      </div>
    </main>
    <aside class="space-y-12 padded-x pt-10 max-w-3xl mx-auto">
      <!-- Author information and related content -->
      <BlogAuthorCard :author-id="post.authors[0]" />
      <BlogDisplay
        :title="{ main: 'Recommended', label: 'keep learning' }"
        post-type="business"
      />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { PostFullT } from '~/types/posts'

defineProps({
  post: {
    type: Object as PropType<PostFullT>,
    required: true
  }
})
</script>

<style>
.nuxt-content p {
  font-size: 20px; /* Default font size for larger screens */
  margin-bottom: 30px;
  line-height: 1.65; /* Adjusted for better readability */
  font-family: 'Open Sans', sans-serif;
}

/* Responsive font size for mobile devices */
@media (max-width: 768px) {
  .nuxt-content p {
    font-size: 18px; /* Reduced font size for mobile */
  }
}

/* Base styles for headings */
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  text-decoration: none;
  margin-bottom: 20px;
  font-family: 'Oswald', 'sans-serif';
  font-weight: 500;
}

/* Golden Ratio for heading sizes */
.nuxt-content h2 {
  margin-top: 48px;
  font-size: 32px;
  line-height: 1.25;
}

.nuxt-content h3 {
  margin-top: 39px;
  font-size: 28px;
  line-height: 1.3;
}

.nuxt-content h4 {
  font-size: 22px;
  line-height: 1.3;
}
</style>
