export default defineAppConfig({
  title: 'Incubrain',
  ui: {
    primary: 'emerald',
    slideover: {
      background: 'bg-gray-50 dark:bg-neutral-900'
    },
    card: {
      background: '',
      ring: 'ring-1 ring-zinc-200 dark:ring-zinc-800',
      divide: 'divide-y divide-zinc-200 dark:divide-zinc-800',
      header: {
        background: 'bg-white dark:bg-black'
      }
    },
    notifications: {
      position: 'bottom-1 right-1'
    },
    dropdown: {
      background: 'bg-gray-50 dark:bg-neutral-900',
      ring: '',
      item: {
        active: 'bg-gray-50 dark:bg-neutral-900'
      }
    },
    accordion: {
      wrapper: ''
    },
    input: {
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    textarea: {
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    select: {
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-900 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      },
      default: {
        size: 'md'
      }
    },
    selectMenu: {
      padding: 'p-2',
      input: 'bg-gray-50 dark:bg-neutral-900',
      background: 'bg-gray-50 dark:bg-neutral-900',
      option: {
        active: 'bg-white dark:bg-black'
      }
    },
    radio: {
      background: 'bg-gray-50 dark:bg-neutral-900'
    },
    tabs: {
      list: {
        background: '',
        height: 'h-auto',
        rounded: 'rounded-md border border-color',
        padding: 'p-1 lg:p-2',
        marker: {
          base: 'w-auto h-full',
          background: 'bg-gray-50 dark:bg-neutral-900'
        },
        tab: { background: '' }
      }
    }
  }
})
