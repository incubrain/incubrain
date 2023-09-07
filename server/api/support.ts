import { Support, SupportValidation } from '@/types/forms'

export default defineEventHandler(async (event) => {
  const body = await readBody<Support>(event)

  // Validate the incoming data
  const validated = SupportValidation.parse(body)

  if (!validated) {
    return { status: 400, body: { error: 'error validating support message' } }
  }

  const message = `Support Request\n\nName: ${validated.name}\nEmail: ${validated.email}\nService Interest: ${validated.serviceInterest}\nMessage: ${validated.message}`

  // send message to Slack
  await sendToSlack(message, 'support')

  return { status: 200, body: 'message sent to slack' }
})
