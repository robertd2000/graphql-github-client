import { RepositoryCardSkeleton } from '../../../shared/ui/repository-card'

export const ExploreStarredSkeleton = () => {
  return [...Array(10).keys()].map((i) => <RepositoryCardSkeleton key={i} />)
}
