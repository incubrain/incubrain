import { ref, computed } from 'vue'

interface Page {
  id: number
  name: string
  current: boolean
  slug: string
  children?: Array<Page>
}

const pages = ref([
  { id: 0, name: 'Home', current: true, slug: '/' },
  { id: 1, name: 'Projects', current: false, slug: '/projects' },
  { id: 2, name: 'Design', current: false, slug: '/design', children: [
    { id: 20, name: 'Content', current: false, slug: '/content' },
    { id: 21, name: 'Data', current: false, slug: '/data' },
    { id: 22, name: 'Lists', current: false, slug: '/lists' },
    { id: 23, name: 'Mobile', current: false, slug: '/mobile' },  
    { id: 24, name: 'User Interface', current: false, slug: '/user-interface' },  
  ]},  
  { id: 3, name: 'Code', current: false, slug: '/code', children: [
    { id: 30, name: 'Challenges', current: false, slug: '/challenges' },
    { id: 31, name: 'projects', current: false, slug: '/1projects' },
    { id: 32, name: 'projects', current: false, slug: '/2projects' },
    { id: 33, name: 'projects', current: false, slug: '/3projects' },  
  ]},
  { id: 4, name: 'Tech', current: false, slug: '/tech', children: [
    { id: 40, name: 'projects', current: false, slug: '/4projects' },
    { id: 41, name: 'projects', current: false, slug: '/5projects' },
    { id: 42, name: 'projects', current: false, slug: '/6projects' },
    { id: 43, name: 'projects', current: false, slug: '/7projects' },  
  ]},
] as Array<Page>)

const currentPage = ref('Home')

export default function useTabs() {

  function changePage(p: Page)
  {
    if (p.current === true) return
    // Set all current to false
    pages.value.forEach(page => {
      page.current = false
      page.children?.forEach(c => c.current = false)
    })
    // Main pages
    if (p.id < 10) {
      pages.value.find(page => page.id === p.id ? page.current = true : null)
      return
    }
    // child pages
    pages.value.find(page => {
      page.children?.find(child => {
        if (child.id === p.id) {
          page.current = true
          child.current = true
          return
        }
      })
    })
  }
  
  return {
    currentPage: computed(() => currentPage.value),
    pages: computed(() => pages.value),
    tabs: (currentPage: String) => pages.value.find(p => p.name === currentPage),
  }
}