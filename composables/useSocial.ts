interface Link {
  id: number
  icon?: string
  label: string
  url: string
}

const links = [
  {
    id: 0,
    label: 'Discord',
    icon: 'i-mdi-discord',
    url: 'https://discord.gg/zSGHvNZXAa'
  },
  {
    id: 1,
    label: 'Personal Github',
    icon: 'i-mdi-github',
    url: 'https://github.com/Drew-Macgibbon'
  },
  {
    id: 2,
    label: 'Personal Linkedin',
    icon: 'i-mdi-linkedin',
    url: 'https://www.linkedin.com/in/drew-macgibbon'
  }
] as Link[]

export default function useSocial() {
  return {
    discord: links.filter((link) => link.id === 0)[0] as Link,
    personalGithub: links.filter((link) => link.id === 1)[0] as Link,
    personalLinkedin: links.filter((link) => link.id === 2)[0] as Link,
    links
  }
}
