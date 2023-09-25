<template>
  <div>
    <CommonHero
      :img="{
        title: 'Featured image for the Dark Sky Conservation India Conference',
        src: 'images/hero.jpg',
        alt: 'Featured image for the Dark Sky Conservation India Conference'
      }"
      subtitle="send us a message, we don't bite"
      title="Reach out"
    />
    <div class="wrapper padded-x padded-y spaced-y">
      <CommonCardRow
        :label="cardRow.label"
        :title="cardRow.title"
        :description="cardRow.description"
        :items="cardRow.items"
      />
      <CommonTitle
        title="Contact Us"
        description="We are here to help you with your next project. Get in touch with us today."
      />
      <FormDynamic
        :validation="EnquiryValidation"
        :state="state"
        :schema="schema"
        @form-submitted="submitForm"
      >
        <UButton type="submit"> Submit </UButton>
      </FormDynamic>
      <CommonFAQ :faqs="contactFAQs" />
    </div>
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

const contactFAQs = [
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  },
  {
    label: 'How many developers are assigned?',
    content: 'One developer is assigned to each project.'
  }
]

const cardRow = {
  label: 'Incubrain Services',
  title: 'Helping your grow your business',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`,
  items: [
    {
      label: 'Business Starter',
      title: 'helping your get to the next level',
      description: 'Get support in talent acquisition and management.',
      image: 'images/icon.png',
      link: '/services/business-starter',
      price: '1,250'
    },
    {
      label: 'Hire us',
      title: 'Hire us',
      description: 'Prefer to directly hire us? We can help you with that too.',
      image: 'images/icon.png',
      link: '/services/hire-us',
      price: '$80 PH'
    }
  ]
}

</script>
