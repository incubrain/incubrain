<template>
  <div
    v-if="author"
    class="rounded-xl border border-color p-4 lg:p-8 foreground"
  >
    <div class="flex flex-col sm:flex-row items-start gap-4 lg:gap-8">
      <NuxtImg
        class="rounded-md"
        src="images/team/drew-macgibbon.jpg"
        :alt="`${author.givenName} ${author.surname} is an author on the Incubrain Blog`"
        sizes="100vw sm:120px"
      />
      <div class="text-left space-y-1">
        <h4 class="font-semibold"> About {{ author.givenName }} {{ author.surname }} </h4>
        <p class="text-sm">
          {{ author.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = defineProps({
  authorId: {
    type: Number,
    required: true
  }
})

const author = usePostsStore().selectedAuthor(p.authorId)
</script>

<style scoped></style>
