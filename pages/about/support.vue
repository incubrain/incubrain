<template>
  <VeeForm
    v-slot="{ meta, submitForm }"
    :validation-schema="SupportFormValidation"
    :schema="supportForm"
    has-labels
  >
    <UButton
      type="submit"
      :disabled="meta.submitting"
      @click="submitForm(onSubmit)"
    >
      Submit
    </UButton>
  </VeeForm>
</template>

<script setup lang="ts">
import { Support, SupportFormValidation } from '@/types/forms'
import supportForm from '@/data/support.json'

const { add } = useToast()

const onSubmit = async (values: Support) => {
  const { error } = await useFetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (error) {
    add({ title: 'Failed to submit the form. Please try again.' })
  } else {
    add({ title: 'Your message has been submitted. We will contact you soon.' })
  }
}
</script>
