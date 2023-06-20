import { ref, computed } from 'vue'

interface Page {
  id: number
  component: string
  title: string
  current: boolean
  slug: string
  children?: Page[]
}

const pages = ref([
  { id: 0, title: 'Home', current: true, slug: '/' },
  {
    id: 1,
    title: 'Projects',
    current: false,
    slug: '/projects',
    children: [
      {
        id: 11,
        title: 'Frontend',
        current: false,
        slug: '/projects/frontend'
      },
      { id: 12, title: 'Backend', current: false, slug: '/projects/backend' },
      {
        id: 13,
        title: 'Business',
        current: false,
        slug: '/projects/business'
      }
    ]
  },
  {
    id: 2,
    title: 'Blog',
    current: false,
    slug: '/blog',
    children: [
      {
        id: 21,
        title: 'Frontend',
        current: false,
        slug: '/blog/frontend'
      },
      { id: 22, title: 'Backend', current: false, slug: '/blog/backend' },
      { id: 23, title: 'Business', current: false, slug: '/blog/business' },
      {
        id: 24,
        title: 'Challenges',
        current: false,
        slug: '/blog/challenges'
      }
    ]
  },
  {
    id: 3,
    title: 'Examples',
    current: false,
    slug: '/examples',
    children: [
      { id: 31, title: 'Charts', current: false, slug: '/examples/charts' },
      // { id: 22, component: 'ExamplesLists',  title: 'Lists', current: false, slug: '/examples/lists' },
      { id: 33, title: 'Mobile', current: false, slug: '/examples/mobile' },
      { id: 34, title: 'UI', current: false, slug: '/examples/ui' },
      // { id: 25, component: 'ExamplesBasic', title: 'Basic', current: false, slug: '/examples/basic' },
      // { id: 25, component: 'ExamplesClothing', title: 'Ecommerce', current: false, slug: '/examples/clothing' },
      {
        id: 36,
        title: 'Patterns',
        current: false,
        slug: '/examples/patterns'
      },
      { id: 37, title: 'Lotties', current: false, slug: '/examples/lottie' },
      { id: 38, title: 'Icons', current: false, slug: '/examples/icons' },
      {
        id: 39,
        title: 'Milkdown',
        current: false,
        slug: '/examples/milkdown'
      }
    ]
  },
  {
    id: 4,
    title: 'Stack',
    current: false,
    slug: '/stack',
    children: [{ id: 42, title: 'Tools', current: false, slug: '/stack/tools' }]
  }
] as Page[])

const currentPage = ref('Home')

function findPage(pages: Page[], path: string): Page | undefined {
  for (const page of pages) {
    console.log('page', page.slug, path)
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
        return [parentPage, ...parentPage.children]
      }

      // If it's a parent page, return it and all its children as tabs
      if (p.children !== undefined) {
        return [p, ...p.children]
      }

      // If it's a standalone page without children, return only this page as a tab
      return [p]
    })
  }
}
