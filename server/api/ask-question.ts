function cosineSimilarity(vecA: number[], vecB: number[]) {
  if (vecA.length !== vecB.length) {
    throw createError('Vectors must have the same dimensionality')
  }

  let dotProduct = 0
  let magnitudeA = 0
  let magnitudeB = 0

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    magnitudeA += Math.pow(vecA[i], 2)
    magnitudeB += Math.pow(vecB[i], 2)
  }

  magnitudeA = Math.sqrt(magnitudeA)
  magnitudeB = Math.sqrt(magnitudeB)

  if (magnitudeA === 0 || magnitudeB === 0) {
    return null // Avoid division by zero
  }

  return dotProduct / (magnitudeA * magnitudeB)
}

function retrieveRelevantInformation(
  questionVector: number[],
  embeddingsWithMetadata: any,
  numberOfArticles = 1 // Number of similar articles you want to retrieve
): string[] {
  const similarities = embeddingsWithMetadata.map((data: any) => {
    const fileVector = data.embedding
    return {
      similarity: cosineSimilarity(questionVector, fileVector),
      markdownBody: data.markdownBody // Assuming this is the content you want to retrieve
    }
  })

  // Sort by similarity and take the top N articles
  const sortedSimilarities = similarities
    .filter((item) => item.similarity !== null) // Filter out null similarities
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, numberOfArticles)
    .map((item) => item.markdownBody)

  return sortedSimilarities
}

export default defineEventHandler(async (event) => {
  try {
    const { question } = await readBody(event)
    console.log('question', question)
    const questionEmbedding = await generateEmbeddings(question)
    console.log('questionEmbedding', questionEmbedding)
    const storage = useStorage('data')
    const storedEmbeddingsWithMetadata = await storage.getItem('embeddingsWithMetadata.json')

    // Adjust this variable as needed to set the number of similar articles you want to retrieve
    const numberOfArticles = 5

    const similarBlogs = retrieveRelevantInformation(
      questionEmbedding,
      storedEmbeddingsWithMetadata,
      numberOfArticles
    )

    const questionContext = similarBlogs.join('---\n\n') // Combine into a single string

    const systemMessage =
      `You are an expert nuxt 3 programmer with extensive typescript knowledge. use this information as context: \n\n ${questionContext}`

    console.log('combinedPrompt', systemMessage)
    // Call OpenAI with the combined prompt
    const response = await callOpenAI(question, systemMessage)

    console.log('response', response)

    return {
      status: 200,
      message: `${numberOfArticles} similar blogs found`,
      answer: response
    }
  } catch (error: any) {
    console.log('ask-question error', error.message)
    return {
      status: 500,
      message: 'Error asking question',
      error
    }
  }
})
