import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

// const userReqShape = z.object({
//   text: z.string(),
// })

// export type User = z.infer<typeof userReqShape>

export const helloRouter = router({
  hi: publicProcedure
    .input(z.string())
    .query(({ input }) => {
      console.log('isser', input)
      return `This is my input: ${input}`
    })
})

// export type definition of API

//  async function getUser() {
//   const user = 'Drew-Macgibbon'
//   const page = 0
//   let data
//   await axios.get(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed?page=${page}`)
//   .then(res => challenges.value = res.data.data && console.log(res))
//   .catch(err => console.error('getUser from Codewars', err))
// }
