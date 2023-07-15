import { createClient } from '@supabase/supabase-js'

// Initialize the JS client

// Listen to inserts

// https://dev.codewars.com/

export default function useSupabase () {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

  return {
    client: supabase
  }
}
