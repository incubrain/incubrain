<template>
<div class="container mx-auto">
        <div class="flex flex-wrap">
            <div class="md:w-2/3 w-full md:pr-8">
                <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
                <div class="rounded">
                  <slot name="1" />
                </div>
              </div>
              <div class="md:w-1/3 w-full">
                <div class="rounded h-full">
                  <slot name="2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
