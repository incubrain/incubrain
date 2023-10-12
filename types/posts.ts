import { z } from 'zod'

export const postCategorySchema = z.enum(['all', 'frontend', 'backend', 'business', 'projects'])
export const postTagSchema = z.enum([
  // frontend
  'nuxt',
  'vue',
  'typescript',
  // backend
  'nitro',
  'supabase',
  'postgresql',
  'auth',
  'ci/cd',
  // design
  'tailwindcss',
  // general
  'learning',
  'code quality',
  'testing',
  'productivity'
])

export type PostCategories = z.infer<typeof postCategorySchema>
export type PostTags = z.infer<typeof postTagSchema>
