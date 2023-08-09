import { RepositoryCardSkeleton } from '../../../entities/repository-card'

export const ExploreStarredSkeleton = () => {
  return [...Array(10).keys()].map((i) => <RepositoryCardSkeleton key={i} />)
}
