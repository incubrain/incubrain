// const formatLighthouse = (
//   formType: string,
//   formData: HireUs | Incubation | Collaborate
// ): ContactSubmission => {
//   return {}
// }

export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  // Validate the incoming data
  console.log('Get Lighthouse', params.year)

  // get lighthouse data based on param year

  // const formattedData = formatFormData(params.type)
  try {
    const storage = useStorage('data')
    const data = await storage.getItem(`lighthouse/${params.year}-${params.month}.json`)
    console.log('data retrieved', data)

    // Format the data

    return {
      status: 200,
      metrics: [data]
    }
  } catch (error: any) {
    throw createError({
      message: `Error Getting Lighthouse Metrics: ${error.message}`,
      statusCode: 404
    })
  }
})
