// This supports HMR
export default defineAppConfig({
  title: 'Mac\'s Nuxt 3 Starter',
  theme: {
    dark: true,
    colors: {
      // not working
      'white': '#E5E7EB',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
  // content: {
  //   highlight: {
  //     // Theme used in all color schemes.
  //     theme: {
  //       // Default theme (same as single string)
  //       default: 'github-light',
  //       // Theme used if `html.dark`
  //       dark: 'github-dark',
  //       // Theme used if `html.sepia`
  //       sepia: 'monokai'
  //     }
  //   }
  // }
})
