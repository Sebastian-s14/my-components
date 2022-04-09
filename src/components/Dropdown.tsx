import { useState } from 'react'

export interface Item {
    name: string
    fn: () => void
}

export interface DropdownProps {
    name: string
    items: Item[]
}

export const Dropdown = ({ name, items }: DropdownProps) => {
    const [showOptions, setShowOptions] = useState<boolean>(false)

    const handleShow = () => {
        console.log('show options')
        setShowOptions(!showOptions)
    }

    return (
        <div className="relative w-min min-w-[150px]">
            <button
                className="relative w-full bg-blue-700 py-2 px-4 text-white focus:outline-blue-400"
                onClick={handleShow}>
                {name}
            </button>
            {showOptions && (
                <ul className="absolute flex w-full flex-col">
                    {items.map((i) => (
                        <DropdownItem key={i.name} item={i} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown

interface DropdownItemProps {
    item: Item
}

export const DropdownItem = ({ item: { name, fn } }: DropdownItemProps) => (
    <li
        className="bg-blue-200 py-2 px-4 hover:cursor-pointer hover:bg-blue-300"
        onClick={fn}>
        {name}
    </li>
)
