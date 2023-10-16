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
    icon: 'i-mdi-chevron-right',
    url: 'https://discord.gg/zSGHvNZXAa'
  }
] as Link[]

export default function useSocial() {
  return {
    discord: links.filter((link) => link.label === 'Discord')[0] as Link,
    links
  }
}
