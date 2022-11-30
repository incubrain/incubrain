<template>
  <div class="w-full h-100 px-5 py-10 mx-auto">
    <div
      class="flex items-center justify-between px-4 py-4 mb-6 bg-white md:px-6 md:mb-0 gap-x-3"
    >
      <p class="text-xs font-semibold leading-none text-gray-800 md:text-sm">
        21st April, 2022
      </p>
      <div class="flex items-center md:gap-x-3 gap-x-2">
        <button
          class="px-3 py-2 text-xs font-medium leading-3 text-indigo-700 rounded cursor-pointer arrival-btn_calendar_8 bg-indigo-50"
        >
          Day
        </button>
        <button
          class="px-3 py-2 text-xs font-medium leading-3 text-indigo-700 rounded cursor-pointer arrival-btn_calendar_8 bg-indigo-50"
        >
          Week
        </button>
        <button
          class="px-3 py-2 text-xs font-medium leading-3 text-white bg-indigo-700 rounded cursor-pointer arrival-btn_calendar_8 active"
        >
          Month
        </button>
      </div>
    </div>
    <div class="flex flex-col bg-white lg:flex-row">
      <div
        class="flex flex-col pt-4 pb-0 bg-gray-200 border-r md:pb-6 lg:pb-0 lg:pr-5 lg:flex-col md:justify-between lg:justify-start gap-x-2 lg:items-start md:items-center"
      >
        <div class="px-4 py-4 bg-white lg:min-w-[260px] w-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z"
              stroke="#4F46E5"
              stroke-linejoin="round"
            />
            <path
              d="M13.875 12C14.4963 12 15 11.4963 15 10.875C15 10.2537 14.4963 9.75 13.875 9.75C13.2537 9.75 12.75 10.2537 12.75 10.875C12.75 11.4963 13.2537 12 13.875 12Z"
              fill="#4F46E5"
            />
            <path
              d="M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z"
              fill="#4F46E5"
            />
            <path
              d="M13.875 15.75C14.4963 15.75 15 15.2463 15 14.625C15 14.0037 14.4963 13.5 13.875 13.5C13.2537 13.5 12.75 14.0037 12.75 14.625C12.75 15.2463 13.2537 15.75 13.875 15.75Z"
              fill="#4F46E5"
            />
            <path
              d="M17.625 15.75C18.2463 15.75 18.75 15.2463 18.75 14.625C18.75 14.0037 18.2463 13.5 17.625 13.5C17.0037 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 17.0037 15.75 17.625 15.75Z"
              fill="#4F46E5"
            />
            <path
              d="M6.375 15.75C6.99632 15.75 7.5 15.2463 7.5 14.625C7.5 14.0037 6.99632 13.5 6.375 13.5C5.75368 13.5 5.25 14.0037 5.25 14.625C5.25 15.2463 5.75368 15.75 6.375 15.75Z"
              fill="#4F46E5"
            />
            <path
              d="M10.125 15.75C10.7463 15.75 11.25 15.2463 11.25 14.625C11.25 14.0037 10.7463 13.5 10.125 13.5C9.50368 13.5 9 14.0037 9 14.625C9 15.2463 9.50368 15.75 10.125 15.75Z"
              fill="#4F46E5"
            />
            <path
              d="M6.375 19.5C6.99632 19.5 7.5 18.9963 7.5 18.375C7.5 17.7537 6.99632 17.25 6.375 17.25C5.75368 17.25 5.25 17.7537 5.25 18.375C5.25 18.9963 5.75368 19.5 6.375 19.5Z"
              fill="#4F46E5"
            />
            <path
              d="M10.125 19.5C10.7463 19.5 11.25 18.9963 11.25 18.375C11.25 17.7537 10.7463 17.25 10.125 17.25C9.50368 17.25 9 17.7537 9 18.375C9 18.9963 9.50368 19.5 10.125 19.5Z"
              fill="#4F46E5"
            />
            <path
              d="M13.875 19.5C14.4963 19.5 15 18.9963 15 18.375C15 17.7537 14.4963 17.25 13.875 17.25C13.2537 17.25 12.75 17.7537 12.75 18.375C12.75 18.9963 13.2537 19.5 13.875 19.5Z"
              fill="#4F46E5"
            />
            <path
              d="M6 2.25V3.75"
              stroke="#4F46E5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 2.25V3.75"
              stroke="#4F46E5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.75 7.5H2.25"
              stroke="#4F46E5"
              stroke-linejoin="round"
            />
          </svg>
          <p
            class="mt-3 mb-4 text-sm font-semibold leading-none text-gray-800"
          >
            Welcome!
          </p>
          <p
            class="text-xs leading-normal text-gray-600 lg:max-w-[228px] w-full"
          >
            Event that applications book will appear here. Click on an event
            to see the details and manage applicants event.
          </p>
        </div>
        <div class="px-4 py-4 bg-white lg:min-w-[260px] my-4 w-full">
          <p class="mb-4 text-sm font-semibold leading-none text-gray-800">
            Get Things Done
          </p>
          <div
            class="flex items-center px-2 py-3 rounded gap-x-1 bg-green-50"
          >
            <div class="w-2 h-2 bg-green-700 rounded-full mt-[1px]" />
            <div tabindex="0" class="ml-1">
              <p class="text-xs font-medium leading-3 text-green-700">
                New Event Planning
              </p>
            </div>
          </div>
          <div
            class="flex items-center px-2 py-3 rounded gap-x-1 bg-[#ECFEFF] mt-3"
          >
            <div class="w-2 h-2 bg-[#0E7490] rounded-full mt-[1px]" />
            <div tabindex="0" class="ml-1">
              <p class="text-xs font-medium leading-3 text-[#0E7490]">
                Meeting
              </p>
            </div>
          </div>
          <div
            class="flex items-center px-2 py-3 my-3 rounded gap-x-1 bg-pink-50"
          >
            <div class="w-2 h-2 bg-pink-600 rounded-full mt-[1px]" />
            <div tabindex="0" class="ml-1">
              <p class="text-xs font-medium leading-3 text-pink-700">
                Generating Reports
              </p>
            </div>
          </div>
          <div class="flex items-center px-2 py-3 rounded gap-x-1 bg-blue-50">
            <div class="w-2 h-2 bg-blue-700 rounded-full mt-[1px]" />
            <div tabindex="0" class="ml-1">
              <p class="text-xs font-medium leading-3 text-blue-700">
                Create New theme
              </p>
            </div>
          </div>
          <div aria-label="button" class="w-full mt-3">
            <button
              class="flex justify-center items-center gap-x-1 text-center w-full text-sm font-medium leading-none text-white px-6 py-3.5 bg-indigo-700 rounded-sm hover:bg-indigo-600 transform duration-300 ease-in-out"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3.0625V10.9375"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9375 7H3.0625"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Create New Event
            </button>
          </div>
        </div>
        <div class="px-4 py-4 bg-white lg:min-w-[260px] w-full">
          <p class="mb-2 text-sm font-semibold text-gray-800">
            Upcoming Events
          </p>
          <p class="text-xs text-gray-600">
            Don’t Miss Scheduled Events
          </p>
          <div class="px-4 py-4 mt-4 border border-gray-200 rounded-sm">
            <div class="flex justify-between">
              <div class="flex gap-x-2">
                <div
                  class="w-2 h-2 bg-indigo-700 rounded-full mt-[2px]"
                />
                <p class="text-xs font-medium leading-3 text-gray-800">
                  04 Jan 2022
                </p>
              </div>
              <p
                class="p-1 text-xs font-medium leading-3 text-indigo-700 rounded-sm bg-indigo-50"
              >
                5 am - 9 am
              </p>
            </div>
            <p class="text-xs leading-3 text-gray-600">
              World Braille Day
            </p>
          </div>
          <div class="px-4 py-4 my-3 mt-4 border border-gray-200 rounded-sm">
            <div class="flex justify-between">
              <div class="flex gap-x-2">
                <div
                  class="w-2 h-2 bg-indigo-700 rounded-full mt-[2px]"
                />
                <p class="text-xs font-medium leading-3 text-gray-800">
                  30 Jan 2022
                </p>
              </div>
              <p
                class="p-1 text-xs font-medium leading-3 text-indigo-700 rounded-sm bg-indigo-50"
              >
                5 am - 9 am
              </p>
            </div>
            <p class="text-xs leading-3 text-gray-600">
              World Man Day
            </p>
          </div>
          <div class="px-4 py-4 mt-4 border border-gray-200 rounded-sm">
            <div class="flex justify-between">
              <div class="flex gap-x-2">
                <div
                  class="w-2 h-2 bg-indigo-700 rounded-full mt-[2px]"
                />
                <p class="text-xs font-medium leading-3 text-gray-800">
                  04 Jan 2022
                </p>
              </div>
              <p
                class="p-1 text-xs font-medium leading-3 text-indigo-700 rounded-sm bg-indigo-50"
              >
                5 am - 10 am
              </p>
            </div>
            <p class="text-xs leading-3 text-gray-600">
              World Plants Day
            </p>
          </div>
        </div>
      </div>
      <div class="hidden w-full xl:overflow-x-hidden md:block">
        <table class="min-w-full bg-white">
          <thead class="items-center">
            <tr class="h-12 border border-gray-200 rounded-lg bg-gray-50">
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Sun
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Mon
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Tue
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Wed
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Thu
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Fri
                </p>
              </th>
              <th class="px-10">
                <p
                  class="text-sm font-medium text-center text-gray-800 cursor-pointer"
                >
                  Sat
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-300">
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-400" />
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-400" />
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-400" />
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-400" />
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  1
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[20%] md:w-40 py-3 px-2 ml-[10px] mt-[-115px] rounded bg-indigo-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="lg:w-2 lg:h-2 min-w-[8px] min-h-[8px] bg-indigo-700 rounded-full lg:mt-[1px] mt-[-16px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-indigo-700"
                    >
                      Design Review <span class="ml-1">(8 AM - 10 AM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  2
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  3
                </p>
              </td>
            </tr>
            <tr class="relative w-full border-b border-gray-300">
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  4
                </p>
              </td>
              <td class="relative border-r border-gray-300 xl:static">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  5
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  6
                </p>
              </td>
              <td class="relative border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  7
                </p>
                <div class="absolute flex items-center ml-4 -mt-16" />
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  8
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[35%] md:w-40 py-3 px-2 ml-[10px] mt-[-115px] rounded bg-green-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="lg:w-2 lg:h-2 min-w-[8px] min-h-[8px] bg-green-600 rounded-full lg:mt-[1px] mt-[-16px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-green-700"
                    >
                      Family Trip <span class="ml-1">(10 AM - 5 PM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  9
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  10
                </p>
              </td>
            </tr>
            <tr class="relative border-b border-gray-300">
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  11
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[25%] md:w-40 py-2 px-2 ml-[10px] mt-[-115px] rounded bg-pink-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="lg:w-2 lg:h-2 min-w-[8px] min-h-[8px] bg-pink-700 rounded-full lg:mt-[1px] mt-[-16px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-pink-700"
                    >
                      Dart Game<span class="ml-1">(9 PM - 11 PM) </span>
                    </p>
                  </div>
                </div>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[25%] md:w-40 py-2 px-2 ml-[10px] lg:mt-[-60px] mt-[-50px] rounded bg-[#ECFEFF] xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="w-2 h-2 bg-[#0891B2] rounded-full mt-[1px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-[#0891B2]"
                    >
                      Dinner<span class="ml-1">(8 PM - 10 PM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  12
                </p>
              </td>
              <td class="relative border-r border-gray-300 xl:static">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  13
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  14
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  15
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  16
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[20%] md:w-40 py-3 px-2 ml-[10px] mt-[-115px] rounded bg-indigo-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="w-2 h-2 bg-indigo-700 rounded-full mt-[1px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-indigo-700"
                    >
                      Grocery <span class="ml-1">(6 AM - 8 AM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs font-medium text-gray-600">
                  17
                </p>
              </td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  18
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  19
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[20%] md:w-40 py-3 px-2 ml-[10px] mt-[-115px] rounded bg-blue-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="lg:w-2 lg:h-2 min-w-[8px] min-h-[8px] bg-blue-700 rounded-full lg:mt-[1px] mt-[-16px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-blue-700"
                    >
                      Doctor’s Visit <span class="ml-1">(3 PM - 5 PM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  20
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  21
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  22
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  23
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  24
                </p>
              </td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  25
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  26
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  27
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  28
                </p>
                <div
                  class="absolute flex items-center gap-x-1 2xl:w-[20%] md:w-40 py-3 px-2 ml-[10px] mt-[-115px] rounded bg-purple-50 xl:w-[20%] lg:w-[20%]"
                >
                  <div
                    class="lg:w-2 lg:h-2 min-w-[8px] min-h-[8px] bg-purple-700 rounded-full lg:mt-[1px] mt-[-16px]"
                  />
                  <div tabindex="0" class="ml-1">
                    <p
                      class="text-xs font-medium leading-normal text-purple-700"
                    >
                      Client Meetup <span class="ml-1">(9 AM - 11 AM)</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  29
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  30
                </p>
              </td>
              <td class="border-r border-gray-300">
                <p class="pt-2 pb-32 pl-2 text-xs text-gray-600">
                  31
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="block mt-6 md:hidden">
      <div
        class="flex items-center justify-between w-full px-1 py-8 overflow-x-auto bg-white"
      >
        <table class="w-full">
          <thead>
            <tr>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Su
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Mo
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Tu
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    We
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Th
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Fr
                  </p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-sm font-medium text-center text-gray-600">
                    Sa
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pt-6">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-sm text-gray-400" />
                </div>
              </td>
              <td class="pt-[22px]">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-sm text-gray-400" />
                </div>
              </td>
              <td class="pt-6">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-400" />
                </div>
              </td>
              <td class="pt-6">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-400" />
                </div>
              </td>
              <td class="pt-6">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    1
                  </p>
                  <div
                    class="absolute flex items-center w-[60px] py-[2px] ml-[55px] mt-4 border-l-4 border-indigo-700 rounded-full bg-indigo-50"
                  />
                </div>
              </td>
              <td class="pt-6">
                <div
                  class="relative flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    2
                  </p>
                </div>
              </td>
              <td class="pt-[22px]">
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    3
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    4
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    5
                  </p>
                </div>
              </td>
              <td>
                <div class="w-full h-full">
                  <div
                    class="relative flex items-center justify-center w-full rounded-full cursor-pointer"
                  >
                    <a
                      tabindex="0"
                      role="link"
                      class="flex items-center justify-center text-xs text-gray-600"
                    >
                      6</a>
                    <div
                      class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-6 border-l-4 border-[#16A34A] rounded-full bg-[#F0FDF4]"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    7
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    8
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    9
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    10
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    11
                  </p>
                  <div
                    class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-6 border-l-4 border-[#BE185D] rounded-full bg-[#FDF2F8]"
                  />
                  <div
                    class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-8 border-l-4 border-[#0891B2] rounded-full bg-[#ECFEFF]"
                  />
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p class="text-xs text-gray-600">
                    12
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600 hover:rounded"
                  >
                    13
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    14
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    15
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    16
                  </p>
                  <div
                    class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-8 border-l-4 border-[#4338CA] rounded-full bg-[#EEF2FF]"
                  />
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    17
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    18
                  </p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    19
                  </p>
                  <div
                    class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-7 border-l-4 border-indigo-700 rounded-full bg-indigo-50"
                  />
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    20
                  </p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    21
                  </p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2">
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    22
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    23
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    24
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    25
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    26
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    27
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    28
                  </p>
                  <div
                    class="absolute flex items-center w-12 py-[2px] ml-[40px] mt-7 border-l-4 border-[#9333EA] rounded-full bg-[#F5F3FF]"
                  />
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    29
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    30
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center w-full px-2 py-2 cursor-pointer"
                >
                  <p
                    class="flex items-center justify-center w-6 h-6 text-xs text-gray-600"
                  >
                    31
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const allArrivalBtns_calendar_8 = document.querySelectorAll(
      '.arrival-btn_calendar_8'
    )

    allArrivalBtns_calendar_8.forEach((e) => {
      e.addEventListener('click', () => {
        allArrivalBtns_calendar_8.forEach((y) => {
          if (y.classList.contains('active') && y != e) {
            y.classList.toggle('text-white')
            y.classList.toggle('bg-indigo-700')
            y.classList.toggle('active')
            y.classList.toggle('bg-indigo-50')
            y.classList.toggle('text-indigo-700')
          }
        })
        if (!e.classList.contains('active')) {
          e.classList.add('text-white')
          e.classList.add('bg-indigo-700')
          e.classList.add('bg-indigo-50')
          e.classList.remove('text-indigo-700')
          e.classList.remove('bg-indigo-50')
          e.classList.add('active')
        }
      })
    })
  }
}

</script>

<style scoped>

/* width */
::-webkit-scrollbar {
width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #555;
}

</style>
