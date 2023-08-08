import { useQuery } from '@apollo/client'
import { EXPLORE_STARRED_REPOS } from './query'
import { ExploreStarredRepos } from '../types'

export const getExploreStarredRepos = () => {
  const { data, loading } = useQuery<ExploreStarredRepos>(EXPLORE_STARRED_REPOS)

  return {
    data: data?.viewer.starredRepositories.nodes,
    loading,
  }
}
