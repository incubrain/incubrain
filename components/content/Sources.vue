<template>
  <div class="py-4">
    <table class="w-full overflow-hidden border-collapse">
      <thead>
        <tr class="foreground">
          <th class="border border-color p-2 text-left font-semibold">Title</th>
          <th class="border border-color p-2 text-left font-semibold">About</th>
          <th class="border border-color p-2 text-left font-semibold">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, index) in sources"
          :key="index"
          class="text-sm odd:background even:foreground hover:bg-primary-50 dark:hover:bg-primary-950"
        >
          <td class="border border-color p-2">{{ value.title }}</td>
          <td class="border border-color p-2">{{ value.about }}</td>
          <td class="border border-color p-2">
            <UButton
              :to="value.link"
              target="_blank"
              icon="i-material-symbols-source-notes"
              variant="link"
              rel="noopener noreferrer"
              class="whitespace-nowrap"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type Source = {
  title: string
  about: string
  link: string
}

defineProps<{
  sources: Source[]
}>()
</script>
