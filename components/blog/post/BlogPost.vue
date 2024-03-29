<template>
  <div v-if="post.title">
    <main>
      <BlogPostHero :post="post" />
      <div
        class="w-full grid grid-cols-[1fr] xl:grid-cols-[minmax(250px,1fr)_740px_minmax(250px,1fr)] xl:gap-8 pt-8 padded-x"
      >
        <div class="hidden xl:block xl:sticky top-24 left-0 h-[300px] xl:col-start-1">
          <BlogPostToc
            :toc="post.body.toc.links"
            :updated-at="post.updatedAt"
            :version="post.version"
          />
        </div>
        <div
          class="flex flex-col h-full justify-start max-w-[700px] gap-8 mx-auto w-full xl:hidden pb-6"
        >
          <BlogPostToc
            class="visible xl:hidden background py-6 px-4 rounded-md border border-color"
            :toc="post.body.toc.links"
            :updated-at="post.updatedAt"
            :version="post.version"
            expanded
          />
        </div>
        <div class="mx-auto flex flex-col justify-center items-center w-full xl:col-start-2">
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
                  {{ post.body }}
                </ContentRendererMarkdown>
                <BlogPostShare
                  :slug="post._id.replaceAll(':', '/')"
                  :summary="post.description"
                />
              </div>
            </div>
          </ContentRenderer>
        </div>
      </div>
    </main>
    <aside class="space-y-12 padded-x pb-12 pt-10 max-w-3xl mx-auto">
      <BlogPostAuthorCard :author-id="post.authors[0]" />
      <!-- <BlogShowcase
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
  font-size: 18px;
  margin-bottom: 22px;
  line-height: 1.65;
  font-family: 'Open Sans', sans-serif;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  text-decoration: none;
  margin-bottom: 18px;
  font-family: 'Oswald', 'sans-serif';
  font-weight: 700;
}

/* Golden Ratio for heading sizes */
.nuxt-content h2 {
  margin-top: 24px;
  font-size: 36px;
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

.nuxt-content ul,
ol {
  margin-bottom: 28px;
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
  font-size: 18px;
  margin-bottom: 22px;
  line-height: 1.55;
}

.nuxt-content p a {
  color: #10b981;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 768px) {
  .nuxt-content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  .nuxt-content li {
    font-size: 16px;
  }

  .nuxt-content h2 {
    margin-top: 10px;
    font-size: 30px;
    line-height: 1.6;
  }

  .nuxt-content h3 {
    margin-top: 2.8rem;
    font-size: 26px;
    line-height: 1.6;
  }

  .nuxt-content h4 {
    font-size: 22px;
    line-height: 1.3;
  }

  .nuxt-content li {
    margin-left: 1.6rem;
    font-size: 16px;
    margin-bottom: 22px;
    line-height: 1.55;
  }
}
</style>
