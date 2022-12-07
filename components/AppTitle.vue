<template>
  <div class="bg-gray-800 overflow-hidden">
    <div ref="signPage" class="mx-auto flex justify-center w-full pt-4">
      <div id="sign" ref="signWrap" class="relative flex items-center flex-col">
        <div ref="signBall" class=" bg-black rounded-full relative border-white border-2 w-[26px] h-[26px] z-10" />
        <div ref="signHanger" class=" border-white h-[65px] w-[65px] bottom-[20px] absolute rotate-45 border-2" />
        <div ref="signSign" class="border-[#F9CC0B] border-[6px] bg-[#f7f5e5] rounded-sm relative min-w-[120px] mt-[26px] z-10">
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
          class="mx-4 flex flex-row cursor-pointer mt-8 items-center overflow-x-scroll scrollbar-hide transition-all duration-300 ease-in-out"
          :style="!noTabs.includes(String(parentRoute[1]) || '/') ? {
            height: '60px'
          } : {
            height: '0px'
          }"
        >
          <li v-for="tab in currentTabs"
              :key="tab.id"
              class="py-5 px-12 text-sm rounded-t whitespace-nowrap transition-all duration-1000 ease-in-out relative bg-transparent"
              :style="route.name === tab.name ? {
                color: 'black',
                background: '#E5E7EB',
                fontWeight: 700,
              } : {
                color: 'white',
                fontWeight: 500,

              }"
            @click="navigateTo(`/${parentRoute[1] + tab.slug}`)">
            {{ tab.name }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup>

const noTabs = ['/', 'get-lost']

const route = useRoute()
const { tabs } = usePages()

const parentRoute = computed(() => route.path.split('/'))
const currentTabs = computed(() => tabs(parentRoute.value[1])?.children)

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const signSign = ref(null)
const signBall = ref(null)
const signHanger = ref(null)
const signWrap = ref(null)
const signPage = ref(null)

// function signSize() {
//   // ball size
//   const ball = signBall.value.clientWidth
//   // sign size, based on the text size
//   const signW = signSign.value.clientWidth
//   const signH = signSign.value.clientHeight

//   // hanger size, based on the sign size
//   signHanger.value.style.height = `${signW / 2}px`
//   signHanger.value.style.width = `${signW / 2}px`
//   signHanger.value.style.bottom = `${signH / 1.5}px`

//   // set distance from ball to sign
//   signSign.value.style['margin-top'] = `${(signW / 3) - (ball / 2)}px`

//   // make sign visible
//   // signWrap.value.style.dispatch = 'flex'

//   console.log('ssss', signSign.value, signSign.value.clientWidth)

// }
// onMounted(() => {
//   watchEffect(() => {
//     if (signPage.value) signSize()
//     if (parentRoute.value[1]) signSize()
//     else null
//   })
// })

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');

.sign {
  font-family: 'Nanum Brush Script', cursive;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image:  linear-gradient(135deg, #F9CC0B 25%, transparent 25%), linear-gradient(225deg, #F9CC0B 25%, transparent 25%), linear-gradient(45deg, #F9CC0B 25%, transparent 25%), linear-gradient(315deg, #F9CC0B 25%, #f7f5e5 25%);
  background-position:  10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;
}

#sign {
  transform: rotate(-45deg);
  z-index: 10;
  transform-origin: center 12px;
  animation: spin 6s cubic-bezier(.8, 0, .2, 1)  infinite;
}

@keyframes spin {
  50% { transform: rotate(45deg); }
  100% { transform: rotate(-45deg); }
}
</style>
