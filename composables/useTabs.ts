import { ref, computed } from 'vue'

interface Tab {
  id: number
  title: string
  name: string
  selected: boolean
}

interface Tabs {
  components: Array<Tab> 
}

interface Page {
  id: number
  title: string
  current: boolean
}

const pages = ref([
  { id: 0, title: 'Components', current: true },
  { id: 1, title: 'test', current: false },
] as Array<Page>)


const tabs = ref({
  components: [
    { id: 0, title: 'Profile', name: 'ProfileTab', selected: true },
    { id: 1, title: 'Stats', name: 'StatTab', selected: false },
    { id: 2, title: 'Events', name: 'EventTab', selected: false },
    { id: 3, title: 'Projects', name: 'ProjectTab', selected: false },
    { id: 4, title: 'Blog', name: 'BlogTab', selected: false },
    { id: 5, title: 'Charts', name: 'ChartTab', selected: false },
    { id: 6, title: 'Lists', name: 'ListTab', selected: false },
    { id: 7, title: 'Modals', name: 'ModalTab', selected: false },
    { id: 8, title: 'Mobile', name: 'MobileTab', selected: false },
  ] as Array<Tab>
} as Tabs)

export default function useTabs() {

  function changeTab({ page, id } : { page: string, id: number }): void {
    // Unselect active Tab
    tabs.value[page as keyof Tabs].findIndex(t => {
      if (t.selected === true) t.selected = false
    })

    // Select new tab
    tabs.value[page as keyof Tabs][id].selected = true
  }

  return {
    tabs,
    activeTab: computed(() => pages.value.find((p: Page) => {
     if (p.current === true) return p
     return p
    })),
    changeTab,
  }
}