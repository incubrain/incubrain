import { z } from 'zod'

const GithubOwner = z.object({
  avatarUrl: z.string(),
  url: z.string()
})

const GithubNode = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  description: z.string().nullable(),
  homepageUrl: z.string().nullable(),
  updatedAt: z.string(),
  createdAt: z.string(),
  stargazerCount: z.number(),
  issues: z.object({
    totalCount: z.number()
  }),
  owner: GithubOwner
})

const GithubStarredRepositories = z.object({
  totalCount: z.number(),
  nodes: z.array(GithubNode)
})

const GithubUser = z.object({
  starredRepositories: GithubStarredRepositories
})

export const GithubGHStarredReposSchema = z.object({
  user: GithubUser
})

// TypeScript type inference
export type GHStarredRepos = z.infer<typeof GithubStarredRepositories>
export type GHStarredReposNodes = z.infer<typeof GithubNode>
