## Tailwind UI Kit https://app.tailwinduikit.com/listing/webapp/master_layout/boxed_layout (Mac owns)
<template>
  <!-- Navigation starts -->
  <nav class="w-full mx-auto bg-gray-800 shadow relative z-[1000] m-0">
    <div class="container px-6 h-16 flex items-center justify-between mx-auto">
      <div class="flex items-center w-[68.72px] lg:w-[40px] h-full bg-red">
      <!-- <div class="rounded-full relative p-3 flex justify-end text-white">
        <input type="text" class="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out absolute left-0 ml-10" placeholder="Type something..." />
        <svg @click="searchHandler($event)" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
        </div> -->
      </div>
      <ul class="flex items-center justify-center h-full">
        <li
          v-for="page in pages.slice(1,3)"
          :key="page.id"
          :class="route.fullPath.includes(page.slug)
            ? 'cursor-pointer h-full lg:flex items-center text-sm text-yellow-300 tracking-normal hidden mr-10 min-w-[50px]'
            : 'hover:text-yellow-300 cursor-pointer h-full lg:flex hidden items-center text-sm text-white mr-10 tracking-normal relative  min-w-[50px]'
          "
          @click="navigateTo(page.slug); setPage(page.name)"
        >
          {{ page.name }}
        </li>
        <li class="mx-0 lg:mr-12 cursor-pointer h-12">
          <img src="/logo.png" alt="Drew MacGibbon Development (DM Development)" class="h-full" @click="navigateTo(pages[0].slug); setPage(pages[0].name)">
        </li>
        <li
          v-for="page in pages.slice(3,5)"
          :key="page.id"
          :class="route.fullPath.includes(page.slug)
            ? 'cursor-pointer h-full lg:flex items-center text-sm text-yellow-300 tracking-normal mr-10 hidden'
            : 'hover:text-yellow-300 cursor-pointer h-full lg:flex hidden items-center text-sm text-white mr-10 tracking-normal relative'"
          @click="navigateTo(page.slug); setPage(page.name)"
        >
          {{ page.name }}
        </li>
      </ul>
      <div aria-haspopup="true" class="cursor-pointer h-full lg:flex items-center justify-end hidden relative">
        <div class="rounded">
          <img class="rounded h-10 w-10 object-cover" src="/avatar.png" alt="logo">
        </div>
      </div>
      <div
        class="lg:hidden flex items-center flex-end"
      >
        <NavMobi />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

const { pages, setPage } = usePages()
const route = useRoute()

// function searchHandler (event: Event): void {
//   if (event.currentTarget instanceof Element) {
//     const Input = event.currentTarget.parentElement!.getElementsByTagName('input')[0]
//     Input.classList.toggle('w-0')
//     Input.classList.toggle('w-24')
//   }
// }

</script>
