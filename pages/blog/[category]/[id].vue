<template>
  <div>
    <BlogToTop />
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <BlogPost :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const post = ref({})
const category = ref('' as string | string[])
const id = ref('' as string | string[])

onBeforeMount(async () => {
  category.value = route.params.category as string
  id.value = route.params.id as number
  post.value = await queryContent('blog', String(category.value)).where({ id: { $eq: Number(id.value) } }).findOne()
})
</script>
