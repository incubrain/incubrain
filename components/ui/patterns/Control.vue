<template>
  <div class="w-full relative">
    <div
      class="h-full w-full grid gap-4 xl:gap-8 auto-rows-[minmax(200px,10vw)] grid-cols-[repeat(auto-fill,minmax(200px,10vw))] justify-center md:justify-between items-center"
    >
      <div
        v-for="pattern in patterns"
        :key="pattern.id"
        class="h-full w-full"
      >
        <div
          class="rounded-full w-full h-full shadow-md overflow-hidden"
          :style="pattern.code"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const color = ref({
  bg: colorMode.value === 'dark' ? '#222222' : '#ffffff',
  op: 1,
  pat: colorMode.value === 'dark' ? '#0d8246' : '#50C878'
})

watch(colorMode, (newVal) => {
  color.value.bg = newVal.value === 'dark' ? '#222222' : '#ffffff'
  color.value.pat = newVal.value === 'dark' ? '#0d8246' : '#50C878'
})

const patterns = computed(() => {
  const colorValue = color.value
  return [
    {
      id: 1,
      code: `opacity: ${colorValue.op};background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, ${colorValue.bg} 21px ), repeating-linear-gradient( ${colorValue.pat}55, ${colorValue.pat} );`
    },
    {
      id: 2,
      code: `opacity: ${colorValue.op};background-image:  linear-gradient(${colorValue.pat} 2.1px, transparent 2.1px), linear-gradient(to right, ${colorValue.pat} 2.1px, ${colorValue.bg} 2.1px);background-size: 42px 42px;`
    },
    {
      id: 3,
      code: `opacity: ${colorValue.op};background-image:  linear-gradient(135deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(225deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(45deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(315deg, ${colorValue.pat} 25%, ${colorValue.bg} 25%);background-position:  10px 0, 10px 0, 0 0, 0 0;background-size: 10px 10px;background-repeat: repeat;`
    },
    {
      id: 4,
      code: `opacity: ${colorValue.op};background-image:  linear-gradient(135deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(225deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(45deg, ${colorValue.pat} 25%, transparent 25%), linear-gradient(315deg, ${colorValue.pat} 25%, ${colorValue.bg} 25%);background-position:  10px 0, 10px 0, 0 0, 0 0;background-size: 20px 20px;background-repeat: repeat;`
    },
    {
      id: 5,
      code: `opacity: ${colorValue.op};background-image:  repeating-linear-gradient(45deg, ${colorValue.pat} 25%, transparent 25%, transparent 75%, ${colorValue.pat} 75%, ${colorValue.pat}), repeating-linear-gradient(45deg, ${colorValue.pat} 25%, ${colorValue.bg} 25%, ${colorValue.bg} 75%, ${colorValue.pat} 75%, ${colorValue.pat});background-position: 0 0, 21px 21px;background-size: 42px 42px;`
    },
    {
      id: 6,
      code: `opacity: ${colorValue.op};background: linear-gradient(135deg, ${colorValue.pat}55 25%, transparent 25%) -21px 0/ 42px 42px, linear-gradient(225deg, ${colorValue.pat} 25%, transparent 25%) -21px 0/ 42px 42px, linear-gradient(315deg, ${colorValue.pat}55 25%, transparent 25%) 0px 0/ 42px 42px, linear-gradient(45deg, ${colorValue.pat} 25%, ${colorValue.bg} 25%) 0px 0/ 42px 42px;`
    },
    {
      id: 7,
      code: `opacity: ${colorValue.op};background-image: radial-gradient( ellipse farthest-corner at 21px 21px , ${colorValue.pat}, ${colorValue.pat} 50%, ${colorValue.bg} 50%);background-size: 21px 21px;`
    },
    {
      id: 8,
      code: `opacity: ${colorValue.op};background-image: radial-gradient(circle at center center, ${colorValue.pat}, ${colorValue.bg}), repeating-radial-gradient(circle at center center, ${colorValue.pat}, ${colorValue.pat}, 21px, transparent 42px, transparent 21px);background-blend-mode: multiply;`
    },
    {
      id: 9,
      code: `opacity: ${colorValue.op};background: repeating-linear-gradient( 45deg, ${colorValue.pat}, ${colorValue.pat} 10.5px, ${colorValue.bg} 10.5px, ${colorValue.bg} 52.5px );`
    },
    {
      id: 10,
      code: `opacity: ${colorValue.op};background: repeating-linear-gradient( -45deg, ${colorValue.pat}, ${colorValue.pat} 10.5px, ${colorValue.bg} 10.5px, ${colorValue.bg} 52.5px );`
    },
    {
      id: 11,
      code: `opacity: ${colorValue.op};background-image:  linear-gradient(30deg, ${colorValue.pat} 12%, transparent 12.5%, transparent 87%, ${colorValue.pat} 87.5%, ${colorValue.pat}), linear-gradient(150deg, ${colorValue.pat} 12%, transparent 12.5%, transparent 87%, ${colorValue.pat} 87.5%, ${colorValue.pat}), linear-gradient(30deg, ${colorValue.pat} 12%, transparent 12.5%, transparent 87%, ${colorValue.pat} 87.5%, ${colorValue.pat}), linear-gradient(150deg, ${colorValue.pat} 12%, transparent 12.5%, transparent 87%, ${colorValue.pat} 87.5%, ${colorValue.pat}), linear-gradient(60deg, ${colorValue.pat}77 25%, transparent 25.5%, transparent 75%, ${colorValue.pat}77 75%, ${colorValue.pat}77), linear-gradient(60deg, ${colorValue.pat}77 25%, transparent 25.5%, transparent 75%, ${colorValue.pat}77 75%, ${colorValue.pat}77);background-size: 42px 74px;background-position: 0 0, 0 0, 21px 37px, 21px 37px, 0 0, 21px 37px;`
    },
    {
      id: 12,
      code: `opacity: ${colorValue.op};background-image: linear-gradient(0deg, ${colorValue.bg} 50%, ${colorValue.pat} 50%);background-size: 21px 21px;`
    },
    {
      id: 13,
      code: `opacity: ${colorValue.op};background-image: radial-gradient(${colorValue.pat} 1.05px, ${colorValue.bg} 1.05px);background-size: 21px 21px;`
    },
    {
      id: 14,
      code: `opacity: ${colorValue.op};background-size: 21px 21px;background-image: repeating-linear-gradient(45deg, ${colorValue.pat} 0, ${colorValue.pat} 2.1px, ${colorValue.bg} 0, ${colorValue.bg} 50%);`
    },
    {
      id: 15,
      code: `opacity: ${colorValue.op};background-size: 42px 42px;background-image:  repeating-linear-gradient(0deg, ${colorValue.pat}, ${colorValue.pat} 2.1px, ${colorValue.bg} 2.1px, ${colorValue.bg});`
    },
    {
      id: 16,
      code: `opacity: ${colorValue.op};background: radial-gradient(circle, transparent 20%, ${colorValue.bg} 20%, ${colorValue.bg} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${colorValue.bg} 20%, ${colorValue.bg} 80%, transparent 80%, transparent) 52.5px 52.5px, linear-gradient(${colorValue.pat} 4.2px, transparent 4.2px) 0 -2.1px, linear-gradient(90deg, ${colorValue.pat} 4.2px, ${colorValue.bg} 4.2px) -2.1px 0;background-size: 105px 105px, 105px 105px, 52.5px 52.5px, 52.5px 52.5px;`
    }
  ]
})

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
  background-image: radial-gradient(
    ellipse farthest-corner at 21px 21px,
    v-bind(color.pat),
    v-bind(color.pat) 50%,
    v-bind(color.bg) 50%
  );
  background-size: 21px 21px;
}
</style>
