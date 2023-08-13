import { Users } from 'lucide-react'
import { useUserSiderContext } from '../../model'
import { formatNumber } from '../../../../shared/lib/numbers'
import { DotSeparator } from '../../../../shared/ui/dot-separator'

export const UserSiderInfo = () => {
  const { user } = useUserSiderContext()

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: user?.bioHTML || '' }} />
      <div className="flex flex-wrap gap-1 my-6 items-center">
        <Users className="w-5 h-5 text-gray-500" />{' '}
        {formatNumber(user?.followers.totalCount || 0)} followers{' '}
        <DotSeparator />
        {formatNumber(user?.following.totalCount || 0)} following
      </div>
    </>
  )
}
