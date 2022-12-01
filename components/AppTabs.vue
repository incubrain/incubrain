<template>
  <AppTitle v-if="route.name !== 'home'" />
  <div class="w-full min-h-[100vh] bg-white px-4 mx-auto">
    <div class="relative w-full">
      <div class="absolute w-full -mt-20 h-auto md:h-20 bg-gray-800">
        <div class="md:hidden mt-8 -mb-1 bg-gray-200 w-full relative">
          <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-selector"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#A0AEC0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
        </div>
        <ul class="hidden md:flex flex-row h-full cursor-pointer mt-6 justify-center">
          <li
            v-for="tab in currentTabs"
            :key="tab.id"
            :class="route.name === tab.name
              ? 'pt-4 px-12 text-sm font-bold text-black rounded-t transition-all bg-gray-200 -mb-10'
              : 'pt-4 pb-0 px-12 text-sm font-semibold text-gray-300 transition-all'
            "
            @click="navigateTo(`/${parentRoute[1] + tab.slug}`)"
          >
            {{ tab.name }}
          </li>
        </ul>
      </div>
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="mx-auto mb-10 bg-gray-200 shadow rounded-b h-full relative z-100">
        <div class="w-full h-full p-8">
          <!-- Place your content here -->
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const { tabs } = usePages()

const parentRoute = computed(() => route.path.split('/'))
const currentTabs = computed(() => tabs(parentRoute.value[1])?.children)

</script>
