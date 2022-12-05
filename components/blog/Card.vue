<template>
  <div class="bg-indigo-50 relative w-full rounded-md shadow-sm lg:p-6 xl:p-8">
    <div role="article"
      class="focus:outline-none">
      <h1 class="blog-heading text-4xl md:text-3xl text-center f-m-w text-gray-800 font-bold py-4 lg:p-6 xl:p-8">
        Work in progress
      </h1>
      <div class="xl:px-0 px-4 last:px-0">
        <div class="relative md:flex items-start lg:mb-6 xl:mb-8 bg-white rounded-md shadow-md md:p-0 p-4 last:mb-0">
          <img role="img"
            aria-label="bag on a table"
            src="https://i.ibb.co/PxMNGGv/Rectangle-38.png"
            alt="Rectangle-38"
            class="focus:outline-none md:w-64 md:h-64 w-full h-full">
          <div class="md:ml-6 mr-6">
            <a href=""
              class="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
              <h3 class="focus:outline-none f-m-m text-3xl font-semibold leading-14 lg:mt-6 mt-8"> Title</h3>
            </a>
            <div class="my-10 md:my-4 flex items-center">
              <div class="flex items-center justify-center rounded-full lg:w-10 lg:h-10 w-10 h-10 overflow-hidden">
                <img src="/avatar.png"
                  alt="Ellipse-1"
                  role="img">
              </div>
              <div class="pl-2">
                <a href=""
                  class="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                  <h3 class="f-f-l text-xs lg:text-base">Drew MacGibbon</h3>
                </a>
                <h4 class="f-f-r text-xs text-gray-600">
                  Full-stack Developer
                </h4>
              </div>
            </div>
            <p class="focus:outline-none text-sm f-m-m text-gray-700 mb-20 mt-10 md:my-6">
              I will be listing what I consider important insights into certain topics
            </p>
            <div class="absolute bottom-6 right-9 flex justify-end items-center gap-8 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="md:text-sm text-xs leading-3 text-gray-500">
                6 min read
              </p>
              <AppButton>More</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
