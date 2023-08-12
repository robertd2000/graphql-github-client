import { Card, CardHeader, CardTitle } from '../../../shared/components'
import { UserType } from '../../../shared/types/user'
import UserCardContext from '../model'
import { UserCardDescription } from './user-card-description'
import { UserCardFooter } from './user-card-footer'
import { UserCardTitle } from './user-card-title'

interface UserCardProps {
  user: UserType
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <UserCardContext.Provider value={{ user }}>
      <Card>
        <CardHeader>
          <CardTitle>
            <UserCardTitle />
          </CardTitle>
        </CardHeader>
        <UserCardDescription />
        <UserCardFooter></UserCardFooter>
      </Card>
    </UserCardContext.Provider>
  )
}
