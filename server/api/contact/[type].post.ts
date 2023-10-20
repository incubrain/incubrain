import { HireUs, Incubation, Collaborate } from '~/types/forms'
import { serverSupabaseClient } from '#supabase/server'

interface ContactSubmission {
  contact_type: string
  given_name: string
  surname: string
  email: string
  body: any
}

const formatFormData = (
  formType: string,
  formData: HireUs | Incubation | Collaborate
): ContactSubmission => {
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

    sendToDiscord({
      title: formattedData.contact_type,
      name: `${formattedData.given_name} ${formattedData.surname}`,
      description: formattedData.body.message,
      email: formattedData.email
    })
    // if (!isSent) throw createError('Error sending enquiry to Slack')

    return {
      status: 200,
      message: 'Enquiry received and stored'
    }
  } catch (error: any) {
    console.error('Error sending contact message', error.message)
    return {
      status: 500,
      message: 'Error sending your message',
      error
    }
  }
})
