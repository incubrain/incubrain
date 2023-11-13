import { ref, computed } from 'vue'

interface Page {
  id: number
  icon: string
  label: string
  slug: string
  children?: Page[]
}

const pages = ref([
  {
    id: 1,
    label: 'Blog',
    icon: 'i-mdi-chevron-right',
    slug: '/blog'
  },
  {
    id: 2,
    label: 'Incubation',
    icon: 'i-mdi-chevron-right',
    slug: '/incubation',
    children: []
  },
  {
    id: 3,
    label: 'About',
    icon: 'i-mdi-chevron-right',
    slug: '/about',
    children: []
  },
  {
    id: 4,
    label: 'Contact',
    icon: 'i-mdi-chevron-right',
    slug: '/contact-collaborate',
    children: []
  }
] as Page[])

const socials = ref({
  id: 0,
  slug: '',
  label: 'Socials',
  icon: 'i-mdi-chevron-right',
  children: [
    {
      id: 1,
      label: 'Github',
      slug: 'https://github.com/incubrain',
      username: 'incubrain',
      icon: 'i-mdi-github'
    },
    {
      id: 2,
      label: 'LinkedIn',
      slug: 'https://linkedin.com/in/incubrain',
      username: 'incubrain',
      icon: 'i-mdi-linkedin'
    },
    {
      id: 3,
      label: 'YouTube',
      slug: 'https://youtube.com/channel/incubrain',
      username: 'incubrain',
      icon: 'i-mdi-youtube'
    },
    {
      id: 4,
      label: 'Instagram',
      slug: 'https://instagram.com/incubrain',
      username: 'incubrain',
      icon: 'i-mdi-instagram'
    }
  ]
})

const footerPages = ref(
  pages.value.flatMap((page) => {
    if ([0].includes(page.id)) return page.children
    else return [page]
  })
)

const currentPage = ref('Home')

function findPage(pages: Page[], path: string): Page | undefined {
  for (const page of pages) {
    if (page.slug === path) {
      return page
    }
    if (page.children !== undefined) {
      const childPage = findPage(page.children, path)
      if (childPage !== undefined) {
        return childPage
      }
    }
  }
}

export default function usePages() {
  const parentRoute = computed(() => {
    const p = findPage(pages.value, currentPage.value)
    // If it's a child page, return the parent
    const parentPage = pages.value.find((page: Page) => page.children?.includes(p))
    if (parentPage !== undefined) {
      return parentPage
    }
    return p
  })

  return {
    currentPage: computed(() => currentPage.value),
    parentRoute,
    setPage: (newPage: string) => {
      currentPage.value = newPage
    },
    pages,
    footerPages,
    socials,
    tabs: computed(() => {
      const p = findPage(pages.value, currentPage.value)
      if (p === undefined) return []

      // If it's a child page, return the parent and all its children as tabs
      const parentPage = pages.value.find((page: Page) => page.children?.includes(p))
      if (parentPage !== undefined) {
        return [parentPage, ...(parentPage.children || [])]
      }

      // If it's a parent page, return it and all its children as tabs
      if (p.children !== undefined) {
        return [p, ...(p.children || [])]
      }

      // If it's a standalone page without children, return only this page as a tab
      return [p]
    })
  }
}
