<template>
  <div class="h-full relative">
    <UTextarea
      v-if="p.field.type === 'textarea'"
      v-model="formState"
      :rows="6"
      :placeholder="p.field.placeholder"
    />
    <UInput
      v-if="p.field.type === 'input'"
      v-model="formState"
      :placeholder="p.field.placeholder"
    />
    <USelect
      v-if="p.field.type === 'select'"
      v-model="formState"
      :placeholder="p.field.placeholder"
      :options="p.field.options"
    />
    <div v-if="p.field.type === 'select-menu'">
      <USelectMenu
        v-if="p.field.multiple"
        v-model="formStateArray"
        :placeholder="p.field.placeholder"
        :options="p.field.options"
        multiple
      >
        <template #label>
          <span
            v-if="formStateArray.length"
            class="truncate"
          >
            {{ formStateArray.join(', ') }}
          </span>
        </template>
      </USelectMenu>
      <USelectMenu
        v-else
        v-model="formState"
        :placeholder="p.field.placeholder"
        :options="p.field.options"
      />
    </div>
    <UCheckbox
      v-if="p.field.type === 'checkbox'"
      v-model="selected"
      :label="p.field.label"
    />
    <div
      v-if="p.field.type === 'radio'"
      class="flex items-center flex-wrap gap-4 w-full"
    >
      <URadio
        v-for="option in p.field.options"
        :key="option.name"
        v-model="selected"
        :label="p.field.label"
        v-bind="option"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const p = defineProps({
  field: {
    type: Object,
    required: true
  }
})

const formState = ref()
const formStateArray = ref([] as string[])
const selected = ref(false)

const emit = defineEmits(['updated-value'])

watch(formState, (value) => {
  emit('updated-value', {
    name: p.field.name,
    value
  })
})

watch(formStateArray, (value) => {
  emit('updated-value', {
    name: p.field.name,
    value
  })
})
</script>

<style scoped></style>
