import { BookUp } from 'lucide-react'
import { formatNumber } from '../../../../../shared/lib/numbers'
import { useUserCardContext } from '../../../model'
import { DotSeparator } from '../../../../../shared/ui/dot-separator'

export const UserCardRepos = () => {
  const { user } = useUserCardContext()

  return user.repositories.totalCount ? (
    <div className="flex gap-1 items-center">
      <BookUp className="h-5" /> {formatNumber(user.repositories.totalCount)}
      <DotSeparator />
    </div>
  ) : null
}
