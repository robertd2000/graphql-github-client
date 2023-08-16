import { useQuery } from '@apollo/client'
import { REPO_LIST } from './query'
import { RepoListData } from '../types'

export const getUserRepoList = (variables: {
  login: string
  sort: string | undefined
  direction: string | undefined
}) => {
  const { data, loading } = useQuery<RepoListData>(REPO_LIST, {
    variables,
  })

  return {
    data: data?.user.repositories.nodes,
    loading,
  }
}
