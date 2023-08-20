import { Eye, GitFork } from 'lucide-react'
import { useRepositoryCardContext } from '../../model'
import { formatNumber } from '../../../../shared/lib/numbers'
import { StarRepoButton } from '../../../../features/star-repo'

export const RepoInfo = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-wrap gap-1 border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
        <Eye /> Watch {formatNumber(repository?.watchers?.totalCount)}
      </div>

      <div className="flex flex-wrap gap-1 border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
        <GitFork /> Fork {formatNumber(repository?.forkCount)}
      </div>

      <StarRepoButton
        id={repository?.id}
        className="flex flex-wrap gap-1 border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
        viewerHasStarred={repository?.viewerHasStarred}
      />
    </div>
  )
}
