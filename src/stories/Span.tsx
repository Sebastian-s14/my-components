export interface SpanProps {
    label: string
}

export const Span = ({label}: SpanProps) => {
  return (
    <span className="bg-purple-600 text-2xl text-white">{label}</span>
  )
}

export default Span