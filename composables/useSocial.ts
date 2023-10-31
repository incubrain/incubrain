interface Link {
  id: number
  icon: string
  label: string
  url: string
  event: {
    name: string
  }
}

const links: Link[] = [
  {
    id: 0,
    label: 'Discord',
    icon: 'i-mdi-discord',
    url: 'https://discord.gg/zSGHvNZXAa',
    event: {
      name: 'join_community'
    }
  },
  {
    id: 1,
    label: 'Personal Github',
    icon: 'i-mdi-github',
    url: 'https://github.com/Drew-Macgibbon',
    event: {
      name: 'view_github'
    }
  },
  {
    id: 2,
    label: 'Personal Linkedin',
    icon: 'i-mdi-linkedin',
    url: 'https://www.linkedin.com/in/drew-macgibbon',
    event: {
      name: 'view_linkedin'
    }
  }
]

const ceoLinks: Link[] = [
  ...links,
  {
    id: 3,
    label: 'Email',
    icon: 'i-mdi-email',
    url: 'mailto:mac@incubrain.org',
    event: {
      name: 'send_email'
    }
  }
]

export default function useSocial() {
  return {
    discord: links.filter((link) => link.id === 0)[0] as Link,
    personalGithub: links.filter((link) => link.id === 1)[0] as Link,
    personalLinkedin: links.filter((link) => link.id === 2)[0] as Link,
    links,
    ceoLinks
  }
}
