export default defineAppConfig({
  title: 'Incubrain',
  ui: {
    primary: 'emerald',
    slideover: {
      background: 'bg-gray-50 dark:bg-neutral-950'
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
      background: 'bg-gray-50 dark:bg-neutral-950',
      ring: '',
      item: {
        active: 'bg-gray-50 dark:bg-neutral-950',
        inactive: 'text-gray-700 dark:text-red-200'
      }
    },
    accordion: {
      item: {
        base: 'text-left flex justify-between items-start'
      }
    },
    input: {
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-950 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    textarea: {
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-950 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    select: {
      placeholder: 'text-gray-400 dark:text-gray-500',
      color: {
        white: {
          outline:
            'bg-gray-50 dark:bg-neutral-950 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      },
      default: {
        size: 'md'
      }
    },
    selectMenu: {
      placeholder: 'text-gray-400 dark:text-gray-500',
      padding: 'p-2',
      input: 'bg-gray-50 dark:bg-neutral-950',
      background: 'bg-gray-50 dark:bg-neutral-950',
      option: {
        active: 'bg-white dark:bg-black'
      }
    },
    radio: {
      background: 'bg-gray-50 dark:bg-neutral-950'
    },
    tabs: {
      list: {
        background: '',
        height: 'h-auto',
        rounded: 'rounded-md border border-color',
        padding: 'p-1 lg:p-2',
        marker: {
          base: 'w-auto h-full',
          background: 'bg-gray-50 dark:bg-neutral-950'
        },
        tab: { background: '' }
      }
    }
  }
})
