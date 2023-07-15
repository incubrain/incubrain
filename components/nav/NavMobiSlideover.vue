<template>
  <div class="relative z-50 flex justify-center items-center">
    <UButton
      variant="link"
      :padded="false"
      @click="isOpen = true"
    >
      <UIcon
        name="i-mdi-hamburger"
        class="w-6 h-6 md:w-8 md:h-8 text-white"
      />
    </UButton>
    <USlideover
      v-model="isOpen"
      side="left"
      class="z-50"
    >
      <div class="border-r border-color">
        <div class="foreground w-full flex items-center justify-between p-4">
          <NuxtLink
            class="flex gap-2"
            to="/"
            @click="isOpen = false"
          >
            <h3 class="text-xl font-semibold">Portfolio Of</h3>
            <NuxtImg
              src="/doom-logo.png"
              alt="Astron Era Logo"
              width="46"
              height="29"
            />
          </NuxtLink>
          <UButton
            variant="solid"
            icon="i-mdi-chevron-left"
            @click="isOpen = false"
          >
            Return
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
            {{ page.title }}
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
