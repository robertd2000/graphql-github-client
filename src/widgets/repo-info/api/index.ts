import { useQuery } from '@apollo/client'
import { REPO_INFO } from './query'
import { RepoInfoData } from '../types'

export const getRepoInfo = (config: { owner: string; name: string }) => {
  const { data, loading } = useQuery<RepoInfoData>(REPO_INFO, {
    variables: config,
  })

  return { data: data?.repository, loading }
}
