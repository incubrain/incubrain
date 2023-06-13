import Card2 from '../components/blog/BlogCard2.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'BlogCard',
  component: Card2,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: 'projects',
    filter: {
      control: { type: 'select' },
      options: ['frontend', 'backend', 'business']
    }
  }
}

const showcase = await queryContent('projects').where({ type: 'frontend' }).findOne()

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Card2 },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<blog-card2 v-bind="args" />'
})

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  type: 'projects',
  filter: 'frontend'
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'projects',
  filter: 'frontend'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'projects',
  filter: 'frontend'
}

export const Large = Template.bind({})
Large.args = {
  type: 'projects',
  filter: 'frontend'
}

export const Small = Template.bind({})
Small.args = {
  type: 'projects',
  filter: 'frontend'
}
