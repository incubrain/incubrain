import { CreateChatCompletionResponse, CreateChatCompletionRequest } from 'openai'
import openAiClient from './openaiClient'

type CallOpenAIConfig = {
  temperature?: number
  max_tokens?: number
  top_p?: number
}

const callOpenAI = async (prompt: string, systemMessage: string, config: CallOpenAIConfig = {}) => {
  try {
    const response = await openAiClient.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: prompt }
      ],
      temperature: config.temperature || 0.5,
      max_tokens: config.max_tokens || 1000,
      top_p: config.top_p || 0.7
    } as CreateChatCompletionRequest)

    if (!response) throw createError('No data returned from OpenAI API')
    if (response.status !== 200) throw createError('Error calling OpenAI API')

    if (response instanceof CreateChatCompletionResponse) {
      return response.choices[0].message.content
    }
    return null
  } catch (error) {
    console.error('Error calling OpenAI API', error)
    throw error
  }
}

export default callOpenAI
