<template>
  <div class="space-y-12">
    <FormDynamic
      :validation="EnquiryValidation"
      :state="state"
      :schema="schema"
      @form-submitted="submitForm"
    >
      <UButton type="submit"> Submit </UButton>
    </FormDynamic>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
import { EnquiryValidation, Enquiry } from '@/types/forms'

const state = ref({
  fullName: '',
  company: '',
  phone: '',
  email: '',
  preferredContact: '',
  enquiryArea: '',
  message: ''
})

const schema = reactive([
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'input'
  },
  {
    name: 'company',
    label: 'Company',
    type: 'input'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input'
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'input'
  },
  {
    name: 'preferredContact',
    label: 'Preferred Contact',
    default: 'email',
    type: 'input'
  },
  {
    name: 'enquiryArea',
    label: 'Enquiry Area',
    type: 'select-menu',
    options: ['hire us', 'business starter package', 'collaboration', 'other']
  },
  {
    name: 'referred',
    label: 'How did you hear about us?',
    type: 'radio',
    default: 'google',
    options: [
      {
        name: 'google',
        label: 'Google',
        value: 'google'
      },
      {
        name: 'youtube',
        label: 'Youtube',
        value: 'youtube'
      },
      {
        name: 'referred',
        label: 'Referred',
        value: 'referred'
      },
      {
        name: 'other',
        label: 'Other',
        value: 'other'
      }
    ]
  },
  {
    name: 'message',
    label: 'Detailed Enquiry',
    type: 'textarea',
    fullWidth: true
  }
])

const { add } = useToast()

const submitForm = async (event: FormSubmitEvent<Enquiry>) => {
  console.log('form submit main', event)
  // const { error } = await useFetch('/api/enquiry', {
  //   method: 'POST',
  //   body: {
  //     fullName: event.fullName,
  //     company: event.company,
  //     jobTitle: event.jobTitle,
  //     email: event.email,
  //     phoneNumber: event.phoneNumber,
  //     preferredContact: event.preferredContact,
  //     enquiryArea: event.enquiryArea,
  //     detailedEnquiry: event.detailedEnquiry,
  //     bestTimeToContact: event.bestTimeToContact
  //   }
  // })

  // if (error) {
  //   add({ title: 'Failed to submit the form. Please try again.' })
  //   throw createError('Failed to submit the form. Please try again.')
  // } else {
  //   add({ title: 'Your message has been submitted. We will contact you soon.' })
  // }
}
</script>
