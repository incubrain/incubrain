import { ref, computed } from 'vue'

interface Page {
  id: number
  icon: string
  component: string
  title: string
  current: boolean
  slug: string
  children?: Page[]
}

const pages = ref([
  { id: 0, title: 'Home', current: true, icon: 'i-mdi-chevron-right', slug: '/' },
  {
    id: 1,
    title: 'Projects',
    current: false,
    icon: 'i-mdi-chevron-right',
    slug: '/projects',
    children: [
      {
        id: 11,
        title: 'Frontend',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/projects/frontend'
      },
      {
        id: 12,
        title: 'Backend',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/projects/backend'
      },
      {
        id: 13,
        title: 'Business',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/projects/business'
      }
    ]
  },
  {
    id: 2,
    title: 'Blog',
    current: false,
    icon: 'i-mdi-chevron-right',
    slug: '/blog',
    children: [
      {
        id: 21,
        title: 'Frontend',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/blog/frontend'
      },
      {
        id: 22,
        title: 'Backend',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/blog/backend'
      },
      {
        id: 23,
        title: 'Business',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/blog/business'
      },
      {
        id: 24,
        title: 'Challenges',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/blog/challenges'
      }
    ]
  },
  {
    id: 3,
    title: 'Examples',
    current: false,
    icon: 'i-mdi-chevron-right',
    slug: '/examples',
    children: [
      {
        id: 31,
        title: 'Charts',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/examples/charts'
      },
      // { id: 22, component: 'ExamplesLists',  title: 'Lists', current: false, icon: 'i-mdi-chevron-right', slug: '/examples/lists' },
      {
        id: 33,
        title: 'Mobile',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/examples/mobile'
      },
      { id: 34, title: 'UI', current: false, icon: 'i-mdi-chevron-right', slug: '/examples/ui' },
      // { id: 25, component: 'ExamplesBasic', title: 'Basic', current: false, icon: 'i-mdi-chevron-right', slug: '/examples/basic' },
      // { id: 25, component: 'ExamplesClothing', title: 'Ecommerce', current: false, icon: 'i-mdi-chevron-right', slug: '/examples/clothing' },
      {
        id: 36,
        title: 'Patterns',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/examples/patterns'
      },
      {
        id: 37,
        title: 'Icons',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/examples/icons'
      },
      {
        id: 38,
        title: 'Milkdown',
        current: false,
        icon: 'i-mdi-chevron-right',
        slug: '/examples/milkdown'
      }
    ]
  },
  {
    id: 4,
    title: 'Stack',
    current: false,
    icon: 'i-mdi-chevron-right',
    slug: '/stack',
    children: [
      { id: 42, title: 'Tools', current: false, icon: 'i-mdi-chevron-right', slug: '/stack/tools' }
    ]
  },
  {
    id: 5,
    title: 'About',
    current: false,
    icon: 'i-mdi-chevron-right',
    slug: '/about',
    children: [
      { id: 51, title: 'Careers', current: false, icon: 'i-mdi-chevron-right', slug: '/about/careers' },
      { id: 52, title: 'Team', current: false, icon: 'i-mdi-chevron-right', slug: '/about/team' },
      { id: 53, title: 'Support', current: false, icon: 'i-mdi-chevron-right', slug: '/about/support' },
      { id: 54, title: 'Enquire', current: false, icon: 'i-mdi-chevron-right', slug: '/about/enquire' }
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
