<template>
  <div>
    <GridCol1>
      <template #default>
        <div class="grid gap-12 mx-auto my-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3">
          <div
            v-for="lot in lotties"
            :key="lot.id"
            class="flex justify-center items-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px]"
          >
            <AppLottie
              :src="lot.url"
            />
          </div>
        </div>
      </template>
    </GridCol1>
  </div>
</template>

<script setup lang="ts">

const lotties = [
  { id: 1, url: '/design/lottie/snapchat.json' },
  { id: 2, url: '/design/lottie/behance.json' },
  { id: 3, url: '/design/lottie/dribbble.json' },
  { id: 4, url: '/design/lottie/facebook.json' },
  { id: 5, url: '/design/lottie/instagram.json' },
  { id: 6, url: '/design/lottie/linkedin.json' },
  { id: 7, url: '/design/lottie/whatsapp.json' },
  { id: 8, url: '/design/lottie/pinterest.json' },
  { id: 9, url: '/design/lottie/spotify.json' },
  { id: 10, url: '/design/lottie/youtube.json' },
  { id: 11, url: '/design/lottie/twitter.json' },
  { id: 12, url: '/design/lottie/facebook-button.json' },
  { id: 13, url: '/design/lottie/whatsapp-button.json' },
  { id: 14, url: '/design/lottie/pinterest-button.json' },
  { id: 15, url: '/design/lottie/linkedin-button.json' },
  { id: 16, url: '/design/lottie/instagram-button.json' }
]

definePageMeta({
  layout: 'tabbed',
  name: 'Lotties'
})

</script>
