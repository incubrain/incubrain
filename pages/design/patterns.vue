<template>
  <div>
    <GridCol1>
      <template #default>
        <UiPatternsControl>
          <div v-for="pattern in patterns"
            :key="pattern.id">
            <UiPatternsCard :bg-color="selectedColor"
              :bg-pattern="pattern.code" />
          </div>

        </UiPatternsControl>
      </template>
    </GridCol1>
  </div>
</template>

<script setup lang="ts">

const patterns = [
  {
    id: 1, code: 'background: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,radial-gradient(at 100% 100%,      rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), #8a3; background-size: 20px 20px;'
  },
  id: 1, code: 'background:
linear - gradient(63deg, #999 23 %, transparent 23 %) 7px 0,
  linear - gradient(63deg, transparent 74 %, #999 78 %),
  linear - gradient(63deg, transparent 34 %, #999 38 %, #999 58 %, transparent 62 %),
#444
background - size: 16px 48px;; ' },
id: 1, code: 'background: #36c;
background:
linear - gradient(115deg, transparent 75 %, rgba(255, 255, 255, .8) 75 %) 0 0,
  linear - gradient(245deg, transparent 75 %, rgba(255, 255, 255, .8) 75 %) 0 0,
    linear - gradient(115deg, transparent 75 %, rgba(255, 255, 255, .8) 75 %) 7px - 15px,
      linear - gradient(245deg, transparent 75 %, rgba(255, 255, 255, .8) 75 %) 7px - 15px,
#36c; ' },
id: 1, code: 'background:
linear - gradient(45deg, #92baac 45px, transparent 45px)64px 64px,
  linear - gradient(45deg, #92baac 45px, transparent 45px, transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),
  linear - gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px, transparent 113px, transparent 158px,#92baac 158px)
background - color: #e1ebbd
background - size: 128px 128px; ' },
id: 1, code: 'background:
linear - gradient(135deg, #ECEDDC 25 %, transparent 25 %) - 50px 0,
  linear - gradient(225deg, #ECEDDC 25 %, transparent 25 %) - 50px 0,
    linear - gradient(315deg, #ECEDDC 25 %, transparent 25 %),
    linear - gradient(45deg, #ECEDDC 25 %, transparent 25 %)
background - size: 100px 100px
background - color: #EC173A; ' },
]

definePageMeta({
  layout: 'tabbed'
})

</script>
