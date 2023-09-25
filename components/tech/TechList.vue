<template>
  <div class="w-full flex flex-col items-center gap-2 lg:gap-6 xl:gap-8">
    <div class="w-full foreground p-6 shadow rounded-md">
      <div class="md:flex items-center justify-between">
        <h1
          tabindex="0"
          role="heading"
          aria-label="Product ranking"
          class="text-2xl font-medium leading-normal"
        >
          Our Interests
        </h1>
      </div>
    </div>

    <!-- <div
      v-for="tech in list"
      :key="tech.id"
      class="foreground w-full shadow rounded-lg p-6"
    >
      <div class="md:flex items-center">
        <div
          class="max-w-[60px] min-w-[60px] max-h-[60px] min-h-[60px] rounded-full border-4 p-1 flex justify-center items-center"
        >
          <a
            :href="tech.owner.url"
            target="_blank"
          >
            <NuxtImg
              :src="tech.owner.avatarUrl"
              :alt="tech.title + 'logo'"
              class="rounded-full"
            />
          </a>
        </div>
        <div class="md:ml-6 md:mt-0 mt-8 w-full">
          <div class="flex items-center justify-between">
            <a
              class="text-xl font-semibold"
              :href="tech.url"
              target="_blank"
            >
              {{ tech.name }}
            </a>
            <div class="flex gap-2 justify-center items-center">
              <UBadge
                v-if="tech.homepageUrl"
                color="primary"
                size="sm"
              >
                <a
                  :href="tech.homepageUrl"
                  target="_blank"
                >
                  website
                </a>
              </UBadge>
              <UBadge
                color="primary"
                size="sm"
                >{{ tech.stargazerCount.toLocaleString() }} stars
              </UBadge>
            </div>
          </div>
          <p class="text-sm pt-3">
            {{ tech.description }}
          </p>
        </div>
      </div>
    </div> -->
    {{ list[0].name }}
    <UPagination
      v-model="page"
      :total="totalItems"
      :page-count="pageCount"
      :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
    >
      <template #prev>
        <UTooltip text="Previous page">
          <UButton
            icon="i-heroicons-arrow-small-left-20-solid"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            class="rtl:[&_span:first-child]:rotate-180 me-2"
            @click="onClickPrev"
          />
        </UTooltip>
      </template>

      <template #next>
        <UTooltip text="Next page">
          <UButton
            icon="i-heroicons-arrow-small-right-20-solid"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            class="rtl:[&_span:last-child]:rotate-180 ms-2"
            @click="onClickNext"
          />
        </UTooltip>
      </template>
    </UPagination>
  </div>
</template>

<script setup lang="ts">
const list = ref([{ name: 'test' }])
const page = ref(1)
const totalItems = ref()
const pageCount = ref(25) // adjust this to match the number of items per page
const direction = ref('next') // new reactive reference

function onClickPrev() {
  direction.value = 'prev'
  page.value--
}

function onClickNext() {
  direction.value = 'next'
  page.value++
}

const { data, error } = useFetch('/api/starred-repos', {
  watch: [page, direction],
  body: { direction },
  method: 'POST'
})

watch(data, (newData) => {
  if (newData) {
    const body = newData.body
    list.value = body.repos
    totalItems.value = body.totalCount
  }
})

watch(error, (newError) => {
  if (newError) {
    throw createError(`Error fetching starred repos: ${newError}`)
  }
})
</script>

<style></style>
