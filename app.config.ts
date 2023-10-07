export default defineAppConfig({
  title: 'Incubrain',
  ui: {
    primary: 'emerald',
    slideover: {
      background: 'background'
    },
    card: {
      background: '',
      ring: 'ring-1 ring-color',
      divide: 'divide-y divide-color',
      header: {
        background: 'foreground'
      }
    },
    notifications: {
      position: 'bottom-1 right-1'
    },
    dropdown: {
      background: 'background',
      ring: '',
      item: {
        active: 'foreground'
      }
    },
    accordion: {
      wrapper: ''
    },
    input: {
      color: {
        white: {
          outline:
            'foreground shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    textarea: {
      color: {
        white: {
          outline:
            'foreground shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      }
    },
    select: {
      color: {
        white: {
          outline:
            'foreground shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        }
      },
      default: {
        size: 'md'
      }
    },
    selectMenu: {
      padding: 'p-2',
      input: 'foreground',
      background: 'foreground',
      option: {
        active: 'background'
      }
    },
    radio: {
      background: 'foreground'
    },
    tabs: {
      list: {
        background: 'foreground',
        marker: {
          background: 'background'
        }
      }
    }
  }
})
