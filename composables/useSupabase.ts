import { createClient } from '@supabase/supabase-js'
import axios from 'axios'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!
const challenges = ref({})
// Initialize the JS client

// Create a function to handle inserts
const handleInserts = (payload) => {
  console.log('Change received!', payload)
}

// Listen to inserts
const { data: todos, error } = await supabase.from('todos').on('INSERT', handleInserts).subscribe()

// https://dev.codewars.com/


export default function useOwner () {
  async function getUser () {
    const user = 'Drew-Macgibbon'
    const page = 0
    let data
    await axios.get(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed?page=${page}`)
      .then(res => challenges.value = res.data.data && console.log(res))
      .catch(err => console.error('getUser from Codewars', err))
  }

  return {
    getUser,
    challenges: computed(() => challenges.value)
  }
}