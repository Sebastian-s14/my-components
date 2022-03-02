import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "./MyLabel";

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel  {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})

Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    fontColor: '#5517ac',
    size: 'h1'
}