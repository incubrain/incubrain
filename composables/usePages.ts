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
  { id: 0, component: 'Home', title: 'All', current: true, slug: '/' },
  {
    id: 1,
    component: 'ProjectsAll',
    title: 'Projects',
    current: false,
    slug: '/projects',
    children: [
      {
        id: 11,
        component: 'ProjectsFrontend',
        title: 'Frontend',
        current: false,
        slug: '/frontend'
      },
      { id: 12, component: 'ProjectsBackend', title: 'Backend', current: false, slug: '/backend' },
      {
        id: 13,
        component: 'ProjectsBusiness',
        title: 'Business',
        current: false,
        slug: '/business'
      }
    ]
  },
  {
    id: 2,
    component: 'BlogAll',
    title: 'Blog',
    current: false,
    slug: '/blog',
    children: [
      { id: 21, component: 'BlogFrontend', title: 'Frontend', current: false, slug: '/frontend' },
      { id: 22, component: 'BlogBackend', title: 'Backend', current: false, slug: '/backend' },
      { id: 23, component: 'BlogBusiness', title: 'Business', current: false, slug: '/business' },
      {
        id: 24,
        component: 'BlogChallenges',
        title: 'Challenges',
        current: false,
        slug: '/challenges'
      }
    ]
  },
  {
    id: 3,
    component: 'Examples',
    title: 'Examples',
    current: false,
    slug: '/examples',
    children: [
      { id: 31, component: 'ExamplesChart', title: 'Charts', current: false, slug: '/charts' },
      // { id: 22, component: 'ExamplesLists',  title: 'Lists', current: false, slug: '/lists' },
      { id: 33, component: 'ExamplesMobile', title: 'Mobile', current: false, slug: '/mobile' },
      { id: 34, component: 'ExamplesUI', title: 'UI', current: false, slug: '/ui' },
      // { id: 25, component: 'ExamplesBasic', title: 'Basic', current: false, slug: '/basic' },
      // { id: 25, component: 'ExamplesClothing', title: 'Ecommerce', current: false, slug: '/clothing' },
      {
        id: 36,
        component: 'ExamplesPattern',
        title: 'Patterns',
        current: false,
        slug: '/patterns'
      },
      { id: 37, component: 'ExamplesLottie', title: 'Lotties', current: false, slug: '/lottie' },
      { id: 38, component: 'ExamplesIcon', title: 'Icons', current: false, slug: '/icons' },
      {
        id: 39,
        component: 'ExamplesMilkdown',
        title: 'Milkdown',
        current: false,
        slug: '/milkdown'
      }
    ]
  },
  {
    id: 4,
    component: 'Stack',
    title: 'Stack',
    current: false,
    slug: '/stack',
    children: [{ id: 42, component: 'StackTools', title: 'Tools', current: false, slug: '/tools' }]
  }
] as Page[])

const currentPage = ref('Home')

function findPage(pages: Page[], componentName: string): Page | undefined {
  for (const page of pages) {
    if (page.component === componentName) {
      return page
    }
    if (page.children !== undefined) {
      const childPage = findPage(page.children, componentName)
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
