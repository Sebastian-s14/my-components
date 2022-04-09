export interface InputProps {
    label: string
    name: string
    typeInput: 'text' | 'password' | 'number'
}
export const Input = ({ label, name, typeInput = 'text' }: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                className="rounded-md border-2 py-1 px-2 outline-blue-500"
                type={typeInput}
            />
        </div>
    )
}

export default Input
