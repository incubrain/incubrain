import { ref, computed } from 'vue'

interface Page {
  id: number
  name: string
  current: boolean
  slug: string
  children?: Page[]
}

const pages = ref([
  { id: 0, name: 'Home', current: true, slug: '/' },
  {
    id: 1,
    name: 'Projects',
    current: false,
    slug: '/projects',
    children: [
      { id: 10, name: 'Project Thoughts', current: false, slug: '/' },
      { id: 11, name: 'Frontend', current: false, slug: '/frontend' },
      { id: 12, name: 'Backend', current: false, slug: '/backend' },
      { id: 13, name: 'Business', current: false, slug: '/business' }
    ]
  },
  {
    id: 2,
    name: 'Design',
    current: false,
    slug: '/design',
    children: [
      { id: 20, name: 'Design Thoughts', current: false, slug: '/' },
      { id: 21, name: 'Charts', current: false, slug: '/charts' },
      // { id: 22, name: 'Lists', current: false, slug: '/lists' },
      { id: 23, name: 'Mobile', current: false, slug: '/mobile' },
      { id: 24, name: 'User Interface', current: false, slug: '/ui' },
      // { id: 25, name: 'Basic', current: false, slug: '/basic' },
      // { id: 25, name: 'Clothing', current: false, slug: '/clothing' },
      { id: 26, name: 'Patterns', current: false, slug: '/patterns' },
      { id: 27, name: 'Lotties', current: false, slug: '/lottie' },
      { id: 28, name: 'Icons', current: false, slug: '/icons' }
    ]
  },
  {
    id: 3,
    name: 'Code',
    current: false,
    slug: '/code',
    children: [
      { id: 30, name: 'Code Thoughts', current: false, slug: '/' },
      { id: 31, name: 'Challenges', current: false, slug: '/challenges' }
    ]
  },
  {
    id: 4,
    name: 'Tech',
    current: false,
    slug: '/tech',
    children: [
      { id: 40, name: 'Tech Thoughts', current: false, slug: '/' },
      { id: 41, name: 'My Stack', current: false, slug: '/my-stack' }
    // { id: 40, name: 'projects', current: false, slug: '/4projects' },
    ]
  }
] as Page[])

const currentPage = ref('Home')

export default function usePages () {
  return {
    currentPage: computed(() => currentPage.value),
    setPage: (newPage: string) => { currentPage.value = newPage },
    pages: computed(() => pages.value),
    tabs: (currentPage: string) => pages.value.find(p => p.name.toLocaleLowerCase() === currentPage)
  }
}
