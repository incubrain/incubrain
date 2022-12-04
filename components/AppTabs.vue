<template>
  <AppTitle v-if="route.name !== 'home'" />
  <div class="w-full min-h-[100vh] bg-white px-4 mx-auto">
    <div class="relative w-full">
      <div class="absolute w-full -mt-20 h-auto bg-gray-800">
        <ul
          class="flex flex-row h-full cursor-pointer mt-8 justify-center items-center overflow-x-scroll scrollbar-hide"
          :style="{ 'padding-bottom': '40px', 'margin-bottom': '-75px' }"
        >
          <li
            v-for="tab in currentTabs"
            :key="tab.id"
            :class="route.name === tab.name
              ? 'py-4 px-12 text-sm font-bold text-black rounded-t transition-all bg-gray-200 whitespace-nowrap relative'
              : 'pt6-4 pb-0 px-12 text-sm font-semibold text-gray-300 transition-all whitespace-nowrap'
            "
            @click="navigateTo(`/${parentRoute[1] + tab.slug}`)"
          >
            {{ tab.name }}
          </li>
        </ul>
      </div>
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="w-full mb-10 bg-gray-200 shadow rounded-b h-full relative z-100" id="tabBG">
        <div class="w-full h-full p-2 lg:p-8">
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
