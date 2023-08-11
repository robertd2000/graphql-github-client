import { Star } from 'lucide-react'
import { useRepositoryCardContext } from '../../../model'
import { formatNumber } from '../../../../../shared/lib/numbers'

export const RepositoryCardStargazersCount = () => {
  const { repository } = useRepositoryCardContext()

  return repository.stargazerCount ? (
    <div className="flex gap-1">
      <Star /> {formatNumber(repository.stargazerCount)}
    </div>
  ) : null
}
