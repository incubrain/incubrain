<template>
  <div
    v-for="(author, i) in authorNames.filter((a) => authorIds.includes(a.id))"
    :key="`post-author-${author.id}`"
  >
    <span class="text-sm font-semibold last:after:content-[''] after:content-[',']">
      {{ author.givenName }} {{ author.surname }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Author {
  id: number
  givenName: string
  surname: string
}

const authorNames = <Author[]>[
  {
    id: 1,
    givenName: 'Drew',
    surname: 'MacGibbon'
  },
  {
    id: 2,
    givenName: 'Test',
    surname: 'eeRoony'
  },
  {
    id: 3,
    givenName: 'Drew',
    surname: 'MacGibbon'
  }
]

defineProps({
  authorIds: {
    type: Array as PropType<number[]>,
    required: true
  }
})
</script>

<style scoped></style>
