import { createContext, useContext } from 'react'
import { UserType } from '../../../shared/types/user'

const UserCardContext = createContext<{
  user: UserType
} | null>(null)

export const useUserCardContext = () => {
  const context = useContext(UserCardContext)

  if (!context)
    throw new Error('Use UserCard* component ibside UserCardContext')

  return context
}

export default UserCardContext
