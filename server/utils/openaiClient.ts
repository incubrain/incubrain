import { Configuration, OpenAIApi } from 'openai-edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openaiClient = new OpenAIApi(configuration)

export default openaiClient
