import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../../shared/components/ui/avatar'
import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardAvatar = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <Avatar className="h-6 w-6 items-bottom">
      <AvatarImage src={repository.owner.avatarUrl} />
      <AvatarFallback>
        {repository.owner.login.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}
