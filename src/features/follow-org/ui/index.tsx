import { FC } from 'react'
import { cn } from '../../../shared/lib/cn'
import { useFollowingOrg } from '..'

interface FollowOrgProps extends React.HTMLAttributes<HTMLButtonElement> {
  organizationId: string
  viewerHasFollowed: boolean
}

export const FollowOrg: FC<FollowOrgProps> = ({
  organizationId,
  viewerHasFollowed,
  className,
  ...props
}) => {
  const { onFollowingHandler } = useFollowingOrg(
    organizationId,
    viewerHasFollowed
  )

  return (
    <button
      className={cn(
        'flex flex-wrap gap-1 disabled text-sm items-center border rounded py-2 px-4 w-25 bg-blue-50 ',
        className
      )}
      onClick={onFollowingHandler}
      {...props}
    >
      {viewerHasFollowed ? 'Unfollow' : 'Follow'}
    </button>
  )
}
