import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Ui } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui/ index',
  component: Ui,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Ui>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Ui> = (args) => <Ui {...args} />

export const Title1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title1.args = {
  title: 'Ui'
}
