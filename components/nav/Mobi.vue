<template>
  <div>
    <div class="fixed flex right-0 top-0 bg-white rounded-bl-full h-[80px] w-[80px] shadow-lg cursor-pointer">
      <span class="w-full h-full flex relative justify-end items-start mt-[18px] mr-[18px]">
        <font-awesome-icon
          icon="fa-solid fa-burger"
          class="text-black w-[26px] h-[26px]"
          @click="toggleMenu"
        />
      </span>
    </div>
    <div
      class="fixed invisible flex top-0 right-0 justify-center items-center transition-all ease-in-out duration-1000"
      ref="mobiMenu"
      :style=" visible ? {
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: 1
      } : {
        width: '0px',
        height: '0px',
        background: 'white',
        opacity: 0
      }"
      >
      <ul
        class="space-y-6 h-full flex flex-col justify-center items-center  w-[50%]"
        @click="toggleMenu"
      >
        <li
        v-for="page in pages"
        :key="page.id"
        @click="navigateTo(page.slug); setPage(page.name)"
        class="w-full flex items-center justify-center cursor-pointer"
        >
          <a to="/" class="w-full flex items-center justify-center">
            <span class="w-full text-center text-black bg-white rounded-lg dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-6">{{ page.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const mobiMenu = ref()
const visible = ref()
const { pages, setPage } = usePages()

function toggleMenu() {
  if (mobiMenu.value) {
    mobiMenu.value.classList?.toggle('invisible')
    if (mobiMenu.value.classList.contains('invisible')) visible.value = false
    else visible.value = true
  }
}

</script>

