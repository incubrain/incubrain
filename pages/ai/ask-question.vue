<template>
  <div class="p-4">
    <UButton @click="test"> generate embeddings </UButton>
    <div class="mb-4">
      <label
        for="question"
        class="block text-sm font-medium"
        >Ask a question:</label
      >
      <input
        type="text"
        id="question"
        v-model="question"
        class="mt-1 p-2 w-full border rounded-md"
      />
    </div>
    <UButton
      @click="submitQuestion"
      :disabled="loading"
    >
      {{ loading ? 'Loading...' : 'Submit' }}
    </UButton>
    <div
      v-if="error"
      class="mt-4 text-red-500"
    >
      {{ error.message }}
    </div>
    <!-- <ContentRenderer :value="answer">
      <ContentRendererMarkdown
        v-if="answer"
        :value="answer"
      />
    </ContentRenderer> -->
    <div
      v-if="answer"
      class="mt-4 mx-auto max-w-[var(--max-width-md)]"
    > {{ answer }}</div>
  </div>
</template>

<script setup>
const question = ref('')
const answer = ref('')
const loading = ref(false)
const error = ref(null)

const submitQuestion = async () => {
  loading.value = true
  error.value = null
  console.log(question.value)
  const { data, error: fetchError } = await useFetch('/api/ask-question', {
    method: 'POST',
    body: JSON.stringify({ question: question.value })
  })

  loading.value = false

  if (fetchError.value) {
    error.value = fetchError
    console.log('error', fetchError)
    return
  }
  console.log('dataReturned', data)
  answer.value = data.value.answer // assuming the response has an `answer` property
}

const test = async () => {
  const { data, error } = await useFetch('/api/generate-embedding')
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
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
