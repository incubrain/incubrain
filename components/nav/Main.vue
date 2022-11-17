## Tailwind UI Kit https://app.tailwinduikit.com/listing/webapp/master_layout/boxed_layout (Mac owns)
<template>
  <!-- Navigation starts -->
  <nav class="w-full mx-auto bg-gray-800 border-b border-gray-700 shadow z-20 relative">
        <div class="container px-6 h-16 flex items-center justify-between mx-auto">
            <div class="flex items-center">
                <div class="rounded-full relative p-3 flex justify-end text-white">
                    <input type="text" class="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out absolute left-0 ml-10" placeholder="Type something..." />
                    <svg @click="searchHandler($event)" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                </div>
            </div>
            <ul class="flex items-center justify-center h-full">
                <li
                    v-for="page in pages.slice(1,3)"
                    :key="page.id"
                    @click="navigateTo(page.slug); currentPage = page.name"
                    :class="route.fullPath.includes(page.slug)
                            ? 'cursor-pointer h-full xl:flex items-center text-sm text-yellow-300 tracking-normal hidden mr-10'
                            : 'hover:text-yellow-300 cursor-pointer h-full xl:flex hidden items-center text-sm text-white mr-10 tracking-normal relative'
                        "
                >
                    {{ page.name }}

                 </li>
                <li class="mx-0 xl:mr-12 cursor-pointer h-12">
                    <img src="/logo.png" alt="Drew MacGibbon Development (DM Development)" class="h-full">
                </li>
                <li
                    v-for="page in pages.slice(3,5)"
                    :key="page.id"
                    @click="navigateTo(page.slug); currentPage = page.name"
                    :class="route.fullPath.includes(page.slug)
                        ? 'cursor-pointer h-full xl:flex items-center text-sm text-yellow-300 tracking-normal mr-10 hidden'
                        : 'hover:text-yellow-300 cursor-pointer h-full xl:flex hidden items-center text-sm text-white mr-10 tracking-normal relative'"
                >
                    {{ page.name }}
                 </li>
            </ul>
            <div aria-haspopup="true" class="cursor-pointer h-full xl:flex items-center justify-end hidden relative">
                <div class="rounded">
                    <img class="rounded h-10 w-10 object-cover" src="/avatar.png" alt="logo" />
                </div>
            </div>
            <div class="visible xl:hidden flex items-center">
                <ul class="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                    <li
                        v-for="page in pages"
                        :key="page.id"
                        @click="navigateTo(page.slug); currentPage = page.name"
                        class="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-3 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none"
                    >
                        <div class="flex items-center">
                            <span class="leading-6 ml-2 font-bold"> {{ page.name }} </span>
                        </div>
                    </li>
                   
                    <li>
                    <hr class="border-b border-gray-300 w-full my-2" />
                    </li>
                    <li class="ml-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-300 flex items-center focus:text-yellow-300 focus:outline-none">
                        <div class="flex items-center">
                            <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                <img class="rounded h-10 w-10 object-cover" src="./avatar.png" alt="logo" />
                            </div>
                            <p class="leading-6 text-base ml-1 cursor-pointer">Drew MacGibbon</p>
                            <div class="sm:ml-2 text-white relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
                <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
                <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
                    <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const { pages, currentPage } = usePages()
const route = useRoute()

function MenuHandler(el: Event, val: boolean):void {
  if (el.currentTarget instanceof Element &&  el.currentTarget.parentElement!) {
    let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0]!;
    let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
    let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
    if (val) {
      MainList.classList.remove("hidden");
      el.currentTarget.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      showIcon.classList.remove("hidden");
      MainList.classList.add("hidden");
      el.currentTarget.classList.add("hidden");
    }
  }
}

function searchHandler(event: Event): void {
  if (event.currentTarget instanceof Element) {
    let Input = event.currentTarget.parentElement!.getElementsByTagName("input")[0];
    Input.classList.toggle("w-0");
    Input.classList.toggle("w-24");
  }
}

</script>