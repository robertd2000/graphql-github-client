import { FC } from 'react'

interface OutlinedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const OutlinedButton: FC<OutlinedButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
      {...props}
    >
      {children}
    </button>
  )
}
