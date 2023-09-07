<template>
  <div class="w-full h-full relative">
    <div
      class="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 grid-rows-6 lg:grid-rows-3 justify-center items-center gap-2 lg:gap-6 xl:gap-8"
    >
      <div
        v-for="i in icons"
        :id="`icon${i.id}`"
        :key="i.id"
        class="cursor-pointer flex flex-col justify-center items-center px-4 lg:px-8 py-6 lg:py-12  w-full h-auto foreground hover:bg-yellow-400 dark:hover:bg-yellow-600 rounded-md shadow-md"
        :data-info="i.icon"
        @click="copy(`icon${i.id}`)"
      >
        <span>
          <font-awesome-icon
            :icon="'fa-solid ' + i.icon"
            class="w-10 h-10 lg:w-12 lg:h-12"
          />
        </span>
        <p class="mt-6">
          {{ i.icon }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/vue-fontawesome'

const copy = (id: string) => {
  const el = document.getElementById(id)
  navigator.clipboard.writeText(el?.innerText as string).then(
    (copied) => {
      console.log('copy', copied)
    },
    (err) => {
      console.log('err', err)
      /* clipboard write failed */
    }
  )
}

const color = ref({
  bg: '#e5e5f7',
  op: 0.6,
  pat: '#444cf7'
})

const icons = ref([
  { id: 1, icon: 'fa-heart' },
  { id: 2, icon: 'fa-bomb' },
  { id: 3, icon: 'fa-poo' },
  { id: 4, icon: 'fa-hippo' },
  { id: 5, icon: 'fa-truck-fast' },
  { id: 6, icon: 'fa-face-smile' },
  { id: 7, icon: 'fa-calendar-days' },
  { id: 8, icon: 'fa-umbrella' },
  { id: 9, icon: 'fa-ghost' },
  { id: 10, icon: 'fa-mug-hot' },
  { id: 11, icon: 'fa-lemon' },
  { id: 12, icon: 'fa-fire' },
  { id: 13, icon: 'fa-plane' },
  { id: 14, icon: 'fa-tree' },
  { id: 15, icon: 'fa-ticket' },
  { id: 16, icon: 'fa-snowflake' },
  { id: 17, icon: 'fa-address-book' },
  { id: 18, icon: 'fa-bag-shopping' },
  { id: 19, icon: 'fa-user-secret' },
  { id: 20, icon: 'fa-mountain-sun' },
  { id: 21, icon: 'fa-cable-car' },
  { id: 22, icon: 'fa-clock' },
  { id: 23, icon: 'fa-gauge' },
  { id: 24, icon: 'fa-database' },
  { id: 25, icon: 'fa-address-card' },
  { id: 26, icon: 'fa-school' },
  { id: 27, icon: 'fa-brain' },
  { id: 28, icon: 'fa-ship' },
  { id: 29, icon: 'fa-award' },
  { id: 30, icon: 'fa-trophy' },
  { id: 31, icon: 'fa-robot' },
  { id: 32, icon: 'fa-bullseye' },
  { id: 33, icon: 'fa-crosshairs' },
  { id: 34, icon: 'fa-wine-glass' },
  { id: 35, icon: 'fa-yin-yang' },
  { id: 36, icon: 'fa-kiwi-bird' },
  { id: 37, icon: 'fa-otter' },
  { id: 38, icon: 'fa-glasses' },
  { id: 39, icon: 'fa-receipt' },
  { id: 40, icon: 'fa-dice' }
])

</script>

<style scoped>

</style>
