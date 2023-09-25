<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
    <CommonTitle
      :label="label"
      :title="title"
      :description="message"
    />
    <div class="gap-3 flex flex-col flex-shrink-0 justify-center items-center">
      <div class="overflow-hidden flex foreground rounded-md h-64 px-4 pt-4">
        <NuxtImg
          src="images/team/drew-macgibbon.png"
          alt="Drew MacGibbon Ceo/Founder of Incubrain"
          class="-mb-28"
        />
      </div>
      <div>
        <h4 class="font-semibold">Drew MacGibbon</h4>
        <p>CEO/Founder, Incubrain</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'label'
  },
  title: {
    type: String,
    default: 'Title'
  },
  message: {
    type: String,
    default: 'Message from ceo'
  }
})
</script>

<style scoped></style>
