<template>
  <div  class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      <div 
      v-for="challenge in data"
      :key="challenge.title">
        <ContentRenderer :value="challenge!">
          <CodeChallenge>
            <template v-slot:spec>
              <div class="prose prose-md">
                <h2 class="mt-0 mb-4"> {{ challenge.title}} </h2>
                <p class="challenge-description" />
                <img :src="challenge.image" class="w-[150px]"/>
              </div>
            </template>
            <template v-slot:solution>
              <ContentRendererMarkdown :value="challenge" class="code-challenge">
                <p class="m-0">{{ challenge }}</p>
              </ContentRendererMarkdown>
            </template>
          </CodeChallenge>
        </ContentRenderer>
        </div>
      </div>
</template>

<script setup lang="ts">

const { $client } = useNuxtApp()

const { data } = await useAsyncData('page-data', () =>  queryContent('challenges', 'javascript').skip(0).limit(5).find())

definePageMeta({
  layout: 'tabbed',
})

</script>