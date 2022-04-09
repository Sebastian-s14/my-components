import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
    title: 'UI/Elements/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Basic = Template.bind({})
Basic.args = {
    // label: 'Basic input',
    // name: 'fullname',
    name: 'Opciones',
    items: [
        { name: 'Opcion 1', fn: () => console.log('soy la opcion 1') },
        { name: 'Opcion 2', fn: () => console.log('soy la opcion 2') },
    ],
}
