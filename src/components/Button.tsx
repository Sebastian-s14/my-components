export interface ButtonProps {
    label: string
    type: 'primary' | 'secondary'
    allCaps?: boolean
    onClick: () => void
}

export const Button = ({ label, type, allCaps, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`min-w-[100px] rounded-[10px] border-2 border-blue-500 p-2
                duration-500  ${
                    type === 'primary'
                        ? 'bg-blue-500 text-white hover:bg-white hover:text-blue-500'
                        : 'text-blue-500 hover:bg-blue-500 hover:text-white'
                } ${allCaps ? 'uppercase' : ''}`}>
            {label}
        </button>
    )
}

export default Button
