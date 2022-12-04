<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="multicolor text-[8vw] leading-[10vw] text-center">Tracking My Github Movements</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

// interface Props {
//   src?: string
//   width?: string
//   height?: string
//   speed?: number
//   mode?: string
// }

// const props = withDefaults(defineProps<Props>(), {
//   src: 'https://assets10.lottiefiles.com/packages/lf20_soCRuE.json',
//   width: '100%',
//   height: '100%',
//   speed: 1,
//   mode: 'bounce'
// })

</script>

<style>

:root {
  --color-1: #261702;
  --color-2: #3e3622;
  --color-3: #F3CE6D;
  --color-4: #e89d11;
  --color-5: #f95f00;
}

.wrapper {
  line-height: 1;
  min-height: 100%;
  display: grid;
  place-items: center;
  min-height: calc(100vh - 16px);
}

.multicolor {
  font-family: "Exo", sans-serif;
  font-weight: 900;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(219deg,
      var(--color-1) 19%,
      transparent 19%, transparent 20%,
      var(--color-2) 20%, var(--color-2) 39%,
      transparent 39%, transparent 40%,
      var(--color-3) 40%, var(--color-3) 59%,
      transparent 59%, transparent 60%,
      var(--color-4) 60%, var(--color-4) 79%,
      transparent 79%, transparent 80%,
      var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

</style>
