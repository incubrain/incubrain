<template>
  <div class="w-full flex flex-col items-center gap-2 lg:gap-6 xl:gap-8">
    <div class="w-full bg-white p-6 shadow rounded-md">
      <div class="md:flex items-center justify-between">
        <h1
          tabindex="0"
          role="heading"
          aria-label="Product ranking"
          class="text-2xl font-medium leading-normal text-gray-800"
        >
          Tech usage
        </h1>
        <div class="flex items-center md:mt-0 mt-6">
          <button
            aria-label="this week list"
            role="button"
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm leading-none text-indigo-700 p-3 bg-gray-100 rounded focus:outline-none hover:bg-gray-200"
          >
            Recent
          </button>
          <button
            aria-label="All time list"
            role="button"
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 ml-4 text-sm leading-none text-gray-600 p-3 rounded focus:outline-none hover:bg-gray-200"
          >
            All time
          </button>
        </div>
      </div>
    </div>

    <div
      v-for="tech in list"
      :key="tech.title"
      class="bg-white w-full shadow rounded-lg p-6"
    >
      <ContentRenderer :value="tech!">
        <div class="md:flex items-center">
          <div
            class="max-w-[60px] min-w-[60px] max-h-[60px] min-h-[60px] bg-black rounded-full border-black border-4 p-1 flex justify-center items-center"
          >
            <img
              :src="tech.image"
              :alt="tech.title + 'logo'"
              class="w-60"
            >
          </div>
          <div class="md:ml-6 md:mt-0 mt-8 w-full">
            <div class="flex items-center justify-between">
              <p class="text-xl font-semibold leading-5 text-gray-800">
                {{ tech.title }}
              </p>
              <p class="text-xs leading-3 text-indigo-700 px-4 py-2 bg-indigo-100 rounded-full">
                Top Ranked
              </p>
            </div>
            <p class="text-sm pt-3 text-gray-600">
              {{ tech.about }}
            </p>
          </div>
        </div>
        <div class="md:flex items-center justify-between mt-6">
          <div class="mt-4 flex items-center">
            <p
              v-for="tag in tech.tags"
              :key="tag"
              class="text-xs leading-3 text-blue-600 first:m-0 ml-7"
            >
              #{{ tag.toUpperCase() }}
            </p>
          </div>
          <!-- <div class="flex items-center">
                  <button
                    role="button"
                    aria-label="Like button"
                    class="flex items-center p-1 border rounded-sm border-gray-200 cursor-pointer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09134 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09134 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z"
                        fill="#EF4444"
                      />
                    </svg>
                    <span class="text-xs leading-3 text-gray-600 pl-1">Vote</span>
                  </button>
                  <p
                    class="text-base font-semibold leading-none text-gray-600 ml-7"
                  >
                    732 Votes
                  </p>
                </div> -->
          <a :href="tech.link">
            <AppButton> Find out more </AppButton>
          </a>
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">

const list = ref()

list.value = await queryContent('tech').skip(0).limit(5).find()

</script>

<style>

</style>
