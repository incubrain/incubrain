<template>
  <div
    v-if="visible"
    class="tab-content"
  >
    <DyComponent />
    <!-- <slot /> -->
  </div>
</template>

<script setup lang="ts">

import ProfileTab from './profile/Tab.vue'
import StatTab from './stat/Tab.vue'
// import ProfileTab from './profile/Tab.vue'

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

const DyComponent = computed(() => {
  if (props.tabId === 'ProfileTab') return ProfileTab
  if (props.tabId === 'StatTab') return StatTab
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
