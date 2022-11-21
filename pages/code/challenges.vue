<template>
  <AppTabs>
    <ContentList path="/challenges/javascript" v-slot="{ list }">
      <div  class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
        <div v-for="challenge in list" :key="challenge.title">
          <CodeChallenge>
            <template v-slot:spec>
              <h1> {{ challenge.title}} </h1>
              <p> Testing spec info </p>
            </template>
            <template v-slot:solution>
              <p> {{ challenge }} </p>
            </template>
          </CodeChallenge>
        </div>
      </div>
    </ContentList>
  </AppTabs>
</template>

<script setup lang="ts">

const { $client } = useNuxtApp()

let test: any = ref({})

async function getData() {
  const { data: wars, pending, error } = useAsyncData(() => $client.codewars.challenges.query({ name: 'Drew-Macgibbon', page: 0 }))
  // const { data: wars, pending, error } = useAsyncData(() => $client.codewars.user.query({ name: 'Drew-Macgibbon', page: 0 }))
  test.value = wars
  console.log('hesh', test)
}

// const { data } = await useAsyncData('page-data', () =>  queryContent('challenges', 'javascript').where({ title: 'test' }).findOne())

</script>
