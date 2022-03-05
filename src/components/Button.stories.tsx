import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
    title: 'UI/Elements/Button',
    component: Button,
    argTypes: {
        type: { control: 'select' },
    },
    // argTypes: {
    //     size: { control: 'select' },
    //     color: { control: 'select' },
    //     backgroundColor: { control: 'color' },
    // }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Button primary',
    type: 'primary',
    onClick: () => {
        console.log('hello world')
    },
}

// export const AllCaps = Template.bind({})
// AllCaps.args = {
//     size: 'normal',
//     allCaps: true
// }

export const Secondary = Template.bind({})

Secondary.args = {
    label: 'Outline',
    type: 'secondary',
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    label: 'AllCaps',
    type: 'primary',
    allCaps: true,
}

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
