import './myLabel.css'

export interface MyLabelProps {
    /**
        * Message to show
    */
    label: string
    /**
        * size button
    */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
        * All caps?
    */
    allCaps?: boolean
    /**
        * color
    */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
        * font color
    */
     fontColor?: string

}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span className={`label ${ size } text-${color}`} style={{ color: fontColor }}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel