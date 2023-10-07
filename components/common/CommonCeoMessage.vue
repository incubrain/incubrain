<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
    <CommonTitle
      :label="label"
      :title="title"
      :description="message"
    />
    <div class="gap-3 flex flex-col w-full items-center">
      <div class="relative w-full flex justify-center items-center">
        <div
          class="flex w-[600px] lg:w-full h-full relative rounded-[90%_40%] overflow-hidden justify-center items-center shadow-md border-2 border-color"
        >
          <div class="bg-pattern z-0" />
          <NuxtImg
            src="images/team/drew-macgibbon.png"
            alt="Drew MacGibbon Ceo/Founder of Incubrain"
            height="600"
            class="relative"
          />
        </div>
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
