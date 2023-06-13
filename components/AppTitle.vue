<template>
  <div class="bg-gray-800 overflow-hidden">
    <div
      ref="signPage"
      class="mx-auto flex justify-center w-full pt-4"
    >
      <div
        id="sign"
        ref="signWrap"
        class="relative flex items-center flex-col"
      >
        <div
          ref="signBall"
          class="bg-black rounded-full relative border-white border-2 w-[26px] h-[26px] z-10"
        />
        <div
          ref="signHanger"
          class="border-white h-[65px] w-[65px] bottom-[20px] absolute rotate-45 border-2"
        />
        <div
          ref="signSign"
          class="border-[#F9CC0B] border-[6px] bg-[#f7f5e5] rounded-sm relative min-w-[120px] mt-[26px] z-10"
        >
          <div class="sign w-full h-full flex justify-center items-center px-4">
            <h3 class="text-4xl leading-tight handwritten m-0">
              {{ capitalizeFirstLetter(parentRoute[1] || 'Welcome!!') }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-auto bg-gray-800 overflow-hidden">
      <ul
        class="container mx-auto px-4 sm:px-0 flex flex-row cursor-pointer mt-8 items-center overflow-x-scroll scrollbar-hide transition-all duration-300 ease-in-out"
        :style="
          !noTabs.includes(route.name)
            ? {
                height: '60px'
              }
            : {
                height: '0px'
              }
        "
      >
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.id"
          class="py-5 px-12 text-sm rounded-t whitespace-nowrap transition-all duration-1000 ease-in-out relative bg-transparent"
          :style="
            route.name === tab.component
              ? {
                  color: 'black',
                  background: '#E5E7EB',
                  fontWeight: 700
                }
              : {
                  color: 'white',
                  fontWeight: 500
                }
          "
          :to="{ name: tab.component }"
        >
          {{ tab.title }}
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
const noTabs = ['Home']

const route = useRoute()
const { tabs } = usePages()

const parentRoute = computed(() => route.path.split('/'))

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');

.sign {
  font-family: 'Nanum Brush Script', cursive;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: linear-gradient(135deg, #f9cc0b 25%, transparent 25%),
    linear-gradient(225deg, #f9cc0b 25%, transparent 25%),
    linear-gradient(45deg, #f9cc0b 25%, transparent 25%),
    linear-gradient(315deg, #f9cc0b 25%, #f7f5e5 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;
}

#sign {
  transform: rotate(-45deg);
  z-index: 10;
  transform-origin: center 12px;
  animation: spin 6s cubic-bezier(0.8, 0, 0.2, 1) infinite;
}

@keyframes spin {
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>
