<template>
  <section id="how_it_works">
    <div class="wrapper space-y-12">
      <CommonTitle
        :label="label"
        :title="title"
        :description="description"
      />

      <div
        class="flex flex-wrap gap-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:gap-6"
      >
        <div
          v-for="item in items"
          :key="item.title"
          class="relative bounce-on-hover flex-none w-full overflow-hidden rounded-lg border border-color px-8 pb-8 pt-12"
        >
          <div
            class="bg-pattern pointer-events-none absolute -right-[836px] -top-[448px] h-[651px] w-[1314px]"
          />
          <div class="relative">
            <div
              class="flex h-[32px] w-[32px] background items-center justify-center rounded-full border border-color"
            >
              <UIcon
                :name="item.icon"
                width="30px"
                height="30px"
              />
            </div>
            <h3 class="pt-2 text-lg font-medium">{{ item.title }}</h3>
            <p class="text-base pt-2 font-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
