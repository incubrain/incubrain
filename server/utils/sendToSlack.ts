const sendToSlack = async (message: string) => {
  const env = useRuntimeConfig()
  const webhookURL = env.SLACK_ENQUIRE_URL
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
