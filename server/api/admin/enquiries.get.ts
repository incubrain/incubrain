import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)

  try {
    const { data: contactMessages, error } = await supabase.from('contact').select('*') // Fetching all columns from the 'contact' table

    if (error) throw createError('Error fetching contact messages')

    return {
      status: 200,
      data: contactMessages
    }
  } catch (error: any) {
    console.error('Error fetching contact messages:', error.message)
    return {
      status: 500,
      message: 'Error fetching contact messages',
      error: error.message
    }
  }
})
