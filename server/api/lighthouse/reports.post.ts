const dynamicImport = async (website: string, year: string) => {
  // switch statement that imports the data depending on website and year
  // options are incubrain and astronera for website
  // years should be 2023 and 2024
  switch (`${website}-${year}`) {
    case 'incubrain-2023':
      return await import('../data/incubrain/2023.json')
    default:
      throw createError({
        message: 'Lighthouse data for website or year does not exist',
        statusCode: 404
      })
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const r = await dynamicImport(body.website, body.year)
    const reports = r.default
    return {
      status: 200,
      metrics: reports.reverse()
    }
  } catch (error: any) {
    throw createError({
      message: `Error Getting Lighthouse Metrics: ${error.message}`,
      statusCode: 404
    })
  }
})
