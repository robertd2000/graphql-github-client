import { Link } from 'react-router-dom'
import { useRepositoryCardContext } from '../../model'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../shared/components/ui/avatar'

export const RepositoryCardTitle = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <div className="flex gap-2 text-lg break-all max-w-[80%] items-center">
      <Avatar className="h-6 w-6 items-bottom">
        <AvatarImage src={repository.owner.avatarUrl} />
        <AvatarFallback>
          {repository.owner.login.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <Link
        to={`/user/${repository.owner.id}`}
        className="text-blue-400 break-words"
      >
        {repository.owner.login}
      </Link>{' '}
      /{' '}
      <Link
        to={`/repository/${repository.id}`}
        className="text-blue-500 font-semibold break-words"
      >
        {repository.name}
      </Link>
    </div>
  )
}
