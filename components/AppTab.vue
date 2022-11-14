<template>
  <div
    v-if="visible"
  >
    <DynamicTab />
    <!-- <slot /> -->
  </div>
</template>

<script setup lang="ts">

import ProfileTab from './profile/Tab.vue'
import EventTab from './event/Tab.vue'
import ProjectTab from './project/Tab.vue'
import ChartTab from './chart/Tab.vue'
import BlogTab from './blog/Tab.vue'
import StatTab from './stat/Tab.vue'
import ListTab from './list/Tab.vue'
import ModalTab from './modal/Tab.vue'
import MobileTab from './mobile/Tab.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  tabId: {
    type: String,
    default: '',
  },
})

const DynamicTab = computed(() => {
  if (props.tabId === 'ProfileTab') return ProfileTab
  if (props.tabId === 'StatTab') return StatTab
  if (props.tabId === 'EventTab') return EventTab
  if (props.tabId === 'ProjectTab') return ProjectTab
  if (props.tabId === 'BlogTab') return BlogTab
  if (props.tabId === 'ChartTab') return ChartTab
  if (props.tabId === 'ListTab') return ListTab
  if (props.tabId === 'ModalTab') return ModalTab
  if (props.tabId === 'MobileTab') return MobileTab
})


// const id = computed(() => props.tabId)


onMounted(() => {
  // console.log('zz', `./profile/${props.tabId}.vue`)
  // const TestTab = resolveComponent(`${props.tabId}`)
  // const NewComponent = h(TestTab)
})

// const TestTab = computed(async () => {
//   if (props.tabId) return await import('./profile/Tab')
//   return null
// })

// onMounted(() => {
// })

// const Test = computed(() => resolveComponent(`${props.tabId}`))


// const AsyncComp = defineAsyncComponent(() => {
//   return new Promise((resolve, reject) => {
//     // ...load component from server
//     import(`./components/${folder}/Tab.vue`)
//     // resolve(/* loaded component */)
//   })
// })

</script>
