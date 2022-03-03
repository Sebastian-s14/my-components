import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Span } from '../components/Span'

export default {
    title: 'UI/Elements/Span',
    component: Span,
    // argTypes: {
    //     size: { control: 'select' },
    //     color: { control: 'select' },
    //     backgroundColor: { control: 'color' },
    // }
} as ComponentMeta<typeof Span>

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />

export const Basic = Template.bind({})
Basic.args = {
    label: 'Span with Tailwindcss',
}

// export const AllCaps = Template.bind({})
// AllCaps.args = {
//     size: 'normal',
//     allCaps: true
// }

// export const Secondary = Template.bind({})

// Secondary.args = {
//     size: 'normal',
//     color: 'secondary'
// }

// export const Tertiary = Template.bind({})
// Tertiary.args = {
//     size: 'normal',
//     color: 'tertiary'
// }

// export const CustomFontColor = Template.bind({})
// CustomFontColor.args = {
//     fontColor: '#5517ac',
//     size: 'h1'
// }
