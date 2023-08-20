import { Eye, GitFork } from 'lucide-react'
import { useRepositoryCardContext } from '../../model'
import { formatNumber } from '../../../../shared/lib/numbers'
import { StarRepoButton } from '../../../../features/star-repo'
import { CounterBadge } from '../../../../shared/ui'

export const RepoInfo = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-wrap gap-2 border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all items-center">
        <Eye /> Watch{' '}
        <CounterBadge>
          {formatNumber(repository?.watchers?.totalCount)}
        </CounterBadge>
      </div>

      <div className="flex flex-wrap gap-2 border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all items-center">
        <GitFork /> Fork{' '}
        <CounterBadge>{formatNumber(repository?.forkCount)}</CounterBadge>
      </div>
      <div className="flex flex-wrap gap-2 justify-between border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all items-center">
        <StarRepoButton
          className="bg-transparent border-none px-0 text-md"
          id={repository?.id}
          viewerHasStarred={repository?.viewerHasStarred}
        />
        <CounterBadge>{formatNumber(repository?.stargazerCount)}</CounterBadge>
      </div>
    </div>
  )
}
