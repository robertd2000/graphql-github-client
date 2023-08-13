import { useQuery } from '@apollo/client'
import { USER_CARD } from './query'
import { UserSidebar } from '../types'

export const getUserSidebarData = (login: string) => {
  const { data, loading } = useQuery<UserSidebar>(USER_CARD, {
    variables: {
      login,
    },
  })

  return { data: data?.user, loading }
}
