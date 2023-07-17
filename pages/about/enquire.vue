<template>
  <FormDynamic
    :validation-schema="EnquiryFormValidation"
    @submit="submitForm"
  >
    <!-- form fields here -->
    <UButton type="submit">Submit</UButton>
  </FormDynamic>
</template>

<script setup lang="ts">
import { EnquiryFormValidation, Enquiry } from '@/types/forms'

const { add } = useToast()

const submitForm = async (value: Enquiry) => {
  const { error } = await useFetch('/api/enquiry', {
    method: 'POST',
    body: {
      fullName: value.fullName,
      company: value.company,
      jobTitle: value.jobTitle,
      email: value.email,
      phoneNumber: value.phoneNumber,
      preferredContact: value.preferredContact,
      enquiryArea: value.enquiryArea,
      detailedEnquiry: value.detailedEnquiry,
      bestTimeToContact: value.bestTimeToContact
    }
  })

  if (error) {
    add({ title: 'Failed to submit the form. Please try again.' })
    throw createError('Failed to submit the form. Please try again.')
  } else {
    add({ title: 'Your message has been submitted. We will contact you soon.' })
  }
}
</script>
