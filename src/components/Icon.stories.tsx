import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon } from './Icon'

export default {
    title: 'UI/Elements/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
// Basic.args = {
//     label: 'Basic input',
//     name: 'fullname',
// }
