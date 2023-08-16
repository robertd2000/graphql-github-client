import { useQuery } from '@apollo/client'
import { StarredRepositoriesData } from '../types'
import { STARRED_REPO } from './query'

export const getStarredRepos = (login: string) => {
  const { data, loading } = useQuery<StarredRepositoriesData>(STARRED_REPO, {
    variables: {
      login,
    },
  })

  return {
    data: data?.user?.starredRepositories?.nodes,
    loading,
  }
}
