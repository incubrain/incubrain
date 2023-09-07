import { Octokit } from 'octokit'
import { GHStarredRepos, GithubGHStarredReposSchema } from '@/types/github'

const query = `query () {
  user(login: "Drew-Macgibbon") {
    starredRepositories() {
      totalCount
      nodes {
        id
        name
        url
        description
        homepageUrl
        updatedAt
        createdAt
        stargazerCount
        issues {
          totalCount
        }
        owner {
          avatarUrl
          url
        }
      }
    }
  }
}`

let octokit = null

async function getGHStarredRepos(): Promise<GHStarredRepos> {
  const response = await octokit.graphql(query)
  const parsedResponse = GithubGHStarredReposSchema.parse(response)

  return {
    totalCount: parsedResponse.user.starredRepositories.totalCount,
    nodes: parsedResponse.user.starredRepositories.nodes
  }
}

export default defineEventHandler(async (event) => {
  if (!octokit) {
    const env = useRuntimeConfig()
    octokit = new Octokit({
      auth: env.GH_USER_API
    })
  }

  await readBody(event)

  try {
    const { nodes, totalCount } = await getGHStarredRepos()

    return {
      status: 200,
      body: { repos: nodes, totalCount }
    }
  } catch (error: any) {
    console.error('Error fetching starred repositories', error.message, '\n', error.stack)
    return {
      status: 500,
      body: {
        error: 'Error fetching starred repositories',
        details: {
          message: error.message,
          ...(error.response && { response: error.response.data }) // include more details from the response, if available
        }
      }
    }
  }
})
