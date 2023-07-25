import { ref, computed } from 'vue'

interface Page {
  id: number
  icon: string
  label: string
  slug: string
  children?: Page[]
}

const pages = ref([
  // { id: 0, label: 'Home', icon: 'i-mdi-chevron-right', slug: '/' },
  {
    id: 1,
    label: 'Projects',
    icon: 'i-mdi-chevron-right',
    slug: '/projects',
    children: [
      {
        id: 11,
        label: 'Frontend',
        icon: 'i-mdi-chevron-right',
        slug: '/projects/frontend'
      },
      {
        id: 12,
        label: 'Backend',
        icon: 'i-mdi-chevron-right',
        slug: '/projects/backend'
      },
      {
        id: 13,
        label: 'Business',
        icon: 'i-mdi-chevron-right',
        slug: '/projects/business'
      }
    ]
  },
  {
    id: 2,
    label: 'Blog',
    icon: 'i-mdi-chevron-right',
    slug: '/blog',
    children: [
      {
        id: 21,
        label: 'Frontend',
        icon: 'i-mdi-chevron-right',
        slug: '/blog/frontend'
      },
      {
        id: 22,
        label: 'Backend',
        icon: 'i-mdi-chevron-right',
        slug: '/blog/backend'
      },
      {
        id: 23,
        label: 'Business',
        icon: 'i-mdi-chevron-right',
        slug: '/blog/business'
      },
      {
        id: 24,
        label: 'Challenges',
        icon: 'i-mdi-chevron-right',
        slug: '/blog/challenges'
      }
    ]
  },
  {
    id: 3,
    label: 'Examples',
    icon: 'i-mdi-chevron-right',
    slug: '/examples',
    children: [
      {
        id: 31,
        label: 'Charts',
        icon: 'i-mdi-chevron-right',
        slug: '/examples/charts'
      },
      {
        id: 33,
        label: 'Mobile',
        icon: 'i-mdi-chevron-right',
        slug: '/examples/mobile'
      },
      { id: 34, label: 'UI', icon: 'i-mdi-chevron-right', slug: '/examples/ui' },
      {
        id: 36,
        label: 'Patterns',
        icon: 'i-mdi-chevron-right',
        slug: '/examples/patterns'
      },
      {
        id: 37,
        label: 'Icons',
        icon: 'i-mdi-chevron-right',
        slug: '/examples/icons'
      },
      {
        id: 38,
        label: 'Milkdown',
        icon: 'i-mdi-chevron-right',
        slug: '/examples/milkdown'
      }
    ]
  },
  {
    id: 4,
    label: 'Stack',
    icon: 'i-mdi-chevron-right',
    slug: '/stack',
    children: [{ id: 42, label: 'Tools', icon: 'i-mdi-chevron-right', slug: '/stack/tools' }]
  },
  {
    id: 5,
    label: 'About',
    icon: 'i-mdi-chevron-right',
    slug: '/about',
    children: [
      { id: 51, label: 'Careers', icon: 'i-mdi-chevron-right', slug: '/about/careers' },
      { id: 52, label: 'Team', icon: 'i-mdi-chevron-right', slug: '/about/team' },
      { id: 53, label: 'Support', icon: 'i-mdi-chevron-right', slug: '/about/support' },
      { id: 54, label: 'Enquire', icon: 'i-mdi-chevron-right', slug: '/about/enquire' }
    ]
  }
] as Page[])

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
    pages: computed(() => pages.value),
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
