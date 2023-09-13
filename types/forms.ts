import { z } from 'zod'

// Forms
export const ServiceValidation = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  benefits: z.array(z.string())
})

export const SupportValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10)
})

export const EnquiryValidation = z.object({
  fullName: z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  jobTitle: z.string().max(100).optional(),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
    .min(7)
    .optional(),
  preferredContact: z.string().max(100).optional(),
  enquiryArea: z.string().min(1).max(200),
  message: z.string().min(1).max(1000),
  bestTimeToContact: z.string().max(100).optional()
})

// Types
export type Enquiry = z.infer<typeof EnquiryValidation>
export type Service = z.infer<typeof ServiceValidation>
export type Support = z.infer<typeof SupportValidation>
