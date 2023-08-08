import React, { FC } from 'react'
import { Star } from 'lucide-react'

interface StarButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  count: number
}
export const StarButton: FC<StarButtonProps> = ({ count, ...props }) => {
  return (
    <button
      className="flex flex-wrap gap-1 disabled text-sm items-center border rounded py-2 px-3 w-25"
      {...props}
    >
      <Star className="text-yellow-600 text-xs" />
      Starred {count}
    </button>
  )
}
