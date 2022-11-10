<template>
  <div class="w-full pb-10 bg-gray-200">
      <div class="container px-6 mx-auto">
          <div class="relative w-full">
              <div class="absolute w-full -mt-20 h-auto md:h-20 bg-gray-800">
                  <div class="md:hidden mt-8 -mb-1 bg-white w-full relative">
                      <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="8 9 12 5 16 9" />
                              <polyline points="16 15 12 19 8 15" />
                          </svg>
                      </div>
                    <select
                      aria-label="Selected tab"
                      class="focus:outline-none form-select block w-full p-3 border-t border-l border-r border-gray-300 rounded-b text-gray-600 appearance-none bg-transparent relative z-10 cursor-pointer"
                    >
                    <option
                        v-for="tab in tabs.components"
                        :key="tab.title"
                        :selected="tab.selected"
                        :class="selectStyle(tab.selected)"
                    > {{ tab.title }}</option>
                    </select>
                  </div>
                  <ul class="hidden md:flex flex-row h-full cursor-pointer">
                  <li
                    v-for="tab in tabs.components"
                    :key="tab.title"
                    :class="tabStyle(tab.selected)"
                    @click="changeTab({ page: 'components', id: tab.id })"
                    >
                    {{ tab.title }}
                   </li>
                      <!-- <li class="border-l mt-6 rounded-t text-sm text-gray-800 px-10 py-4 bg-white">Quarterly</li> -->
                  </ul>
              </div>
              <!-- Remove class [ h-64 ] when adding a card block -->
              <div class="container mx-auto mb-10 bg-white h-64 shadow rounded-b">
                  <div class="w-full h-full">
                      <!-- Place your content here -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

const { tabs, changeTab } = useTabs()

function selectStyle(tf: boolean) {
    let st
    if (tf) st = "text-sm text-gray-600"
    else st = "text-sm text-gray-600"
    return st
}

function tabStyle(tf: boolean) {
    let st
    if (tf) st = "border-l mt-6 rounded-t text-sm text-gray-800 px-10 py-4 bg-white"
    else st = "pt-10 pl-12 pb-0 pr-12 text-sm text-gray-300"
    return st
}

</script>