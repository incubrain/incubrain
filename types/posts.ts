import { z } from 'zod'

// !important: if you change post validation eg. add a new tag, update the blog template: content\blog\.template.md

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
  'productivity',
  'culture'
])

export const postStatusSchema = z.enum(['published', 'draft', 'unpublished'])
export const dateSchema = z
  .string()
  .regex(/^\d{4}\/\d{2}\/\d{2}$/, 'Date must be in YYYY/MM/DD format.')

export const postCardSchema = z.object({
  title: z
    .string()
    .min(40, 'Title must be at least 40 char long')
    .max(70, 'Title has a max length of 70 char'),
  description: z
    .string()
    .min(180, 'Description must be at least 180 char long')
    .max(260, 'Description has a max length of 260 char'),
  category: postCategorySchema,
  tags: z
    .array(postTagSchema)
    .min(3, 'Minimum of 1 tag allowed')
    .max(3, 'Maximum of 3 tags allowed'),
  authors: z.array(z.number().lt(2)).refine((items) => new Set(items).size === items.length, {
    message: 'Authors must be an array of unique numbers'
  }),
  status: postStatusSchema,
  featured_image: z.string(),
  date: dateSchema,
  _path: z.string()
})

export const postCardArraySchema = z.array(postCardSchema)

export const postFullSchema = postCardSchema.extend({
  id: z.number(),
  body: z.object({}).passthrough(), // passthrough allows any structure within the object
  _draft: z.boolean(),
  _id: z.string()
})

export type PostCategories = z.infer<typeof postCategorySchema>
export type PostTags = z.infer<typeof postTagSchema>
export type PostFull = z.infer<typeof postFullSchema>
export type PostCard = z.infer<typeof postCardSchema>
