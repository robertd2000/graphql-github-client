import { getExploreStarredRepos } from '../api'
import { RepositoryCard } from '../../../shared/ui/repository-card'
import { ExploreStarredSkeleton } from './explore-starred-skeleton'

export const ExploreStarredRepos = () => {
  const { data, loading } = getExploreStarredRepos()

  return (
    <div className="mt-4">
      <h2>Starred repos</h2>
      <div className="max-w space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        {loading ? (
          <ExploreStarredSkeleton />
        ) : (
          data?.map((repo) => <RepositoryCard repository={repo} />)
        )}
      </div>
    </div>
  )
}
