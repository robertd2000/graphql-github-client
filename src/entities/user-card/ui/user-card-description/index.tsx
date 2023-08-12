import { CardContent } from '../../../../shared/components'
import { useUserCardContext } from '../../model'

export const UserCardDescription = () => {
  const { user } = useUserCardContext()

  return user.bio ? (
    <CardContent className="ml-16 text-gray-800">{user.bio}</CardContent>
  ) : null
}
