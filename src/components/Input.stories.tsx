import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
    title: 'UI/Elements/Input',
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {
    label: 'Basic input',
    name: 'fullname',
}
