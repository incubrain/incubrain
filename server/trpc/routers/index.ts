import { router } from '../trpc'
import { codewarsRouter } from './codewars'
import { helloRouter } from './hello'
import { todoRouter } from './todo'

export const appRouter = router({
  codewars: codewarsRouter,
  todo: todoRouter,
  message: helloRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
