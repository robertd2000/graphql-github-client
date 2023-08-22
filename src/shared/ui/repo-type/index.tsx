import { FC } from 'react'
import { Badge } from '../../components'

interface RepositoryTypeBadgeProps {
  isPrivate: boolean
}

export const RepositoryTypeBadge: FC<RepositoryTypeBadgeProps> = ({
  isPrivate,
}) => {
  return (
    <Badge className="border" variant={'outline'}>
      {isPrivate ? 'Private' : 'Public'}
    </Badge>
  )
}
