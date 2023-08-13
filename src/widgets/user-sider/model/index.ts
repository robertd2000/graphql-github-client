import { createContext, useContext } from 'react'
import { User } from '../types'

const UserSiderContext = createContext<{
  user: User
} | null>(null)

export const useUserSiderContext = () => {
  const context = useContext(UserSiderContext)

  if (!context)
    throw new Error(
      'Use RepositoryCard* component ibside RepositoryCardContext'
    )

  return context
}

export default UserSiderContext
