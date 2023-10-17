<template>
  <div>
    <UTabs
      :items="tabs"
      :ui="{ wrapper: 'space-y-4 lg:space-y-8' }"
      :default-index="activeTab.index"
      class="w-full"
      @change="tabToggled"
    >
      <template
        v-for="tab in tabs"
        :key="tab.title.main"
        #[tab.slot]="{ item, index, selected }"
      >
        <div class="space-y-4 lg:space-y-8">
          <!-- <CommonTextBanner :banner-text="item.slider" /> -->
          <CommonFAQ :faqs="currentFAQs" />
          <UCard :ui="{ body: { padding: 'p4 lg:p-8' }, header: { padding: 'p4 lg:p-8' } }">
            <template #header>
              <CommonTitle :title="item.title" />
            </template>
            <FormDynamic
              :validation="forms[activeTab.index].validation"
              :state="forms[activeTab.index].state"
              :schema="forms[activeTab.index].schema"
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
import { Incubation, Collaborate, HireUs } from '~/types/forms'

type ContactNames = 'incubation' | 'hire-us' | 'collaborate'
interface ActiveTab {
  name: ContactNames
  index: number
}

const p = defineProps({
  defaultTab: {
    type: String,
    required: true
  }
})

const setActiveTab = (t: string | number): ActiveTab => {
  switch (t) {
    case 'incubation':
    case 0:
      return { name: 'incubation', index: 0 }
    case 'hire-us':
    case 1:
      return { name: 'hire-us', index: 1 }
    case 'collaborate':
    case 2:
      return { name: 'collaborate', index: 2 }
    default:
      return { name: 'incubation', index: 0 }
  }
}

const tabToggled = (t: number) => {
  console.log('tabToggled:', t)
  activeTab.value = setActiveTab(t)
}

const activeTab: Ref<ActiveTab> = ref(
  setActiveTab(p.defaultTab) || ({ name: 'incubation', index: 0 } as ActiveTab)
)

const { forms, submit } = useContact()
const { add } = useToast()

const tabs = [
  {
    slot: 'incubation',
    label: 'Incubation',
    title: {
      main: 'Business Starter',
      subtitle:
        'Are you a budding startup looking for the right incubation environment? Reach out and let us guide you through the process of kickstarting your tech journey with Incubrain.'
    },
    icon: 'i-heroicons-arrow-down-tray',
    slider: ''
  },
  {
    slot: 'hire-us',
    label: 'Hire us',
    title: {
      main: 'Hire us',
      subtitle:
        'Need specialized IT services or dedicated developers? Discover how our team can serve your immediate and long-term tech needs. Connect with us now.'
    },
    icon: 'i-heroicons-eye-dropper',
    slider: ''
  },
  {
    slot: 'collaborate',
    label: 'Collaborate',
    title: {
      main: 'Collaborate',
      subtitle:
        "Got an innovative idea or a proposal for a partnership? We're all ears! Share your thoughts, and let's explore the potential of our collaboration."
    },
    icon: 'i-heroicons-information-circle',
    slider: ''
  }
]

const submitForm = (event: Incubation | HireUs | Collaborate) => {
  try {
    submit({ formType: tabs[activeTab.value.index].slot, formData: event })
    add({ title: "Your message has been submitted. We'll be in contact soon." })
  } catch (error: Error | any) {
    add({
      title: 'There was an error submitting your message, please try again',
      description: error.message,
      color: 'red'
    })
    throw createError('Failed to submit the form. Please try again.')
  }
}

const contactFAQs = {
  title: {
    label: 'Frequently Asked Questions',
    main: 'Have a question? We have the answer.',
    subtitle: 'Check out our FAQs below or reach out to us directly.'
  },
  items: {
    incubation: [
      {
        label: 'What criteria do you look for in startups to incubate?',
        description:
          'We look for startups with a promising idea, a passionate team, and a viable market fit. Each application is reviewed on a case-by-case basis.'
      },
      {
        label: 'Is there a particular stage at which you prefer to intervene?',
        description:
          'We typically engage during the early stages, but are open to startups at any stage with a compelling proposition.'
      },
      {
        label: 'How long does the incubation process typically last?',
        description:
          "Our incubation process typically lasts for 6-12 months, depending on the startup's needs and progress."
      },
      {
        label: 'Do you take equity from startups you incubate?',
        description:
          'Our long-term vision includes incubating selected companies in exchange for company shares. Specific terms are discussed individually with each startup.'
      },
      {
        label: 'What resources and support do startups receive during incubation?',
        description:
          'Startups receive business coaching, product planning, testing, review, a full-time developer, and code reviews, ensuring a holistic support structure.'
      },
      {
        label: 'Can startups from any geographic location apply?',
        description:
          'Yes, while we are based in Pune, India, we are open to startups from around the globe looking for incubation support.'
      }
    ],
    'hire-us': [
      {
        label: "How do you ensure that the developer assigned matches our project's needs?",
        description:
          'Our team assesses your project requirements and matches you with a developer whose expertise aligns best with your needs.'
      },
      {
        label: "What measures do you take to guarantee the project's timeline?",
        description:
          'We adopt agile methodologies and maintain regular communication to ensure that projects remain on schedule.'
      },
      {
        label: 'How do you handle project confidentiality?',
        description:
          'We prioritize confidentiality and sign NDAs when required. All our developers follow strict ethical standards to ensure project confidentiality.'
      },
      {
        label: 'Is there post-project support?',
        description:
          'Yes, we offer post-project support and maintenance services to ensure that your product runs smoothly after the launch.'
      },
      {
        label: 'Do you offer discounts for long-term contracts?',
        description:
          'We are always open to discussions regarding pricing for long-term or large-scale projects.'
      },
      {
        label: "What's the process for hiring a developer from Incubrain?",
        description:
          'Reach out to us via the "Hire us" tab. We will understand your requirements, suggest the best fit, and take it forward from there.'
      }
    ],
    collaborate: [
      {
        label: 'What kind of collaborations are you open to?',
        description:
          'We are open to various forms of collaborations including partnerships, joint ventures, and co-hosting of events.'
      },
      {
        label: 'Do you engage in joint ventures or mergers?',
        description:
          'While our primary focus is on incubation and hiring, we are open to discussing joint ventures or mergers with the right partners.'
      },
      {
        label: 'How can I propose a collaboration?',
        description:
          'Simply reach out to us via the "Collaborate" tab with your proposal, and our team will review and get back to you.'
      },
      {
        label: 'Is there a specific sector or industry you prefer to collaborate in?',
        description:
          "While we primarily focus on the IT sector, we are open to potential collaborations in other sectors if there's a strong synergy."
      },
      {
        label: 'Do you offer co-hosting for tech events or webinars?',
        description:
          'Yes, we often engage in co-hosting opportunities for events and webinars that align with our expertise and values.'
      },
      {
        label: "What's the benefit of collaborating with Incubrain?",
        description:
          'With our deep expertise in the IT industry and our vast network, collaborating with Incubrain can provide valuable insights, resources, and reach for your initiative.'
      }
    ]
  }
}

const currentFAQs = computed(() => contactFAQs.items[activeTab.value.name])

watch(currentFAQs, (newValue) => {
  console.log('currentFAQs changed:', newValue)
})
</script>

<style scoped></style>
