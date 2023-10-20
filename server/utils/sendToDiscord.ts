import { DiscordNotification } from '@penseapp/discord-notification'

// uses https://www.npmjs.com/package/@penseapp/discord-notification

let discordNotification: any | null = null

interface DiscordMessage {
  title: string
  name: string
  description: string
  email: string
}

const sendToDiscord = async ({ title, name, description, email }: DiscordMessage) => {
  const env = useRuntimeConfig()
  const webhookURL = env.DISCORD_NOTIFICATION_URL
  if (!discordNotification) {
    discordNotification = new DiscordNotification('incubrain-website', webhookURL)
  }

  try {
    await discordNotification
      .sucessfulMessage()
      .addTitle(`${title} from ${name}`)
      .addDescription(description)
      .addField({ name: 'Email', value: email, inline: false })
      .addContent('@admins')
      .sendMessage()
  } catch (error: any) {
    console.error('Discord notification error', error.message)
  }
}

export default sendToDiscord
