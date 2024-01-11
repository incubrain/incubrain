import { z } from 'zod'

export const postStatusSchema = z.enum(['published', 'draft', 'unpublished', 'archived'])
export const dateSchema = z
  .string()
  .regex(/^\d{4}\/\d{2}\/\d{2}$/, 'Date must be in YYYY/MM/DD format.')

// POST CATEGORIES
export const postCategorySchema = z.enum(['all', 'frontend', 'backend', 'business', 'projects'])
export type PostCategoriesT = z.infer<typeof postCategorySchema>
export const CATEGORIES: PostCategoriesT[] = ['all', 'frontend', 'backend', 'business', 'projects']

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
  'ci',
  // design
  'tailwindcss',
  // general
  'imagine',
  'learning',
  'code quality',
  'kindness',
  'testing',
  'productivity',
  // business
  'marketing',
  'benefits',
  'culture',
  'hiring',
  'systems',
  'research',
  'tools',
  'salaries',
  'customers',
  'community',
  'future',
  'seo',
  'design',
  'product-review'
])
export type PostTagsT = z.infer<typeof postTagSchema>
export const TAGS: PostTagsT[] = [
  'nuxt',
  'vue',
  'typescript',
  'nitro',
  'supabase',
  'postgresql',
  'auth',
  'ci',
  'tailwindcss',
  'learning',
  'code quality',
  'testing',
  'productivity',
  'kindness',
  'culture',
  'future',
  'benefits',
  'hiring',
  'marketing',
  'tools',
  'imagine',
  'systems',
  'research',
  'salaries',
  'customers',
  'community',
  'seo',
  'design'
]

// POST CARD
export const postCardSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 20 char long')
    .max(70, 'Title has a max length of 70 char'),
  description: z
    .string()
    .min(1, 'Description must be at least 160 char long')
    .max(280, 'Description has a max length of 280 char'),
  category: postCategorySchema,
  tags: z
    .array(postTagSchema)
    .min(2, 'Minimum of 2 tags allowed')
    .max(3, 'Maximum of 3 tags allowed'),
  authors: z.array(z.number().lt(2)).refine((items) => new Set(items).size === items.length, {
    message: 'Authors must be an array of unique numbers'
  }),
  status: postStatusSchema,
  featured_image: z.string(),
  publishedAt: dateSchema,
  updatedAt: dateSchema,
  _path: z.string()
})
export type PostCardT = z.infer<typeof postCardSchema>
export const POST_CARD_PROPERTIES = [
  'title',
  'description',
  'category',
  'tags',
  'authors',
  'status',
  'featured_image',
  'publishedAt',
  'updatedAt',
  '_path'
]

const authorSchema = z.object({
  id: z.number(),
  givenName: z.string(),
  surname: z.string(),
  avatar: z.string(),
  bio: z.string()
})

export type AuthorT = z.infer<typeof authorSchema>

export const AUTHORS = <AuthorT[]>[
  {
    id: 1,
    givenName: 'Drew',
    surname: 'MacGibbon',
    avatar: 'drew-macgibbon.jpg',
    bio: 'Drew MacGibbon is the CEO and Founder of Incubrain, with over a decade of online business expertise and similar full-stack Nuxt Developer experience. His focus on crafting exceptional digital products has positioned Incubrain as a leader in innovative tech solutions.'
  }
]

// POST FULL POST
export const postFullSchema = postCardSchema.extend({
  id: z.number(),
  body: z.object({}).passthrough(), // passthrough allows any structure within the object
  version: z.number(),
  _id: z.string()
})
export type PostFullT = z.infer<typeof postFullSchema>
export const POST_FULL_PROPERTIES = [...POST_CARD_PROPERTIES, 'body', 'id', '_id', 'version']
