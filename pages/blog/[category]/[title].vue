<template>
  <div class="relative overflow-hidden">
    <div
      class="triangle hidden lg:block absolute top-0 left-0 before:border-t-emerald-400 dark:before:border-t-emerald-700 before:border-x-transparent before:border-b-transparent"
    />
    <div
      class="triangle hidden lg:block absolute top-0 right-0 before:border-t-emerald-400 dark:before:border-t-emerald-700 before:border-x-transparent before:border-b-transparent"
    />
    <div class="max-w-[1080px] mx-auto flex flex-col justify-center relative lg:py-20">
      <BlogPost :post="post" />
      <BlogNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const category = ref(String(route.params.category))
const p = usePostsStore()

const post = await p.getSinglePost({ path: route.path, category: category.value })
</script>

<style>
.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 50vh;
  border-style: solid;
  border-width: 50vw 50vw 0 50vw;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}
</style>
