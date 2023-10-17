import { HireUs, Incubation, Collaborate } from '~/types/forms'
import { serverSupabaseClient } from '#supabase/server'

const formatFormData = (formType: string, formData: HireUs | Incubation | Collaborate) => {
  // this is mapped to the supabase table
  const remainingData = { ...formData }
  delete (remainingData as any).givenName
  delete (remainingData as any).surname
  delete (remainingData as any).email

  return {
    contact_type: formType,
    given_name: formData.givenName,
    surname: formData.surname,
    email: formData.email,
    body: remainingData
  }
}

export default defineEventHandler(async (event) => {
  const enquiry = await readBody(event)
  const type = event.context.params.type
  // Validate the incoming data
  const supabase = await serverSupabaseClient(event)
  console.log('server enquiry', enquiry, type)

  // format the data
  const formattedData = formatFormData(type, enquiry)

  // store the data in supabase

  try {
    const { data: storedMessage, error } = await supabase.from('contact').insert(formattedData)
    console.log('message stored', storedMessage, error)
    // Format the message
    // const text = `Enquiry received!\n\nArea of Enquiry: ${enquiry.enquiryArea}\nEmail: ${enquiry.email}\nMessage: ${enquiry.message}`

    // const isSent = sendToSlack(text)
    // if (!isSent) throw createError('Error sending enquiry to Slack')

    return {
      status: 200,
      message: 'Enquiry received and stored'
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
