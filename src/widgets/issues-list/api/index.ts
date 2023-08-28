import { useQuery } from '@apollo/client'
import { ISSUES_LIST } from './query'
import { RepositoryIssues } from '../types'

export const getIssuesList = (config: { owner: string; name: string }) => {
  const { data, loading } = useQuery<RepositoryIssues>(ISSUES_LIST, {
    variables: config,
  })

  return { data: data?.repository, loading }
}
