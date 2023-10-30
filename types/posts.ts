import { z } from 'zod'

// !important: if you change post validation eg. add a new tag, update the blog template: content\blog\.template.md
export const postStatusSchema = z.enum(['published', 'draft', 'unpublished', 'archived'])
export const dateSchema = z
  .string()
  .regex(/^\d{4}\/\d{2}\/\d{2}$/, 'Date must be in YYYY/MM/DD format.')

// POST CATEGORIES
export const postCategorySchema = z.enum(['all', 'frontend', 'backend', 'business', 'projects'])
export type PostCategories = z.infer<typeof postCategorySchema>
export const CATEGORIES: PostCategories[] = ['all', 'frontend', 'backend', 'business', 'projects']

// POST TAGS
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
  // business
  'culture',
  'hiring',
  'systems',
  'research',
  'salaries',
  'benefits'
])
export type PostTags = z.infer<typeof postTagSchema>
export const TAGS: PostTags[] = [
  'nuxt',
  'vue',
  'typescript',
  'nitro',
  'supabase',
  'postgresql',
  'auth',
  'ci/cd',
  'tailwindcss',
  'learning',
  'code quality',
  'testing',
  'productivity',
  'culture',
  'hiring',
  'systems',
  'research',
  'salaries',
  'benefits'
]

// POST CARD
export const postCardSchema = z.object({
  title: z
    .string()
    .min(40, 'Title must be at least 40 char long')
    .max(70, 'Title has a max length of 70 char'),
  description: z
    .string()
    .min(160, 'Description must be at least 160 char long')
    .max(280, 'Description has a max length of 280 char'),
  category: postCategorySchema,
  tags: z
    .array(postTagSchema)
    .min(1, 'Minimum of 1 tag allowed')
    .max(3, 'Maximum of 3 tags allowed'),
  authors: z.array(z.number().lt(2)).refine((items) => new Set(items).size === items.length, {
    message: 'Authors must be an array of unique numbers'
  }),
  status: postStatusSchema,
  featured_image: z.string(),
  date: dateSchema,
  _path: z.string()
})
export type PostCard = z.infer<typeof postCardSchema>
export const POST_CARD_PROPERTIES = [
  'title',
  'description',
  'category',
  'tags',
  'authors',
  'status',
  'featured_image',
  'date',
  '_path'
]

// POST FULL POST
export const postFullSchema = postCardSchema.extend({
  id: z.number(),
  body: z.object({}).passthrough(), // passthrough allows any structure within the object
  _draft: z.boolean(),
  _id: z.string()
})
export type PostFull = z.infer<typeof postFullSchema>
export const POST_FULL_PROPERTIES = [
  ...POST_CARD_PROPERTIES,
  'body',
  'id',
  '_draft',
  '_id'
]
