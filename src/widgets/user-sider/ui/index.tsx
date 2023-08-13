import { useParams } from 'react-router'
import { getUserSidebarData } from '../api'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../shared/components/ui/avatar'
import { Card, CardContent } from '../../../shared/components'
import UserSiderContext from '../model'
import { User } from '../types'
import { UserSiderHeader } from './header'
import { UserSiderDetails } from './details'
import { UserSiderInfo } from './info'
import { UserSiderSkeleton } from './skeleton'
import { FollowUser } from '../../../features/follow-user'

export const UserSider = () => {
  const { login } = useParams()

  const { data, loading } = getUserSidebarData(login as string)

  return loading ? (
    <UserSiderSkeleton />
  ) : (
    <UserSiderContext.Provider value={{ user: data as User }}>
      <Avatar className="w-[22rem] h-[22rem] shadow-md mt-4">
        <AvatarImage src={data?.avatarUrl} />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Card className="border-none shadow-none">
        <UserSider.Header />
        <FollowUser
          userId={data?.id as string}
          viewerHasFollowed={data?.viewerIsFollowing as boolean}
          className="mx-6 w-[80%] text-xl align-middle items-center text-center font-semibold"
        />
        <CardContent className="text-lg">
          <UserSider.Info />
          <UserSider.Details />
        </CardContent>
      </Card>
    </UserSiderContext.Provider>
  )
}

UserSider.Header = UserSiderHeader
UserSider.Info = UserSiderInfo
UserSider.Details = UserSiderDetails
