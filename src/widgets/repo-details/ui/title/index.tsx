import { Link } from 'react-router-dom'
import { useRepositoryCardContext } from '../../model'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../shared/components/ui/avatar'
import { RepositoryTypeBadge } from '../../../../shared/ui/repo-type'

export const RepoTitle = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <div className="text-xl flex flex-wrap gap-2 items-center">
      <Avatar className="items-center w-[3rem] h-[3rem] border rounded-lg">
        <AvatarImage src={repository?.owner.avatarUrl} />
        <AvatarFallback>
          {repository?.owner.login.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      {repository?.owner?.__typename === 'Organization' ? (
        <div className="items-center hover:underline cursor-pointer">
          {repository?.owner?.login} / {repository?.name}
        </div>
      ) : (
        <>
          <Link
            to={`/user/${repository?.owner?.login}`}
            className="items-center hover:underline cursor-pointer"
          >
            {repository?.owner?.login}
          </Link>{' '}
          / {repository?.name}
        </>
      )}
      <RepositoryTypeBadge isPrivate={repository?.isPrivate} />
    </div>
  )
}
