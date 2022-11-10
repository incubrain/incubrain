import { ref } from 'vue'

interface Tab {
  id: number
  title: string
  selected: boolean
}

interface Tabs {
  components: Array<Tab> 
}

const tabs = ref({
  components: [
    { id: 0, title: 'Testing', selected: true },
    { id: 1, title: 'Calendars', selected: false },
    { id: 2, title: 'UX', selected: false },
    { id: 3, title: 'Profile', selected: false },
    { id: 4, title: 'Soclie', selected: false },
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
    changeTab,
  }
}