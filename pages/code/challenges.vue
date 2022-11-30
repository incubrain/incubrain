<template>
  <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
    <div
      v-for="challenge in data"
      :key="challenge.title"
    >
      <ContentRenderer :value="challenge!">
        <CodeChallenge>
          <template #spec>
            <div class="prose prose-md">
              <h2 class="mt-0 mb-4">
                {{ challenge.title }}
              </h2>
              <p class="challenge-description" />
              <img :src="challenge.image" class="w-[150px]">
            </div>
          </template>
          <template #solution>
            <ContentRendererMarkdown :value="challenge" class="code-challenge">
              <p class="m-0">
                {{ challenge }}
              </p>
            </ContentRendererMarkdown>
          </template>
        </CodeChallenge>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">

const { $client } = useNuxtApp()

const test: any = ref({})

async function getData () {
  const { data: wars, pending, error } = useAsyncData(() => $client.codewars.challenges.query({ name: 'Drew-Macgibbon', page: 0 }))
  // const { data: wars, pending, error } = useAsyncData(() => $client.codewars.user.query({ name: 'Drew-Macgibbon', page: 0 }))
  test.value = wars
  console.log('hesh', test)
}

const { data } = await useAsyncData('page-data', () => queryContent('challenges', 'javascript').skip(0).limit(5).find())

definePageMeta({
  layout: 'tabbed',
  name: 'Challenges'
})

</script>

<style>

.code-challenge {
  margin: 0;
  padding: 1.6rem;
  line-height: 1.6rem;
}

.code-challenge, li {
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
