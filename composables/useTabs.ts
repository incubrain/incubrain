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
    { id: 0, title: 'Profile', name: 'TabProfile', selected: true },
    { id: 1, title: 'Calendars', name: 'TabCalendars', selected: false },
    { id: 2, title: 'UX', name: 'TabUX', selected: false },
    { id: 3, title: 'Test', name: 'TabTest', selected: false },
    { id: 4, title: 'Soclie', name: 'TabSocial', selected: false },
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