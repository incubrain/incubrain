import * as fs from 'fs'
import * as path from 'path'
import { marked } from 'marked'

marked.setOptions({
  headerIds: false,
  headerPrefix: undefined
})

const findMarkdownFiles = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = findMarkdownFiles(path.join(dir, file), fileList)
    } else if (file.endsWith('.md')) {
      fileList.push(path.join(dir, file))
    }
  })
  return fileList
}

export default defineEventHandler(async () => {
  try {
    const storagePath = './data/nuxt/3.api'
    const markdownFiles = findMarkdownFiles(storagePath)

    const embeddingsWithMetadata = []
    for (let index = 0; index < markdownFiles.length; index++) {
      const file = markdownFiles[index];
      const content = fs.readFileSync(file, 'utf-8')
      const markdownBody = marked.parse(content)
      console.log('call generateEmbeddings')
      const embedding = await generateEmbeddings(markdownBody) // Assuming this function generates the embeddings
      console.log('embedding', embedding)
      if (embedding === undefined) throw createError('Error generating embedding')
      embeddingsWithMetadata.push({ embedding, markdownBody: content, filePath: file, index }) // Store embedding, content, file path, and index
    }

    // Update the storage with the embeddings and metadata
    const storage = useStorage('data')
    await storage.setItem('embeddingsWithMetadata.json', embeddingsWithMetadata)

    return {
      status: 200,
      message: 'Embeddings generated',
      embeddingsWithMetadata
    }
  } catch (error: any) {
    console.log('generate-embedding error', error.message)
    return {
      status: 500,
      message: 'Error generating embeddings for blogs',
      error
    }
  }
})
