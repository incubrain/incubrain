import { z } from 'zod'

const phoneNumberSchema = z
  .string()
  .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
  .min(7)
  .optional()

const ProfessionalTitleEnum = z.enum(
  [
    'Front-end Developer',
    'Back-end Developer',
    'Full-stack Developer',
    'Mobile App Developer',
    'DevOps Engineer',
    'Data Scientist',
    'System Architect',
    'QA/Test Engineer',
    'Solo-founder',
    'Co-founder',
    'CTO (Chief Technology Officer)',
    'CEO (Chief Executive Officer)',
    'CPO (Chief Product Officer)',
    'COO (Chief Operating Officer)',
    'Technical Lead',
    'Product Manager',
    'UX/UI Designer',
    'Other'
  ],
  {
    errorMap: () => ({ message: 'Please select 1-3 appropriate professional roles' })
  }
)

const personalDetailFields = z.object({
  givenName: z
    .string()
    .min(2, 'Given Name is required.')
    .max(100, 'Given Name should not exceed 100 characters.'),
  surname: z.string().max(100, 'Surname should not exceed 100 characters.').optional(),
  email: z.string().email('Please provide a valid email.'),
  professionalTitle: z
    .array(ProfessionalTitleEnum)
    .nonempty('Please select at least one professional title.')
    .min(1, 'Please select at least one professional title.')
    .max(3, 'You can select up to 3 professional titles.')
})

const companyDetailFields = z.object({
  companyName: z
    .string()
    .min(1, 'Company Name is required.')
    .max(100, 'Company Name should not exceed 100 characters.'),
  companyLink: z
    .string()
    .url('Please provide a valid URL.')
    .max(100, 'Company link should not exceed 100 characters.'),
  companyStage: z.enum(
    ['Idea', 'Prototype', 'Launched', 'Revenue Generating', 'Profitable', 'Scaling'],
    {
      errorMap: () => ({ message: 'Please select a company/project stage' })
    }
  )
})

const messageField = z
  .string()
  .min(240, 'Message should be at least 240 characters.')
  .max(1500, 'Message should not exceed 1500 characters.')

const hireFields = z.object({
  projectBudget: z.enum(['0-$1k', '$1k-$5k', '$5k-$10k', '$10k+', 'unknown'], {
    errorMap: () => ({ message: 'Please select a project budget' })
  }),
  projectDuration: z.enum(['1 month', '3 months', '6 months', '6 months+', 'unknown'], {
    errorMap: () => ({ message: 'Please select a project duration' })
  })
})

export const serviceFormValidation = personalDetailFields.merge(companyDetailFields).extend({
  message: messageField
})

export const collaborateFormValidation = personalDetailFields.extend({
  message: messageField
})

export const hireUsFormValidation = personalDetailFields
  .merge(companyDetailFields)
  .merge(hireFields)
  .extend({
    message: messageField
  })

const formFieldValidation = z.object({
  name: z.string(),
  placeholder: z.string(),
  type: z.union([z.literal('input'), z.literal('textarea'), z.literal('select-menu')]),
  fullWidth: z.boolean().optional(),
  multiple: z.boolean().optional(),
  options: z.array(z.string()).optional()
})

// Types
export type FormFieldT = z.infer<typeof formFieldValidation>
export type ServiceT = z.infer<typeof serviceFormValidation>
export type HireUsT = z.infer<typeof hireUsFormValidation>
export type CollaborateT = z.infer<typeof collaborateFormValidation>
