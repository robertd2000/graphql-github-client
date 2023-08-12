import { DotSeparator } from '../../../../../shared/ui/dot-separator'
import { useUserCardContext } from '../../../model'

export const UserCardLocation = () => {
  const { user } = useUserCardContext()

  return user.location ? (
    <>
      <div className="flex gap-2 mr-2 items-center">{user.location}</div>
      <DotSeparator />
    </>
  ) : null
}
