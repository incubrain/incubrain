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
const category = ref(String(route.params.category))
console.log('article', category.value, route)

onBeforeMount(async () => {
  post.value = await queryContent('projects', category.value)
    .where({ _path: route.path })
    .findOne()
})
</script>
