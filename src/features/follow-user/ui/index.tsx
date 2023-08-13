import { FC } from 'react'
import { useFollowingUser } from '../model'
import { cn } from '../../../shared/lib/cn'

interface FollowUserProps extends React.HTMLAttributes<HTMLButtonElement> {
  userId: string
  viewerHasFollowed: boolean
}

export const FollowUser: FC<FollowUserProps> = ({
  userId,
  viewerHasFollowed,
  className,
  ...props
}) => {
  const { onFollowingHandler } = useFollowingUser(userId, viewerHasFollowed)

  return (
    <button
      className={cn(
        'flex flex-wrap gap-1 disabled text-sm items-center border rounded py-2 px-3 w-25 bg-blue-50 ',
        className
      )}
      onClick={onFollowingHandler}
      {...props}
    >
      {viewerHasFollowed ? 'Unfollow' : 'Follow'}
    </button>
  )
}
