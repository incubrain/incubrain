<template>
  <div>
    <div class="max-w-[760px] mx-auto flex flex-col prose justify-center">
      <BlogPost :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const post = ref({})
const category = ref('' as string | string[])
const id = ref(1)

onBeforeMount(async () => {
  category.value = route.params.category as string
  id.value = Number(route.params.id)
  post.value = await queryContent('projects', String(category.value))
    .where({ id: { $eq: id.value } })
    .findOne()
})
</script>
