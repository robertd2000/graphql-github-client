import { useQuery } from '@apollo/client'
import { RepositoryOverviewIssues } from '../types'
import { REPO_OVERVIEW_ISSUES } from './query'

export const getRepoOverviewIssues = (config: {
  owner: string
  name: string
}) => {
  const { data, loading } = useQuery<RepositoryOverviewIssues>(
    REPO_OVERVIEW_ISSUES,
    {
      variables: config,
    }
  )

  return { data: data?.repository, loading }
}
