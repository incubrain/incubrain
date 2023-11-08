import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event)
    .where({ _partial: { $ne: true }, status: 'published' })
    .only(['_path', 'updatedAt'])
    .find()
  console.log('sitemap articles', articles)
  return articles.map((a) => {
    return { loc: a._path, lastmod: a.updatedAt }
  })
})
