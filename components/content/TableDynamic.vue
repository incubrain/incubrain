<template>
  <div class="py-4">
    <table class="w-full overflow-hidden border-collapse">
      <thead>
        <tr class="foreground">
          <th
            v-for="heading in headings"
            :key="heading"
            class="border border-color p-2 text-left font-semibold"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in modifiedRows"
          :key="rowIndex"
          class="text-sm odd:background even:foreground hover:bg-primary-50 dark:hover:bg-primary-950"
        >
          <td
            v-for="(value, key) in row"
            :key="key"
            class="border border-color p-2"
          >
            <div v-html="value" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type TableRow = Record<string, any>

const p = defineProps<{
  addLink: string
  headings: string[]
  rows: TableRow[]
}>()

const modifiedRows = ref(
  p.rows.map((row) => {
    const newRow = { ...row }
    if (newRow.link) {
      newRow[p.addLink] = `<a href="${newRow.link}" target="_blank" class="link">${newRow[p.addLink]}</a>`
      delete newRow.link
    }
    return newRow
  })
)
</script>
