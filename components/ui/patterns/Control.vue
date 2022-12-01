<template>
  <div class="w-full h-full relative">
    <div class=" sticky w-full rounded-md shadow-lg p-8 flex flex-row flex-wrap top-20 z-50 justify-between bg-white">
      <div class="flex flex-row gap-1 w-1/2 lg:w-1/4">
        <span><font-awesome-icon icon="fa-solid fa-palette"
          class=" w-6 h-6 cursor-pointer" /> </span>
        <p> Background </p>
        <div
          class="min-w-6 w-6 h-6 rounded-full border-solid border-black border-2"
          :style="{ 'background-color': color.bg }"
          @click="openPicker('bg', picker.bg)"
        />
        <AppButton
          v-if="picker.bg"
          class="h-6 flex items-center p-0 mx-4"
          @click="openPicker('bg', picker.bg)"
        >
          close
        </AppButton>
        <hex-color-picker
          v-if="picker.bg"
          :color="color.bg"
          @color-changed="handleColorChanged('bg', $event)"
        />
      </div>
      <div class="flex flex-row gap-2 w-1/2 lg:w-1/4 justify-center">
        <span>
          <font-awesome-icon icon="fa-solid fa-brush"
            class="cursor-pointer w-6 h-6" />
        </span>
        <div
          class="w-6 h-6 rounded-full border-1-black"
          :style="{ 'background-color': color.pat }"
          @click="openPicker('pat', picker.pat)"
        />
        <AppButton
          v-if="picker.pat"
          class="h-6 flex items-center p-0 mx-4"
          @click="openPicker('pat', picker.pat)"
        >
          close
        </AppButton>
        <hex-color-picker
          v-if="picker.pat"
          :color="color.pat"
          @color-changed="handleColorChanged('pat', $event)"
        />
        <p> Pattern Color </p>
      </div>
      <div class="flex flex-row gap-2 w-1/2 lg:w-1/4 justify-center">
        <span>
          <font-awesome-icon icon="fa-solid fa-droplet"  class="cursor-pointer w-6 h-6"/>
        </span>
        <p> Opacity </p>
        <AppSlider
          :min="0"
          :value="0.5"
          :max="1"
        />
      </div>
      <span class="w-1/2 lg:w-1/4 justify-end flex">
        <font-awesome-icon icon="fa-solid fa-eye" class="cursor-pointer w-6 h-6 left-0 flex" />
      </span>
    </div>
    <div class="grid gap-12 my-20 grid-cols-2 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3">
      <div class="test-color-change w-[220px] h-[220px] rounded-full shadow-md overflow-hidden border-[10px] border-opacity-20 border-white" />
      <div
        v-for="pattern in patterns"
        :key="pattern.id"
      >
        <UiPatternsCard
          :style="pattern.code"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/vue-fontawesome'

const color = ref({
  bg: '#e5e5f7',
  op: 0.6,
  pat: '#444cf7'
})

function handleColorChanged (t, event) {
  color.value[t] = event.target.color
  if (t === 'bg') document.getElementById('tabBG').style.background = event.target.color
  console.log('eee', t, event.target.color, color.value[t])
}

const picker = ref({
  pat: false,
  bg: false
})

function openPicker (t, bol) {
  if (bol) { picker.value[t] = false } else { picker.value[t] = true }
}

const patterns = ref([
  { id: 1, code: `background-color: v-bind(color.value.bg)};opacity: ${color.value.op};background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, ${color.value.bg} 21px ), repeating-linear-gradient( ${color.value.pat}55, ${color.value.pat} );` },
  { id: 2, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image:  linear-gradient(${color.value.pat} 2.1px, transparent 2.1px), linear-gradient(to right, ${color.value.pat} 2.1px, ${color.value.bg} 2.1px);background-size: 42px 42px;` },
  { id: 3, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image:  linear-gradient(135deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(225deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(45deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(315deg, ${color.value.pat} 25%, ${color.value.bg} 25%);background-position:  10px 0, 10px 0, 0 0, 0 0;background-size: 10px 10px;background-repeat: repeat;` },
  { id: 4, code: `background-color: ${color.value.bg};opacity: ${color.value.op}; background-image:  linear-gradient(135deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(225deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(45deg, ${color.value.pat} 25%, transparent 25%), linear-gradient(315deg, ${color.value.pat} 25%, ${color.value.bg} 25%);background-position:  10px 0, 10px 0, 0 0, 0 0;background-size: 20px 20px;background-repeat: repeat;` },
  { id: 5, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image:  repeating-linear-gradient(45deg, ${color.value.pat} 25%, transparent 25%, transparent 75%, ${color.value.pat} 75%, ${color.value.pat}), repeating-linear-gradient(45deg, ${color.value.pat} 25%, ${color.value.bg} 25%, ${color.value.bg} 75%, ${color.value.pat} 75%, ${color.value.pat});background-position: 0 0, 21px 21px;background-size: 42px 42px;` },
  { id: 6, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background: linear-gradient(135deg, ${color.value.pat}55 25%, transparent 25%) -21px 0/ 42px 42px, linear-gradient(225deg, ${color.value.pat} 25%, transparent 25%) -21px 0/ 42px 42px, linear-gradient(315deg, ${color.value.pat}55 25%, transparent 25%) 0px 0/ 42px 42px, linear-gradient(45deg, ${color.value.pat} 25%, ${color.value.bg} 25%) 0px 0/ 42px 42px;` },
  { id: 7, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image: radial-gradient( ellipse farthest-corner at 21px 21px , ${color.value.pat}, ${color.value.pat} 50%, ${color.value.bg} 50%);background-size: 21px 21px;` },
  { id: 8, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image: radial-gradient(circle at center center, ${color.value.pat}, ${color.value.bg}), repeating-radial-gradient(circle at center center, ${color.value.pat}, ${color.value.pat}, 21px, transparent 42px, transparent 21px);background-blend-mode: multiply;` },
  { id: 9, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background: repeating-linear-gradient( 45deg, ${color.value.pat}, ${color.value.pat} 10.5px, ${color.value.bg} 10.5px, ${color.value.bg} 52.5px );` },
  { id: 10, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background: repeating-linear-gradient( -45deg, ${color.value.pat}, ${color.value.pat} 10.5px, ${color.value.bg} 10.5px, ${color.value.bg} 52.5px );` },
  { id: 11, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image:  linear-gradient(30deg, ${color.value.pat} 12%, transparent 12.5%, transparent 87%, ${color.value.pat} 87.5%, ${color.value.pat}), linear-gradient(150deg, ${color.value.pat} 12%, transparent 12.5%, transparent 87%, ${color.value.pat} 87.5%, ${color.value.pat}), linear-gradient(30deg, ${color.value.pat} 12%, transparent 12.5%, transparent 87%, ${color.value.pat} 87.5%, ${color.value.pat}), linear-gradient(150deg, ${color.value.pat} 12%, transparent 12.5%, transparent 87%, ${color.value.pat} 87.5%, ${color.value.pat}), linear-gradient(60deg, ${color.value.pat}77 25%, transparent 25.5%, transparent 75%, ${color.value.pat}77 75%, ${color.value.pat}77), linear-gradient(60deg, ${color.value.pat}77 25%, transparent 25.5%, transparent 75%, ${color.value.pat}77 75%, ${color.value.pat}77);background-size: 42px 74px;background-position: 0 0, 0 0, 21px 37px, 21px 37px, 0 0, 21px 37px;` },
  { id: 12, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image: linear-gradient(0deg, ${color.value.bg} 50%, ${color.value.pat} 50%);background-size: 21px 21px;` },
  { id: 13, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-image: radial-gradient(${color.value.pat} 1.05px, ${color.value.bg} 1.05px);background-size: 21px 21px;` },
  { id: 14, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-size: 21px 21px;background-image: repeating-linear-gradient(45deg, ${color.value.pat} 0, ${color.value.pat} 2.1px, ${color.value.bg} 0, ${color.value.bg} 50%);` },
  { id: 15, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background-size: 42px 42px;background-image:  repeating-linear-gradient(0deg, ${color.value.pat}, ${color.value.pat} 2.1px, ${color.value.bg} 2.1px, ${color.value.bg});` },
  { id: 16, code: `background-color: ${color.value.bg};opacity: ${color.value.op};background: radial-gradient(circle, transparent 20%, ${color.value.bg} 20%, ${color.value.bg} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${color.value.bg} 20%, ${color.value.bg} 80%, transparent 80%, transparent) 52.5px 52.5px, linear-gradient(${color.value.pat} 4.2px, transparent 4.2px) 0 -2.1px, linear-gradient(90deg, ${color.value.pat} 4.2px, ${color.value.bg} 4.2px) -2.1px 0;background-size: 105px 105px, 105px 105px, 52.5px 52.5px, 52.5px 52.5px;` }
])

const bgColor = ref('#ffff')
const patternColor = ref()
const patternOpacity = ref()
const patternSelected = ref()
// const patterns = ref()

useHead({
  script: [{ type: 'module', src: 'https://unpkg.com/vanilla-colorful?module' }]
})

</script>

<style scoped>
output {
  display: block;
  margin-top: 10px;
  font-size: 1.25rem;
  text-align: center;
}

.test-color-change {
  background-color: v-bind(color.bg);
  opacity: v-bind(color.op);
  background-image: radial-gradient(ellipse farthest-corner at 21px 21px, v-bind(color.pat), v-bind(color.pat) 50%, v-bind(color.bg) 50%);
  background-size: 21px 21px;
}

</style>
