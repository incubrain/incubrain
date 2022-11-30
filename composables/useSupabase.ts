import { createClient } from '@supabase/supabase-js'

// Initialize the JS client


// Listen to inserts

// https://dev.codewars.com/

export default function useSupabase() {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
  const posts = ref({})
  // Create a function to handle inserts
  const handleInserts = (payload) => {
    console.log('Change received!', payload)
  }
  const { data: todos, error } = await supabase.from('todos')?.on('INSERT', handleInserts).subscribe()

  return {
    client: supabase,
    posts: computed(() => posts.value)
  }
}
