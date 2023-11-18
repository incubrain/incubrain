import type { HireUsT, IncubationT, CollaborateT } from '~/types/forms'
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
  formData: HireUsT | IncubationT | CollaborateT
): ContactSubmission => {
  // this is mapped to the supabase table
  const remainingData = { ...formData }
  delete (remainingData as any).givenName
  delete (remainingData as any).surname
  delete (remainingData as any).email

  return {
    contact_type: formType,
    given_name: formData.givenName,
    surname: formData.surname || '',
    email: formData.email,
    body: remainingData
  }
}

export default defineEventHandler(async (event) => {
  const enquiry = await readBody(event)
  const params = getRouterParams(event)
  // Validate the incoming data
  const supabase = await serverSupabaseClient(event)
  console.log('server enquiry', enquiry, params.type)

  // format the data
  const formattedData = formatFormData(params.type, enquiry)

  // store the data in supabase

  try {
    console.log('supabse', formattedData)
    const { data: storedMessage, error } = await supabase
      .from('contact')
      .insert(formattedData)
      .select()
    console.log('message stored', storedMessage, error?.message)

    if (error?.code) throw createError({ message: error.message, statusCode: Number(error.code) })
    // Format the message

    sendToDiscord({
      title: formattedData.contact_type,
      name: `${formattedData.given_name} ${formattedData.surname}`,
      description: formattedData.body.message,
      email: formattedData.email
    })

    return {
      status: 200,
      message: 'Enquiry received and stored'
    }
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: 404
    })
  }
})
