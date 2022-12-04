<template>
  <div>
    <Vue3Lottie
      :animation-link="props.src"
      :height="props.height"
      :width="props.width"
      :player-controls="true"
      :mode="props.mode"
      :speed="props.speed"
      :loop="true"
      :autoplay="true"
      :directio="props.mode"
    />
  </div>
</template>

<script setup lang="ts">
// :player-controls="true"
// :mode="props.mode"
// :speed="props.speed"
// :loop="true"
// :autoplay="true"
// :directio="props.mode"

interface Props {
  src?: string
  width?: string
  height?: string
  speed?: number
  mode?: string
}

const props = withDefaults(defineProps<Props>(), {
  src: 'https://assets10.lottiefiles.com/packages/lf20_soCRuE.json',
  width: '100%',
  height: '100%',
  speed: 1,
  mode: 'bounce'
})

// const options = {
//   minimizable: false,
//   playerSize: 'standard',
//   backgroundColor: 'transparent',
//   backgroundStyle: 'transparent',
//   theme: {
//     controlsView: 'standard',
//     active: 'light',
//     light: {
//       color: '#3D4852',
//       backgroundColor: '#fff',
//       opacity: '0.7',
//     },
//     dark: {
//       color: '#fff',
//       backgroundColor: '#202020',
//       opacity: '0.7'
//     }
//   }
// }
</script>

<style scoped>

@import 'vue3-lottie/dist/style.css';

</style>
