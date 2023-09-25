<template>
  <div>
    <UTextarea
      v-if="p.field.type === 'textarea'"
      v-model="formState"
      :placeholder="p.field.label"
    />
    <UInput
      v-if="p.field.type === 'input'"
      v-model="formState"
      :placeholder="p.field.label"
    />
    <USelect
      v-if="p.field.type === 'select'"
      v-model="formState"
      :placeholder="p.field.label"
      :options="p.field.options"
    />
    <USelectMenu
      v-if="p.field.type === 'select-menu'"
      v-model="formState"
      :placeholder="p.field.label"
      :options="p.field.options"
    />
    <UCheckbox
      v-if="p.field.type === 'checkbox'"
      v-model="selected"
      :label="p.field.label"
    />
    <div class="grid grid-flow-col auto-cols-max gap-4">
      <URadio
        v-if="p.field.type === 'radio'"
        v-for="option in p.field.options"
        v-model="selected"
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

const formState = ref(p.field.value)
const selected = ref(false)

const emit = defineEmits(['updated-value'])

watch(formState, (value) => {
  emit('updated-value', {
    name: p.field.name,
    value
  })
})
</script>

<style scoped></style>
