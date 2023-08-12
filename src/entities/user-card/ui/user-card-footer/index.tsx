import { ReactNode } from 'react'
import { CardFooter } from '../../../../shared/components'
import { UserCardLocation } from './user-card-location'
import { useUserCardContext } from '../../model'
import { UserCardRepos } from './user-card-repos'
import { UserCardFollowers } from './user-card-followers'

interface UserCardFooterProps {
  children?: ReactNode
}

export const UserCardFooter = ({ children }: UserCardFooterProps) => {
  const { user } = useUserCardContext()

  return user.location || user.followers || user.repositories?.totalCount ? (
    <CardFooter className="ml-16 text-gray-500">
      <UserCardLocation />
      <UserCardRepos />
      {children}
      <UserCardFollowers />
    </CardFooter>
  ) : null
}
