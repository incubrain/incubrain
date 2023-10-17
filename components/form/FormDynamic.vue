<template>
  <UForm
    :schema="p.validation"
    :state="formState"
    @submit="submit"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 pb-4 lg:pb-8">
      <UFormGroup
        v-for="field in schema"
        :key="field.name"
        :name="field.name"
        :class="{
          'w-full md:col-span-2': field.fullWidth
        }"
      >
        <!-- <template
          v-if="field.showLabel"
          #label
        >
          <p class="pb-2"> {{ field.label }} </p>
        </template> -->
        <FormComponent
          :field="field"
          @updated-value="updateState"
        />
      </UFormGroup>
    </div>
    <slot />
  </UForm>
</template>

<script setup lang="ts">
const p = defineProps({
  schema: {
    type: Object,
    required: true
  },
  validation: {
    type: Object,
    required: true
  },
  state: {
    type: Object,
    required: true
  },
  hasLabels: {
    type: Boolean,
    default: true
  }
})

const formState = ref(p.state)

const updateState = (event: { name: string; value: string }) => {
  formState.value[event.name] = event.value
}

const emit = defineEmits(['form-submitted'])

const submit = () => {
  emit('form-submitted', formState.value)
}
</script>
