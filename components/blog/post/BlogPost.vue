<template>
  <div v-if="post.title">
    <main>
      <BlogPostHero :post="post" />
      <div class="w-full grid grid-cols-[1fr] xl:grid-cols-[1fr_740px_1fr] xl:gap-8 pt-8 padded-x">
        <div
          class="flex flex-col h-full justify-start xl:items-end max-w-[700px] gap-8 mx-auto w-full"
        >
          <BlogPostToc
            class="visible xl:hidden"
            :toc="post.body.toc.links"
            :updated-at="post.updatedAt"
            :version="post.version"
            expanded
          />
        </div>
        <div class="mx-auto flex flex-col justify-center items-center w-full">
          <ContentRenderer
            :value="post"
            class="w-full"
          >
            <div class="container">
              <div class="mx-auto space-y-8 max-w-[700px]">
                <ContentRendererMarkdown
                  :value="post.body"
                  class="nuxt-content"
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
        <div class="hidden xl:block xl:sticky top-24 right-0 h-[300px]">
          <BlogPostToc
            :toc="post.body.toc.links"
            :updated-at="post.updatedAt"
            :version="post.version"
          />
        </div>
      </div>
    </main>
    <aside class="space-y-12 padded-x pb-12 pt-10 max-w-3xl mx-auto">
      <BlogPostAuthorCard :author-id="post.authors[0]" />
      <!-- <BlogDisplay
        :title="{ main: 'Recommended', label: 'keep learning' }"
        post-type="business"
      /> -->
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { PostFullT } from '~/types/posts'

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
    font-size: 18px;
  }

  .nuxt-content li {
    font-size: 18px;
  }
}

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
  line-height: 1.6;
}

.nuxt-content h3 {
  margin-top: 2.8rem;
  font-size: 28px;
  line-height: 1.6;
}

.nuxt-content h4 {
  font-size: 22px;
  line-height: 1.3;
}

.nuxt-content ul, ol {
  margin-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
}

.nuxt-content ul {
  list-style: disc;
}

.nuxt-content ol {
  list-style: decimal;
}

.nuxt-content li {
  margin-left: 1.6rem;
  font-size: 20px;
  margin-bottom: 22px;
  line-height: 1.55;
}

.nuxt-content p a {
  color: #10B981;
  text-decoration: none;
  font-weight: 500;
}
</style>
