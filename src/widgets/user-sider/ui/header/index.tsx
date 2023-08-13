import {
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../shared/components'
import { useUserSiderContext } from '../../model'

export const UserSiderHeader = () => {
  const { user } = useUserSiderContext()

  return (
    <CardHeader>
      <CardTitle className="text-3xl">{user?.name}</CardTitle>
      <CardDescription className="text-2xl text-gray-400">
        {user?.login} {user?.pronouns}
      </CardDescription>
    </CardHeader>
  )
}
