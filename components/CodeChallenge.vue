<template>
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
      <div class="w-full mb-8 rounded bg-white dark:bg-gray-800 shadow">
          <div class="w-full border-b border-gray-400 dark:border-gray-600 p-4 rounded-t">
            <slot name="spec">
              <h3> Title </h3>
              <p> Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

                  It should remove all values from list a, which are present in list b keeping their order.

                  arrayDiff([1,2],[1]) == [2]
                  If a value is present in b, all of its occurrences must be removed from the other:

                  arrayDiff([1,2,2,2,3],[2]) == [1,3]
               </p>
            </slot>
          </div>
          <div class="w-full bg-[#1F2937] text-white dark:bg-gray-700 rounded-b p-4">
            <slot name="solution">
              <p> function arrayDiff(a1, b1) {
                  const filtered = a1.filter(a => !b1.includes(a))
                  return filtered
                  }
              </p>
            </slot>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>
