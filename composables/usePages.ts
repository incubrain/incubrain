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
    label: 'Services',
    icon: 'i-mdi-chevron-right',
    slug: '/services',
    children: [
      {
        id: 21,
        label: 'Hire Us',
        icon: 'i-mdi-chevron-right',
        slug: '/services/hire-us'
      },
      {
        id: 22,
        label: 'Business Starter',
        icon: 'i-mdi-chevron-right',
        slug: '/services/business-starter'
      }
    ]
  },
  {
    id: 3,
    label: 'About',
    icon: 'i-mdi-chevron-right',
    slug: '/about',
    children: [
      { id: 30, label: 'About Us', icon: 'i-mdi-chevron-right', slug: '/about' },
      { id: 31, label: 'Culture', icon: 'i-mdi-chevron-right', slug: '/about/culture' },
      // { id: 32, label: 'Team', icon: 'i-mdi-chevron-right', slug: '/about/team' },
      { id: 33, label: 'Stack', icon: 'i-mdi-chevron-right', slug: '/about/stack' }
    ]
  }
  // {
  //   id: 6,
  //   label: 'Contact',
  //   icon: 'i-mdi-chevron-right',
  //   slug: '/contact',
  //   children: [
  //     { id: 61, label: 'Support', icon: 'i-mdi-chevron-right', slug: '/contact/support' },
  //     { id: 62, label: 'Enquire', icon: 'i-mdi-chevron-right', slug: '/contact/enquire' }
  //   ]
  // }
] as Page[])

const socials = {
  id: 0,
  slug: '',
  label: 'Socials',
  icon: 'i-mdi-chevron-right',
  children: [
    {
      id: 1,
      label: 'Github',
      slug: 'https://github.com/yourusername',
      icon: 'i-mdi-github'
    },
    {
      id: 2,
      label: 'LinkedIn',
      slug: 'https://linkedin.com/in/yourusername',
      icon: 'i-mdi-linkedin'
    },
    {
      id: 3,
      label: 'YouTube',
      slug: 'https://youtube.com/channel/yourchannelid',
      icon: 'i-mdi-youtube'
    },
    {
      id: 4,
      label: 'Instagram',
      slug: 'https://instagram.com/yourusername',
      icon: 'i-mdi-instagram'
    }
  ]
}

const footerPages = [3, 5]
const footerLinks = ref([...pages.value.filter((page) => footerPages.includes(page.id)), socials])

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
    footerLinks,
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
