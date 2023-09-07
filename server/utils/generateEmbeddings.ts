import { CreateEmbeddingRequest } from 'openai'
import openaiClient from './openaiClient'
// import { z } from 'zod'

async function generateEmbeddings(article: string): Promise<number[]> {
  const { data: embed } = await openaiClient.createEmbedding({
    input: article,
    model: 'text-embedding-ada-002'
  } as CreateEmbeddingRequest)
  console.log('embed', embed)
  const [{ embedding }] = embed.data
  console.log('embedding', embedding)
  return embedding as number[]
}

export default generateEmbeddings
