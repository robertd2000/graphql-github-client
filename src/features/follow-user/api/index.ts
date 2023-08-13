import { useQuery } from '@apollo/client'
import { FOLLOW_USER } from './query'

export const followUser = (userId: string) => {
  const { data, loading } = useQuery(FOLLOW_USER, {
    variables: {
      userId,
    },
  })

  return { data, loading }
}
