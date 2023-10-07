<template>
  <div>
    <UTabs
      :items="tabs"
      :ui="{ wrapper: 'space-y-4 lg:space-y-8' }"
      :default-index="getActiveTab(activeTab)"
      class="w-full"
    >
      <template
        v-for="tab in tabs"
        :key="tab.label"
        #[tab.slot]="{ item, index, selected }"
      >
        <div class="space-y-4 lg:space-y-8">
          <CommonTextBanner :banner-text="item.slider" />
          <UCard>
            <template #header>
              <h1 class="text-2xl font-bold pb-2"> {{ item.label }}</h1>
              <p> {{ item.content }} </p>
            </template>
            <FormDynamic
              :validation="EnquiryValidation"
              :state="state"
              :schema="schema"
              @form-submitted="submitForm"
            >
              <UButton type="submit"> Submit </UButton>
            </FormDynamic>
          </UCard>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
import { EnquiryValidation, Enquiry } from '@/types/forms'

defineProps({
  activeTab: {
    type: String,
    required: true
  }
})

const getActiveTab = (t: string) => {
  switch (t) {
    case 'collaborate':
      return 0
    case 'incubation':
      return 1
    case 'hire-us':
      return 2
    default:
      return 0
  }
}

const { add } = useToast()

const tabs = [
  {
    slot: 'collaborate',
    label: 'Collaborate',
    icon: 'i-heroicons-information-circle',
    slider:
      "We're always looking for new opportunities to collaborate with other businesses. If you have an idea for a project, we’d love to hear from you.",
    content: 'This is the content shown for Tab1'
  },
  {
    slot: 'incubation',
    label: 'Business Starter',
    icon: 'i-heroicons-arrow-down-tray',
    slider: 'Looking to take your SaaS business to the next level? We can help you with that.',
    content: 'And, this is the content for Tab2'
  },
  {
    slot: 'hire-us',
    label: 'Hire us',
    icon: 'i-heroicons-eye-dropper',
    slider: 'Prefer to directly hire us? We can help you with that too.',
    content: 'Finally, this is the content for Tab3'
  }
]

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

<style scoped></style>
