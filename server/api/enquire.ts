import { IncomingEnquiry, enquirySchema } from '@/types/enquiry'

export default defineEventHandler(async (event) => {
  const body = await readBody<IncomingEnquiry>(event)
  // Validate the incoming data
  const validated = await enquirySchema.parseAsync(body)
  if (!validated) {
    return { status: 400, body: { error: 'Error parsing enquiry data' } }
  }

  const enquiry = validated

  try {
    // Format the message
    const text = `Enquiry received!\n\nArea of Enquiry: ${enquiry.enquiryArea}\nEmail: ${enquiry.email}\nMessage: ${enquiry.message}`

    const isSent = sendToSlack(text, 'enquire')
    if (!isSent) throw createError('Error sending enquiry to Slack')

    return {
      status: 200,
      message: 'Enquiry received and sent to Slack'
    }
  } catch (error: any) {
    console.log('Slack notification error', error.message)
    return {
      status: 500,
      message: 'Error sending enquiry to Slack',
      error
    }
  }
})
