<template>
  <div
    v-for="post in posts"
    :key="post.id"
  >
    <NuxtLink
      :to="(props.slug === 'hello' ? `/${props.type}/${props.filter}/${post.id}` : `/${props.slug}/${post.id}`)"
    >
      <div class="relative w-full rounded-md hover:bg-[#F9FAFB] hover:shadow-md cursor-pointer h-[118px] lg:h-[190px] lg:p-4 lg:gap-2 lg:flex-row-reverse flex flex-row overflow-hidden">
        <div
          class="w-[118px] h-full lg:w-[540px]"
          :style="{ 'background': `url(${post.card_image})`, 'background-size': 'cover', 'background-position': 'center' }"
        />
        <div class="flex flex-col gap-2 items-start w-full p-2 lg:p-4 justify-center">
          <h3 class=" text-md lg:text-2xl font-bold">
            {{ post.title }}
          </h3>
          <div class="flex flex-row gap-2 lg:gap-3 justify-center items-center font-semibold text-[#333c7d]">
            <p>{{ post.updated }}</p>
            <!-- <div class="w-1 h-1 rounded-full bg-black" /> -->
          </div>
          <p class="hidden xl:flex text-sm">
            {{ post.excerpt }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

interface Props {
  type: string
  filter: string
  slug: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'hello',
  filter: 'hello',
  slug: 'hello'
})

const posts = ref()

if (props.filter === 'hello') {
  posts.value = await queryContent(props.type).skip(0).limit(10).find()
} else {
  posts.value = await queryContent(props.type).where({ type: props.filter }).skip(0).limit(10).find()
}

</script>
