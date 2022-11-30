<template>
  <GridCol2Even>
    <template #1>
      <div class="xl:mt-8">
        <div class="text-2xl main-heading lg:text-4xl xl:text-6xl text-gray-800 tracking-1px">
          <h2 class="mt-2 lg:mt-2">
            HI, I'm
          </h2>
          <h2 class="mt-2 lg:mt-2 text-yellow-400">
            Drew MacGibbon
          </h2>
          <h2 class="mt-2 lg:mt-2">
            Call Me Mac
          </h2>
        </div>
        <h2 class="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suspendisse est mi
        </h2>
        <div class="lg:w-1/2 relative bg-white rounded-md p-6 shadow-lg mt-6 mx-auto">
          <div class="absolute right-0 top-0 -mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="blue" d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </svg>
          </div>
          <div class="flex items-center">
            <h2 class="text-base f-m-m ml-4 font-semibold text-black">
              {{ quote.author }}
            </h2>
          </div>
          <p class="text-base f-m-m mt-3 text-black">
            {{ quote.content }}
          </p>
        </div>
      </div>
    </template>
    <template #2>
      <div class="w-full mt-8 lg:mt-0 relative flex justify-center items-center">
        <!-- <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_wdhfjhyc.json"  background="transparent"  speed="0.5" class=" -mb-[60px]"  style="width: 360px;"  loop autoplay></lottie-player> -->
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_yeyxce62.json"
          mode="bounce"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="rotate-90 w-[220px] absolute right-[36px]"
        />
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_yeyxce62.json"
          mode="bounce"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="-rotate-90 w-[220px] absolute left-[36px]"
        />
        <div class="img-bg px-10 pt-10 flex justify-center items-center rounded-2xl relative z-20 overflow-hidden">
          <img src="/drew-img.png" alt="Drew MacGibbon" class=" h-[340px] -mb-[35px]">
        </div>
        <!-- <img class="w-full" src="https://i.ibb.co/80XYkkr/image.png" alt="hero image" /> -->
      </div>
      <div class="text-2xl main-heading lg:text-4xl xl:text-6xl text-gray-800 tracking-1px mx-auto">
        <h2 class="mt-8 lg:mt-8 text-center">
          👋, I'm Mac
        </h2>
      </div>
    </template>
  </GridCol2Even>
</template>

<script setup>

const quote = await $fetch('https://api.quotable.io/random')

useHead({
  script: [
    { type: 'text/javascript', src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', async: false }
  ]
})

</script>

<style>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');

.img-bg {
  background:
  radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
  radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
  linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
  linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
  linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
  linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
  background-size: 40px 60px;
}

.main-heading {
  font-family: 'Rubik Distressed', cursive;
}

.top-100 {
  animation: slideDown 0.5s ease-in-out;
}

/* Slider css below */
.slider {
  width: 100%;
  height: 600px;
  padding-top: 14px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slide-ana {
  height: 100%;
}

@keyframes slideDown {
  0% {
      top: -50%;
  }
  100% {
      top: 0;
  }
}
* {
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

</style>
