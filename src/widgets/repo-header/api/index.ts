import { useQuery } from '@apollo/client'
import { REPO_INFO } from './query'
import { RepoInfoData } from '../types'

export const getRepoInfo = (login: string) => {
  const { data, loading } = useQuery<RepoInfoData>(REPO_INFO, {
    variables: {
      login,
    },
  })

  return { data: data?.user, loading }
}
