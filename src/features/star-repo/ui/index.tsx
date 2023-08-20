import React, { FC } from 'react'
import { Star } from 'lucide-react'
import { useStarRepo } from '..'
import { cn } from '../../../shared/lib/cn'

interface StarRepoButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id: string
  viewerHasStarred: boolean
}

export const StarRepoButton: FC<StarRepoButtonProps> = ({
  id,
  viewerHasStarred,
  className,
  ...props
}) => {
  const { onStarHandler } = useStarRepo(id, viewerHasStarred)

  return (
    <button
      className={cn(
        'flex flex-wrap gap-1 disabled text-sm items-center border rounded py-2 px-3 w-25 bg-blue-50 ',
        className
      )}
      onClick={onStarHandler}
      {...props}
    >
      <Star
        className={`text-xs ${
          viewerHasStarred ? 'text-yellow-600' : 'text-gray-500'
        }`}
      />
      {viewerHasStarred ? 'Unstar' : 'Star'}
    </button>
  )
}
