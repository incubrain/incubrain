import type { Config } from 'tailwindcss'
import c from 'tailwindcss/colors'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: c.cyan,
        secondary: c.indigo,
        error: c.red,
        success: c.green,
        warning: c.yellow,
        info: c.cyan
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
    // https://tailwindcss.com/docs/typography-plugin
    // require('@tailwindcss/forms')
    // https://github.com/tailwindlabs/tailwindcss-forms
  ]
}
