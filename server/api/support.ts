// server/api/submit.post.ts
import { defineEventHandler } from 'nuxt3'
import { readBody } from 'vue'
import { IncomingEnquiry, enquirySchema } from './models/enquiry'
import { sendToSlack } from './utils/slack' //Assuming you have a util function to send to Slack

export default defineEventHandler(async (event) => {
  const body = await readBody<IncomingEnquiry>(event)

  // Validate the incoming data
  const { error, value } = enquirySchema.safeParse(body)
  if (error) {
    return { status: 400, body: { error: error.message } }
  }

  const enquiry = value

  // send enquiry to Slack
  await sendToSlack(enquiry)

  return { status: 200, body: { enquiry } }
})
