import React, { FC } from 'react'
import { Star } from 'lucide-react'
import { useStarRepo } from '..'

interface StarRepoButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id: string
  viewerHasStarred: boolean
  count: number
}

export const StarRepoButton: FC<StarRepoButtonProps> = ({
  id,
  viewerHasStarred,
  count,
  ...props
}) => {
  const { onStarHandler } = useStarRepo(id, viewerHasStarred)

  return (
    <button
      className="flex flex-wrap gap-1 disabled text-sm items-center border rounded py-2 px-3 w-25"
      onClick={onStarHandler}
      {...props}
    >
      <Star
        className={`text-xs ${
          viewerHasStarred ? 'text-yellow-600' : 'text-gray-50'
        }`}
      />
      Starred {count}
    </button>
  )
}
