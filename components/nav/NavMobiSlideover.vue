<template>
  <div class="relative z-50 flex items-center justify-start">
    <UButton
      variant="link"
      :padded="false"
      @click="isOpen = true"
    >
      <UIcon
        name="i-material-symbols-menu-rounded"
        class="w-7 h-7 text-black dark:text-white"
      />
    </UButton>
    <USlideover
      v-model="isOpen"
      side="left"
      class="z-50"
    >
      <div class="border-r border-color">
        <div class="foreground w-full flex items-center border-b border-color justify-between p-4">
          <NuxtLink
            class="flex justify-center items-center gap-2"
            to="/"
            @click="isOpen = false"
          >
            <NuxtImg
              src="incubrain-logo.svg"
              alt="Incubrain Logo"
              width="34"
              height="42"
              class="dark:invert"
            />
            <h3 class="text-sm font-bold">INCUBRAIN</h3>
          </NuxtLink>
          <UButton
            variant="solid"
            @click="isOpen = false"
          >
            <UIcon
              name="i-material-symbols-close-rounded"
              class="w-7 h-7"
            />
          </UButton>
        </div>
        <div v-show="pages">
          <NuxtLink
            v-for="page in pages"
            :key="page.id"
            :to="page.slug"
            class="w-full flex justify-end items-center border-b border-color py-3 px-8 text-sm font-medium"
            @click="isOpen = false"
          >
            {{ page.label }}
            <UIcon
              :name="page.icon"
              class="ml-2 w-4 h-4"
            />
          </NuxtLink>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const { pages } = usePages()
</script>

<style scoped></style>
