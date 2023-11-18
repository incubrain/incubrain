<template>
  <div
    v-if="author"
    class="flex items-start gap-4"
  >
    <NuxtImg
      class="border border-color rounded-full"
      :src="`images/team/${author.avatar}`"
      :alt="`${author.givenName} ${author.surname} is an author on the Incubrain Blog`"
      width="44"
      height="44"
    />
    <div class="flex flex-col gap-1">
      <p class="font-semibold"> {{ author.givenName }} {{ author.surname }} </p>
      <div>
        <p class="text-xs"> Pub: {{ useDateFormat(publishedAt, 'DD MMM YYYY').value }} </p>
        <p class="text-xs"> Edit: {{ useDateFormat(updatedAt, 'DD MMM YYYY').value }} </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = defineProps({
  authorId: {
    type: Number,
    required: true
  },
  publishedAt: {
    type: String,
    required: true
  },
  updatedAt: {
    type: String,
    required: true
  }
})

const author = usePostsStore().selectedAuthor(p.authorId)
</script>

<style scoped></style>
