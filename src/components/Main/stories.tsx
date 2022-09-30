import { ComponentMeta, ComponentStory } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Description defaultn'
  }
} as ComponentMeta<typeof Main>

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Primary: ComponentStory<typeof Main> = (args) => <Main {...args} />
Primary.args = { title: 'Primary', description: 'Primary description' }

export const Secondary: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
)

Secondary.args = { title: 'Secondary', description: 'Secondary description' }
