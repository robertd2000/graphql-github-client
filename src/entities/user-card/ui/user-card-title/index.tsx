import { Link } from 'react-router-dom'
import { useUserCardContext } from '../../model'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../shared/components/ui/avatar'

export const UserCardTitle = () => {
  const { user } = useUserCardContext()

  return (
    <div className="flex gap-4 text-lg break-all max-w-[80%] items-start">
      <Avatar className="h-12 w-12">
        <AvatarImage src={user.avatarUrl} />
        <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center">
        <Link to={`/user/${user.id}`} className="text-blue-500 break-words">
          {user.login}
        </Link>{' '}
        <Link
          to={`/repository/${user.id}`}
          className="text-gray-500 font-thin break-words"
        >
          {user.name}
        </Link>
      </div>
    </div>
  )
}
