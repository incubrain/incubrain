<template>
  <div
    v-for="show in showcases"
    :key="show.id"
  >
    <NuxtLink
      :to="(`/${props.type}/${props.filter}/${show.id}`)"
    >
      <div class="relative w-full rounded-md hover:bg-[#F9FAFB] hover:shadow-md cursor-pointer h-[118px] lg:h-[184px] lg:p-4 lg:gap-2 lg:flex-row-reverse flex flex-row overflow-hidden">
        <div
          class="w-[118px] h-full lg:w-[540px]"
          :style="{ 'background': `url(${show.card_image})`, 'background-size': 'cover' }"
        />
        <div class="flex flex-col gap-2 items-start w-full p-2 lg:p-4 justify-center">
          <h3 class=" text-md lg:text-2xl font-bold">{{ show.title }}</h3>
          <div class="flex flex-row gap-2 lg:gap-3 justify-center items-center font-semibold text-[#333c7d]">
            <p>{{ show.completed }}</p>
            <div class="w-1 h-1 rounded-full bg-black" />
          </div>
          <p class="hidden lg:flex text-sm">{{ show.excerpt }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

interface Props {
  type: string
  filter: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'hello',
  filter: 'hello'
})

const showcases = ref()
showcases.value = await queryContent(props.type).where({ type: props.filter }).skip(0).limit(5).find()

console.log('updated', showcases.value, props)

</script>
