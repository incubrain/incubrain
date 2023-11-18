<template>
  <div class="font-[Oswald]">
    <h2 class="text-xl font-semibold pb-4">Table of Contents</h2>
    <ul>
      <li
        v-for="item in toc"
        :key="item.id"
      >
        <NuxtLink
          :class="{ 'text-primary-500 dark:text-primary-800': isActiveSection(item.id) }"
          :to="`#${item.id}`"
        >
          {{ item.text }}
        </NuxtLink>
        <ul
          v-if="item.children"
          :class="[
            'text-sm transition-all duration-700 ease-out overflow-hidden',
            isSectionOrChildActive(item) || expanded ? 'max-h-96' : 'max-h-0'
          ]"
        >
          <li
            v-for="child in item.children"
            :key="child.id"
            :class="{
              'ml-4': child.depth === 3,
              'text-primary-500 dark:text-primary-800': isActiveSection(child.id)
            }"
          >
            <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type TOCItem = {
  id: string
  depth: number
  text: string
  children?: TOCItem[]
}

const p = defineProps({
  toc: {
    type: Array as PropType<TOCItem[]>,
    required: true
  },
  expanded: {
    type: Boolean,
    default: false
  }
})

const activeSection = ref('')

const onScroll = () => {
  let currentSection = ''
  p.toc.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element && window.scrollY >= element.offsetTop - 200) {
      currentSection = section.id
    }
    section.children?.forEach((child) => {
      const childElement = document.getElementById(child.id)
      if (childElement && window.scrollY >= childElement.offsetTop - 200) {
        currentSection = child.id
      }
    })
  })
  activeSection.value = currentSection
}

const isActiveSection = (sectionId: string) => {
  return activeSection.value === sectionId
}

const isSectionOrChildActive = (section: TOCItem) => {
  if (isActiveSection(section.id)) {
    return true
  }
  return section.children?.some((child) => isActiveSection(child.id)) ?? false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped></style>
