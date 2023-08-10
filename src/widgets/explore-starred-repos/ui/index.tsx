import { RepositoryCard } from '../../../entities/repository-card'
import { getExploreStarredRepos } from '../api'
import { ExploreStarredSkeleton } from './explore-starred-skeleton'

export const ExploreStarredRepos = () => {
  const { data, loading } = getExploreStarredRepos()

  return (
    <div className="mt-4">
      <div className="max-w space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        {loading ? (
          <ExploreStarredSkeleton />
        ) : (
          data?.map((repo) => (
            <RepositoryCard repository={repo} key={repo.id} />
          ))
        )}
      </div>
    </div>
  )
}
