const sendToSlack = async (message: string, type: 'enquire' | 'support' = 'enquire') => {
  const env = useRuntimeConfig()
  const webhookURL = type === 'enquire' ? env.SLACK_ENQUIRE_URL : env.SLACK_SUPPORT_URL
  try {
    await $fetch(webhookURL as string, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error: any) {
    console.error('Slack notification error', error.message)
  }
}

export default sendToSlack
