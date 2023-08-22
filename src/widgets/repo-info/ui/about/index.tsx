import {
  Activity,
  BookOpen,
  Eye,
  GitFork,
  Link as LinkIcon,
  Scale,
  Star,
} from 'lucide-react'
import { useRepositoryInfoContext } from '../../model'
import { Link } from 'react-router-dom'
import { Badge } from '../../../../shared/components'
import { formatNumber } from '../../../../shared/lib/numbers'

export const RepoAbout = () => {
  const { repository } = useRepositoryInfoContext()

  return (
    <div className="text-lg flex flex-wrap flex-col gap-3">
      <h2 className="text-xl font-semibold">About</h2>
      <div dangerouslySetInnerHTML={{ __html: repository?.descriptionHTML! }} />
      <div className="flex flex-wrap items-center gap-1">
        <LinkIcon className="h-[16px]" />{' '}
        <a href={repository?.homepageUrl} className="text-blue-400">
          {repository?.homepageUrl}
        </a>
      </div>
      <div className="flex flex-wrap gap-2 text-lg items-center">
        {repository?.repositoryTopics.nodes.map(({ topic }) => (
          <Link to={`/topic/${topic.id}`} key={topic.id}>
            <Badge variant={'topic'}>{topic.name}</Badge>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <BookOpen className="h-[20px]" />{' '}
        <a href={`${repository?.url}#readme`}>Readme</a>
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <Scale className="h-[20px]" />{' '}
        <a href={`${repository?.licenseInfo.url}`}>
          {repository?.licenseInfo.name}
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <Activity className="h-[20px]" />{' '}
        <a href={`${repository?.licenseInfo.url}`}>Activity</a>
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <Star className="h-[20px]" />{' '}
        <Link to={'stars'}>
          {formatNumber(repository?.stargazerCount as number)} stars
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <Eye className="h-[20px]" />{' '}
        <Link to={'watchers'}>
          {formatNumber(repository?.watchers.totalCount as number)} watching
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-1 hover:text-sky-500">
        <GitFork className="h-[20px]" />{' '}
        <Link to={'forks'}>
          {formatNumber(repository?.forkCount as number)} forks
        </Link>
      </div>
    </div>
  )
}
