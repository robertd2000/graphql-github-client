import { RepositoryCardSkeleton } from '../repository-card/ui'

export const RepoCardListSkeleton = () => {
  return [...Array(10).keys()].map((i) => <RepositoryCardSkeleton key={i} />)
}
