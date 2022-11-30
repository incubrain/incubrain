import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const baseURL = 'https://jsonplaceholder.typicode.com'

const TodoShape = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
})

export type Todo = z.infer<typeof TodoShape>

export const todoRouter = router({
  getTodos: publicProcedure
    .query(async () => {
      return await $fetch<Todo[]>(`${baseURL}/todos`)
    }),
  getTodo: publicProcedure
    .input(z.number())
    .query(async (req) => {
      return await $fetch<Todo>(`${baseURL}/todos/${req.input}`)
    }),
  addTodo: publicProcedure
    .input(TodoShape)
    .mutation(async (req) => {
      return await $fetch<Todo>(`${baseURL}/todos`, {
        method: 'POST',
        body: req.input
      })
    })
})
