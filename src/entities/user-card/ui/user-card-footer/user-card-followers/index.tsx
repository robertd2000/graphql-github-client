import { Users } from 'lucide-react'
import { useUserCardContext } from '../../../model'
import { formatNumber } from '../../../../../shared/lib/numbers'

export const UserCardFollowers = () => {
  const { user } = useUserCardContext()

  return user.repositories.totalCount ? (
    <div className="flex gap-1 items-center">
      <Users className="h-5" /> {formatNumber(user.followers.totalCount)}
    </div>
  ) : null
}
