import { Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatNumber } from '../../../../shared/lib/numbers'
import { useRepositoryInfoContext } from '../../model'

export const RepoReleases = () => {
  const { repository } = useRepositoryInfoContext()

  return (
    <div className="text-lg flex flex-wrap flex-col gap-3">
      <h2 className="text-xl font-semibold">Releases</h2>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <Tag className="h-[20px]" />{' '}
        <Link to={'releases'}>
          {formatNumber(repository?.releases.totalCount as number)} tags
        </Link>
      </div>
    </div>
  )
}
