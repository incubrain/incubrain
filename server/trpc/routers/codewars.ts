import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const userReqShape = z.object({
  user: z.string().optional(),
  page: z.number(),
  username: z.string().optional(),
  name: z.string().optional(),
  honor: z.number().optional(),
  clan: z.string().optional(),
  leaderboardPosition: z.number().optional(),
  skills: z.array(z.string().optional()).optional(),
  ranks: z.object({
    overall: z.object({
      rank: z.number().optional(),
      name: z.string().optional(),
        color: z.string().optional(),
        score: z.number().optional(),
        }).optional(),
    languages: z.array(
      z.object({
        rank: z.number().optional(),
        name: z.string().optional(),
        color: z.string().optional(),
        score: z.number().optional(),
    }).optional()).optional()
  }).optional(),
  codeChallenges: z.object({
    totalAuthored: z.number().optional(),
    totalCompleted: z.number().optional(),
  }).optional()
})

const challengeReqShape = z.object({
  totalPages: z.number().optional(),
  totalItems: z.number().optional(),
  data: z.array(z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    completedAt: z.string().optional(),
    completedLanguage: z.array(z.string().optional()).optional(),
  }).optional()).optional(),
})

export type User = z.infer<typeof userReqShape>
export type Challenge = z.infer<typeof challengeReqShape>

export const codewarsRouter = router({
user: publicProcedure
  .input(userReqShape)
  .query(async ({ input }) => {
    console.log('isser', input)
    const user = await $fetch<User>(`https://www.codewars.com/api/v1/users/${input.user}

    `)
    return {
      user,
    }
  }),
challenges: publicProcedure
  .input(z.object({ name: z.string(), page: z.number() }))
  .query(async ({ input }) => {
    console.log('isser', input)
    const challenges = await $fetch<Challenge>(`https://www.codewars.com/api/v1/users/${input.name}/code-challenges/completed?page=${input.page}`)
    return {
      challenges,
    }
  }),
})
