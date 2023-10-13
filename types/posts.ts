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

export const postStatusSchema = z.enum(['published', 'draft', 'unpublished'])
export const dateSchema = z
  .string()
  .regex(/^\d{4}\/\d{2}\/\d{2}$/, 'Date must be in YYYY/MM/DD format.')

export const postCardSchema = z.object({
  title: z.string(),
  description: z.string().max(240, 'Description has a max length of 240 char'),
  category: postCategorySchema,
  tags: z.array(postTagSchema).max(3, 'Maximum of 3 tags allowed'),
  authors: z.array(z.number()),
  status: postStatusSchema,
  featured_image: z.string(),
  date: dateSchema,
  _path: z.string()
})

export const postCardArraySchema = z.array(postCardSchema)

export const postFullSchema = postCardSchema.extend({
  id: z.number(),
  body: z.object({}).passthrough(), // passthrough allows any structure within the object
  _dir: z.string(),
  _draft: z.boolean(),
  _extension: z.string(),
  _file: z.string(),
  _id: z.string(),
  _locale: z.string(),
  _partial: z.boolean(),
  _source: z.string(),
  _type: z.string()
})

export type PostCategories = z.infer<typeof postCategorySchema>
export type PostTags = z.infer<typeof postTagSchema>
export type PostFull = z.infer<typeof postFullSchema>
export type PostCard = z.infer<typeof postCardSchema>
