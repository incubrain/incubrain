export default defineAppConfig({
  title: 'Incubrain',
  ui: {
    primary: 'emerald',
    slideover: {
      background: 'bg-gray-100 dark:bg-neutral-900'
    },
    card: {
      background: '',
      ring: 'ring-1 ring-color',
      divide: 'divide-y divide-color',
      header: {
        background: 'bg-gray-100 dark:bg-neutral-900'
      }
    },
    notifications: {
      position: 'bottom-1 right-1'
    },
    dropdown: {
      background: 'bg-gray-100 dark:bg-neutral-900',
      ring: '',
      item: {
        active: 'bg-gray-100 dark:bg-neutral-900'
      }
    },
    accordion: {
      wrapper: ''
    },
    input: {
      color: {
        white: {
          outline:
            'bg-gray-100 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    textarea: {
      color: {
        white: {
          outline:
            'bg-gray-100 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    select: {
      color: {
        white: {
          outline:
            'bg-gray-100 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      },
      default: {
        size: 'md'
      }
    },
    selectMenu: {
      padding: 'p-2',
      input: 'bg-gray-100 dark:bg-neutral-900',
      background: 'bg-gray-100 dark:bg-neutral-900',
      option: {
        active: 'bg-gray-100 dark:bg-neutral-900'
      }
    },
    radio: {
      background: 'bg-gray-100 dark:bg-neutral-900'
    },
    tabs: {
      list: {
        background: '',
        height: 'h-auto',
        rounded: 'rounded-md border border-color',
        padding: 'p-1 lg:p-2',
        marker: {
          base: 'w-auto h-full',
          background: 'bg-gray-100 dark:bg-neutral-900'
        },
        tab: { background: '' }
      }
    }
  }
})
