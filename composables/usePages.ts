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
    label: 'Projects',
    icon: 'i-mdi-chevron-right',
    slug: '/projects'
  },
  {
    id: 2,
    label: 'Blog',
    icon: 'i-mdi-chevron-right',
    slug: '/blog'
  },
  {
    id: 3,
    label: 'Services',
    icon: 'i-mdi-chevron-right',
    slug: '/services',
    children: [
      {
        id: 31,
        label: 'Hire Us',
        icon: 'i-mdi-chevron-right',
        slug: '/services/hire-us'
      },
      {
        id: 32,
        label: 'Business Starter',
        icon: 'i-mdi-chevron-right',
        slug: '/services/business-starter'
      }
    ]
  },
  {
    id: 5,
    label: 'About',
    icon: 'i-mdi-chevron-right',
    slug: '/about',
    children: [
      { id: 51, label: 'Culture', icon: 'i-mdi-chevron-right', slug: '/about/culture' },
      // { id: 52, label: 'Team', icon: 'i-mdi-chevron-right', slug: '/about/team' },
      { id: 53, label: 'Stack', icon: 'i-mdi-chevron-right', slug: '/about/stack' }
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

const footerPages = [3, 5]
const footerLinks = ref(pages.value.filter((page) => footerPages.includes(page.id)))

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
