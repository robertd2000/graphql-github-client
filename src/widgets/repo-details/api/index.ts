import { useQuery } from '@apollo/client'
import { REPO_DETAILS } from './query'
import { RepoDetailsData } from '../types'

export const getRepoDetails = (config: { owner: string; name: string }) => {
  const { data, loading } = useQuery<RepoDetailsData>(REPO_DETAILS, {
    variables: config,
  })

  return { data: data?.repository, loading }
}
