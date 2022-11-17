<template>
    <AppTitle />
    <div class="w-full pb-10 bg-white" id="trezzz">
        <div class="container px-6 mx-auto">
            <div class="relative w-full">
                <div class="absolute w-full -mt-20 h-auto md:h-20 bg-gray-800">
                    <div class="md:hidden mt-8 -mb-1 bg-gray-200 w-full relative">
                        <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 9 12 5 16 9" />
                                <polyline points="16 15 12 19 8 15" />
                            </svg>
                        </div>
                    </div>
                    <ul class="hidden md:flex flex-row h-full cursor-pointer mt-6">
                        <li
                            v-for="tab in tabs('Design')?.children"
                            :key="tab.id"
                            @click="navigateTo(`/design${tab.slug}`)"
                            :class="route.fullPath.includes(tab.slug)
                                ? 'pt-4 px-12 text-sm font-bold text-black rounded-t transition-all bg-gray-200 -mb-10'
                                : 'pt-4 pb-0 px-12 text-sm font-semibold text-gray-300 transition-all'
                            "
                        >
                            {{ tab.name }}
                        </li>
                    </ul>
                </div>
                <!-- Remove class [ h-64 ] when adding a card block -->
                <div class="container mx-auto mb-10 bg-gray-200 shadow rounded-b h-full relative z-100">
                  <div class="w-full p-12">
                        <!-- Place your content here -->
                        <slot />
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()

const { tabs } = usePages()

</script>
